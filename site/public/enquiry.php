<?php
// Receives the website's enquiry forms and emails them to the company.
// Settings live in ~/config/enquiry.php (outside the public folder), never in the repository.
// See docs/DEPLOYMENT.md for the format of that file.

declare(strict_types=1);

$home = getenv('HOME') ?: dirname(__DIR__);
$configFile = $home . '/config/enquiry.php';
$config = is_readable($configFile) ? (array) require $configFile : [];
$to = $config['to'] ?? 'projectilestechhub@gmail.com';
$from = $config['from'] ?? 'website@projectilestechhublimited.com';
$turnstileSecret = $config['turnstile_secret'] ?? '';

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function reply(bool $ok, string $message, bool $json, int $status = 200): never {
    http_response_code($status);
    if ($json) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $message]);
    } else {
        // Without JavaScript: show a short page with the result and a way back.
        $back = $_POST['page'] ?? '/contact/';
        if (!is_string($back) || !str_starts_with($back, '/') || str_starts_with($back, '//')) { $back = '/contact/'; }
        header('Content-Type: text/html; charset=utf-8');
        $h = static fn (string $t): string => htmlspecialchars($t, ENT_QUOTES, 'UTF-8');
        echo '<!doctype html><html lang="en-NG"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
            . '<title>' . ($ok ? 'Enquiry sent' : 'Enquiry not sent') . ' | Projectiles Tech Hub Limited</title>'
            . '<body style="font:18px/1.5 system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 16px;color:#111827">'
            . '<h1 style="font-size:32px;line-height:1.2">' . ($ok ? 'Thank you. We have your enquiry.' : 'Your enquiry was not sent') . '</h1>'
            . '<p>' . $h($message) . '</p>'
            . '<p><a style="color:#0B6B3A" href="' . $h($back) . '">Go back to the page you were on</a></p></body></html>';
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { reply(false, 'Use the form to send an enquiry.', $wantsJson, 405); }

// Spam trap: people never see or fill this field.
if (!empty($_POST['website'])) { reply(true, 'Thank you.', $wantsJson); }

$clean = static fn ($v, int $max = 200): string => trim(mb_substr(str_replace(["\r", "\0"], '', (string) $v), 0, $max));
$name    = $clean($_POST['name'] ?? '');
$phone   = $clean($_POST['phone'] ?? '', 40);
$email   = $clean($_POST['email'] ?? '', 200);
$line    = $clean($_POST['line'] ?? '');
$plot    = $clean($_POST['plot'] ?? '');
$amount  = $clean($_POST['amount'] ?? '', 60);
$offer   = $clean($_POST['offer'] ?? '');
$message = $clean($_POST['message'] ?? '', 4000);
$form    = $clean($_POST['form'] ?? 'Website form');
$page    = $clean($_POST['page'] ?? '', 300);
$consent = !empty($_POST['consent']);

$digits = preg_replace('/\D+/', '', $phone);
$phoneOk = (bool) preg_match('/^(234|0)?[789][01]\d{8}$/', $digits);
if ($name === '' || !$phoneOk || !$consent || ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL))) {
    reply(false, 'Please check the form and try again.', $wantsJson, 422);
}

// Cloudflare Turnstile check, when it has been set up.
if ($turnstileSecret !== '') {
    $token = (string) ($_POST['cf-turnstile-response'] ?? '');
    $ctx = stream_context_create(['http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query(['secret' => $turnstileSecret, 'response' => $token, 'remoteip' => $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '']),
        'timeout' => 8,
    ]]);
    $result = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $ctx);
    $check = $result ? json_decode($result, true) : null;
    if (empty($check['success'])) { reply(false, 'We could not confirm you are not a robot. Please try again.', $wantsJson, 422); }
}

$rows = array_filter([
    'Form' => $form, 'Page' => $page, 'Name' => $name, 'Phone' => $phone, 'Email' => $email,
    'Business line' => $line, 'Plot' => $plot, 'Offer' => $offer, 'Amount' => $amount,
]);
$body = '';
foreach ($rows as $k => $v) { $body .= "$k: $v\n"; }
$body .= "\nMessage:\n" . ($message !== '' ? $message : '(none)') . "\n";

$subject = '=?UTF-8?B?' . base64_encode("Website enquiry: $form, from $name") . '?=';
$headers = [
    'From: Projectiles website <' . $from . '>',
    'Content-Type: text/plain; charset=utf-8',
];
if ($email !== '') { $headers[] = 'Reply-To: ' . $email; }

$sent = @mail($to, $subject, $body, implode("\r\n", $headers), '-f' . $from);
if (!$sent) { reply(false, 'Your message could not be sent. Please chat with us on WhatsApp instead.', $wantsJson, 500); }
reply(true, 'Thank you. We have your enquiry.', $wantsJson);

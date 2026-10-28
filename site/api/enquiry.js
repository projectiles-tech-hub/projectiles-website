// Vercel Function: receives the website's enquiry forms and emails them to the company through Resend.
// Settings are Vercel environment variables (never in the repository); see docs/DEPLOYMENT.md:
//   RESEND_API_KEY    Resend key (required)
//   ENQUIRY_TO        where enquiries go (default projectilestechhub@gmail.com)
//   ENQUIRY_FROM      sender, on a domain verified in Resend (default website@projectilestechhublimited.com)
//   TURNSTILE_SECRET  Cloudflare Turnstile secret key (optional)

const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const clean = (v, max = 200) => String(v ?? '').replace(/[\r\0]/g, '').slice(0, max).trim();

function reply(ok, message, wantsJson, status, back) {
  if (wantsJson) {
    return Response.json({ ok, message }, { status });
  }
  // Without JavaScript: a short page with the result and a way back.
  const safeBack = typeof back === 'string' && back.startsWith('/') && !back.startsWith('//') ? back : '/contact/';
  const html = `<!doctype html><html lang="en-NG"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${ok ? 'Enquiry sent' : 'Enquiry not sent'} | Projectiles Tech Hub Limited</title>
<body style="font:18px/1.5 system-ui,sans-serif;max-width:640px;margin:64px auto;padding:0 16px;color:#111827">
<h1 style="font-size:32px;line-height:1.2">${ok ? 'Thank you. We have your enquiry.' : 'Your enquiry was not sent'}</h1>
<p>${esc(message)}</p><p><a style="color:#0B6B3A" href="${esc(safeBack)}">Go back to the page you were on</a></p></body></html>`;
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

export async function POST(request) {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  let data;
  try { data = await request.formData(); } catch { return reply(false, 'Please use the form to send an enquiry.', wantsJson, 400); }
  const get = (k, max) => clean(data.get(k), max);
  const back = get('page', 300);

  // Spam trap: people never see or fill this field.
  if (get('website')) return reply(true, 'Thank you.', wantsJson, 200, back);

  const f = {
    form: get('form') || 'Website form', page: back, name: get('name'), phone: get('phone', 40), email: get('email'),
    line: get('line'), plot: get('plot'), offer: get('offer'), amount: get('amount', 60), message: get('message', 4000),
  };
  const digits = f.phone.replace(/\D+/g, '');
  const phoneOk = /^(234|0)?[789][01]\d{8}$/.test(digits);
  const emailOk = !f.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email);
  if (!f.name || !phoneOk || !emailOk || !data.get('consent')) {
    return reply(false, 'Please check the form and try again.', wantsJson, 422, back);
  }

  const env = process.env;
  if (env.TURNSTILE_SECRET) {
    const body = new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: get('cf-turnstile-response', 4000) });
    const ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0];
    if (ip) body.set('remoteip', ip.trim());
    const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body })
      .then((r) => r.json()).catch(() => null);
    if (!check?.success) return reply(false, 'We could not confirm you are not a robot. Please try again.', wantsJson, 422, back);
  }

  if (!env.RESEND_API_KEY) {
    console.error('[enquiry] RESEND_API_KEY is not set, so the enquiry could not be emailed.');
    return reply(false, 'Your message could not be sent. Please chat with us on WhatsApp instead.', wantsJson, 500, back);
  }
  const rows = [['Form', f.form], ['Page', f.page], ['Name', f.name], ['Phone', f.phone], ['Email', f.email],
    ['Business line', f.line], ['Plot', f.plot], ['Offer', f.offer], ['Amount', f.amount]].filter(([, v]) => v);
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nMessage:\n${f.message || '(none)'}\n`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `Projectiles website <${env.ENQUIRY_FROM || 'website@projectilestechhublimited.com'}>`,
      to: [env.ENQUIRY_TO || 'projectilestechhub@gmail.com'],
      subject: `Website enquiry: ${f.form}, from ${f.name}`,
      text,
      ...(f.email ? { reply_to: f.email } : {}),
    }),
  }).catch((e) => ({ ok: false, status: 0, text: async () => String(e) }));
  if (!res.ok) {
    console.error('[enquiry] Resend refused the email:', res.status, await res.text());
    return reply(false, 'Your message could not be sent. Please chat with us on WhatsApp instead.', wantsJson, 502, back);
  }
  return reply(true, 'Thank you. We have your enquiry.', wantsJson, 200, back);
}

export function GET() {
  return reply(false, 'Use the form to send an enquiry.', false, 405);
}

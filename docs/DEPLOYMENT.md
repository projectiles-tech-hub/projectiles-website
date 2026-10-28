# Hosting and publishing

Everything needed to put the website online. Record any manual change at the bottom, with the date.

## Hosting and domain

- **Hosting:** Namecheap shared hosting (Stellar plans). Namecheap looks after the server; cPanel, email mailboxes
  and PHP (for the contact form) are included. Data centres: US (Phoenix) or Europe (Amsterdam).
- **Domain:** projectilestechhublimited.com is the main address. projectilestechhublimited.com.ng points to the same
  site: it redirects every page to the same page on .com.

## Setting up Namecheap shared hosting

1. Buy the plan and attach the domain.
2. In cPanel, **SSH Access, Manage SSH Keys**: import the public deploy key and authorise it. Uploads use SFTP on
   port 21098, which is on by default.
3. In cPanel **Email Accounts**, create the mailbox that sends form enquiries.
4. Put the form settings in `~/config/enquiry.php` (outside the public folder), permissions `600`.

## Contact form settings

The forms post to `enquiry.php`, which emails each enquiry. Its settings file lives outside the public folder at
`~/config/enquiry.php` (cPanel **File Manager**, permissions `600`), so it is never published or put in the repository:

```php
<?php
return [
    'to' => 'projectilestechhub@gmail.com',          // where enquiries go
    'from' => 'website@projectilestechhublimited.com', // a mailbox created in cPanel Email Accounts
    'turnstile_secret' => '',                          // Cloudflare Turnstile secret key (leave empty until set up)
];
```

Without the file, enquiries still go to projectilestechhub@gmail.com from website@projectilestechhublimited.com.

## Spam protection (Cloudflare Turnstile)

Turnstile is Cloudflare's free check that a visitor is a person, without puzzles.

1. In Cloudflare, **Turnstile, Add widget**, for projectilestechhublimited.com.
2. Put the **site key** (public) in `site/src/config/company.ts` as `turnstileSiteKey`.
3. Put the **secret key** in `~/config/enquiry.php` as `turnstile_secret` (never in the repository).

Until both are set, forms rely on the hidden spam trap field.

## YouTube

- Channel: @primrosehillestates, channel ID `UCm8Br7LcPyQemUzNJFWGS-A` (in `company.ts`).
- The site reads the channel's public list of its 15 newest videos when it is built. No key is needed.
- The publishing job runs every morning, so new videos appear within a day. If YouTube cannot be reached, the
  Videos page shows a link to the channel instead.

## Cloudflare and publishing

1. Add both domains to Cloudflare (free) and change their nameservers at Namecheap to Cloudflare's.
   For projectilestechhublimited.com.ng, add a Cloudflare redirect rule that sends every address to the same path on
   https://projectilestechhublimited.com (permanent redirect, 301).
2. In GitHub, **Settings, Secrets and variables, Actions**, add:

   | Secret | Value |
   | --- | --- |
   | `DEPLOY_HOST` | The server name shown in cPanel |
   | `DEPLOY_PORT` | `21098` |
   | `DEPLOY_USER` | The cPanel username |
   | `DEPLOY_SSH_KEY` | The private half of the deploy key |
   | `DEPLOY_PATH` | `public_html` (or the domain's folder) |

3. Merge to `main`; GitHub builds the site and uploads it (`.github/workflows/deploy.yml`). It also runs every
   morning at 06:17 and can be run by hand from the **Actions** tab (**Publish, Run workflow**). Until the secrets
   are added, the job builds nothing and says so.
4. Server settings (https, security headers, caching, the 404 page) are in `site/public/.htaccess` and are uploaded
   with the site.

## Manual changes

| Date | Change | By |
| --- | --- | --- |
| | | |

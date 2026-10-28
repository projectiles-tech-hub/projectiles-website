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

3. Merge to `main`; GitHub builds the site and uploads it.

## Manual changes

| Date | Change | By |
| --- | --- | --- |
| | | |

# Hosting and publishing

Everything needed to put the website online. Record any manual change at the bottom, with the date.

## Hosting and domain

- **Hosting:** Vercel, Pro plan (Emmanuel's decision, 28 October 2026). Vercel's free Hobby plan is for personal,
  non-commercial use only, so a company website needs Pro. Earlier plan: Namecheap shared hosting.
- **Domain:** projectilestechhublimited.com is the main address. projectilestechhublimited.com.ng redirects every page
  to the same page on .com. The domains stay registered where they are; only their settings point to Vercel.
- **Email for the forms:** Resend, a service that sends the form emails (its free plan is enough for a website's enquiries).

## How it works

- Vercel watches the GitHub repository. Each merge into `main` is built and published by itself. Each pull request
  gets its own preview address to look at before merging.
- The pages are plain files. Two small Vercel Functions (code Vercel runs on request) live in `site/api/`:
  - `enquiry.js` receives the forms and emails each enquiry through Resend. Nothing is stored.
  - `rebuild.js` runs every morning at 06:17 (a Vercel Cron Job in `site/vercel.json`) and asks Vercel to rebuild,
    so new YouTube videos appear within a day.
- Security headers and caching are set in `site/vercel.json`.

## Setting up (once)

### 1. Vercel project

1. Sign in at vercel.com with GitHub, and choose the **Pro** plan.
2. **Add New, Project**, choose `projectiles-tech-hub/projectiles-website`, then **Import**.
3. Set **Root Directory** to `site`. Leave the rest as Vercel detects it (Framework: Astro).
4. **Deploy**. The first address looks like `projectiles-website.vercel.app`.

### 2. Resend (form emails)

1. Sign up at resend.com.
2. **Domains, Add Domain**: `projectilestechhublimited.com`. Resend shows a few DNS records (lines of settings for
   the domain). Add them where the domain's DNS is managed (Namecheap: **Domain List, Manage, Advanced DNS**), then
   click **Verify** in Resend.
3. **API Keys, Create API Key** (sending access only). Copy it straight into Vercel (next step). Never put it in the
   repository or in a chat.

### 3. Vercel settings (environment variables)

In the Vercel project: **Settings, Environment Variables**. Add each for **Production** and **Preview**:

| Name | Value |
| --- | --- |
| `RESEND_API_KEY` | the Resend key |
| `ENQUIRY_TO` | `projectilestechhub@gmail.com` (where enquiries go) |
| `ENQUIRY_FROM` | `website@projectilestechhublimited.com` (must be on the domain verified in Resend) |
| `TURNSTILE_SECRET` | Cloudflare Turnstile secret key (optional, see below) |
| `CRON_SECRET` | any long random text (protects the daily rebuild) |
| `DEPLOY_HOOK_URL` | the Deploy Hook address (next line) |

Deploy Hook: **Settings, Git, Deploy Hooks**, name `daily`, branch `main`, **Create Hook**, and copy the address.
After adding variables, redeploy once (**Deployments**, the latest one, **Redeploy**) so they take effect.

### 4. Domains

1. In the Vercel project: **Settings, Domains, Add** `projectilestechhublimited.com` (choose to redirect `www` to it).
2. Vercel shows the DNS records to add (usually an `A` record for the bare address and a `CNAME` for `www`). Add them
   in Namecheap **Advanced DNS** exactly as shown, and remove any old `A` or `CNAME` records for the same names.
3. Add `projectilestechhublimited.com.ng` too, and set it to **Redirect to** projectilestechhublimited.com (308).
4. Vercel issues the https certificates by itself once the records are found (usually within an hour).

Do not put Cloudflare's proxy in front of Vercel; Vercel already provides the fast network and protection.

## Spam protection (Cloudflare Turnstile)

Turnstile is Cloudflare's free check that a visitor is a person, without puzzles. It works without moving the domain
to Cloudflare.

1. In a free Cloudflare account, **Turnstile, Add widget**, for projectilestechhublimited.com.
2. Put the **site key** (public) in `site/src/config/company.ts` as `turnstileSiteKey`.
3. Put the **secret key** in Vercel as `TURNSTILE_SECRET` (never in the repository).

Until both are set, forms rely on the hidden spam trap field.

## YouTube

- Channel: @primrosehillestates, channel ID `UCm8Br7LcPyQemUzNJFWGS-A` (in `company.ts`).
- The site reads the channel's public list of its 15 newest videos when it is built. No key is needed.
- The daily rebuild picks up new videos. If YouTube cannot be reached, the Videos page shows a link to the channel.

## Checking it works

1. Open the site and each main page on a phone.
2. Send a test enquiry from Contact us; it should arrive at projectilestechhub@gmail.com within a minute.
3. If it does not: Vercel project, **Logs**, filter by `/api/enquiry`. Messages starting `[enquiry]` say what went
   wrong (for example a missing key).

## Manual changes

| Date | Change | By |
| --- | --- | --- |
| | | |

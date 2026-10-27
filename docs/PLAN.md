# Website plan

## Pages

| Page | What it shows |
| --- | --- |
| Home | Who the company is, the business lines, Primrose Hill Estate, ways to get in touch |
| About us | Company profile, registration (RC 7987623), the Managing Director |
| What we do | All business lines, each with a short page and an enquiry button (WhatsApp, call, form) |
| Projects | Primrose Hill Estate and future projects |
| Primrose Hill Estate | The estate, plot sizes, how to subscribe, the estate map |
| Contact us | Address, phone, WhatsApp, email, map and an enquiry form |
| Privacy notice | How enquiry details are used (needed under the Nigeria Data Protection Act because the form collects personal data) |
| Page not found | Friendly page with links back to the main pages |

The company comes first; Primrose Hill Estate is one project under it.

Business lines (to be confirmed): real estate development; construction; project management; cement distribution;
block moulding; sand dredging and supply; logistics and haulage.

## Look

Start from the June 2026 look unless Emmanuel says otherwise: dark ink and slate with an amber accent; green only on
the Primrose Hill pages. Designed for phone first, then tablet and desktop.

## How it is built

- **Astro**, a tool that turns page templates into plain website files. Nothing runs on the server except the form.
- **Contact form**: one small PHP file that emails each enquiry to the company. Nothing is stored.
- **Estate map**: drawn from the plot layout file; no paid map service needed.
- **Cloudflare** (free) in front of the host for speed and protection.
- **Publishing**: when a pull request is merged, GitHub builds the site and uploads it to the host automatically.

## Quality standards

- **Speed**: each page loads quickly on a phone on mobile data; Google's Lighthouse mobile score of 90 or more.
  Images are resized and served in modern formats (AVIF or WebP).
- **Phones first**: designed at phone width (390), then tablet (768) and desktop (1366), and works at every width in between.
- **Search engines**: a clear title and description for each page, a sitemap, business details in the format
  Google reads (structured data), and a preview image when links are shared on WhatsApp and social media.
- **Accessible**: readable colour contrast, works with a keyboard, descriptions on images, labels on form fields.
- **Form**: spam protection (Cloudflare Turnstile, free), a consent tick box, and a thank-you message.
- **Security**: HTTPS everywhere and standard security headers.
- **Checks**: GitHub checks every pull request (build, broken links, HTML errors) before it can be merged.

## Steps

1. Emmanuel answers the questions in `STATUS.md`.
2. Designs of the pages for his approval.
3. Build the pages.
4. Set up hosting, domain, form and automatic publishing.
5. Final checks on phone and desktop, then go live.

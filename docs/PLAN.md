# Website plan

## Purpose

Show clearly what Projectiles Tech Hub Limited does, advertise its estate projects, share its videos, and make it
easy to get in touch. The company comes first; the estates are its projects.

## Pages

| Page | What it shows |
| --- | --- |
| Home | Who we are, our business lines at a glance, our estate projects, latest videos, ways to get in touch |
| About us | Company profile, registration (RC 7987623), the Managing Director |
| What we do | All business lines, each linking to its own page |
| Business line page (one per line) | What we offer, who it is for, photos or videos, and an enquiry button |
| Estate projects | Every estate community, each as a card with its status (for example, "Coming soon") |
| Estate page (one per community) | Everything about that community: location, size, plots, amenities, title, photos, videos, map, and how to register interest or subscribe |
| Videos | All our videos, with a link to subscribe to our YouTube channel |
| Contact us | Address, phone, WhatsApp, email, map and an enquiry form |
| Privacy notice | How enquiry details are used (needed under the Nigeria Data Protection Act because the forms collect personal data) |
| Page not found | Friendly page with links back to the main pages |

## Business lines

1. Real estate development
2. Construction
3. Project management
4. Cement distribution
5. Block moulding
6. Sand dredging
7. Logistics and haulage

## Estate projects

Each estate community is one file in `site/src/content/estates/`. Adding a community means adding one file; it then
appears on the Estate projects page, on the home page, and gets its own page automatically. Each file holds the
community's name, location, status, summary, details, photos, video links and plot layout (when ready).

Status values: **Coming soon** (shows a teaser and a "register your interest" form), **Now selling**, **Sold out**.

Communities now, all **Coming soon** until their details are final:

| Community | Address on the site |
| --- | --- |
| Primrose Hill Estates, Obazuwa | `/estates/primrose-hill-obazuwa` |
| Primrose Hill Estates, Uzala | `/estates/primrose-hill-uzala` |
| Primrose Hill Estates, Ekole | `/estates/primrose-hill-ekole` |

## Videos and YouTube

- Videos are uploaded to the company's YouTube channel, not to the website host. YouTube carries the cost of
  streaming and plays well on slow connections.
- The website shows the latest videos from the channel automatically. GitHub rebuilds the site once a day and
  reads the channel's public video list (no YouTube password or key needed), so a new upload appears on the site
  within a day without anyone touching the website.
- Videos load only when a visitor taps play, so pages stay light on mobile data.
- A video can also be placed on a particular estate or business line page by adding its link to that page's file.
- Every page footer has a "Subscribe on YouTube" link.

## Contacts shown on the site

- Email: projectilestechhub@gmail.com
- WhatsApp and phone: +234 810 792 7331 (WhatsApp link `https://wa.me/2348107927331`)
- Address: 39 Ohonre Street, Ugbowo, Benin City, Edo State

Enquiry forms send to projectilestechhub@gmail.com.

## Look

A completely new look, not the June 2026 one: trendy and premium. Large, confident photography and video, generous
white space, refined type, and restrained colour built around the company logo. Easy to scan: a visitor should see
what we do within the first screen of the home page.

## Logo

The logo is in `brand/logo-original.png` (light and dark versions). Its current colours are navy (about `#021B3D`)
and gold (about `#CC992A`). The colours may be adjusted in the design system step to suit the
new look; the shape stays. The final logo is redrawn as a clean SVG (vector) file so it stays sharp at every size.

## Design

The design system and every page are designed in Figma by the designer, following `docs/DESIGN_BRIEF.md` (the full
brief, including the FindHouseQuick design principles). Emmanuel approves each design before it is built; progress
is tracked in `docs/designs.md`.

## How it is built

- **Astro**, a tool that turns page templates into plain website files. Nothing runs on the server except the form.
- **Contact and interest forms**: one small PHP file that emails each enquiry to the company. Nothing is stored.
- **Estate maps**: drawn from each community's plot layout file; no paid map service needed.
- **Cloudflare** (free) in front of the host for speed and protection.
- **Publishing**: when a pull request is merged, GitHub builds the site and uploads it to the host automatically;
  it also rebuilds daily to pick up new YouTube videos.

## Skills used in the build

These Claude skills are used for this website. Emmanuel switches them on in **Customize, Skills** when the stage
that needs them starts.

| Skill | What it does | When it is used |
| --- | --- | --- |
| Taste Skill (`design-taste-frontend`, github.com/Leonxlnx/taste-skill) | Keeps the website code from looking plain or template-made: rules for type, spacing, colour, layout and animation, with a check before finishing | While building the pages; it follows the approved design system and does not choose its own look |
| Web Design Guidelines (`web-design-guidelines`, github.com/vercel-labs/agent-skills) | Reviews the website code against Vercel's web interface guidelines: accessibility, layout and usability | After each group of pages is built, before its pull request |
| Playwright CLI (`playwright-cli`, github.com/microsoft/playwright-cli) | Opens the website in a real browser, clicks through it, takes screenshots and runs tests | Checking every page at phone, tablet and desktop widths, and testing the forms |
| Cloudflare Security Audit (github.com/cloudflare/security-audit-skill) | Checks the code and setup for security holes and writes a report | Once, after the build is finished and before going live |

## Quality standards

- **Speed**: each page loads quickly on a phone on mobile data; Google's Lighthouse mobile score of 90 or more.
  Images are resized and served in modern formats (AVIF or WebP).
- **Search engines**: a clear title and description for each page, a sitemap, business details in the format
  Google reads (structured data), and a preview image when links are shared on WhatsApp and social media.
- **Forms**: spam protection (Cloudflare Turnstile, free), a consent tick box, and a thank-you message.
- **Security**: HTTPS everywhere and standard security headers.
- **Checks**: GitHub checks every pull request (build, broken links, HTML errors) before it can be merged.

## Steps

1. Emmanuel answers the questions in `STATUS.md`.
2. Design system in Figma, approved.
3. Page designs in Figma, approved.
4. Build the pages.
5. Set up hosting, domain, forms, YouTube feed and automatic publishing.
6. Final checks on phone and desktop, then go live.

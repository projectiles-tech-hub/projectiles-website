# Projectiles Tech Hub Limited: website

The public website of Projectiles Tech Hub Limited, Benin City, Edo State.

| Folder | Contents |
| --- | --- |
| `docs/` | Plan, design brief, design progress, status and hosting guide |
| `brand/` | Logo files |
| `site/` | The website (Astro). Built into plain files in `site/dist` |

## Working on the website

```bash
cd site
pnpm install
pnpm dev                 # http://localhost:4321
pnpm build               # finished site in site/dist
pnpm test                # HTML errors, broken links, accessibility, page width
SAMPLES=1 pnpm build     # adds a sample "Now selling" estate and sample videos, for checking layouts
NO_YOUTUBE=1 pnpm build  # builds without reading the YouTube channel
```

Where to change things:

| What | Where |
| --- | --- |
| Phone, email, address, business lines, reasons | `site/src/config/company.ts` |
| Estate communities (one file each) | `site/src/content/estates/` |
| Investment offers (one file each) | `site/src/content/offers/` |
| Gallery photos and videos | `site/src/content/gallery/` |
| Contact form (emails enquiries) | `site/public/enquiry.php` |

Copyright Projectiles Tech Hub Limited. All rights reserved. This repository is visible to the public, but no
licence is granted to copy or use its code or content without written permission.

Never commit passwords, keys or `.env` files to this repository.

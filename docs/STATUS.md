# Status

Updated: 28 October 2026.

## Where things stand

- Repository, plan, design brief, logo and skills in place.
- Claude makes the designs in Figma; the website uses Emmanuel's 11 colours (given 28 October 2026); investment
  offers on a dedicated Invest page.
- Icons, components, colours and type approved by Emmanuel on 28 October 2026 (links in `designs.md`). This
  includes the darker green for pressed buttons, the official social media colours for their marks, and the field
  outline grey #B8BEC7 as chosen.
- Design system approved on 28 October 2026: Direction 1 (light and calm), the logo (all three colour options, each
  used where it fits; SVG files in `brand/logo/`), spacing, grid and shape, and motion (Material Design 3 timings).
- Fonts: Source Sans 3 only (the FindHouseQuick font).
- Page designs: all approved 28 October 2026, with placeholders (photos, Managing Director profile, investment
  offers) that Emmanuel will replace later. Two components were added for them: Plot map and Reason item.
- Website built in `site/` (branch `build-site`, pull request open): all pages, the contact form, the YouTube video
  list, the gallery, the plot map, search engine files, icons and the share image. Checks pass: HTML, links,
  accessibility (phone and desktop) and page width.
- Placeholders still in use: photos, the Managing Director profile and photo, investment offer figures, estate
  details (all three estates show "Coming soon"), gallery items, the privacy notice text, opening hours (hidden until
  given), social media links other than YouTube (hidden until given), and the Turnstile key.
- Hosting moved to Vercel (28 October 2026): the form now sends email through Resend. Publishing starts once the
  Vercel project, Resend and the domain are set up as in `DEPLOYMENT.md`.

## Settled

- YouTube channel: @primrosehillestates.
- Hosting: Vercel, Pro plan (28 October 2026; previously Namecheap shared hosting). Form emails: Resend.
- Domain: projectilestechhublimited.com, with projectilestechhublimited.com.ng pointing to it.
- Investment offer details come later; the Invest page uses sample figures until then.
- Each investment offer has its own page, opened from the Invest page.
- Videos have their own page (all the channel's videos) and can also be placed on any page.
- A Gallery page shows photos and videos together.
- IT is not a business line; it is mentioned only in the company profile on About us (28 October 2026).
- Property management, property valuation, land administration and title perfection, geo-services, and agency and
  property brokerage are services offered to clients, shown on the Real estate development page (28 October 2026).

## Questions for Emmanuel

1. **Later, when ready**: real photos, the Managing Director profile and photo, the investment offer details, the
   estate details, opening hours, other social media links, and the final privacy notice. Placeholders are used
   until then.
2. **Cloudflare Security Audit skill**: please switch it on, so the finished build can be checked before going live.

## Next

1. [x] Design system in Figma, approved (28 October 2026).
2. [x] Page designs in Figma, approved (28 October 2026).
3. [x] Build the pages (28 October 2026, waiting for merge).
4. [ ] Hosting, domain, forms, YouTube feed and automatic publishing.
5. [ ] Go live.

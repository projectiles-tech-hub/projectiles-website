# Design brief: Projectiles Tech Hub Limited website

For Claude, who designs the website in Figma (through the Figma connector). Read it all before starting. Everything you need is here or linked from
here; anything still missing is listed in Section 12, with what to do in the meantime.

## 1. The job

Claude designs a **design system** and then **every page** of the public website of Projectiles Tech Hub Limited, in Figma,
at three widths. Emmanuel Chukwuka Oraegbu (Managing Director) reviews and approves the work. The website is then
built from the approved designs, so the designs must be complete and exact enough to build from without guessing.

- **Figma file:** "Projectiles Website", https://www.figma.com/design/zEItN6SP92NHfsFiMbx8B7
- **Order:** the design system first, approved, then the pages (Section 9).
- **Approval:** nothing is built until Emmanuel approves its design. Progress is tracked in `docs/designs.md`.

## 2. The company and what the website is for

In Emmanuel's words (28 October 2026); all website content follows this:

Projectiles Tech Hub Limited is a project management, construction, IT and real estate company registered in
Nigeria (RC 7987623) and headquartered in Benin City, Edo State.

At its core, the company plans, manages and delivers construction projects for private and public clients, bringing
professional discipline to scheduling, budgeting, procurement and quality control.

Alongside its core services, the company develops its own estate projects, including the range of Primrose Hill
Estates, and operates a set of vertical businesses that strengthen its supply chain: cement distribution, block
moulding, sand dredging, and logistics and haulage. Together these form an integrated ecosystem that gives the
company greater control over cost, quality and timelines than firms reliant on third-party suppliers.

The company is grounded in expertise in construction and property development, property management, property
valuation, land administration and title perfection, geo-services, and agency and property brokerage, enabling it
to deliver projects on secure legal footing and to offer clients and investors confidence in the assets they build
and hold.

**What this means for the content:** project management and construction come first, then real estate
development, then the four supply businesses. The supply chain is shown as the reason the company controls cost,
quality and time; the legal and property expertise as the reason clients and investors can trust its assets.

The website must do four things, in this order of importance:

1. **Show clearly what we do.** A visitor should understand the company and its business lines within the first
   screen of the home page, on a phone.
2. **Advertise our estate projects**, starting with Primrose Hill Estates.
3. **Share our videos** and grow our YouTube channel.
4. **Make it easy to get in touch**: WhatsApp first, then phone, email and the forms.

**Who visits:**
- People looking to buy land or plots in a serviced estate, many of them Nigerians abroad.
- Businesses and individuals who need construction, project management, cement, blocks, sand or haulage.
- Government and corporate buyers checking the company's credentials before awarding work.
- People who found us through our videos.

Most visitors are on phones, often on mobile data. Design for the phone first.

## 3. Look and feel

**A completely new look: trendy and premium.** Do not reuse or follow the June 2026 site (dark ink and slate with an
amber accent and a blueprint grid). Start fresh.

What "premium" means here:
- Large, confident photography and video; real places and people, not illustration.
- Generous white space and a calm, uncluttered layout.
- Refined typography in Source Sans 3 (Section 4b) with a clear, confident hierarchy.
- The FindHouseQuick colours (Section 4a), used with discipline, not everywhere.
- Subtle, purposeful motion (gentle reveals, hover states), never decoration for its own sake.
- Confidence and trust: credentials visible, contact always one tap away.

Avoid:
- Anything that looks like a stock template or a page builder theme.
- Accent colours (such as amber) used as a background flood or on large areas; they are accents.
- Busy backgrounds, heavy gradients, glassy effects that hurt readability or speed.
- Clip art, generic stock icons, or emoji as icons.
- Text over photos without enough contrast.
- Carousels that hide the main message.

Show **two or three distinct directions**, side by side on one board, before choosing one with Emmanuel. All
directions use the FindHouseQuick colours (Section 4a) and the FindHouseQuick font (Section 4b); they differ in how
the colours are blended and balanced and in how the type is sized and set.

## 4. The logo

- **File:** `brand/logo-original.png` in the repository (light and dark versions on one image).
- **Shape:** a "P" mark with a rising gold arrow and bar chart, the word PROJECTILES, and TECH HUB LIMITED beneath
  between two rules. **Keep the shape.**
- **Colours now:** navy about `#021B3D`, gold about `#CC992A`. **The logo colours are changed to suit the website's
  colours** (Section 4a); propose two or three recoloured versions for Emmanuel to choose from, shown on light and dark
  backgrounds.
- **Deliver the logo as clean vectors** (redrawn, not traced roughly), in Figma and exported as SVG:
  1. Full logo, horizontal (mark beside the words) for the website header.
  2. Full logo, stacked (as in the file).
  3. Mark only (for the browser tab icon, the phone home-screen icon and social profile pictures).
  4. Each in a version for light backgrounds and one for dark backgrounds, plus one-colour versions.
- Show the smallest size each version stays readable at, and the clear space to keep around it.

## 4a. Colours

**The website uses the FindHouseQuick app's colours, properly blended with any other colours the website needs.**
FindHouseQuick is the company's rental platform; using its palette ties the company and its products together.

The FindHouseQuick colours are in its approved design system: Penpot file "Release 1 Screens", page "00 Design
system", board "Colours"
([open in Penpot](https://design.penpot.app/#/workspace?team-id=685eebd9-2ce2-80a4-8008-d5ccd136bc96&file-id=41725af0-a889-809a-8008-d5d0a0c28100&page-id=9f79414e-8c92-80e5-8008-d5d27bcc2301&board-id=9f79414e-8c92-80e5-8008-d5d29b502680)).
The values below were read from that file's colour library on 28 October 2026 and are the approved values.

| Group | Name | Value | Use in FindHouseQuick |
| --- | --- | --- | --- |
| Brand | Green 700 (primary) | `#0B6B3A` | Main action colour |
| Brand | Green 800 (pressed) | `#08502B` | Pressed state |
| Brand | Green 50 (tint) | `#E7F3EC` | Light green backgrounds |
| Accent | Amber 500 | `#F2A900` | Highlights (prices on the map) |
| Accent | Amber 100 | `#FDF0CC` | Light amber backgrounds |
| Neutral | Ink 900 (text) | `#111827` | Main text |
| Neutral | Ink 600 (secondary text) | `#4B5563` | Secondary text |
| Neutral | Ink 400 (disabled) | `#9CA3AF` | Disabled items only |
| Neutral | Border | `#B8BEC7` | Borders |
| Neutral | Divider | `#E5E7EB` | Dividers |
| Neutral | Background | `#F6F6F3` | Page background |
| Neutral | Surface | `#FFFFFF` | Cards and panels |
| Status | Success / Success tint | `#15803D` / `#E3F4E8` | Success messages |
| Status | Warning / Warning tint | `#B45309` / `#FEF3E2` | Warnings |
| Status | Error / Error tint | `#B91C1C` / `#FDE8E8` | Errors |
| Status | Error pressed | `#8F1717` | Pressed state of error (delete) buttons |
| Status | Verified blue / Info tint | `#1D4ED8` / `#E6EDFD` | Information |

**Blending:** keep these colours as the base. Add only the colours a premium company website needs that the app
palette lacks, for example a deep dark shade for dark hero and footer sections, extra tints or shades of the green,
and image overlays, each derived from or harmonising with the FindHouseQuick palette. Show every added colour beside
the FindHouseQuick colours on the Colours board, with the reason for it, for Emmanuel's approval.

## 4b. Font

**The website uses the FindHouseQuick font: Source Sans 3** (free, SIL Open Font Licence; FindHouseQuick decision 69).
It was chosen because it includes the Naira sign (₦) and the dotted letters Yoruba and Igbo need. One family only;
no second font.

FindHouseQuick text styles, read from its Penpot library on 28 October 2026 (size in pixels / weight / line height):

| Style | Size | Weight | Line height |
| --- | --- | --- | --- |
| Display | 28 | 700 (Bold) | 1.29 |
| Title | 22 | 700 (Bold) | 1.36 |
| Price | 20 | 700 (Bold) | 1.3 |
| Subtitle | 18 | 500 (Medium) | 1.44 |
| Body | 16 | 400 (Regular) | 1.5 |
| Button | 16 | 500 (Medium) | 1.25 |
| Label | 14 | 500 (Medium) | 1.43 |
| Body small | 14 | 400 (Regular) | 1.43 |

These sizes are for app screens. The website keeps the same font, weights and the reading sizes (Body 16, Label 14,
Body small 14, Button 16), and adds larger heading sizes for desktop and tablet (Section 7.2). Weights used:
400, 500, 600 if needed, and 700.

## 5. Design principles (the same ones used for FindHouseQuick)

1. **Design system first**, approved before any page.
2. **Choices side by side.** Directions are compared on one board before one is chosen.
3. **Our own icon set** (Section 7.5). Drawn for this website, to a standard above Font Awesome's paid set, in two
   matching styles: outline for normal use, filled for selected or active states. No outside icon set is used.
   The only exception is other companies' brand marks (WhatsApp, YouTube, Facebook, Instagram, X, LinkedIn,
   TikTok), which must use their official marks under their own brand rules.
4. **Font that fits Nigeria: Source Sans 3** (Section 4b), which includes the Naira sign (₦) and the letters Yoruba
   and Igbo need. Show this line in it on the Type board:
   `₦25,000,000 · Ẹ̀dó · Ọ̀bàzùwà · Ụzala · ṣ ẹ ọ ụ ị ṅ Ṣ Ẹ Ọ Ụ Ị Ṅ`
   The website hosts the font files itself (SIL Open Font Licence allows this).
5. **Text sizes:** nothing smaller than 14; reading text 16 or larger.
6. **Spacing in steps of 4**, and every tap target at least 48 by 48.
7. **Responsive at every width.** Each page is drawn at **1366** (desktop), **768** (tablet) and **360** (phone).
   Above 1366 the layout stretches, with content kept to a comfortable reading width. Show how each layout changes
   between widths; nothing should only work at the three drawn widths.
8. **Accessible (WCAG 2.1 AA).** Text contrast at least 4.5 to 1 (3 to 1 for large text and icons); visible focus
   states for keyboard users; labels on every field; meaning never shown by colour alone.

## 6. What the website will be built with (what this means for you)

The site is built with Astro into plain, fast files. For the design, that means:
- **Use Figma variables for colours, spacing, corner radius and type**, with clear names (for example
  `color/text/primary`, `space/16`, `radius/12`). They become the website's design tokens one to one.
- **Use Figma components with variants** for everything that repeats (buttons, cards, badges, fields). The website
  is built from the same parts.
- **Use auto layout** so the intended behaviour at different widths is clear.
- **Keep pages light.** Prefer real photos to heavy effects; no full-screen background video autoplaying on
  phones (a poster image with a play button is fine). Videos play from YouTube only after a tap.
- **Font:** Source Sans 3 only, and only the weights actually used.
- **Images:** state the aspect ratio of each image slot (for example 16:9, 4:3, 1:1). Real photos will be dropped
  into those slots later.

## 7. The design system (what to deliver)

Put it on the page "00 Design system", one board per part.

### 7.1 Colour
- The FindHouseQuick colours (Section 4a) and any added colours, neutrals (backgrounds, surfaces, borders, text), and states (success,
  warning, error, information).
- Light theme is required. A dark theme is optional; propose it only if it adds to the premium feel.
- A contrast table for every text and background pair actually used.

### 7.2 Type
- Source Sans 3, with the test line from Section 5 shown in it.
- A type scale in Source Sans 3 for headings (display, H1 to H4), body (large, regular), small text, labels, buttons,
  and numbers (prices, sizes), with sizes, line heights and weights at desktop, tablet and phone. Reading sizes follow
  the FindHouseQuick text styles (Section 4b).

### 7.3 Spacing, grid and shape
- Spacing scale in steps of 4.
- Layout grid: 12 columns at 1366, 8 at 768, 4 at 360, with margins and gutters; the maximum content width.
- Corner radius scale; shadows (if used); borders.

### 7.4 Motion
- A short note on how things move: reveal on scroll, hover and press states, menu opening, with durations.
  Motion must respect the visitor's "reduce motion" setting.

### 7.5 Icons
Our own set (Section 5), on a fixed grid (for example 24 by 24), with consistent stroke and corners, in outline
and filled styles. At least these:

| Group | Icons |
| --- | --- |
| Navigation | menu, close, arrow right, arrow left, arrow up-right (opens elsewhere), chevron down, chevron right, search |
| Contact | phone, email, location pin, map, clock (opening hours), send |
| Media | play, pause, video, image, share |
| Business lines | real estate development, construction, project management, cement distribution, block moulding, sand dredging, logistics and haulage |
| Estates | plot or land, size or area, road, power or solar, water, security or shield, title document, amenities |
| Status and form | check, information, warning, error, upload, download, calendar, user |

Brand marks to place (official versions): WhatsApp, YouTube, Facebook, Instagram, X, LinkedIn, TikTok.

### 7.6 Components (each with its states: default, hover, pressed, focus, disabled where relevant)
- **Buttons:** primary, secondary, text button, icon button; the **WhatsApp button** (green, official mark,
  "Chat on WhatsApp"); small, medium and large sizes.
- **Links** in text and in navigation.
- **Header:** desktop navigation with the logo and a "Chat on WhatsApp" or "Contact us" action; phone header with
  a menu button and the opened menu.
- **Footer:** logo, short company line, page links, business lines, contacts, social links with a "Subscribe on
  YouTube" link, registration number (RC 7987623), copyright, link to the privacy notice.
- **Floating WhatsApp button** for phones (small, never covering content or buttons).
- **Cards:**
  - Business line card (icon or photo, name, one line, link).
  - **Estate card** (photo, community name, location, status badge, one line, link). It must look good with or
    without a real photo, because new communities may start without one.
  - Video card (thumbnail, title, length, date, play button).
  - Fact or figure card (for numbers such as years, projects or hectares).
- **Status badges** for estates: **Coming soon**, **Now selling**, **Sold out**.
- **Video player:** the thumbnail with a play button before playing; the YouTube player after a tap. It must fit
  any page and any width, because a video can be placed on any page.
- **Section header** (small label, heading, short text, optional action).
- **Breadcrumbs** for inner pages.
- **Forms:** text field, phone field (with +234), email field, select, text area, checkbox (consent), radio;
  each with label, help text, error message and success state. The spam check (Cloudflare Turnstile) needs a
  small area near the send button.
- **Notices:** success, error and information messages; the form thank-you message.
- **Photo gallery** with a full-screen viewer that shows photos and videos, with next and previous.
- **Investment offer card** (offer name, what it is in one line, minimum amount, term, expected return, link to
  the offer's page).
- **Map block** (an embedded map or a styled static map with a pin and a "Get directions" link).
- **Empty and placeholder states:** for a missing photo, and for an estate with no videos yet.

## 8. Pages and what each contains

Each page is drawn at 1366, 768 and 360. Content blocks are listed in order; you may improve the order and layout,
but keep every block unless Emmanuel agrees to drop it.

### 8.1 Home
1. Header.
2. **Opening (hero):** one strong headline about the company, one supporting line, actions "What we do" and
   "Chat on WhatsApp"; a strong image or a video poster.
3. **What we do:** all seven business lines at a glance, each linking to its page. This must be visible early,
   especially on phones.
4. **Estate projects:** the estate cards (Section 8.5), with a link to all estates.
5. **Why work with us:** a few short trust points (registered company, end-to-end capability from materials to
   plots, location in Benin City).
6. **Latest videos:** three or four video cards and "Subscribe on YouTube".
7. **Get in touch:** WhatsApp, phone, email, address, and a link to the contact form.
8. Footer.

### 8.2 About us
Company story and what we stand for; how the business lines work together; the Managing Director (photo, name
Emmanuel Chukwuka Oraegbu, title, short profile); registration details (RC 7987623, address); a call to action.

### 8.3 What we do
Introduction; all seven business lines as larger cards or sections, each linking to its own page.

### 8.4 Business line page (one design, used for all seven)
Hero with the line's name and photo; what we offer (list of services or products); who it is for; how it works
(simple steps); photos and, when available, a video; a strong enquiry block (WhatsApp, phone, form with the business
line already selected); links to the other business lines.

Design it once so it works for every line, including lines with no video and lines with few photos.

The seven lines: real estate development; construction; project management; cement distribution; block moulding;
sand dredging; logistics and haulage.

### 8.5 Estate projects
Introduction; a grid of estate cards, one per community. The number of communities will grow, so the layout must
work with 1, 3, 6 or more cards. Communities now, all **Coming soon**:

- Primrose Hill Estates, Obazuwa
- Primrose Hill Estates, Uzala
- Primrose Hill Estates, Ekole

### 8.6 Estate page (one design, used for every community)
Draw it in **two states**:

- **Coming soon:** hero with the community name, location and "Coming soon" badge; a short teaser; a "Register your
  interest" form (name, phone, email, optional message, consent); videos if any; a link to the other estates.
- **Now selling:** hero; overview (location, total size, number of plots, plot sizes); amenities (icon list);
  title and documents; photo gallery; videos; location map with nearby landmarks; the estate plot map (an
  interactive plan of the plots, coloured by status, tap a plot to see its details); how to subscribe (steps); an
  enquiry or subscription form; frequently asked questions; a link to the other estates.

Both states must work for any community name and length of text.

### 8.7 Videos
Introduction and "Subscribe on YouTube"; a featured video; a grid of video cards; optional filter chips by topic
(for example Estates, Construction, Company). The list fills automatically from the YouTube channel, newest
first. Videos may also appear on any other page, using the video player component.

### 8.8 Gallery
Introduction; a grid of photos and videos together (videos marked with a play icon); optional filter chips by
topic, matching the Videos page; tapping any item opens the full-screen viewer. The grid must work with mixed
photo shapes and with few or many items.

### 8.9 Contact us
Contacts (WhatsApp, phone, email, address) with one-tap actions; the enquiry form (name, phone, email, business line
of interest, message, consent); map with "Get directions"; opening hours if Emmanuel provides them.

### 8.10 Invest
A page dedicated to the company's investment offers. Other pages (home, about, estates) may link to it, but offers
are presented only here and on each offer's own page (Section 8.11).

1. Hero: invest with Projectiles Tech Hub Limited; one supporting line; action "Talk to us about investing".
2. Why invest with us: the company's track record and how the business lines support each other.
3. **The offers:** one investment offer card per offer (name, what it is in one line, minimum amount, term and
   expected return); tapping a card opens the offer's own page. Design it so offers can be added or removed. Offers
   from company records, to confirm with Emmanuel: trade finance notes; asset-backed notes; land-secured growth units
   tied to Primrose Hill Estates plots. Use realistic sample figures, marked as samples, until he supplies them.
4. How it works: simple steps from enquiry to investment.
5. Frequently asked questions.
6. Documents and disclosures: a block for terms, risk notes and downloadable documents.
7. Investor enquiry form: name, phone, email, offer of interest, amount range, message, consent.

### 8.11 Investment offer page (one design, used for every offer)
1. Hero: offer name, one supporting line, the key figures (minimum amount, term, expected return, marked as
   samples until confirmed), and an "Enquire about this offer" action.
2. What it is and what backs it.
3. Key terms: minimum amount, term, expected return, how and when returns are paid, how to exit.
4. Risks, in plain language.
5. How to invest: simple steps from enquiry to investment.
6. Documents for this offer (downloads).
7. Video, when available.
8. Frequently asked questions about this offer.
9. Investor enquiry form with this offer already selected; WhatsApp and phone beside it.
10. Links to the other offers and back to the Invest page.

Design it so it works for any offer, including offers with no video or few documents.

### 8.12 Privacy notice
A plain, readable long-text page (headings, paragraphs, lists). The text will be supplied.

### 8.13 Page not found
A friendly message, a search or the main links, and a way back home.

### 8.14 Form results
The thank-you state and the error state of each form (shown in place on the page).

## 9. Order of work and delivery

1. **Directions:** two or three directions (colour blending and type setting, all on the FindHouseQuick colours and
   Source Sans 3) on one board, using the logo, a button, a card and a
   short hero, at desktop and phone. Emmanuel chooses one.
2. **Design system:** everything in Section 7, built as variables, styles and components. Approved.
3. **Pages**, in this order, each at 1366, 768 and 360: Home; What we do; Business line page; Estate projects;
   Estate page (both states); Invest; Investment offer page; Videos; Gallery; Contact us; About us; Privacy notice;
   Page not found.
4. **Prototype:** link the pages so the main journeys can be clicked through on a phone: home to a business line
   to WhatsApp; home to an estate to the interest form; home to a video; home to the Invest page to an offer's page to the investor enquiry form; home to the Gallery to the full-screen viewer.

**Figma file layout:**

| Figma page | Contents |
| --- | --- |
| 00 Design system | Directions board, then colours, type, spacing and grid, motion, icons, logo |
| 01 Components | All components with their variants and states |
| 02 Desktop 1366 | Every page at 1366 |
| 03 Tablet 768 | Every page at 768 |
| 04 Phone 360 | Every page at 360 |
| 05 Prototype | The linked journeys |

**Naming:** frames as "number page (width)", for example "01 Home (1366)", "06 Estate page, coming soon (360)".

**Each time something is ready for review:** give Emmanuel the Figma link to the exact board or frame, and a PNG
export of each frame named the same way. Record it in `docs/designs.md` as "To review"; Emmanuel's answer is
recorded there as "Approved" or "Changes asked".

## 10. Content

- Use real content where it exists (Sections 2, 8 and 11). Where it does not, write **realistic draft copy** in
  plain English that fits the company, clearly marked as draft so Emmanuel can approve or replace it. Never use
  "lorem ipsum".
- **Photos:** real photos are not available yet. Use clearly labelled placeholders at the right aspect ratio, or
  good, realistic stand-in photos of Nigerian settings and people (Benin City setting: laterite soil, palm trees,
  tropical greenery). Label every stand-in "placeholder" so it is never shipped by mistake.
- **Tone:** confident, clear, warm, and professional. Short sentences. No jargon.
- **Spelling:** British English (as used in Nigeria): colour, programme, moulding.
- **Money:** written with the Naira sign, for example ₦25,000,000.
- **Investment offers** appear only on the Invest page (Section 8.10) and each offer's own page (Section 8.11);
  other pages may link to them.

## 11. Fixed details to use

| Item | Value |
| --- | --- |
| Company name | Projectiles Tech Hub Limited (short form: Projectiles) |
| Registration | RC 7987623 |
| Address | 39 Ohonre Street, Ugbowo, Benin City, Edo State, Nigeria |
| Email | projectilestechhub@gmail.com |
| Phone and WhatsApp | +234 810 792 7331 |
| Managing Director | Emmanuel Chukwuka Oraegbu (always written this way, without letters after the name) |
| Business lines | Real estate development; construction; project management; cement distribution; block moulding; sand dredging; logistics and haulage |
| YouTube channel | @primrosehillestates (https://www.youtube.com/@primrosehillestates) |
| Website address | projectilestechhublimited.com |
| Estate communities | Primrose Hill Estates, Obazuwa; Primrose Hill Estates, Uzala; Primrose Hill Estates, Ekole (all coming soon) |

## 12. Still to come, and what to do meanwhile

| Missing | Meanwhile |
| --- | --- |
| Real photos and videos | Labelled placeholders (Section 10) |
| Estate details (sizes, plots, amenities, prices) | Design the "Now selling" state with realistic sample figures marked as samples |
| Privacy notice text | Use sample headings and paragraphs |
| Opening hours | Leave a slot; mark it optional |
| Investment offer details (amounts, terms, returns, documents) | Realistic sample figures marked as samples |

Questions about the brief go to Emmanuel. Do not add pages, sections or features beyond this brief without his
agreement; suggest them instead.

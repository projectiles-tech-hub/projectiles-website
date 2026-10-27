# Projectiles Tech Hub website: instructions for Claude

The public website of Projectiles Tech Hub Limited (RC 7987623), 39 Ohonre Street, Ugbowo, Benin City, Edo State.
Owner: Emmanuel Chukwuka Oraegbu, Managing Director. Keep this project simple: it is a company website.

## Read first

1. `docs/PLAN.md`: the pages, the look, how it is built, and the steps.
2. `docs/STATUS.md`: where things stand and the questions still waiting for Emmanuel.
3. `docs/DEPLOYMENT.md`: hosting, domain and publishing settings.

Update `STATUS.md` at the end of each session. Any setting, password location or manual step goes into
`DEPLOYMENT.md`, never only in chat.

## How the work goes

- Follow the design principles in `docs/PLAN.md` (the same as FindHouseQuick): designs made in Penpot and approved
  before any page is built; Penpot calls made one at a time, one board per request.
- Each piece of work is a branch and a pull request to `main`; it is done when Emmanuel merges it.
- Do not add pages, features or content he has not asked for. Suggest them instead.
- Plain language; short side notes for technical terms. No em dashes in anything written for him.
- His name is written Emmanuel Chukwuka Oraegbu, without post-nominal letters.

## Rules for the code

- The built site is plain files (HTML, CSS, JavaScript, images, plus one PHP file for the contact form), so it runs
  on Namecheap shared hosting or a Starlight virtual machine without changes.
- Contact details and business lines live in one place (`site/src/config/company.ts`), not repeated across pages.
- Each estate community is one file in `site/src/content/estates/`; adding a file adds the community everywhere.
- Videos are hosted on YouTube and load only when the visitor taps play.
- Pages must be light and fast on mobile data, and work well on phones first.
- No secrets in the repository.
- No investment offers on the site unless Emmanuel approves the wording.

## Commands (once `site/` exists)

```bash
cd site
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # finished site in site/dist
pnpm test     # broken links, HTML errors, accessibility
```

The quality standards in `docs/PLAN.md` apply to every page.

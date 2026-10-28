// Checks the finished site in dist/: HTML errors, broken links and accessibility (phone and desktop widths).
// Run after `pnpm build`. Exits with an error if anything fails.
import { readdir, readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { join, extname, resolve } from 'node:path';
import { HtmlValidate, FileSystemConfigLoader, formatterFactory } from 'html-validate';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const dist = resolve('dist');
let failures = 0;
const fail = (msg) => { failures++; console.error(`  ✗ ${msg}`); };

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}
const files = await walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const route = (f) => '/' + f.slice(dist.length + 1).replace(/index\.html$/, '').replace(/\\/g, '/');

// 1. HTML errors
console.log(`HTML check (${pages.length} pages)`);
const validator = new HtmlValidate(new FileSystemConfigLoader());
const text = formatterFactory('text');
for (const f of pages) {
  const report = await validator.validateFile(f);
  if (!report.valid) { fail(route(f)); console.error(text(report.results)); }
}

// 2. Broken links and missing anchors
console.log('Link check');
const exists = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };
const idsOf = new Map();
for (const f of pages) {
  const html = await readFile(f, 'utf8');
  idsOf.set(route(f), new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}
for (const f of pages) {
  const html = await readFile(f, 'utf8');
  const from = route(f);
  for (const [, href] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(href)) continue;
    const [pathPart, hash] = href.split('#');
    const path = pathPart === '' ? from : new URL(pathPart, `http://x${from}`).pathname;
    if (path.startsWith('/api/')) continue;
    const target = path.endsWith('/') ? join(dist, path, 'index.html') : join(dist, decodeURIComponent(path));
    if (!(await exists(target))) { fail(`${from} links to missing ${href}`); continue; }
    if (hash && path.endsWith('/') && !idsOf.get(path)?.has(hash)) fail(`${from} links to missing anchor ${href}`);
  }
}

// 3. Accessibility with axe, in a real browser
console.log('Accessibility check (360 and 1366 wide)');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json' };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const file = join(dist, p);
  try {
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end(await readFile(join(dist, '404.html'))); }
}).listen(0);
const base = `http://localhost:${server.address().port}`;
const browser = await chromium.launch();
try {
  for (const width of [360, 1366]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    for (const f of pages) {
      const r = route(f);
      await page.goto(base + r, { waitUntil: 'load' });
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      for (const v of result.violations) fail(`${r} at ${width}: ${v.id} (${v.nodes.length}) ${v.help} :: ${v.nodes[0]?.target.join(' ')}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) fail(`${r} at ${width}: page is ${overflow}px wider than the screen`);
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.close();
}

if (failures) { console.error(`\n${failures} problem(s) found.`); process.exit(1); }
console.log('\nAll checks passed.');

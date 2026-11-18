// Writes a static, crawlable page for every recipe: recipes/<slug>/index.html
//  - title, description, canonical, Open Graph / Twitter tags and the Recipe JSON-LD are in the HTML itself
//  - the story, ingredients and instructions are in the HTML too (app.js then replaces them with the interactive view)
// The JSON-LD, ingredient and step text come from app.js itself, so the static and live versions cannot drift apart.
// Review ratings are fetched from Supabase at build time (skipped quietly if the request fails).
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..', '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const SITE = 'https://midnightrecipes.com';
const NAME = 'MIDNIGHT RECIPES';

const data = { window: {} };
vm.createContext(data);
vm.runInContext(read('assets/js/data.js'), data);
const recipes = data.window.MIDNIGHT_RECIPES || [];
let manifest = {};
try { manifest = JSON.parse(read('assets/js/image-manifest.json')); } catch (e) {}

// ---- run app.js in a sandbox with a fake DOM and pull out the helpers we need ----
let jsonld = '';
const el = () => ({ dataset: {}, style: {}, classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, appendChild() {}, remove() {} });
const doc = { body: { dataset: { depth: '0', page: 'prerender' } }, head: { appendChild(n) { if (n && n.type === 'application/ld+json') jsonld = n.textContent; } },
  getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], addEventListener() {}, createElement: () => el() };
const ctx = { window: data.window, document: doc, location: { search: '', pathname: '/' }, URLSearchParams,
  localStorage: { getItem: () => null, setItem() {} }, navigator: {}, console, setTimeout, fetch: () => Promise.reject(new Error('no network in sandbox')) };
vm.createContext(ctx);
let app = read('assets/js/app.js');
const tail = /\ninit\(\);\s*\}\)\(\);\s*$/;
if (!tail.test(app)) throw new Error('app.js no longer ends with "init(); })();" - update prerender-recipes.js');
app = app.replace(tail, '\nwindow.__mr={schemaIngredient,schemaStepText,addRecipeJsonLd,reviewStatsCache,setManifest:m=>{imageManifest=m}};\n})();');
vm.runInContext(app, ctx);
const mr = ctx.window.__mr;
mr.setManifest(manifest);
const SUPABASE_URL = (app.match(/const SUPABASE_URL='([^']+)'/) || [])[1];
const SUPABASE_KEY = (app.match(/const SUPABASE_PUBLISHABLE_KEY='([^']+)'/) || [])[1];

async function loadRatings() {
  if (!SUPABASE_URL || !SUPABASE_KEY || typeof fetch !== 'function') return;
  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/recipe_reviews?select=recipe_slug,rating&is_visible=eq.true&limit=5000',
      { headers: { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + SUPABASE_KEY }, signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const by = {};
    for (const x of await res.json()) { const n = Number(x.rating); if (Number.isInteger(n) && n >= 1 && n <= 5) (by[x.recipe_slug] ||= []).push(n); }
    for (const [slug, arr] of Object.entries(by)) mr.reviewStatsCache.set(slug, { avg: arr.reduce((a, b) => a + b, 0) / arr.length, count: arr.length });
    console.log('ratings loaded for', Object.keys(by).length, 'recipes');
  } catch (e) { console.warn('ratings skipped:', e.message); }
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const clean = s => String(s ?? '').replace(/\*+/g, '').trim();

function pageFor(r) {
  const slug = r.slug, url = `${SITE}/recipes/${slug}/`;
  const hero = (manifest[slug] && manifest[slug].hero) || r.heroImage || '';
  const heroUrl = hero ? `${SITE}/${hero}` : `${SITE}/images/og-default.jpg`;
  const title = `${r.title} | ${NAME}`;
  const desc = (r.description || `${r.title} from ${NAME}.`).replace(/\s+/g, ' ').trim();
  const st = r.stats || {};

  jsonld = '';
  mr.addRecipeJsonLd(r);                       // same JSON-LD the live page builds
  const ld = (jsonld || '').replace(/</g, '\\u003c');

  const steps = (r.steps || []).map((s, i) => ({ name: s.title || s.label || `Step ${i + 1}`,
    paras: (Array.isArray(s.paragraphs) ? s.paragraphs : []).map(t => mr.schemaStepText(t, r)).filter(Boolean) })).filter(s => s.paras.length);
  const ingHtml = (r.ingredients || []).map(x => {
    if (x && x.group) return `</ul><h3>${esc(x.group)}</h3><ul>`;
    const t = mr.schemaIngredient(x); return t ? `<li>${esc(t)}</li>` : '';
  }).join('');
  const ingBlock = `<ul>${ingHtml}</ul>`.replace(/<ul><\/ul>/g, '');
  const stepHtml = steps.map(s => `<li><strong>${esc(s.name)}</strong>${s.paras.map(p => `<p>${esc(p)}</p>`).join('')}</li>`).join('');
  const storyHtml = clean(r.story).split(/\n{2,}/).filter(Boolean).map(p => `<p>${esc(p.replace(/\n/g, ' '))}</p>`).join('');
  const meta = [st.prep && `Prep: ${st.prep}`, st.cook && `Cook: ${st.cook}`, st.total && `Total: ${st.total}`, st.serves && `Serves: ${st.serves}`].filter(Boolean).join(' · ');
  const rs = mr.reviewStatsCache.get(slug);
  const rating = rs && rs.count ? `<p>Rated ${(Math.round(rs.avg * 10) / 10).toFixed(1)} / 5 (${rs.count} review${rs.count === 1 ? '' : 's'})</p>` : '';

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="google-adsense-account" content="ca-pub-7114534041155445">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><meta name="theme-color" content="#BCC8CC">
<link rel="canonical" href="${url}"><link rel="icon" href="/favicon.jpg" type="image/jpeg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest">
<meta property="og:type" content="article"><meta property="og:site_name" content="${NAME}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${esc(heroUrl)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${esc(heroUrl)}">
${hero ? `<link rel="preload" as="image" href="/${esc(hero)}" fetchpriority="high">` : ''}
<link rel="stylesheet" href="../../assets/css/style.css">
${ld ? `<script type="application/ld+json" id="recipe-jsonld">${ld}</script>` : ''}</head>
<body data-depth="2" data-page="recipe" data-slug="${esc(slug)}"><script src="../../assets/js/shell.js"></script>
<main class="page" id="app"><div class="wrap"><article><h1>${esc(r.title)}</h1>${rating}${meta ? `<p>${esc(meta)}</p>` : ''}<p>${esc(desc)}</p>
${storyHtml}<h2>Ingredients</h2>${ingBlock}<h2>Instructions</h2><ol>${stepHtml}</ol></article></div></main>
<script src="../../assets/js/data.js"></script><script src="../../assets/js/app.js"></script><script src="../../assets/js/privacy-consent.js"></script></body></html>
`;
}

(async () => {
  await loadRatings();
  let n = 0;
  for (const r of recipes) {
    if (!r.slug || !/^[a-z0-9-]+$/.test(r.slug)) { console.warn('skip (bad slug):', r.slug); continue; }
    const dir = path.join(root, 'recipes', r.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), pageFor(r));
    n++;
  }
  console.log(`prerendered ${n} recipe pages`);
})();

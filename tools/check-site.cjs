#!/usr/bin/env node
// Checks that every recipe in data.js will actually work on the live site.
//   node tools/check-site.cjs
// Exit code 1 = at least one ERROR (a recipe page would 404, a photo is missing, a time is unreadable ...).
// WARN lines are worth fixing but do not break anything.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..');
const has = p => fs.existsSync(path.join(root, p));
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(read('assets/js/data.js'), ctx);
const recipes = ctx.window.MIDNIGHT_RECIPES || [];
const sitemap = has('sitemap.xml') ? read('sitemap.xml') : '';
const errors = [], warns = [];
const E = (s, m) => errors.push(`${s}: ${m}`), W = (s, m) => warns.push(`${s}: ${m}`);

const seen = new Set();
for (const r of recipes) {
  const s = r.slug || '(no slug)';
  if (!/^[a-z0-9-]+$/.test(r.slug || '')) E(s, 'slug may only contain a-z, 0-9 and "-" (no capitals, spaces, underscores)');
  if (seen.has(r.slug)) E(s, 'duplicate slug'); seen.add(r.slug);

  const dir = `images/recipes/${r.slug}`;
  if (!has(dir)) E(s, `photo folder ${dir}/ does not exist (folder name must equal the slug)`);
  else {
    const files = fs.readdirSync(path.join(root, dir));
    if (!files.some(f => /^hero\.(jpe?g)$/i.test(f))) E(s, `no hero.jpg in ${dir}/`);
    files.filter(f => /\.(jpe?g)$/i.test(f) && !/^(hero|recipe|step-\d\d-\d\d)\.(jpe?g)$/i.test(f)).forEach(f => W(s, `photo "${f}" does not follow the naming rule (hero.jpg, recipe.jpg, step-NN-MM.jpg) and will not show`));
  }
  if (!has(`recipes/${r.slug}/index.html`)) E(s, `page recipes/${r.slug}/index.html is missing -> the link 404s (the GitHub Action creates it; check the Actions tab, or run: node .github/scripts/prerender-recipes.js)`);
  if (!sitemap.includes(`/recipes/${r.slug}/`)) W(s, 'not in sitemap.xml yet (the Action adds it)');

  const st = r.stats || {};
  for (const k of ['prep', 'cook', 'total', 'chill']) if (st[k] !== undefined && /^\d+$/.test(String(st[k]).trim())) E(s, `stats.${k} "${st[k]}" has no unit - write "${st[k]} mins" (otherwise Google gets no ${k} time)`);

  const refs = [];
  (function walk(o) { if (typeof o === 'string') { if (/^images\/.+\.(jpe?g|png|webp)$/i.test(o)) refs.push(o); } else if (Array.isArray(o)) o.forEach(walk); else if (o && typeof o === 'object') Object.values(o).forEach(walk); })(r);
  refs.filter(p => !has(p)).forEach(p => E(s, `data.js lists ${p} but the file does not exist (check spelling / upper-lower case)`));
}
if (!recipes.length) E('data.js', 'no recipes found');

warns.forEach(w => console.log('WARN  ' + w));
errors.forEach(e => console.log('ERROR ' + e));
console.log(`\nChecked ${recipes.length} recipes: ${errors.length} error(s), ${warns.length} warning(s).`);
process.exit(errors.length ? 1 : 0);

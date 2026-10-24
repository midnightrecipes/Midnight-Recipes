#!/usr/bin/env node
/* MIDNIGHT RECIPES — recipe & photo validator (no dependencies)
 * Usage:  node tools/validate-recipes.cjs [site-root]      (default: current folder)
 * Errors  (exit code 1): things that break the site.
 * Warnings (exit code 0): things that look wrong or will be ignored.
 */
'use strict';
const fs=require('fs'),path=require('path');
const root=path.resolve(process.argv[2]||'.');
const dataPath=path.join(root,'assets/js/data.js');
if(!fs.existsSync(dataPath)){console.error('Cannot find '+dataPath);process.exit(2)}
const raw=fs.readFileSync(dataPath,'utf8');
const win={};
try{new Function('window',raw)(win)}catch(e){console.error('✖ data.js cannot be parsed: '+e.message);process.exit(1)}
const R=win.MIDNIGHT_RECIPES;if(!Array.isArray(R)){console.error('✖ data.js has no MIDNIGHT_RECIPES list');process.exit(1)}
const SOURCES=win.MIDNIGHT_SOURCES||[],COURSES=win.MIDNIGHT_COURSES||[],CUISINES=Object.values(win.MIDNIGHT_CUISINES||{}).flat(),USUALS=win.MIDNIGHT_USUALS_CATEGORIES||[];
const findings=[];const add=(sev,slug,msg)=>findings.push({sev,slug,msg});
const slugs=new Set(R.map(r=>r.slug));
const mins=t=>{const m=String(t||'').match(/^(\d+):(\d+)\s*(AM|PM)$/i);if(!m)return null;let h=Number(m[1])%12;if(/PM/i.test(m[3]))h+=12;return h*60+Number(m[2])};
const dur=s=>{s=String(s||'').toLowerCase().replace(/(\d+)\s*(?:–|—|-|to)\s*\d+/g,'$1').replace(/\+/g,'');const h=s.match(/(\d+)\s*(?:hrs?|hours?)/),m=s.match(/(\d+)\s*(?:mins?|minutes?)/);return (h?60*h[1]:0)+(m?+m[1]:0)};
const LIQ=/\b(milk|cream|water|juice|oil|vinegar|sauce|wine|sake|mirin|stock|broth|extract|syrup)\b/i,NOTLIQ=/(sour cream|cream cheese|cream of tartar|peanut butter|powder|sugar)/i;
const SOLID=/\b(flour|sugar|butter|cocoa|cornstarch|salt|pepper|nutmeg|cinnamon|cloves|ginger|oats|breadcrumbs|chocolate|zest|tartar|yeast)\b/i;
const DENS={'flour':120,'granulated sugar':200,'sugar':200,'brown sugar':220,'unsalted butter':227,'butter':227,'cornstarch':128,'cocoa':86,'salt':288};
const CUPML={cup:240,tbsp:15,tsp:5},CUPFRAC={cup:1,tbsp:1/16,tsp:1/48};
const imgOk=/^(hero(-list)?|recipe|step-(\d\d)-(\d\d))\.(jpe?g|webp)$/i;

// duplicate keys inside a recipe object (valid JS, but the last one silently wins)
(function dupKeys(){const start=raw.indexOf('window.MIDNIGHT_RECIPES');let i=raw.indexOf('[',start),depth=0,st=null,cur=null,keys=null,prev='';
  for(;i<raw.length;i++){const c=raw[i],n=raw[i+1];
    if(st){if(st==='//'){if(c==='\n')st=null}else if(st==='/*'){if(c==='*'&&n==='/'){st=null;i++}}else if(c==='\\')i++;else if(c===st)st=null;continue}
    if(c==='/'&&n==='/'){st='//';i++;continue}if(c==='/'&&n==='*'){st='/*';i++;continue}
    if(c==="'"||c==='"'||c==='`'){st=c;continue}
    if(c==='{'||c==='['){depth++;if(c==='{'&&depth===2)keys=new Set();prev=c;continue}
    if(c==='}'||c===']'){depth--;if(depth===1)keys=null;if(depth===0)break;prev=c;continue}
    if(depth===2&&keys&&(prev==='{'||prev===',')&&/[A-Za-z_$]/.test(c)){const m=/^([A-Za-z_$][\w$]*)\s*:/.exec(raw.slice(i,i+60));if(m){if(keys.has(m[1])){const before=raw.slice(0,i),sl=[...before.matchAll(/slug:\s*'([^']+)'/g)].pop();add('W',sl?sl[1]:'?',`duplicate key "${m[1]}" in the recipe object (the later one wins)`)}keys.add(m[1]);i+=m[0].length-1;prev=':';continue}}
    if(!/\s/.test(c))prev=c}})();
if(/\d\.\d{7,}/.test(raw))add('W','(data.js)','very long decimals found (e.g. 0.3333333333333333) — write fractions like 1/3');

R.forEach(r=>{const id=r.slug||'(no slug)';
  if(!r.slug||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.slug))add('E',id,'slug must be lowercase letters, numbers and hyphens');
  if(R.filter(x=>x.slug===r.slug).length>1)add('E',id,'duplicate slug');
  ['title','cuisine','course','dateAdded'].forEach(k=>{if(!r[k])add('E',id,`missing ${k}`)});
  if(!r.isUsuals&&!r.description)add('E',id,'missing description');
  if(!Array.isArray(r.categories)||!r.categories.length)add('E',id,'missing categories');
  if(!Array.isArray(r.mainIngredients)||!r.mainIngredients.length)add('E',id,'mainIngredients is empty (search and related recipes use it)');
  if(r.ingredientCategories)add('W',id,'ingredientCategories is no longer used — remove it');
  if(!r.isUsuals&&!SOURCES.includes(r.source))add('E',id,`source "${r.source}" is not in MIDNIGHT_SOURCES`);
  if(r.sourceSecondary&&!SOURCES.includes(r.sourceSecondary))add('E',id,`sourceSecondary "${r.sourceSecondary}" is not in MIDNIGHT_SOURCES`);
  [r.cuisine,r.cuisineSecondary].filter(Boolean).forEach(c=>{if(!CUISINES.includes(c))add('E',id,`cuisine "${c}" is not in MIDNIGHT_CUISINES (it will not appear in the menu)`)});
  (r.categories||[]).forEach(c=>{if(!COURSES.includes(c))add('E',id,`category "${c}" is not in MIDNIGHT_COURSES`)});
  if(r.isUsuals&&!USUALS.includes(r.usualsCategory))add('E',id,`usualsCategory "${r.usualsCategory}" is not in MIDNIGHT_USUALS_CATEGORIES`);
  if(r.usesUsual&&!slugs.has(r.usesUsual))add('E',id,`usesUsual "${r.usesUsual}" does not exist`);
  const ings=(r.ingredients||[]);if(!ings.some(i=>i.item))add('E',id,'no ingredients');if(!(r.steps||[]).length)add('E',id,'no steps');
  const groups=new Set(ings.filter(i=>i.group).map(i=>i.group.toLowerCase())),names=ings.filter(i=>i.item).map(i=>i.item.toLowerCase());
  ings.forEach(i=>{if(i.usualSlug&&!slugs.has(i.usualSlug))add('E',id,`usualSlug "${i.usualSlug}" does not exist`)});
  const st=r.stats||{};if(!r.isUsuals){['prep','cook','total','serves'].forEach(k=>{if(!st[k])add('E',id,`stats.${k} is missing`)});if(typeof st.serves==='number')add('W',id,'stats.serves should be text ("4")');
    const sum=dur(st.prep)+dur(st.cook)+dur(st.chill),tot=dur(st.total);if(sum&&tot&&Math.abs(sum-tot)>5)add('W',id,`time check: prep + cook + chill ≈ ${sum} min but total is "${st.total}" (${tot} min)`)}
  const first=(r.steps||[])[0];if(r.timeStamp){if(!/^\d{1,2}:\d{2} (AM|PM)$/.test(r.timeStamp))add('W',id,`timeStamp "${r.timeStamp}" format`);else if(/^0/.test(r.timeStamp))add('W',id,`timeStamp "${r.timeStamp}" has a leading zero`);if(first&&first.clock&&mins(first.clock)!==null&&first.clock!==r.timeStamp)add('W',id,`timeStamp "${r.timeStamp}" differs from step 1 clock "${first.clock}"`)}
  (r.steps||[]).forEach(s=>{const c=s.clock||'';if(c&&!/^(\d{1,2}:\d{2} (AM|PM)|optional|next day|day)$/i.test(c))add('W',id,`step ${s.number}: clock "${c}"`);if(/^0\d:/.test(c))add('W',id,`step ${s.number}: clock "${c}" has a leading zero`);
    const paras=[...(s.paragraphs||[]),s.stepNote||''].map(p=>typeof p==='string'?p:(p&&p.text)||'');
    paras.forEach(t=>{for(const m of t.matchAll(/\{\{qty:([^}]+)\}\}/g)){const ref=m[1].split('::'),nm=ref.pop().toLowerCase(),g=ref[0]&&ref[0].toLowerCase();if(g&&!groups.has(g))add('E',id,`step ${s.number}: group "${ref[0]}" in {{qty:…}} does not exist`);if(!names.some(n=>n===nm||n.includes(nm)||nm.includes(n)))add('E',id,`step ${s.number}: {{qty:${m[1]}}} matches no ingredient`)}
      for(const m of t.matchAll(/\{\{approx:([^}]+)\}\}/g)){if(!names.some(n=>n===m[1].toLowerCase()&&/approx\./i.test(n)))add('E',id,`step ${s.number}: {{approx:${m[1]}}} matches no ingredient with "(approx. N g …)"`)}
      const bare=t.replace(/\{\{[^}]*\}\}/g,'').match(/\b\d+(?:[.\/]\d+)?\s*(?:g|kg|ml|tbsp|tsp|cups?|oz|lb)\b/gi);if(bare)add('W',id,`step ${s.number}: typed amount "${bare.join(', ')}" will not follow Metric/US or the multiplier`)})});
  ings.filter(i=>i.item).forEach(i=>{
    if(i.unit==='g'&&LIQ.test(i.item)&&!NOTLIQ.test(i.item))add('W',id,`"${i.item}" looks like a liquid but is in g`);
    if(i.unit==='ml'&&SOLID.test(i.item)&&!LIQ.test(i.item))add('W',id,`"${i.item}" looks like a solid but is in ml`);
    if(i.imperialUnit&&CUPML[i.imperialUnit]&&i.amount){const per=Object.keys(DENS).filter(k=>i.item.toLowerCase().includes(k)).sort((a,b)=>b.length-a.length)[0];
      if(i.unit==='ml'){const d=(i.imperialAmount*CUPML[i.imperialUnit]-i.amount)/i.amount;if(Math.abs(d)>0.1)add('W',id,`"${i.item}": ${i.amount} ml vs ${i.imperialAmount} ${i.imperialUnit} (${Math.round(d*100)}% apart)`)}
      else if(i.unit==='g'&&per&&!LIQ.test(i.item)){const g=i.imperialAmount*DENS[per]*CUPFRAC[i.imperialUnit],d=(g-i.amount)/i.amount;if(Math.abs(d)>0.15)add('W',id,`"${i.item}": ${i.amount} g vs ${i.imperialAmount} ${i.imperialUnit} ≈ ${Math.round(g)} g (${Math.round(d*100)}% apart)`)}}});
  const body=JSON.stringify(r.steps||[]).toLowerCase();ings.filter(i=>i.item&&(i.amount!==undefined||i.minAmount!==undefined)).forEach(i=>{const w=i.item.toLowerCase().replace(/,.*$/,'').replace(/\(.*?\)/g,'').split(/\s+/).filter(t=>t.length>3&&!/^(finely|thinly|fresh|large|small|melted|cubed|chopped|minced|grated|sliced)$/.test(t));if(w.length&&!w.some(t=>body.includes(t.replace(/s$/,''))))add('W',id,`ingredient "${i.item}" is not mentioned in any step`)});
  if(r.finePrint){const need=['BEST EATEN','MAKE AHEAD','STORAGE','FREEZER','REHEAT'],keys=Object.keys(r.finePrint).map(k=>k.toUpperCase());need.forEach(k=>{if(!keys.includes(k))add('W',id,`finePrint lacks ${k}`)});keys.filter(k=>!need.includes(k)).forEach(k=>add('W',id,`finePrint has an extra key ${k}`))}
  // photos
  const dir=path.join(root,'images/recipes',r.slug||'');const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>f!=='.gitkeep'):[];
  if(!files.some(f=>/^hero\.(jpe?g)$/i.test(f)))add('W',id,'no hero photo yet (images/recipes/'+r.slug+'/hero.jpg) — the card will show a grey placeholder');
  files.forEach(f=>{const full=path.join(dir,f),size=fs.statSync(full).size;
    if(!imgOk.test(f))add('W',id,`photo "${f}" does not follow the naming rule (hero.jpg, recipe.jpg, step-NN-MM.jpg) — it will not show`);
    else{const m=f.match(/^step-(\d\d)-(\d\d)\./i);if(m&&(+m[2]<1||+m[2]>4))add('W',id,`photo "${f}": a step shows at most 4 photos (01–04)`);if(m&&!(r.steps||[]).some(s=>String(s.number).padStart(2,'0')===m[1]))add('W',id,`photo "${f}" belongs to step ${m[1]}, which does not exist`)}
    if(size<2000)add('E',id,`photo "${f}" is only ${size} bytes — corrupt or empty`);else if(size>700*1024)add('W',id,`photo "${f}" is ${Math.round(size/1024)} KB — resize to ≈1600 px / 300 KB for faster pages`)});
  const missing=[],caseOnly=[];(r.steps||[]).forEach(s=>(s.stepImages||[]).forEach(p=>{const full=path.join(root,p);if(!fs.existsSync(full)){const alt=files.find(f=>f.toLowerCase()===path.basename(p).toLowerCase());if(alt)caseOnly.push(path.basename(p)+' → '+alt);else missing.push(path.basename(p))}}));
  if(caseOnly.length)add('W',id,`${caseOnly.length} step image name(s) differ only in letter case from the real file (${caseOnly.slice(0,3).join(', ')}${caseOnly.length>3?', …':''}) — fine on this site, but rename to match`);
  if(missing.length)add('W',id,`${missing.length} step image(s) listed in data.js have no file (${missing.slice(0,3).join(', ')}${missing.length>3?', …':''}) — those photos will not show`);
});
const strayDir=path.join(root,'images');if(fs.existsSync(strayDir))fs.readdirSync(strayDir).forEach(f=>{const full=path.join(strayDir,f);if(fs.statSync(full).isFile()&&!/\.(jpe?g|png|webp|svg|ico|gif)$/i.test(f))add('W','(images)',`stray file "images/${f}" has no image extension`)});
['about/about-me.jpg','about/about-midnight-recipes.jpg'].forEach(f=>{if(!fs.existsSync(path.join(root,'images',f)))add('W','(about)',`images/${f} is missing (the About photo will not show)`)});

const E=findings.filter(f=>f.sev==='E'),W=findings.filter(f=>f.sev==='W');
const show=(label,list,sym)=>{if(!list.length)return;console.log(`\n${label} (${list.length})`);let last='';list.sort((a,b)=>a.slug.localeCompare(b.slug)).forEach(f=>{if(f.slug!==last){console.log('  '+f.slug);last=f.slug}console.log(`    ${sym} ${f.msg}`)})};
console.log(`Checked ${R.length} recipes in ${path.relative(process.cwd(),dataPath)||dataPath}`);
show('ERRORS — fix before publishing',E,'✖');show('WARNINGS — please look',W,'•');
if(!E.length&&!W.length)console.log('\n✔ All clear.');
console.log(`\n${E.length} error(s), ${W.length} warning(s).`);
process.exit(E.length?1:0);

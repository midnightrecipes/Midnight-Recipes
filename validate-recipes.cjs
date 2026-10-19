#!/usr/bin/env node
'use strict';
// Read-only recipe data validation; no dependencies or changes to website code.
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const file=path.resolve(process.argv[2]||path.join(__dirname,'data.js'));
const errors=[],warnings=[];
const report=(severity,slug,message)=> (severity==='ERROR'?errors:warnings).push({slug,message});
let recipes;
try {
 const context={window:{}};
 vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file,timeout:3000});
 recipes=context.window.MIDNIGHT_RECIPES;
 if(!Array.isArray(recipes))throw Error('window.MIDNIGHT_RECIPES must be an array');
} catch(e){console.error('ERROR: Could not load recipe data:',e.message);process.exit(2)}
const seen=new Set();
// Duration ranges use the lower bound; '+' means "at least".
// Examples: 45–50 mins -> 45; 8 hrs+ -> 480 (minimum).
const duration=s=>{
 if(!s)return null;
 const v=String(s).toLowerCase().replace(/,/g,'').trim();
 const normalized=v.replace(/(\d+(?:\.\d+)?)\s*(?:–|—|-)\s*\d+(?:\.\d+)?\s*(?=(?:hours?|hrs?|hr|h|minutes?|mins?|min|m)\b)/g,'$1 ').replace(/(\d+(?:\.\d+)?)\s*\+\s*(?=(?:hours?|hrs?|hr|h|minutes?|mins?|min|m)\b)/g,'$1 ');
 const h=normalized.match(/(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|hr|h)\b/);
 const m=normalized.match(/(\d+(?:\.\d+)?)\s*(?:minutes?|mins?|min|m)\b/);
 if(!h&&!m)return null;
 return Math.round((h?Number(h[1])*60:0)+(m?Number(m[1]):0));
};
const isOpenEnded=s=>typeof s==='string'&&s.includes('+');
const isDate=s=>/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s+'T00:00:00Z'));
for(let i=0;i<recipes.length;i++){
 const r=recipes[i],id=r?.slug||`[index ${i}]`;
 if(!r||typeof r!=='object'){report('ERROR',id,'Recipe is not an object');continue}
 for(const key of ['slug','title','description','dateAdded','heroImage']){
  if(typeof r[key]!=='string'||!r[key].trim())report(key==='description'||key==='heroImage'?'WARNING':'ERROR',id,`Missing ${key}`);
 }
 if(typeof r.slug==='string'){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.slug))report('ERROR',id,'Invalid slug format');
  if(seen.has(r.slug))report('ERROR',id,'Duplicate slug');seen.add(r.slug);
 }
 if(r.dateAdded&&!isDate(r.dateAdded))report('ERROR',id,'Invalid dateAdded (expected YYYY-MM-DD)');
 if(!Array.isArray(r.ingredients)||!r.ingredients.some(x=>x?.item))report('ERROR',id,'No ingredient items');
 if(!Array.isArray(r.steps)||!r.steps.some(x=>Array.isArray(x?.paragraphs)&&x.paragraphs.some(p=>String(p).trim())))report('ERROR',id,'No instruction paragraphs');
 const numbers=new Set();
 for(const s of r.steps||[]){
  if(s.number){if(numbers.has(s.number))report('ERROR',id,`Duplicate step number ${s.number}`);numbers.add(s.number)}
  for(const img of s.stepImages||[])if(typeof img!=='string'||!img.startsWith('images/'))report('WARNING',id,`Unexpected step image path: ${img}`);
 }
 for(const key of ['heroImage','recipeImage'])if(r[key]&&(!r[key].startsWith('images/')||/\.\./.test(r[key])))report('WARNING',id,`Unexpected ${key} path`);
 const stats=r.stats||{};
 for(const key of ['prep','cook','total'])if(!stats[key])report('WARNING',id,`Missing stats.${key}`);
 const prep=duration(stats.prep),cook=duration(stats.cook),chill=duration(stats.chill),total=duration(stats.total);
 for(const key of ['prep','cook','chill','total'])if(stats[key]&&duration(stats[key])===null)report('WARNING',id,`Cannot parse stats.${key}: ${stats[key]}`);
 if(total!==null&&prep!==null&&cook!==null){
  const expected=prep+cook+(chill||0);
  if(total<expected)report('WARNING',id,`Total ${total} min is shorter than the minimum prep + cook + chill (${expected} min); check overlapping steps`);
  if(total===expected&&[stats.prep,stats.cook,stats.chill].some(isOpenEnded)&&!isOpenEnded(stats.total))report('WARNING',id,'Total should carry + because a component duration is open-ended');
 }
}
console.log(`MIDNIGHT RECIPES — ${recipes.length} recipes checked`);
for(const [label,items] of [['ERROR',errors],['WARNING',warnings]]){
 console.log(`\n${label}: ${items.length}`);
 for(const item of items)console.log(`  [${item.slug}] ${item.message}`);
}
console.log(`\n${errors.length?'FAIL':'PASS'} — ${errors.length} errors, ${warnings.length} warnings`);
process.exitCode=errors.length?1:0;

(function(){
'use strict';
const recipes=window.MIDNIGHT_RECIPES||[];
const sources=window.MIDNIGHT_SOURCES||[];
const courses=window.MIDNIGHT_COURSES||[];
const cuisineGroups=window.MIDNIGHT_CUISINES||{};
const ingredients=window.MIDNIGHT_INGREDIENTS||[];
const usualsCategories=window.MIDNIGHT_USUALS_CATEGORIES||[];
const depth=Number(document.body.dataset.depth||0), root=depth?'../':'./';
const page=document.body.dataset.page, app=document.getElementById('app');
const slugify=s=>String(s??'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const hasMeaningfulValue=v=>{if(v===null||v===undefined)return false;const t=String(v).trim().toLowerCase();return t!==''&&t!=='n/a'&&t!=='na';};
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const href=(path,q)=>root+path+(q?('?'+new URLSearchParams(q).toString()):'');
const star=()=>'<svg class="mrstar" aria-hidden="true"><use href="#mrstar"></use></svg>';
const canonicalCourse=r=>r.course||r.meal||'';
const courseValues=r=>Array.isArray(r.categories)?r.categories.filter(Boolean):[canonicalCourse(r)].filter(Boolean);
const courseFilterValue=value=>courses.find(c=>String(c).toLowerCase()===String(value).toLowerCase()||String(c).toLowerCase().replace(/s$/,'')===String(value).toLowerCase().replace(/s$/,''))||value;
const cuisineValues=r=>[r.cuisine,...splitFooterValues(r.footerCuisine)].filter(Boolean);
const courseDisplay=r=>r.courseDisplay||courseValues(r).join(', ');
const ingredientNames=r=>(r.ingredientCategories||[]).concat((r.ingredients||[]).map(x=>x.item||'')).filter(Boolean);
const searchText=r=>[r.title,r.source,r.sourceSecondary,r.cuisine,canonicalCourse(r),r.footerInspiredBy,r.footerCuisine,r.footerCourse,(r.categories||[]).join(' '),r.description,(r.ingredients||[]).map(x=>x.item||x.group||'').join(' '),(r.ingredientCategories||[]).join(' '),r.usualsCategory].join(' ').toLowerCase();
function imageErrorHandler(fallbackClass='',fallbacks=[]){const encoded=JSON.stringify(fallbacks);return `const fs=${encoded};let fi=Number(this.dataset.fallbackIndex||0);if(this.dataset.extTried!=='1'){this.dataset.extTried='1';this.src=this.src.replace(/\.(?:jpe?g)$/i,m=>m.toLowerCase()==='.jpg'?'.jpeg':'.jpg');}else if(fi<fs.length){this.dataset.fallbackIndex=String(fi+1);this.dataset.extTried='0';this.src=fs[fi];}else{const f=this.closest('.photo-frame');if(f)f.outerHTML='<div class=\'ph ${fallbackClass}\'></div>';}`}
function card(r){const src=r.heroImage;const media=src?`<div class="photo-frame"><img class="photo" src="${esc(root+src)}" alt="${esc(r.title)}" onerror="${imageErrorHandler('')}"/></div>`:'<div class="ph"></div>';return `<article class="category-card card"><a href="${href('recipes/recipe.html',{slug:r.slug})}">${media}<h3 class="name">${esc(r.title)}</h3></a></article>`}
function cards(list){return list.length?`<div class="category-grid">${list.map(card).join('')}</div>`:'<p class="empty-state">No recipes here yet</p>'}
function sortedAll(){return recipes.map((r,index)=>({r,index})).sort((a,b)=>String(b.r.dateAdded||'').localeCompare(String(a.r.dateAdded||''))||b.index-a.index).map(x=>x.r)}
function sorted(){return sortedAll().filter(r=>!r.isUsuals)}
function reviewStats(r){try{const arr=JSON.parse(localStorage.getItem('mr-reviews-'+r.slug)||'[]');const ratings=Array.isArray(arr)?arr.map(x=>Number(x?.rating)).filter(x=>Number.isFinite(x)&&x>=1&&x<=5):[];if(!ratings.length)return {avg:0,count:0};return {avg:ratings.reduce((a,b)=>a+b,0)/ratings.length,count:ratings.length}}catch(e){return {avg:0,count:0}}}
function sortRecipes(list,sort='latest'){
  const base=list.map((r,index)=>({r,index}));
  if(sort==='az')return base.sort((a,b)=>a.r.title.localeCompare(b.r.title,undefined,{sensitivity:'base'})||a.index-b.index).map(x=>x.r);
  if(sort==='za')return base.sort((a,b)=>b.r.title.localeCompare(a.r.title,undefined,{sensitivity:'base'})||a.index-b.index).map(x=>x.r);
  if(sort==='popular')return base.map(x=>{const s=reviewStats(x.r);return {...x,avg:s.avg,count:s.count}}).sort((a,b)=>b.avg-a.avg||b.count-a.count||String(b.r.dateAdded||'').localeCompare(String(a.r.dateAdded||''))||b.index-a.index).map(x=>x.r);
  return base.sort((a,b)=>String(b.r.dateAdded||'').localeCompare(String(a.r.dateAdded||''))||b.index-a.index).map(x=>x.r);
}
function filterRecipes(type,value){const v=String(value||'').toLowerCase();if(type==='usuals'){return recipes.filter(r=>r.isUsuals&&(!v||String(r.usualsCategory||'').toLowerCase()===v))}const pool=recipes.filter(r=>!r.isUsuals);if(!v)return pool;return pool.filter(r=>{if(type==='source')return String(r.source||'').toLowerCase()===v;if(type==='course'){const target=String(courseFilterValue(value)).toLowerCase();return courseValues(r).some(x=>String(x).toLowerCase()===target)||splitFooterValues(r.footerCourse).some(x=>String(courseFilterValue(x)).toLowerCase()===target)}if(type==='cuisine')return cuisineValues(r).some(x=>String(x).toLowerCase()===v);if(type==='ingredient')return ingredientNames(r).some(x=>String(x).toLowerCase()===v||String(x).toLowerCase().includes(v));return searchText(r).includes(v)})}
function listSortValue(){const value=new URLSearchParams(location.search).get('sort')||'latest';return ['popular','latest','az','za'].includes(value)?value:'latest'}
function bindListSort(){const select=document.querySelector('[data-sort]');if(!select)return;select.addEventListener('change',()=>{const p=new URLSearchParams(location.search);p.set('sort',select.value);location.href=location.pathname+'?'+p.toString()})}
function sortControl(sort){return `<div class="sort-control" style="display:flex;align-items:center;justify-content:flex-end;gap:8px;margin:0 0 18px;font-size:15px"><label for="recipeSort">Sort:</label><select id="recipeSort" data-sort aria-label="Sort recipes" style="font:inherit;background:transparent;border:1px solid var(--line);padding:6px 9px"><option value="popular"${sort==='popular'?' selected':''}>Popular</option><option value="latest"${sort==='latest'?' selected':''}>Latest</option><option value="az"${sort==='az'?' selected':''}>A–Z</option><option value="za"${sort==='za'?' selected':''}>Z–A</option></select></div>`}
function top(){const latest=sorted().slice(0,4);app.innerHTML=`<div class="wrap"><section class="section"><h2 class="h2">${star()}Midnight Dispatches</h2>${cards(latest)}<p class="viewall"><a href="${href('recipes/index.html')}">View all</a></p></section><section class="section"><h2 class="h2">${star()}Where did the idea come from?</h2><p class="filter-subtitle">Browse recipes by what inspired them.</p><div class="sources">${sources.map(s=>{const r=sorted().find(x=>x.source===s);return `<div class="tile"><a href="${href('pages/source.html',{value:s})}">${r&&r.heroImage?`<div class="photo-frame"><img class="photo" src="${esc(root+r.heroImage)}" alt="${esc(r.title)}" onerror="${imageErrorHandler('sm')}"></div>`:'<div class="ph sm"></div>'}<p class="source-name">${esc(s)}</p></a>${r?`<p class="source-latest"><a href="${href('recipes/recipe.html',{slug:r.slug})}">${esc(r.title)}</a></p>`:'<p class="source-empty">No recipes here yet</p>'}</div>`}).join('')}</div></section><section class="section"><h2 class="h2">${star()}About</h2><div class="about"><div class="about-photo home-about-photo">${window.MIDNIGHT_SITE?.aboutImages?.aboutRecipes?`<img class="photo" src="${esc(root+window.MIDNIGHT_SITE.aboutImages.aboutRecipes)}" alt="MIDNIGHT KITCHEN">`:''}</div><div><h3>Food we find. Recipes we recreate. Stories from our midnight kitchen.</h3><p>Hi, my name is Mitsuka. I cook after dark. This is a collection of recipes inspired by restaurants, travels, memories, traditions, and whatever catches my curiosity late at night.</p><p class="more"><a href="${href('pages/about.html')}">Learn more</a></p></div></div></section></div>`}
function listPage(title,list,sub=''){const sort=listSortValue();app.innerHTML=`<div class="wrap"><section class="section"><h2 class="h2">${star()}${esc(title)}</h2>${sub?`<p class="filter-subtitle">${esc(sub)}</p>`:''}${sortControl(sort)}${cards(sortRecipes(list,sort))}</section></div>`;bindListSort()}
function recipe(){const slug=new URLSearchParams(location.search).get('slug')||recipes[0]?.slug;const r=recipes.find(x=>String(x.slug||'').toLowerCase()===String(slug||'').toLowerCase())||recipes[0];if(!r){app.innerHTML='<div class="wrap"><p class="empty-state">Recipe not found.</p></div>';return}app.innerHTML=recipeHtml(r);bindRecipe(r)}
function photo(src,alt,cls=''){return src?`<div class="photo-frame ${cls}"><img class="photo" src="${esc(root+src)}" alt="${esc(alt)}" onerror="${imageErrorHandler(cls)}"/></div>`:''}
function stepPhoto(src,alt){return src?`<div class="photo-frame step-photo-frame"><img class="photo" src="${esc(root+src)}" alt="${esc(alt)}" onerror="const g=this.closest('.step-photos');if(this.dataset.extTried!=='1'){this.dataset.extTried='1';this.src=this.src.replace(/\.(?:jpe?g)$/i,m=>m.toLowerCase()==='.jpg'?'.jpeg':'.jpg');}else{this.closest('.photo-frame')?.remove();if(g&&!g.querySelector('img'))g.remove();}"></div>`:''}
function stepPhotoMarkup(s,r,i){let list=Array.isArray(s.stepImages)?s.stepImages.filter(Boolean):[];if(!list.length&&Array.isArray(s.stepPhotos))list=s.stepPhotos.filter(Boolean);if(!list.length)return '';const count=Math.min(list.length,4);list=list.slice(0,4);return `<div class="step-photos step-photos-${count}">${list.map((src,n)=>stepPhoto(src,`${r.title} step ${i+1} photo ${n+1}`)).join('')}</div>`}
function categoryLink(type,value){const map={source:'pages/source.html',course:'pages/meal.html',cuisine:'pages/cuisine.html'};return href(map[type],{value})}
function normalizeIngredientFile(value){
  if(!value)return {groups:[],name:'',items:[]};
  if(Array.isArray(value)&&value.some(x=>x&&typeof x==='object'&&!Array.isArray(x)&&('details' in x||'items' in x))){
    const groups=value.map(g=>{const name=g?.name||g?.label||'';const details=g?.details||g?.items||[];const items=Array.isArray(details)?details.map(item=>{if(Array.isArray(item))return [String(item[0]||''),String(item[1]??'')];const label=item?.label||item?.name;const text=item?.text??item?.value??item?.description;return label&&text!=null?[String(label),String(text)]:null}).filter(Boolean).filter(([k])=>!/^\d+$/.test(k.trim())):[];return {name:String(name),items};}).filter(g=>g.name||g.items.length);
    return {groups,name:'',items:[]};
  }
  if(Array.isArray(value)){
    const items=value.map(item=>{if(!item)return null;if(Array.isArray(item)){const label=item[0],text=item[1];if(typeof label==='string'&&label.trim()&&!/^\d+$/.test(label.trim())&&text!=null)return [label,String(text)];return null}if(typeof item==='object'){const label=item.label||item.name;const text=item.text??item.value??item.description;if(typeof label==='string'&&label.trim()&&!/^\d+$/.test(label.trim())&&text!=null)return [label,String(text)];}return null}).filter(Boolean).filter(([k])=>!['ingredient name','ingredient'].includes(k.toLowerCase()));
    return {groups:[],name:'',items};
  }
  const entries=Object.entries(value).filter(([k,v])=>v!=null&&v!==''&&k.toLowerCase()!=='ingredient name');const nameEntry=entries.find(([k])=>k.toLowerCase()==='ingredient');return {groups:[],name:nameEntry?String(nameEntry[1]):'',items:entries.filter(([k])=>k.toLowerCase()!=='ingredient')};
}
function richText(value){
  return esc(String(value??'')).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\n\s*\n/g,'<br><br>').replace(/\n/g,'<br>')
}
function plainRichText(value){
  return esc(String(value??'')).replace(/\*\*([^*]+)\*\*/g,'$1').replace(/\*([^*]+)\*/g,'$1').replace(/\n\s*\n/g,'\n').replace(/\n/g,'<br>')
}
function instructionNumber(value){
  const map={'¼':0.25,'⅓':1/3,'½':0.5,'⅔':2/3,'¾':0.75};
  if(map[value]!==undefined)return map[value];
  if(String(value).includes('/')){const [a,b]=String(value).split('/').map(Number);return b?a/b:NaN}
  return Number(value);
}
function formatInstructionNumber(n){
  const common=[[0.25,'¼'],[1/3,'⅓'],[0.5,'½'],[2/3,'⅔'],[0.75,'¾']];
  const near=common.find(([v])=>Math.abs(n-v)<0.001);
  if(near)return near[1];
  if(Math.abs(n-Math.round(n))<0.001)return String(Math.round(n));
  return String(Math.round(n*100)/100);
}
function scaleInstructionText(value,r,scale,unit){
  if(value&&typeof value==='object'){
    let text=String(value.text??'');
    const amounts=Array.isArray(value.amounts)?value.amounts:[];
    amounts.forEach((a,i)=>{
      const rendered=instructionAmount(a,scale,unit);
      text=text.replace(new RegExp('\\{\\{amount:'+i+'\\}\\}','g'),rendered);
    });
    return plainRichText(text);
  }
  let text=String(value??'').trim().replace(/^(?:[-–—]|\\d+\\.)\\s+/,'');
  const units='g|kg|ml|l|oz|ounces?|lbs?|pounds?|tsp|teaspoons?|tbsp|tablespoons?|cups?|cup|large\\s+eggs?|eggs?';
  const number='(?:\\d+(?:\\.\\d+)?|\\d+\\/\\d+|[¼⅓½⅔¾])';
  const range=`${number}(?:\\s*[–-]\\s*${number})?`;
  const quantityPattern=new RegExp(`(^|[^\\d])(${range})\\s*(\\b(?:${units})\\b)(?=\\b|[,.])`,'gi');
  text=text.replace(quantityPattern,(match,prefix,num,rawUnit)=>prefix+scaleInstructionQuantity(num,rawUnit,scale,unit));
  return plainRichText(text);
}
function scaleInstructionQuantity(raw,rawUnit,scale,mode){
  const parts=String(raw).split(/\s*[–-]\s*/);
  const nums=parts.map(instructionNumber).map(n=>n*scale);
  const u=String(rawUnit||'');
  if(mode==='imperial' && ['g','kg','ml','l','tsp','teaspoon','teaspoons','tbsp','tablespoon','tablespoons','cup','cups'].includes(u.toLowerCase())){
    const rendered=nums.map(n=>{
      const converted=convert(n,u,'imperial');
      return converted.replace(/\s+/g,' ');
    });
    return rendered.join('–');
  }
  if(mode==='metric' && ['oz','ounce','ounces','lb','lbs','pound','pounds','tsp','teaspoon','teaspoons','tbsp','tablespoon','tablespoons','cup','cups'].includes(u.toLowerCase())){
    const rendered=nums.map(n=>convert(n,u,'metric'));
    return rendered.join('–');
  }
  return nums.map(n=>{const label=u.replace(/\beggs\b/i,'egg');return `${formatInstructionNumber(n)} ${n===1?label:u}`}).join('–');
}
function instructionAmount(a,scale,unit){
  if(a&&a.min!==undefined&&a.max!==undefined)return `${scaleInstructionQuantity(String(a.min),a.unit,scale,unit)}–${scaleInstructionQuantity(String(a.max),a.unit,scale,unit)}`;
  if(a&&a.value!==undefined)return scaleInstructionQuantity(String(a.value),a.unit,scale,unit);
  return '';
}
function instructionModeParts(value){
  const raw=String(value??'').trim();
  const m=raw.match(/^\*\*(Midnight Shortcut|Food Processor \(Fastest\)|Quiet Mode \(Silent\))\s*:\*\*\s*(.*)$/i) || raw.match(/^(Midnight Shortcut|Food Processor \(Fastest\)|Quiet Mode \(Silent\))\s*:\s*(.*)$/i);
  if(!m)return null;
  return {label:m[1],body:m[2]};
}
function instructionIsModeTitle(value){return !!instructionModeParts(value);}
function instructionParagraph(value,isNote=false,r=null,scale=1,unit='metric',mode=false){
  const parts=instructionModeParts(value);
  if(parts){
    const body=parts.body?scaleInstructionText(parts.body,r,scale,unit):'';
    return `<p class="instruction-mode"><strong>${esc(parts.label)}:</strong>${body?` ${body}`:''}</p>`;
  }
  const text=scaleInstructionText(value,r,scale,unit);
  return `<p class="${isNote?'step-note':''}${mode?' instruction-mode-body':''}">${text}</p>`;
}
function instructionBlock(paragraphs,r,scale,unit){
  let mode=false;
  return paragraphs.map(p=>{
    const isTitle=instructionIsModeTitle(p);
    const html=instructionParagraph(p,false,r,scale,unit,mode);
    mode=isTitle||mode;
    return html;
  }).join('');
}
function normalizeIngredientText(value){return String(value??'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9%]+/g,' ').replace(/\bfinely crushed\b|\bfinely minced\b|\bchopped\b|\bminced\b|\bcut into 3 4 cm pieces\b|\bto taste\b|\bfor finishing\b|\bfor finish\b/g,'').replace(/\s+/g,' ').trim()}
function ingredientFileKey(value){const n=normalizeIngredientText(value);if(n.includes('graham cracker'))return 'graham crackers';if(n.includes('dark chocolate'))return 'dark chocolate';if(n.includes('espresso powder'))return 'espresso powder';if(n.includes('unsweetened cocoa powder')||n==='cocoa powder')return 'unsweetened cocoa powder';if(n.includes('3 25 milk')||n.includes('3.25 milk'))return '3.25% milk';if(n.includes('fatty ground pork')||n.includes('ground pork'))return 'ground pork';if(n.includes('fresh red chili'))return 'fresh red chili';if(n==='garlic'||n.includes(' garlic'))return 'garlic';if(n.includes('doubanjiang'))return 'doubanjiang';if(n==='apple'||n==='apples')return 'apple';if(n==='whole milk')return 'whole milk';if(n.includes('35% whipping cream')||n.includes('whipping cream'))return '35% whipping cream';return n}
function ingredientFileAnchorMap(r){const map={};normalizeIngredientFile(r.ingredientFile).groups.forEach(g=>{map[ingredientFileKey(g.name)]=g.name});return map}
function ingredientInfoLink(r,item){const key=ingredientFileKey(item);if(!key)return '';const map=ingredientFileAnchorMap(r);const actual=map[key]||Object.entries(map).find(([k])=>key===k||key.includes(k)||k.includes(key))?.[1];if(!actual)return '';return ` <a class=\"ingredient-info\" href=\"#ingredient-file-${slugify(actual)}\" aria-label=\"Ingredient File: ${esc(actual)}\">ⓘ</a>`}
function ingredientFileMarkup(r,ingredientFile){const groups=ingredientFile.groups;return groups.map(g=>`<div class="ingredient-file-group" id="ingredient-file-${slugify(g.name)}"><div class="ingredient-file-name">${esc(g.name)}</div><div class="ingredient-file-details">${g.items.filter(([k,v])=>hasMeaningfulValue(k)&&hasMeaningfulValue(v)).map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${richText(v)}</p>`).join('')}</div></div>`).join('')}
function splitFooterValues(value){return String(value??'').split(/\s*(?:·|,|\/)\s*/).map(x=>x.trim()).filter(Boolean)}
function footerFilterLink(type,value){
  if(!hasMeaningfulValue(value))return '';
  const target=type==='course'?courseFilterValue(value):value;
  const known=type==='source'?sources.includes(value):type==='course'?courses.includes(target):type==='cuisine'?recipes.some(x=>cuisineValues(x).some(v=>String(v).toLowerCase()===String(value).toLowerCase())):false;
  return known?categoryLink(type,target):href('recipes/index.html',{q:value});
}
function footerLinks(type,value){
  const values=splitFooterValues(value);
  return values.map((x,i)=>`<a href="${footerFilterLink(type,x)}">${esc(x)}</a>${i<values.length-1?' · ':''}`).join('');
}
function footerIngredientValues(r){
  if(Array.isArray(r.footerMainIngredients)&&r.footerMainIngredients.length)return r.footerMainIngredients;
  if(Array.isArray(r.mainIngredients)&&r.mainIngredients.length)return r.mainIngredients;
  return Array.isArray(r.ingredientCategories)?r.ingredientCategories.filter(hasMeaningfulValue):[];
}
function recipeHtml(r){
  const ingredientFile=normalizeIngredientFile(r.ingredientFile);
  const file=ingredientFile.items;
  const fileGroups=ingredientFile.groups;
  const isUsual=!!r.isUsuals;
  const scaleOptions=isUsual?['1','2','3']:['0.5','1','2'];
  const foundTitles=recipes.filter(x=>!x.isUsuals&&x.usesUsual===r.slug).map(x=>x.title);
  const foundIn=foundTitles.map(title=>{const found=recipes.find(x=>x.title===title&&!x.isUsuals);return found?`<a href="${href('recipes/recipe.html',{slug:found.slug})}">${esc(title)}</a>`:`<span>${esc(title)}</span>`;}).join('<br>');
  const intro=isUsual?`<section class="usual-intro"><p class="body-copy"><em>${esc(r.description||'')}</em></p>${String(r.usualIntro||'').split(/\n\s*\n/).filter(Boolean).map(x=>`<p class="body-copy">${esc(x)}</p>`).join('')}</section>`:'';
  const statsPan=(isUsual||r.showPan)&&r.stats?.pan?`<br><b>Pan</b>: ${esc(r.stats.pan)}`:'';const statsChill=r.showChill&&r.stats?.chill?`<br><b>Chill</b>: ${esc(r.stats.chill)}`:'';
  return `<div class="recipe-card"><div class="rtop"><div><h1 class="rtitle">${esc(r.title)}</h1><div class="meta-line"><span>${r.timeStamp?`📍 ${esc(r.timeStamp)}<span> · TORONTO</span>`:'The Usuals'}</span></div><div class="tags">${(r.tags||[]).map(t=>`<a href="${href('recipes/index.html',{q:t})}">#${esc(t)}</a>`).join('')}</div><p class="facts">${isUsual?`<b>The Usuals</b>: <a href="${href('pages/usuals.html',{category:r.usualsCategory})}">${esc(r.usualsCategory)}</a>`:`<b>Source</b>: <a href="${categoryLink('source',r.source)}">${esc(r.source)}</a>${r.sourceSecondary?` / <a href="${categoryLink('source',r.sourceSecondary)}">${esc(r.sourceSecondary)}</a>`:''}${hasMeaningfulValue(r.original)?`<br><b>Original</b>: ${esc(r.original)}`:''}${r.dish?`<br><b>Dish</b>: ${esc(r.dish)}`:''}<br><b>Cuisine</b>: <a href="${categoryLink('cuisine',r.cuisine)}">${esc(r.cuisine)}</a><br><b>Course</b>: <a href="${categoryLink('course',canonicalCourse(r))}">${esc(courseDisplay(r))}</a>`}</p><div class="recipe-jump-top"><button class="btn" data-jump="the-recipe">Jump To Recipe</button></div></div>${photo(r.heroImage,r.title)}</div>${intro}${!isUsual&&r.story?`<section><h2 class="h3">THE STORY</h2><p class="body-copy">${richText(r.story)}</p></section>`:''}${(ingredientFile.name||file.length||fileGroups.length)?`<section id="ingredient-file-section"><h2 class="h3">INGREDIENT FILE</h2><div class="ingredient-file">${ingredientFileMarkup(r,ingredientFile)}${ingredientFile.name?`<div class="ingredient-file-name">${esc(ingredientFile.name)}</div>`:''}${file.length?`<div class="ingredient-file-details">${file.map(([k,v])=>`<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join('')}</div>`:''}</div></section>`:''}<div class="recipe-practical-box"><section id="the-recipe"><h2 class="h3">THE RECIPE</h2><div class="recipe-inner"><div>${r.recipeImage?photo(r.recipeImage,r.title):''}<h3 class="rname">${esc(r.recipeTitle||r.title)}</h3><p class="stats"><b>Prep</b>: ${esc(r.stats?.prep||'—')} <b>Cook</b>: ${esc(r.stats?.cook||'—')}<br><b>Total</b>: ${esc(r.stats?.total||'—')}${statsChill}<br><b>Serves</b>: ${esc(r.stats?.serves||'—')}${statsPan}<br><b>Quiet level</b>: ${esc(r.stats?.quest||'—')}</p><div class="recipe-actions recipe-action-row"><button class="btn" id="cookOpen" aria-pressed="false">Cook Mode</button><button class="btn" id="shareRecipe">Share</button><button class="btn" id="printRecipe">Print</button></div><h4 class="block-title" style="margin-top:34px">INGREDIENTS</h4><div class="toggle-row" id="unitToggle"><button data-unit="metric" aria-pressed="true">Metric</button><button data-unit="imperial" aria-pressed="false">US</button></div><div class="toggle-row small" id="scaleToggle">${scaleOptions.map(v=>`<button data-scale="${v}"${v==='1'?` aria-pressed="true"`:''}>${v==='1'?'×1':`×${v}`}</button>`).join('')}</div><ul class="ing" id="ingredientsList"></ul>${fileGroups.length?`<p class="ingredient-file-guide">ⓘ <a href="#ingredient-file-section">Click for substitutions &amp; ingredient tips</a></p>`:''}</div><div><h4 class="block-title">INSTRUCTIONS</h4>${(r.steps||[]).map((s,i)=>{const label=s.number&&s.title?`${s.number} — ${s.title}`:(s.label||'');const paragraphs=Array.isArray(s.paragraphs)?s.paragraphs:(s.text||'').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);return `<div class="step"><div class="step-head"><span>${esc(label)}</span><span>${esc(s.clock||'')}</span></div><div class="step-copy">${instructionBlock(paragraphs,r,window.__recipeScale||1,window.__recipeUnit||'metric')}${s.stepNote?instructionParagraph(s.stepNote,true,r,window.__recipeScale||1,window.__recipeUnit||'metric'):''}</div>${stepPhotoMarkup(s,r,i)}</div>`}).join('')}</div></div></section></div>${r.notes?.length?`<section><h2 class="h3">MIDNIGHT NOTES</h2><p class="note-sub">How I made it work in my kitchen.</p><div class="notes-list">${r.notes.map(n=>`<div class="note-item"><div class="note-title"><b>${esc(n[0])}</b></div><div class="note-body">${plainRichText(n[1])}</div></div>`).join('')}</div></section>`:''}${isUsual&&foundTitles.length?`<section class="found-in"><h2 class="h3">FOUND IN</h2><p class="note-sub">${esc(r.foundInIntro||'Recipes that use this usual...')}</p><div class="body-copy found-in-list">${foundIn}</div></section>`:''}${r.finePrint?`<section><h2 class="h3">THE FINE PRINT</h2><p class="note-sub">Tonight or tomorrow?</p><p class="body-copy">${Object.entries(r.finePrint).filter(([k,v])=>hasMeaningfulValue(k)&&hasMeaningfulValue(v)).map(([k,v])=>`<b>${esc(k)}</b>: ${richText(v)}<br>`).join('')}</p></section>`:''}<footer class="recipe-footer"><p><b>Inspired by</b>: ${r.footerInspiredBy?footerLinks('source',r.footerInspiredBy):(isUsual?`<a href="${href('pages/usuals.html',{category:r.usualsCategory})}">${esc(r.usualsCategory)}</a>`:footerLinks('source',r.source))}</p><p><b>Cuisine</b>: ${footerLinks('cuisine',r.footerCuisine||r.cuisine)}</p><p><b>Course</b>: ${footerLinks('course',r.footerCourse||courseDisplay(r))}</p><p><b>Main ingredients</b>: ${footerIngredientValues(r).map((x,i)=>`<a href="${href('recipes/index.html',{q:x})}">${esc(x)}</a>${i<footerIngredientValues(r).length-1?' · ':''}`).join('')}</p>${r.footerRating?`<p class="footer-rating">${esc(r.footerRating)}</p>`:''}<div class="review-form"><h4 class="block-title">How did you like it?</h4><div class="star-picker" id="starPicker" aria-label="Choose a rating">${[1,2,3,4,5].map(n=>`<button type="button" data-star="${n}" aria-label="${n} stars" aria-pressed="false">☆</button>`).join('')}</div><input id="reviewName" maxlength="80" placeholder="Name (optional)"><textarea id="reviewComment" maxlength="1000" placeholder="Comment (optional)"></textarea><button class="btn" id="submitReview">Submit</button><p class="review-status" id="reviewStatus">Reviews are saved on this device only until a shared backend is connected.</p><div id="reviewList" class="review-list"></div></div></footer></div>`
}
function format(n,u){
  if(!u)return String(Math.round(n*100)/100);
  let v=n;
  if(['g','ml'].includes(String(u).toLowerCase()))v=Math.round(n);
  else v=Math.round(n*100)/100;
  return `${v} ${u}`
}
function formatQuantity(n,u){
  if(!u)return String(Math.round(n*100)/100);
  const eps=0.001;
  const common=[[0.25,'¼'],[1/3,'⅓'],[0.5,'½'],[2/3,'⅔'],[0.75,'¾']];
  const near=common.find(([v])=>Math.abs(n-v)<eps);
  if(near)return `${near[1]} ${u}`;
  if(Math.abs(n-Math.round(n))<eps)return `${Math.round(n)} ${u}`;
  return `${Math.round(n*100)/100} ${u}`
}
function convert(amount,unit,mode){
  const u=String(unit||'').toLowerCase();
  if(!u)return format(amount,'');
  if(mode==='metric'){
    if(['g','kg','ml','l'].includes(u))return format(amount,unit);
    if(['oz','ounce','ounces'].includes(u))return format(amount*28.3495,'g');
    if(['lb','lbs','pound','pounds'].includes(u))return format(amount*453.592,'g');
    if(['tsp','teaspoon','teaspoons'].includes(u))return format(amount*4.92892,'ml');
    if(['tbsp','tablespoon','tablespoons'].includes(u))return format(amount*14.7868,'ml');
    if(['c','cup','cups'].includes(u))return format(amount*236.588,'ml');
    if(['fl oz','floz','fluid ounce','fluid ounces'].includes(u))return format(amount*29.5735,'ml');
    if(u==='°f'||u==='fahrenheit')return `${Math.round((amount-32)*5/9)}°C`;
    return format(amount,unit)
  }
  if(u==='g')return format(amount/28.3495,'oz');
  if(u==='kg')return format(amount*2.20462,'lb');
  if(u==='ml')return volume(amount);
  if(u==='l')return volume(amount*1000);
  if(['c','cup','cups'].includes(u))return format(amount*8,'fl oz');
  if(['tbsp','tablespoon','tablespoons'].includes(u))return format(amount,'tbsp');
  if(['tsp','teaspoon','teaspoons'].includes(u))return format(amount,'tsp');
  if(u==='°c'||u==='celsius')return `${Math.round(amount*9/5+32)}°F`;
  if(u==='°f'||u==='fahrenheit')return `${Math.round((amount-32)*5/9)}°C`;
  return format(amount,unit)
}
function volume(ml){
  const cups=ml/236.588;
  if(cups>=.25&&Math.abs(cups-Math.round(cups))<.06)return `${Math.round(cups)} cup${Math.round(cups)===1?'':'s'}`;
  const tbsp=ml/14.7868;
  if(Math.abs(tbsp-Math.round(tbsp))<.08)return `${Math.round(tbsp)} tbsp`;
  const tsp=ml/4.92892;
  const common=[[0.25,'¼'],[1/3,'⅓'],[0.5,'½'],[2/3,'⅔'],[0.75,'¾']];
  const near=common.find(([v])=>Math.abs(tsp-v)<.03);
  if(near)return `${near[1]} tsp`;
  if(tsp>=.8&&tsp<3&&Math.abs(tsp-Math.round(tsp))<.08)return `${Math.round(tsp)} tsp`;
  const oz=ml/29.5735;
  return oz<0.1?'< 0.1 fl oz':`${Math.round(oz*10)/10} fl oz`
}
function renderIngredients(r,scale=1,unit='metric'){
  const list=document.getElementById('ingredientsList');
  if(!list)return;
  list.innerHTML=(r.ingredients||[]).map(x=>{
    if(typeof x==='string')return `<li><input type="checkbox"><span>${esc(x)}</span></li>`;
    if(x.group)return `<li><span class="group"><b>${esc(x.group)}</b>${x.usualSlug?`<span class="usual-reference">One of our usuals: <a href="${href('recipes/recipe.html',{slug:x.usualSlug})}">${esc(x.usualLabel||x.usualSlug)}</a></span>`:''}</span></li>`;
    const hasRange=x.minAmount!==undefined&&x.maxAmount!==undefined;
    const hasAmount=x.amount!==undefined&&x.amount!==null&&x.amount!=='';
    let v='';
    if(hasRange){
      const min=Number(x.minAmount)*scale,max=Number(x.maxAmount)*scale;
      if(unit==='imperial'){
        if(x.imperialMinAmount!==undefined&&x.imperialMaxAmount!==undefined){
          v=`${formatQuantity(Number(x.imperialMinAmount)*scale,x.imperialMinUnit||x.unit)}–${formatQuantity(Number(x.imperialMaxAmount)*scale,x.imperialMaxUnit||x.unit)}`;
        }else{
          v=`${convert(min,x.unit,'imperial')}–${convert(max,x.unit,'imperial')}`;
        }
      }else{
        v=`${formatQuantity(min,x.unit)}–${formatQuantity(max,x.unit)}`;
      }
    }else if(hasAmount){
      if(unit==='imperial'&&x.imperialAmount!==undefined&&x.imperialAmount!==null&&x.imperialAmount!=='')v=formatQuantity(Number(x.imperialAmount)*scale,x.imperialUnit);
      else v=convert(Number(x.amount)*scale,x.unit,unit);
    }
    const item=String(x.item??'').trim();
    return `<li><input type="checkbox"><span>${v?`<strong class="ingredient-quantity">${esc(v)}</strong> `:''}${esc(item)}${ingredientInfoLink(r,item)}</span></li>`
  }).join('')
}
function renderInstructionSteps(r,scale,unit){document.querySelectorAll('.step').forEach((stepEl,i)=>{const s=r.steps?.[i];if(!s)return;const paragraphs=Array.isArray(s.paragraphs)?s.paragraphs:(s.text||'').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);const copy=stepEl.querySelector('.step-copy');if(copy)copy.innerHTML=paragraphs.map(p=>instructionParagraph(p,false,r,scale,unit)).join('')+(s.stepNote?instructionParagraph(s.stepNote,true,r,scale,unit):'');});}
function bindRecipe(r){let scale=1,unit='metric';window.__recipeScale=scale;window.__recipeUnit=unit;renderIngredients(r,scale,unit);renderInstructionSteps(r,scale,unit);document.querySelectorAll('#unitToggle button').forEach(b=>b.onclick=()=>{unit=b.dataset.unit;window.__recipeUnit=unit;document.querySelectorAll('#unitToggle button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderIngredients(r,scale,unit);renderInstructionSteps(r,scale,unit)});document.querySelectorAll('#scaleToggle button').forEach(b=>b.onclick=()=>{scale=Number(b.dataset.scale);window.__recipeScale=scale;document.querySelectorAll('#scaleToggle button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderIngredients(r,scale,unit);renderInstructionSteps(r,scale,unit)});document.querySelector('[data-jump]')?.addEventListener('click',()=>document.getElementById('the-recipe')?.scrollIntoView({behavior:'smooth'}));document.getElementById('shareRecipe')?.addEventListener('click',async()=>{const data={title:r.title,url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);alert('Recipe link copied.')}}catch(e){}});document.getElementById('printRecipe')?.addEventListener('click',()=>window.print());bindReviews(r);bindCook();}
function bindReviews(r){let rating=0;document.querySelectorAll('[data-star]').forEach(b=>b.onclick=()=>{rating=Number(b.dataset.star);document.querySelectorAll('[data-star]').forEach(x=>{const on=Number(x.dataset.star)<=rating;x.setAttribute('aria-pressed',String(on));x.textContent=on?'★':'☆'})});document.getElementById('submitReview')?.addEventListener('click',()=>{if(!rating){document.getElementById('reviewStatus').textContent='Please choose a star rating.';return}const key='mr-reviews-'+r.slug;const arr=JSON.parse(localStorage.getItem(key)||'[]');arr.push({rating,name:document.getElementById('reviewName').value.trim(),comment:document.getElementById('reviewComment').value.trim(),date:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(arr));document.getElementById('reviewName').value='';document.getElementById('reviewComment').value='';rating=0;document.querySelectorAll('[data-star]').forEach(x=>{x.setAttribute('aria-pressed','false');x.textContent='☆'});showReviews(r);document.getElementById('reviewStatus').textContent='Saved on this device only.'});showReviews(r)}
function showReviews(r){const box=document.getElementById('reviewList');if(!box)return;const arr=JSON.parse(localStorage.getItem('mr-reviews-'+r.slug)||'[]');box.innerHTML=arr.map(x=>`<div class="review-item"><div class="review-stars">${'★'.repeat(x.rating)}${'☆'.repeat(5-x.rating)}</div>${x.name?`<b>${esc(x.name)}</b>`:''}${x.comment?`<p>${esc(x.comment)}</p>`:''}</div>`).join('')}
let wakeLock=null;async function setWakeLock(on){if(!on){if(wakeLock){try{await wakeLock.release()}catch(e){}wakeLock=null}return}if(!('wakeLock' in navigator))return;try{wakeLock=await navigator.wakeLock.request('screen')}catch(e){wakeLock=null}}
function bindCook(){const b=document.getElementById('cookOpen');if(!b)return;const update=()=>{b.textContent=b.getAttribute('aria-pressed')==='true'?'NO SLEEP':'Cook mode';};b.onclick=async()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(on));await setWakeLock(on);update()};document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&b.getAttribute('aria-pressed')==='true')setWakeLock(true)});update()}
function about(){const imgs=window.MIDNIGHT_SITE?.aboutImages||{};const aboutImg=(src,alt)=>src?`<div class="about-photo"><img class="photo" src="${esc(root+src)}" alt="${esc(alt)}" onerror="this.closest('.about-photo').remove()"></div>`:'';app.innerHTML=`<div class="wrap"><h2 class="h2">${star()}About</h2><section><h3 class="h3">ABOUT ME</h3>${aboutImg(imgs.aboutMe,'About me')}<p class="body-copy">Hi, my name is Mitsuka! I cook after dark.</p><p class="body-copy">I love cooking and trying new food because I believe you can learn about a place — its traditions, history, and culture — through what people eat.</p><p class="body-copy">Food is a love language — a simple way of showing someone that you care. Cooking is how you speak that language.</p></section><section class="about-recipes-section"><h3 class="h3">ABOUT MIDNIGHT RECIPES</h3>${aboutImg(imgs.aboutRecipes,'About MIDNIGHT RECIPES')}<p class="body-copy">There's something about cooking at midnight.</p><p class="body-copy">When the day is finally over and I have a quiet moment to myself, I often find myself drawn to the kitchen. Midnight feels like a special time — the world slows down, and the kitchen becomes a calm, private space.</p><p class="body-copy">I find food that makes me curious, recreate it in my kitchen, and share the recipe and the story behind it. This website is a collection of those discoveries — from restaurants, movies, books, grocery stores, travels, family recipes, traditions, memories, and anywhere else good food can be found.</p><p class="body-copy">Some recipes include an Ingredient File — a quick guide to interesting or unfamiliar ingredients, with practical information such as where to find them and what to use when you can't. You'll also find Midnight Notes and The Fine Print for practical kitchen details.</p></section></div>`}
function contact(){app.innerHTML=`<div class="wrap"><section class="section"><h2 class="h2">${star()}Contact</h2><p class="body-copy">For recipe questions, corrections, collaborations, or just to say hello:</p><p class="body-copy"><a href="mailto:from.midnightkitchen@gmail.com">from.midnightkitchen@gmail.com</a></p></section></div>`}
function usuals(){const q=new URLSearchParams(location.search).get('category')||'';if(q){listPage(`The Usuals · ${q}`,filterRecipes('usuals',q),`Recipes in ${q}.`);return}app.innerHTML=`<div class="wrap"><h2 class="h2">${star()}The Usuals</h2><p class="body-copy">The sauces, bases, toppings & little things we keep coming back to.</p><p class="body-copy">The things that quietly show up again and again in our kitchen. Recipes within recipes — the sauces, crusts, bases, and little extras that make everything else easier.</p><section class="section"><div class="usuals-categories">${usualsCategories.map(c=>`<a class="usuals-category" href="${href('pages/usuals.html',{category:c})}"><span>${esc(c)}</span></a>`).join('')}</div></section></div>`}
function usual(){usuals()}
function activeCuisineTree(){const out={};Object.entries(cuisineGroups).forEach(([group,vals])=>{const present=vals.filter(v=>recipes.some(r=>String(r.cuisine||'').toLowerCase()===v.toLowerCase()));if(present.length)out[group]=present});return out}
function activeIngredients(){return ingredients.filter(v=>recipes.some(r=>ingredientNames(r).some(x=>String(x).toLowerCase()===v.toLowerCase()||String(x).toLowerCase().includes(v.toLowerCase()))))}
function setupMenu(){const src=document.getElementById('src'),cui=document.getElementById('cui'),course=document.getElementById('course'),ing=document.getElementById('ing');if(src)src.innerHTML=sources.map(v=>`<a href="${href('pages/source.html',{value:v})}">${esc(v)}</a>`).join('');if(course)course.innerHTML=courses.map(v=>`<a href="${href('pages/meal.html',{value:v})}">${esc(v)}</a>`).join('');if(ing)ing.innerHTML=activeIngredients().map(v=>`<a href="${href('recipes/index.html',{q:v})}">${esc(v)}</a>`).join('');if(cui)cui.innerHTML=Object.entries(activeCuisineTree()).map(([group,vals])=>`<div class="menu-group"><button class="menu-group-title acc" data-acc="cuisine-${esc(group).replace(/[^a-z0-9]+/gi,'-')}">${esc(group)}</button><div class="sub menu-group-sub" id="cuisine-${esc(group).replace(/[^a-z0-9]+/gi,'-')}">${vals.map(v=>`<a href="${href('pages/cuisine.html',{value:v})}">${esc(v)}</a>`).join('')}</div></div>`).join('');document.querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{const s=document.getElementById(b.dataset.acc);if(!s)return;const open=s.classList.toggle('open');b.setAttribute('aria-expanded',String(open))});document.querySelectorAll('[data-go="all"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();location.href=href('recipes/index.html')}));document.querySelector('[data-recipes-toggle]')?.addEventListener('click',e=>{const s=document.getElementById('recipesSub');const open=s.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))})}
function setupOverlay(){const menu=document.getElementById('menuOverlay'),search=document.getElementById('searchOverlay');document.getElementById('menuBtn').onclick=()=>{menu.dataset.open='true'};document.getElementById('searchBtn').onclick=()=>{const open=search.dataset.open==='true';search.dataset.open=String(!open);const btn=document.getElementById('searchBtn');btn.setAttribute('aria-label',open?'Open search':'Close search');if(!open)document.getElementById('searchInput').focus()};[menu,search].forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.dataset.open='false'}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.dataset.open='false';search.dataset.open='false'}});document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{const g=a.dataset.go;if(!['home','all','usuals','about','contact'].includes(g))return;e.preventDefault();const target={home:'index.html',all:'recipes/index.html',usuals:'pages/usuals.html',about:'pages/about.html',contact:'pages/contact.html'}[g];location.href=href(target)}));document.getElementById('searchInput').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();const hits=q?recipes.filter(r=>!r.isUsuals&&searchText(r).includes(q)):[];document.getElementById('searchResults').innerHTML=q?cards(hits):''})}
function category(){const p=new URLSearchParams(location.search),v=p.get('value')||'';if(page==='source')listPage(v||'By Source',filterRecipes('source',v));if(page==='cuisine')listPage(v||'By Cuisine',filterRecipes('cuisine',v));if(page==='meal')listPage(v||'By Course',filterRecipes('course',v))}
function all(){const q=new URLSearchParams(location.search).get('q')||'';listPage(q?`Recipes: ${q}`:'View All',q?filterRecipes('search',q):recipes.filter(r=>!r.isUsuals),q?'':'All recipes, newest first.')}
function init(){setupMenu();setupOverlay();if(page==='home')top();else if(page==='all')all();else if(page==='latest')listPage('Latest Recipes',recipes.filter(r=>!r.isUsuals));else if(page==='recipe')recipe();else if(['source','cuisine','meal'].includes(page))category();else if(page==='about')about();else if(page==='contact')contact();else if(page==='usuals')usuals();else if(page==='usual')usual()}
init();
})();

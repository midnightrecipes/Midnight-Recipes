/* MIDNIGHT RECIPES — shared site script */

function buildHeader(root) {
  root = root || "";
  return `
  <header class="site-header">
    <div class="bar">
      <a class="logo" href="${root}index.html" aria-label="MIDNIGHT RECIPES home">MIDNIGHT RECIPES</a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">&#9776;</button>
      <nav class="primary" id="primaryNav" aria-label="Primary navigation">
        <div class="has-menu" id="recipesMenu">
          <button type="button" aria-haspopup="true" aria-expanded="false">Recipes</button>
          <div class="dropdown">
            <a href="${root}recipes/index.html">View All</a>
            <a href="${root}recipes/by-cuisine.html">By Cuisine</a>
            <a href="${root}recipes/by-meal.html">By Meal</a>
            <a href="${root}recipes/by-source.html">By Source</a>
            <a href="${root}recipes/the-usuals.html">The Usuals</a>
          </div>
        </div>
        <a href="${root}about.html">About</a>
        <a href="${root}contact.html">Contact</a>
        <form class="search-form" action="${root}recipes/search.html" method="get" role="search">
          <label class="sr-only" for="siteSearch">Search recipes</label>
          <input id="siteSearch" name="q" type="search" placeholder="Search" autocomplete="off">
        </form>
      </nav>
    </div>
  </header>`;
}

function buildFooter(root) {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <span>&copy; MIDNIGHT RECIPES</span>
      <span><a href="mailto:from.midnightkitchen@gmail.com">from.midnightkitchen@gmail.com</a></span>
    </div>
  </footer>`;
}

function mountChrome(root) {
  document.getElementById("site-header").innerHTML = buildHeader(root || "");
  document.getElementById("site-footer").innerHTML = buildFooter(root || "");

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  const menu = document.getElementById("recipesMenu");
  const menuButton = menu.querySelector("button");
  menuButton.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width:760px)").matches) {
      e.preventDefault();
      const open = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    }
  });
}

function qs(param) { return new URLSearchParams(window.location.search).get(param); }
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}
function assetPath(root, path) {
  if (!path) return "";
  if (/^(https?:|data:|\/)/.test(path)) return path;
  return (root || "") + path;
}
function imageHtml(path, alt, root, className="") {
  if (!path) return `<div class="ph" aria-hidden="true"></div>`;
  return `<div class="ph ${className}"><img src="${escapeHtml(assetPath(root, path))}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.parentElement.classList.add('image-missing'); this.remove();"></div>`;
}
function cardImage(recipe) { return recipe.cardImage || recipe.heroImage || ""; }
function recipeCard(recipe, root) {
  root = root || "";
  return `
  <a class="card" href="${root}recipes/recipe.html?slug=${encodeURIComponent(recipe.slug)}">
    ${imageHtml(cardImage(recipe), recipe.title, root)}
    <p class="name">${escapeHtml(recipe.title)}</p>
    <p class="meta">${escapeHtml(recipe.source)}</p>
  </a>`;
}
function latestFirst(list) { return [...list].sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded)); }

function allRecipeSearchText(recipe) {
  const usualTitles = (recipe.theUsuals || []).map(slug => {
    const u = typeof USUALS !== "undefined" ? USUALS.find(x => x.slug === slug) : null;
    return u ? u.title : slug;
  });
  return [recipe.title, recipe.source, recipe.cuisine, recipe.meal, recipe.dish, ...(recipe.tags || []), ...usualTitles].join(" ").toLowerCase();
}
function searchRecipes(query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return latestFirst(RECIPES);
  return latestFirst(RECIPES.filter(r => allRecipeSearchText(r).includes(q)));
}

/* Recipe quantity scaling. The original text remains in data.js; the display amount is recalculated. */
function parseAmount(amount) {
  const s = String(amount || "").trim();
  const m = s.match(/^([0-9]+(?:\.[0-9]+)?|[¼½¾⅓⅔⅛⅜⅝⅞]|\d+\s+[¼½¾⅓⅔⅛⅜⅝⅞])\s*(.*)$/);
  if (!m) return null;
  const map = {"¼":.25,"½":.5,"¾":.75,"⅓":1/3,"⅔":2/3,"⅛":.125,"⅜":.375,"⅝":.625,"⅞":.875};
  const raw=m[1];
  let n;
  if (/\s/.test(raw)) { const [a,b]=raw.split(/\s+/); n=Number(a)+(map[b]||0); }
  else n=map[raw] ?? Number(raw);
  return Number.isFinite(n) ? {value:n, unit:m[2]} : null;
}
function formatNumber(n) {
  const common = [[1/8,"⅛"],[1/4,"¼"],[1/3,"⅓"],[3/8,"⅜"],[1/2,"½"],[5/8,"⅝"],[2/3,"⅔"],[3/4,"¾"],[7/8,"⅞"]];
  for (const [v,s] of common) if (Math.abs(n-v)<0.03) return s;
  if (Math.abs(n-Math.round(n))<0.001) return String(Math.round(n));
  return String(Math.round(n*10)/10).replace(/\.0$/,'');
}
function scaledAmount(amount, factor) {
  const parsed=parseAmount(amount);
  if (!parsed) return amount;
  return `${formatNumber(parsed.value*factor)}${parsed.unit ? " " + parsed.unit : ""}`;
}

const CONVERSIONS = [
  ["ml", "cup", 236.588], ["ml", "tbsp", 14.787], ["ml", "tsp", 4.929],
  ["l", "qt", 0.946353], ["g", "oz", 28.3495], ["kg", "lb", 0.453592]
];
function convertAmountText(text, system) {
  const parsed=parseAmount(text);
  if (!parsed) return text;
  const unit=parsed.unit.toLowerCase();
  if (system === "imperial") {
    if (unit === "g") return `${formatNumber(parsed.value/28.3495)} oz`;
    if (unit === "kg") return `${formatNumber(parsed.value/0.453592)} lb`;
    if (unit === "ml") return `${formatNumber(parsed.value/236.588)} cup`;
    if (unit === "l") return `${formatNumber(parsed.value/0.946353)} qt`;
  } else {
    if (unit === "oz") return `${formatNumber(parsed.value*28.3495)} g`;
    if (unit === "lb" || unit === "lbs") return `${formatNumber(parsed.value*0.453592)} kg`;
    if (unit === "cup" || unit === "cups") return `${formatNumber(parsed.value*236.588)} ml`;
    if (unit === "qt" || unit === "quarts") return `${formatNumber(parsed.value*0.946353)} l`;
  }
  return text;
}
function convertTemperature(text, system) {
  return String(text || "").replace(/(-?\d+(?:\.\d+)?)\s*°?([CF])/gi, (_,n,u) => {
    const value=Number(n), upper=u.toUpperCase();
    if (system === "imperial" && upper === "C") return `${Math.round(value*9/5+32)}°F`;
    if (system === "metric" && upper === "F") return `${Math.round((value-32)*5/9)}°C`;
    return `${n}°${upper}`;
  });
}

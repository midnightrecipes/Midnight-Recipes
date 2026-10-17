# MIDNIGHT RECIPES

**Food we find. Recipes we recreate. Stories from our midnight kitchen.**

A static recipe website hosted on GitHub Pages at **https://midnightrecipes.com/**. Recipes and their metadata are maintained in one JavaScript data source; page layouts, search, category pages, and recipe interactions are rendered by shared scripts.

## Project structure

- `assets/js/data.js` — recipe records, categories, and site configuration.
- `assets/js/app.js` — page rendering, recipe controls, search, favorites, metadata, and reviews.
- `assets/js/shell.js` — shared site header, navigation, and search shell.
- `assets/css/style.css` — visual styles and responsive layout.
- `images/recipes/<slug>/` — recipe photos.
- `assets/js/image-manifest.json` — generated image manifest, when available.
- `recipes/recipe.html?slug=<slug>` — individual recipe pages.
- `pages/` — About, Contact, category, The Usuals, and Favorites pages.

## Adding a recipe

Add a recipe object to `assets/js/data.js`. The key fields include `slug`, `title`, `source`, `cuisine`, `course`, `categories`, `ingredientCategories`, `dateAdded`, `timeStamp`, `ingredients`, `ingredientFile`, `steps`, and optional photo paths. Additional fields include `story`, `description`, `stats`, `notes`, `finePrint`, and `usesUsual`.

Recipe listings and category pages derive their content from this shared data. `dateAdded` controls latest-first ordering. The Usuals are separate recipes identified with `isUsuals` and `usualsCategory`.

### Ingredients and instructions

Ingredients are structured entries such as:

```js
ingredients: [
  { amount: 200, unit: 'g', item: 'graham crackers' },
  { amount: 80, unit: 'g', item: 'unsalted butter' },
  { group: 'Optional finish' }
]
```

`ingredientFile` holds background, substitutions, and tips separately from the actual ingredients. Individual ingredients may link to matching Ingredient File entries. Instruction steps support paragraphs, times, notes, and optional photos. Quantity-aware instruction text is supported where configured in the recipe data.

## Images

- Hero: `images/recipes/<slug>/hero.jpg` — portrait **2:3** on the recipe page.
- Recipe image: `images/recipes/<slug>/recipe.jpg` — optional image in the recipe details.
- Steps: optional square images, such as `step-01-01.jpg`, stored in the same recipe folder.
- Cards: use the recipe's hero image; card presentation is cropped to the card's aspect ratio. Current CSS includes **2:3** recipe-card styling.
- Missing optional step or recipe images are hidden rather than replaced with broken images.

The site can use the generated image manifest and also attempts conventional image paths. Some optimized WebP assets are used when available. Keep original JPG images and check image paths and filename capitalization after uploading.

## Navigation and discovery

The main navigation is **RECIPES / ABOUT / CONTACT**. The Recipes menu includes **View All, By Source, By Course, By Cuisine, and The Usuals**. Source values include Restaurant, Grocery Store Find, Movie & TV, Book, Travel, Family & Tradition, Memory, Internet Find, and Midnight Experiment.

Search checks recipe titles, descriptions, sources, cuisines, courses, tags, and ingredient-related metadata. List pages support sorting by popularity, latest, oldest, and alphabetical order. Popularity uses available review statistics.

## Recipe-page controls

The recipe page includes **Jump To Recipe**, ingredient quantities and units, cooking instructions, **Share**, **Print**, **Favorite**, and **Cook Mode**.

- **Share** uses the browser's native sharing interface when supported, with a copy-link fallback.
- **Print** uses a print stylesheet intended to print the practical recipe (ingredients and instructions) without unrelated page content or photos.
- **Favorite** stores saved recipe slugs in the current browser's `localStorage` (`mr-favorites`). The heart icon in the header opens the Favorites page. Favorites are device/browser-specific, not account-synced.
- **Cook Mode** requests the Screen Wake Lock API where supported to help keep the display awake. Unsupported browsers can still use the recipe normally. It does not change the page to a dark theme.
- **Metric / US** switches displayed ingredient units; the selected unit is remembered locally under `mr-unit`. In the source version reviewed, the default for a new browser is **US**.
- **Quantity scaling** uses a `− [value] +` stepper, with 0.5 increments on the buttons and a directly editable numeric field. Ingredients and supported instruction quantities update together.
- **Ingredient checkboxes** let readers mark off ingredients; their visual treatment uses the site's mint accent.

The planned recipe-controls update places Cook Mode alongside the Ingredients controls and presents Share, Print, and Favorite as compact icon actions. Apply the matching `app.js` and `style.css` update before treating this as a live-site feature.

## Reviews

The shared review system uses **Supabase** for review storage and **Cloudflare Turnstile** for submission verification. It is enabled when `MIDNIGHT_SITE.reviewsEnabled` is true in `data.js`.

Readers can submit a **1–5 star rating** with an optional name and comment. The recipe page displays a rating summary and public reviews. The review form heading is **“Made it? Tell us ★彡”**. Submission is handled by a Supabase Edge Function; public reviews are loaded through the Supabase REST API. The browser does not use local-only review storage for this implementation.

Keep backend permissions, Turnstile settings, and any private secrets configured outside the public repository. The public site contains only publishable client configuration.

## SEO, accessibility, and performance

- Page-specific titles, descriptions, canonical URLs, and social sharing metadata.
- Recipe JSON-LD structured data and recipe breadcrumbs.
- Generated sitemap and `robots.txt` workflow.
- Lazy-loaded noncritical images and optimized image formats where available.
- Responsive layouts for mobile and desktop.
- Accessible button labels, checkbox targets, and visible keyboard-focus treatments.
- Privacy/cookie preferences and a site footer.

## Deployment

1. Update the relevant files in the GitHub repository `midnightrecipes/Midnight-Recipes`.
2. Preserve the relative folder paths (for example, `assets/js/app.js`).
3. Commit the changes to the publishing branch.
4. Wait for GitHub Pages deployment and refresh the live site.
5. Check a recipe on both desktop and mobile: controls, unit conversion, quantity scaling, checked ingredients, Cook Mode, Share, Print, Favorites, images, and reviews.

**Documentation note:** This README reflects the supplied README and the app/CSS source shared on October 17, 2026. The public deployment was not independently tested. If the deployed code differs from these files, the live implementation is the source of truth.

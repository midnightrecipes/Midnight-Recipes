# MIDNIGHT RECIPES — GitHub Pages

Repository: `Midnight-Recipes`  
Expected site: `https://midnightrecipes.github.io/Midnight-Recipes/`

## v108 data / image architecture

This version keeps the existing MIDNIGHT RECIPES design, page structure, typography, colors, navigation style, and recipe layout. The main change is that recipe images are now **derived automatically from the recipe slug** instead of being maintained in `data.js` or `image-manifest.json`.

### Adding a new recipe

Add the recipe once to `assets/js/data.js` with its `slug`, title, source, course, cuisine, categories, date, ingredients, steps, etc.

Then add the recipe's images directly to GitHub:

```text
images/
└── recipes/
    └── [recipe-slug]/
        ├── hero.jpg
        ├── recipe.jpg
        ├── step-01-01.jpg
        ├── step-01-02.jpg
        ├── step-01-03.jpg
        ├── step-01-04.jpg
        ├── step-02-01.jpg
        └── ...
```

No HTML page edit, category-page edit, image-manifest edit, or image-path entry in `data.js` is required.

### Image rules

- `hero.jpg` = Recipe page hero image and **all recipe cards/lists**.
- `recipe.jpg` = image shown in THE RECIPE section when supplied.
- Step images use `step-01-01.jpg` through `step-XX-04.jpg`.
- Each step supports **0–4 photos**.
- The production convention is lowercase `.jpg`.
- Existing `.JPG`, `.jpeg`, and `.JPEG` files are also tried as fallbacks for compatibility.
- Missing hero/recipe images fall back to the existing placeholder behavior.
- Missing step photos are simply removed; no placeholder is shown for a missing step photo.
- Images use the existing aspect-ratio rules: hero `2:3`, cards `1:1`, step photos `1:1`.

### Important

`assets/js/image-manifest.json` is intentionally no longer used. Do not create or maintain a manual image manifest.

## Recipe data

`assets/js/data.js` is the single source of truth for recipe metadata and recipe content.

Core fields include:

- `slug`
- `title`
- `source`
- `sourceSecondary` (optional)
- `cuisine`
- `cuisineSecondary` (optional)
- `course`
- `courseDisplay` (optional)
- `meal` (legacy compatibility)
- `categories`
- `ingredientCategories`
- `dateAdded`
- `description`
- `ingredients`
- `ingredientFile`
- `steps`
- `stats`

Image path fields such as `heroImage`, `recipeImage`, `cardImage`, and per-step `stepImages` are intentionally not stored in recipe data anymore. Image paths are generated from `slug`.

## Source values

The official By Source values are exactly:

```text
Restaurant
Grocery Store Find
Movie & TV
Book
Travel
Family & Tradition
Memory
Internet Find
Midnight Experiment
```

These names must not be renamed or generalized.

`The Usuals` is **not a Source**. It is a separate collection under RECIPES, driven by `isUsuals` / `usualsCategory`.

## Navigation

Production navigation remains:

```text
RECIPES
    View All
    By Source
    By Course
    By Cuisine
    The Usuals

ABOUT
CONTACT
```

There is no `By Ingredient` item in the production navigation.

`By Course` is the official label. The existing compatibility field `meal` may remain in recipe data, but the public navigation and category page use Course.

## Automatic classification

A recipe is entered once in `data.js`. Its source, course, cuisine, categories, ingredients, and The Usuals status drive the relevant pages automatically:

- Home
- Latest Recipes
- View All
- By Source
- By Course
- By Cuisine
- The Usuals
- Search
- Individual Recipe pages

Latest Recipes sort by `dateAdded` descending.

## Search

Search covers recipe title, slug, source, cuisine, course/meal, categories, tags, description, ingredient categories, ingredients, and The Usuals metadata.

## Quantity scaling

The recipe quantity control is intentionally user-editable and accepts any positive multiplier, including values such as `0.5`, `1`, `1.5`, `2`, etc. The stepper buttons move by `0.5`, while direct input allows other values.

Range quantities such as `3–5 fresh red chilies` are represented with `minAmount` / `maxAmount` and scale with the recipe multiplier.

## Metric / US units

The existing Metric / US toggle remains data-driven. Cooking-friendly rounding and ingredient-specific unit overrides are preserved.

When an ingredient contains both a decimal `imperialAmount` and a legacy `imperialFraction`, the current renderer treats the explicit fraction as the preferred cup representation for compatibility. New recipe data should prefer a single authoritative imperial quantity rather than storing conflicting duplicate representations.

## Step quantity conversion

Step instructions may use quantity tokens such as:

```text
{{qty:Pumpkin Purée}}
{{qty:CALABAZA FILLING::Orange Juice}}
{{qty:INSTRUCTION-ONLY SYRUP::Dark Brown Sugar}}
```

The same generic ingredient-matching system resolves these references for all recipes. Recipe-specific slug checks are not used for quantity conversion.

Instruction-only ingredients can remain in the recipe's ingredient data with `hideFromIngredients:true` when they are needed by step instructions but should not appear in the visible ingredient list.

## Recipe page actions

The production recipe actions are:

- Cook Mode
- Share
- Print

Save Recipe is intentionally not included.

Cook Mode requests the Screen Wake Lock API when supported. Unsupported browsers continue normally. No extra explanatory Wake Lock sentence is displayed.

Jump To Recipe remains available. Back to Top is intentionally removed.

## Reviews

The five-star review UI supports:

- 1–5 selectable stars
- star-only submission
- optional name
- optional comment

Without an external backend, reviews are stored only in the current browser's local storage and are not presented as shared/public reviews.

## About image

The current About image is:

```text
images/about/about-midnight-recipes.jpg
```

## GitHub Pages paths

Internal links and assets use the current page depth so nested pages work under:

```text
/Midnight-Recipes/
```

Do not replace these with domain-root `/images/...` paths.

## Validation

The repository includes a GitHub Action:

```text
.github/workflows/validate-site-data.yml
```

It validates the official Source list, prevents legacy image properties from returning to `data.js`, and checks the 0–4 step-photo convention for committed images.

## Recommended post-publish checks

- Home
- Recipes / View All
- Latest Recipes
- By Source
- By Course
- By Cuisine
- The Usuals
- About / Contact
- Individual Recipe
- Search
- Cook Mode / Wake Lock fallback
- Quantity scaling
- Metric / US toggle
- Share / Print
- Review UI
- Mobile widths / no horizontal overflow
- Hero, recipe, and Step image fallback behavior

## Production cleanup

Development-only view switchers and Japanese test labels are not part of the production package.

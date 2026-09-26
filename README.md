# MIDNIGHT RECIPES — site files

Plain HTML/CSS/JS site for GitHub Pages. No build step is required; `index.html` is the entry point.

## File structure

```
index.html                     Home (By Source, then Latest Recipes)
about.html                     About
contact.html                   Contact

recipes/
  index.html                   View All
  by-source.html               Source directory; click a Source for its full recipe grid
  by-cuisine.html              Cuisine filter + full recipe grids
  by-meal.html                 Meal filter + full recipe grids
  the-usuals.html              The Usuals hub
  recipe.html                  One template for every recipe (?slug=...)
  usual.html                   One template for every Usual (?slug=...)
  search.html                  Cross-field recipe search (?q=...)

assets/
  css/style.css                Site styling
  js/data.js                   All recipe + Usual data
  js/site.js                   Shared navigation, cards, search and helpers

images/
  recipes/                     Recipe photos
```

## How to add a recipe

Normally you only edit `assets/js/data.js`. Add one object to `RECIPES` and give it:

- `slug`
- `title`
- `dateAdded`
- `source`
- `cuisine`
- `meal`
- `theUsuals` (array; leave empty when not applicable)
- `heroImage`
- optional `cardImage`
- optional `stepImages` array
- `ingredients`
- `instructions`
- the other story/notes/fine-print fields used by the template

A new recipe is automatically included in Home, Latest Recipes, View All, By Source, By Cuisine, By Meal, The Usuals (when `theUsuals` includes a matching Usual), and Search.

## Photo system

Each recipe can use three photo types:

- **Hero:** `2:3` display ratio on the individual Recipe page.
- **Card:** `1:1` display ratio on Home, View All, category pages, Latest Recipes, and the Recipe Card. If `cardImage` is omitted, `heroImage` is used.
- **Step photos:** `1:1` display ratio. Add 0–3+ paths to `stepImages`; only steps with an image are shown with a photo.

Recommended files:

```
images/recipes/beef-chili-hero.jpg
images/recipes/beef-chili-card.jpg
images/recipes/beef-chili-step-01.jpg
images/recipes/beef-chili-step-02.jpg
images/recipes/beef-chili-step-03.jpg
```

The CSS uses `aspect-ratio` + `object-fit: cover`; it never stretches an image. If a referenced image is missing, a placeholder remains instead of a broken image.

## Categories and Search

Each recipe is stored once. Its `source`, `cuisine`, `meal`, and `theUsuals` values determine where it appears. By Source / By Cuisine / By Meal pages show all matching recipes in the same square-card grid. Search checks recipe title, Source, Cuisine, Meal, Dish, tags, and linked Usual titles.

## Recipe controls

- **Cook Mode:** increases reading size and requests the browser's Screen Wake Lock API where supported. Browser/OS support can vary; the browser may release the lock when the page is hidden.
- **Quantity:** ×0.5 / 1 / ×2. The original ingredient amount is kept in the data and displayed at the selected scale.
- **Metric / Imperial:** converts common weight/volume units and temperatures to cooking-friendly rounded values. Not every unit can be converted automatically; unsupported text stays unchanged.
- **Save Recipe:** saved locally in the visitor's browser.
- **Print / Share:** browser-native functions.

## Ratings and comments

The review UI allows a star-only rating, or an optional name/comment. In this static GitHub Pages version, submissions are stored in the visitor's browser with `localStorage`; they are **not shared between visitors**. To make a site-wide public review system, connect a database/backend (for example Supabase) and replace the local-storage submit/read functions with authenticated or anonymous database operations.

## Contact

`from.midnightkitchen@gmail.com` is used as the site's mailto contact address.

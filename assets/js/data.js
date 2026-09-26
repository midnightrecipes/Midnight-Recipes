/* MIDNIGHT RECIPES — recipe data
   To add a new recipe: copy an object in RECIPES and fill it in.
   Every page on the site (Home, View All, By Source/Cuisine/Meal, the
   individual recipe page) reads from this one file. */

const RECIPES = [
  {
    slug: "chocolate-cream-comfort-pie",
    title: "Chocolate Cream Comfort Pie",
    dateAdded: "2026-09-20",
    heroImage: "images/recipes/chocolate-cream-comfort-pie-hero.jpg",
    cardImage: "images/recipes/chocolate-cream-comfort-pie-card.jpg",
    stepImages: [],
    timestamp: "12:14 AM",
    city: "Toronto",
    source: "Movie & TV",
    cuisine: "American",
    meal: "Desserts",
    tags: ["Movie & TV", "Baking", "Desserts", "American", "Chocolate", "Pie"],
    original: "Julie & Julia (2009)",
    dish: "Chocolate Cream Pie",
    theUsuals: ["building-block-pie-crust"],

    story: [
      "There's a moment in Julie & Julia where Julie has a full emotional breakdown over a chocolate cream pie — and talks about how comforting it is that eggs, chocolate, sugar and milk always thicken up the same way, no matter how chaotic the day has been.",
      "The famous dessert from that movie is the almond cake, but it was the pie scene that really got me. No matter how messy the day gets, the kitchen is still the one place I can reset."
    ],

    ingredientFile: [
      {
        name: "Graham crackers",
        lines: [
          "Origin: the crust used in the movie's pie.",
          "Substitute: store-bought pie crust, chocolate wafers, or Oreo-style cookies."
        ]
      },
      {
        name: "Dark chocolate",
        lines: [
          "Flavor: the heart of this pie — use a good-quality chocolate you'd actually enjoy eating.",
          "Best choice: 60–70% dark chocolate.",
          "Substitute: semi-sweet chocolate.",
          "Midnight fix: if using sweeter chocolate, cut the sugar to 50–60 g."
        ]
      },
      {
        name: "Espresso powder",
        lines: [
          "Flavor: a small amount deepens the chocolate flavor without tasting like coffee.",
          "Substitute: instant coffee powder."
        ]
      },
      {
        name: "Unsweetened cocoa powder",
        lines: [
          "Role: adds concentrated chocolate flavor without extra sweetness.",
          "Best choice: Dutch-processed cocoa, for a darker, smoother flavor.",
          "Substitute: natural unsweetened cocoa powder.",
          "No cocoa powder? Leave it out and add 20–30 g extra dark chocolate to the filling — the flavor gets slightly richer and the filling a touch softer."
        ]
      },
      {
        name: "3.25% milk",
        lines: [
          "Why 3.25%: the higher fat content makes the filling richer and creamier.",
          "Substitute: 2% milk works, but the filling will be a little lighter.",
          "Midnight fix: with 2% milk, add 1 tbsp extra butter for richness."
        ]
      }
    ],

    recipeInfo: {
      prep: "15 mins", cook: "15 mins", chill: "4 hrs", total: "4 hrs 30 min",
      servings: "6–8", pan: "23 cm / 9 inch pie dish", quietLevel: 3
    },

    ingredients: [
      {
        group: "Crust",
        items: [
          { amount: "200 g", name: "graham crackers, finely crushed" },
          { amount: "80 g", name: "unsalted butter, melted" }
        ]
      },
      {
        group: "Chocolate filling",
        items: [
          { amount: "150 g", name: "dark chocolate, chopped" },
          { amount: "1 tsp", name: "espresso powder" },
          { amount: "3 tbsp", name: "unsweetened cocoa powder" },
          { amount: "4", name: "egg yolks" },
          { amount: "80 g", name: "sugar" },
          { amount: "4 tbsp", name: "cornstarch" },
          { amount: "1 pinch", name: "salt" },
          { amount: "500 ml", name: "3.25% milk" },
          { amount: "20 g", name: "unsalted butter" }
        ]
      },
      {
        group: "Topping (optional)",
        items: [
          { amount: "200 ml", name: "whipped cream" },
          { amount: "2 tbsp", name: "sugar" },
          { amount: "", name: "cocoa powder, cacao nibs, or flaky sea salt, to finish" }
        ]
      }
    ],

    instructions: [
      {
        title: "Crush it down",
        time: "12:14 AM",
        body: [
          "Preheat the oven to 180°C (350°F).",
          "Crush 200 g graham crackers finely — a food processor is fastest, or seal them in a zip-top bag and roll with a rolling pin if you're keeping things quiet.",
          "Add 80 g melted butter and mix until the crumbs are evenly coated.",
          "Press firmly into a 9-inch (23 cm) pie dish using the flat bottom of a cup. Bake 8–10 minutes, then let it cool."
        ],
        tip: "Midnight shortcut: skip baking and freeze the crust while you make the filling."
      },
      {
        title: "Make it glossy",
        time: "12:20 AM",
        body: [
          "In a saucepan, whisk 80 g sugar, 4 tbsp cornstarch, 3 tbsp cocoa powder, 1 tsp espresso powder and a pinch of salt. Slowly whisk in 500 ml milk until completely smooth before turning on the heat.",
          "Cook over medium heat, whisking constantly, until it bubbles and thickens to a pudding-like consistency. Remove from heat.",
          "In a separate bowl, whisk 4 egg yolks. Slowly whisk in about half a cup of the hot chocolate cream to warm the yolks, then pour the yolk mixture back into the pan.",
          "Return to low heat for 1 minute, whisking constantly, until thick and glossy. Remove from heat and stir in 150 g chopped dark chocolate and 20 g butter until smooth."
        ]
      },
      {
        title: "Pour and wait",
        time: "12:35 AM",
        body: [
          "Pour the warm filling into the chilled crust. Tap the dish gently on the counter a few times to level it and release air bubbles.",
          "Refrigerate at least 4 hours — overnight is even better."
        ]
      },
      {
        title: "Whip it late",
        time: "optional",
        body: [
          "Whip 200 ml cold cream to soft peaks. Gradually add 2 tbsp sugar and whip to medium-firm peaks.",
          "Dollop over the chilled pie and finish with cocoa powder, cacao nibs, or flaky sea salt."
        ]
      }
    ],

    midnightNotes: [
      { title: "Recreating the flavor", text: "Dark chocolate together with cocoa powder and a hint of espresso powder takes the filling beyond a simple cocoa base, for a deeper, more layered chocolate flavor." },
      { title: "Midnight shortcut", text: "Chilling the crust in the freezer while the filling cooks saves a step without adding one." },
      { title: "Midnight compromises", text: "Too tired to whip cream by hand? Store-bought whipped cream works fine. Fresh cream gives a slightly better texture and finish when you've got a few extra minutes." }
    ],

    finePrint: {
      bestEaten: "Tomorrow — the filling firms up and the flavors settle overnight.",
      makeAhead: "Yes, up to 1 day ahead. Add the whipped cream just before serving.",
      storage: "Refrigerate, covered, up to 3 days.",
      freezer: "Not recommended.",
      reheat: "N/A — serve chilled."
    },

    footer: {
      inspiredBy: "Movie & TV",
      cuisine: "American",
      course: ["Baking", "Desserts"],
      mainIngredients: ["Chocolate", "Pie"]
    }
  }
];

const USUALS = [
  {
    slug: "building-block-pie-crust",
    title: "Building Block Pie Crust",
    category: "Bases & Crusts",
    tagline: "The crust we make when a pie calls for a crust.",
    description: "This is our go-to pie crust — the one we come back to whenever a recipe needs a buttery, tender crust. Nothing fancy. Just a reliable crust that works for sweet pies, savoury pies, and pretty much anything in between.",
    recipeInfo: { makes: "1 × 9-inch pie crust", prep: "15 min", chill: "30 min", bake: "varies by recipe" },
    ingredients: [
      { amount: "180 g", name: "all-purpose flour" },
      { amount: "115 g", name: "cold unsalted butter" },
      { amount: "1 tbsp", name: "sugar" },
      { amount: "½ tsp", name: "salt" },
      { amount: "3–4 tbsp", name: "ice water" }
    ],
    method: [
      "Cut the cold butter into the flour, sugar and salt until you have coarse crumbs with some larger pieces of butter remaining.",
      "Add ice water, one tablespoon at a time, until the dough just comes together.",
      "Shape into a disk. Don't knead.",
      "Wrap and chill for at least 30 minutes.",
      "Roll, fill and bake according to the recipe you're making."
    ],
    why: "We don't make this because it's the most impressive pie crust we've ever made. We make it because it works. It's the kind of recipe that eventually stops feeling like a recipe — you know how the dough should look, when you've added enough water, when to stop mixing. Eventually, you just make it.",
    foundIn: ["chocolate-cream-comfort-pie"]
  }
];

/* Categories shown on the site even before every recipe exists for them. */
const SOURCES = ["Restaurant", "Grocery Store", "Movie & TV", "Book", "Travel", "Family & Tradition", "Memory", "Internet"];
const CUISINES = ["American", "Japanese", "Italian", "Thai", "French", "Korean"];
const MEALS = ["Breakfast", "Main", "Side", "Desserts", "Drinks", "Snack"];

/* MIDNIGHT RECIPES — single source of truth for all recipe pages */
window.MIDNIGHT_SITE = {
  // Reviews are only stored in the visitor's own browser, so the form is hidden until a shared backend exists.
  reviewsEnabled: false,
  aboutImages: {
    aboutMe: 'images/about/about-me.jpg',
    aboutRecipes: 'images/about/about-midnight-recipes.jpg'
  }
};

window.MIDNIGHT_RECIPES = [
  {
    slug:'chocolate-cream-comfort-pie', title:'Chocolate Cream Comfort Pie', source:'Movie & TV', original:'JULIE AND JULIA (2009)', dish:'Chocolate Cream Pie', cuisine:'American', course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], dateAdded:'2026-09-26', timeStamp:'11:20 PM',
    description:'A late-night chocolate cream pie inspired by Julie & Julia (2009).',
    heroImage:'images/recipes/chocolate-cream-comfort-pie/hero.jpg', recipeImage:'images/recipes/chocolate-cream-comfort-pie/recipe.jpg',
    unitOverrides:{imperial:{'unsalted butter':'tbsp','unsalted butter melted':'tbsp'}},
    integerUnits:{metric:['unsweetened cocoa powder']},
    stepQuantityConversion:true,
    usCupFractions:true,
    scaleMinimums:{'salt|pinch':1},
    fixedStepPhotoCells:true,
    storyQuote:'“You know what I like about cooking? I love that after a day when nothing is sure, and when I say nothing I mean nothing, you can come home and absolutely know that if you add egg yolks to chocolate and sugar and milk, it will get thick. It’s such a comfort.”',
    story:`*Reine de Saba* (chocolate cake with sliced almonds) might be the most famous dessert from *Julie & Julia*, but honestly, Julie’s whole emotional breakdown over making a chocolate cream pie is what totally spoke to me. No matter how messy or exhausting the day gets, the kitchen is always my favorite place to unwind.

It’s kind of funny, but the tired-er I am, the more I actually want to bake late at night. There’s just something so comforting about tuning everything out and focusing on simple things—whisking milk, watching chocolate slowly melt, and just letting the night quiet down. Tonight, this pie was exactly what I needed. Rich, super chocolatey, and pure comfort in every bite.

The real secret here... Just use a dark chocolate that you’d happily eat straight out of the wrapper. It gives you this incredibly smooth, rich filling that isn't crazy sweet. Plus, it’s one of those desserts people always get excited about—seeing friends take that first bite and smile makes all the late-night whisking 100% worth it!`,
    ingredientFile: [
  {
    name: "GRAHAM CRACKERS",
    tag: "THE CRUST FOUNDATION",
    details: [["Why It Matters", "Creates a lightly sweet, crisp crust that balances the rich chocolate filling."],
      ["Baked vs. Unbaked", "Baking helps the crust stay crisp, even after chilling overnight. An unbaked crust saves time but tends to be softer and more moist. If making the pie ahead, baking is worth the extra few minutes."],
      ["Substitute", "Digestive biscuits, chocolate wafers, Oreo-style cookies, or a store-bought pie crust."],
      ["Midnight Fix", "For Oreo-style cookies, remove the filling first and adjust the butter as needed. The cookies already contain fat and sugar, so you may need less butter."]
    ]
  },
  {
    name: "DARK CHOCOLATE",
    tag: "THE STAR INGREDIENT",
    details: [["Why It Matters", "The heart of the pie. Choose chocolate you genuinely enjoy eating on its own."],
      ["Best Choice", "60–70% dark chocolate gives the filling deep chocolate flavor without making it too sweet."],
      ["A Little Splurge", "Baking chocolate works perfectly well, but why not treat yourself to something special? Toronto has great local chocolate makers, including SOMA and ChocoSol. This pie is a good excuse to use chocolate you really love."],
      ["Substitute", "Semi-sweet chocolate."],
      ["Midnight Fix", "If using sweeter chocolate, try reducing the sugar to 50–60 g. Taste the filling before chilling and adjust to your preference."]
    ]
  },
  {
    name: "ESPRESSO POWDER",
    tag: "THE FLAVOR BOOSTER",
    details: [["Why It Matters", "Deepens the chocolate flavor without making the filling taste strongly of coffee."],
      ["Substitute", "Instant coffee powder. Start with a small amount, since flavor and strength vary by brand."]
    ]
  },
  {
    name: "UNSWEETENED COCOA POWDER",
    tag: "THE CHOCOLATE DEEPENER",
    details: [["Why It Matters", "Adds a deeper, less sweet chocolate flavor that layers beautifully with dark chocolate."],
      ["Best Choice", "Dutch-process cocoa is a good fit for this creamy filling. Its lower acidity, darker color, and smoother flavor complement the chocolate. Since this recipe does not rely on cocoa to activate baking soda, you can choose it for flavor and color."],
      ["Substitute", "Natural unsweetened cocoa powder also works, though the flavor may be sharper and the color lighter."],
      ["Can't Find Cocoa Powder?", "You can try leaving it out and adding 20–30 g extra dark chocolate. This changes the balance of chocolate, fat, and starch, so the filling may set differently. Treat this as an adjustment to test rather than a guaranteed one-to-one replacement."]
    ]
  },
  {
    name: "WHOLE MILK",
    tag: "THE CREAMINESS BUILDER",
    details: [["Why It Matters", "Adds moisture and fat to help create a creamy chocolate filling."],
      ["Substitute", "2% milk can work, but the filling may be a little less rich."],
      ["Midnight Fix", "Try adding 1 tbsp extra butter when using 2% milk for a richer mouthfeel. This is an adjustment to test rather than a guaranteed replacement."]
    ]
  }
],
    ingredients:[
      {group:'Crust'},{amount:200,unit:'g',item:'Graham Crackers, Finely Crushed'},{amount:76,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Unsalted Butter, Melted'},
      {group:'Chocolate Filling'},{amount:150,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Dark Chocolate, Chopped'},{amount:1,unit:'tsp',imperialAmount:1,imperialUnit:'tsp',item:'Espresso Powder'},{amount:3,unit:'Tbsp',imperialAmount:3,imperialUnit:'tbsp',item:'Unsweetened Cocoa Powder'},{amount:4,unit:'',imperialAmount:4,imperialUnit:'',item:'Egg Yolks'},{amount:75,unit:'g',imperialAmount:6,imperialUnit:'tbsp',item:'Granulated Sugar'},{amount:4,unit:'Tbsp',imperialAmount:4,imperialUnit:'tbsp',item:'Cornstarch'},{amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt'},{amount:480,unit:'ml',imperialAmount:2,imperialUnit:'cup',item:'Whole Milk'},{amount:21,unit:'g',imperialAmount:1.5,imperialUnit:'tbsp',item:'Unsalted Butter'},
      {group:'Topping (optional)'},{amount:240,unit:'ml',imperialAmount:1,imperialUnit:'cup',item:'35% Whipping Cream'},{amount:38,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Granulated Sugar'},{unit:'',item:'Cocoa Powder, Cacao Nibs, or Flaky Sea Salt, to Finish'}
    ],
    stats:{prep:'15 mins',cook:'15 mins',chill:'4 hrs',total:'4 hrs 30 min',serves:'6–8',pan:'23 cm / 9 inch pie dish',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'CRUSH IT DOWN',clock:'11:20 PM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Crush 200g graham crackers finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Add {{qty:Crust::Unsalted Butter, melted}} melted butter to the crushed graham crackers and mix until the crumbs are evenly coated.',
        'Press the crumb mixture firmly into a 9-inch (23 cm) pie dish using the flat bottom of a cup.',
        'Bake for 8–10 minutes. Let it cool.'
      ],stepNote:'**Midnight Shortcut:** Skip baking and freeze the crust while you make the filling.',stepImages:['images/recipes/chocolate-cream-comfort-pie/step-01-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-01-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-01-03.jpg']},
      {number:'02',title:'MAKE IT GLOSSY',clock:'12:20 AM',paragraphs:[
        'In a saucepan, whisk {{qty:Chocolate Filling::Granulated Sugar}} sugar, {{qty:Chocolate Filling::Cornstarch}} cornstarch, {{qty:Chocolate Filling::Unsweetened Cocoa Powder}} cocoa powder, {{qty:Chocolate Filling::Espresso powder}} espresso powder, and {{qty:Chocolate Filling::Salt}} salt.',
        'Slowly pour in {{qty:Chocolate Filling::Whole Milk}} whole milk, whisking thoroughly until completely smooth before turning on the heat.',
        'Cook over medium heat, whisking constantly until the mixture bubbles and thickens into a pudding-like consistency.',
        'Remove the pan from the heat.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-02-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-03.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-04.jpg']},
      {number:'03',title:'MAKE IT SILKY',clock:'12:28 AM',paragraphs:[
        'In a separate bowl, whisk {{qty:Egg Yolks}} egg yolks.',
        'Slowly whisk half of the hot chocolate cream into the yolks to warm them up, then pour the yolk mixture back into the pan.',
        'Return to low heat for 1 minute, whisking constantly until thick and glossy.',
        'Remove from heat, then stir in {{qty:Chocolate Filling::Dark Chocolate, chopped}} chopped dark chocolate and {{qty:Chocolate Filling::Unsalted Butter}} butter until fully melted and smooth.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-03-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-03-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-03-03.jpg','images/recipes/chocolate-cream-comfort-pie/step-03-04.jpg']},
      {number:'04',title:'POUR AND WAIT',clock:'12:35 AM',paragraphs:[
        'Pour the warm chocolate filling into your chilled pie crust.',
        'Tap the pie dish gently on the counter 2–3 times to level the surface and release trapped air bubbles.',
        'Refrigerate for at least 4 hours. Overnight works best.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-04-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-04-02.jpg']},
      {number:'05',title:'WHIP IT LATE',clock:'Optional',paragraphs:[
        'Whip {{qty:Topping (optional)::35% Whipping Cream}} cold 35% whipping cream to soft peaks.',
        'Gradually add {{qty:Topping (optional)::Granulated Sugar}} granulated sugar and whip until medium-firm peaks form.',
        'Dollop generously over the chilled pie and finish with cocoa powder, cacao nibs, or flaky sea salt.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-05-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-05-02.jpg']}
    ],
    notes:[
      ['Recreating the Flavor','I use dark chocolate together with cocoa powder and a hint of espresso powder to take the filling beyond a simple cocoa base, creating a deeper and more layered chocolate flavor.'],
      ['Why I Temper the Egg Yolks','There are several ways to make custard. An experienced cook may be comfortable combining everything in the saucepan from the beginning, but I prefer to temper the egg yolks by gradually whisking in some of the hot chocolate mixture. It adds a step, but it gives me more control over how quickly the yolks warm up. I find it easier to take my time than to rush and risk ending up with bits of cooked egg in the filling.'],
      ["Don't Forget the Corners",'Keep whisking and scrape the bottom and corners of the saucepan as the custard thickens. Mixture can collect in these spots and cook faster than the rest. I like using a silicone spatula to reach the corners, especially when the filling starts to get thick.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly. The filling becomes firmer and the flavors settle overnight.',
      'MAKE AHEAD':'Yes. Prepare up to 1 day ahead. Add the whipped cream just before serving.',
      'STORAGE':'Refrigerate, covered, for up to 3 days.',
      'FREEZER':'Not applicable.',
      'REHEAT':'Not applicable.'
    },
    tags:['Movie & TV','Baking','Desserts','American','Chocolate','Pie'], mainIngredients:['Chocolate','Pie'], usualsCategory:''
  },

  {
    slug:'addictive-spicy-taiwan-ground-pork',
    title:'Addictive Spicy Taiwan Ground Pork',
    source:'Restaurant',
    original:'Misen 味仙, Nagoya, Japan',
    dish:'Taiwan Ramen — Taiwan Mince',
    cuisine:'Taiwan', cuisineSecondary:'Japanese',
    course:'Main Dishes',
    categories:['Main Dishes'],
    dateAdded:'2026-09-27',
    timeStamp:'11:14 PM',
    description:'A fiery Nagoya-inspired Taiwan mince served over rice with a soft-boiled egg.',
    heroImage:'images/recipes/addictive-spicy-taiwan-ground-pork/hero.jpg', recipeImage:'images/recipes/addictive-spicy-taiwan-ground-pork/recipe.jpg',
    unitOverrides:{imperial:{'sesame oil':'tbsp','soy sauce':'tbsp','Shaoxing wine':'tbsp','doubanjiang':'tbsp','sugar':'tsp'}},
    stepQuantityConversion:true,
    usCupFractions:true,
    integerUnits:{metric:['sesame oil','sugar']},
    richTextNotes:true,
    story:`*Taiwan Ramen* (台湾ラーメン) at Misen (味仙) is absolute comfort food in my hometown, Nagoya, Japan. Despite the name, this fiery dish isn’t actually from Taiwan—the founder named it after his own Taiwanese heritage. It’s a true Nagoya original that evolved entirely in Japan, and the flavor is something you never really forget. Every time I go back home, I find myself drawn straight back to Misen, sitting at a noisy table surrounded by people happily sweating their way through a bowl.

What makes it so addictive isn't just the heat—it’s that intense, punchy wallop of fresh chili and minced garlic seamlessly blended into rich, savory pork fat. It’s crazy spicy, but there’s this deep, craveable umami underneath that keeps you reaching for the next bite before the last one even settles. 

Tonight, I’m taking that iconic flavor and making the ground pork the star, serving it over hot rice with a rich soft-boiled egg. As you break the egg, the creamy, runny yolk flows into the spicy mince, perfectly cutting through the fiery punch and rounding out all those sharp garlic notes. It’s dangerous, intensely savory, and so good it might just keep me up all night.`,
    ingredientFile:[
  {
    name:'REGULAR GROUND PORK',
    tag:'THE FLAVOR FOUNDATION',
    details:[
      ['Why It Matters','The fat carries much of the dish’s flavor. As the pork renders, it absorbs the chili aroma and savory compounds from the doubanjiang, creating a glossy coating that clings to the meat and rice.'],
      ['Best Choice','Look for ground pork with roughly 20–30% fat, often sold as regular rather than lean ground pork.'],
      ['Substitute','Ground chicken made with dark meat or ground turkey can work, but both are leaner. The result will still differ from pork cooked in its own fat.'],
      ['Midnight Fix','If the mince tastes dry because the pork is very lean, stir in a small splash of sesame or neutral oil at the end. Add a little at a time to keep the mince glossy rather than greasy.']
    ]
  },
  {
    name:'FRESH RED CHILI',
    tag:'THE HEAT & BRIGHTNESS',
    details:[
      ['Fresh vs. Dried','Dried chilies bring concentrated, rounded heat, while fresh red chilies add a brighter, sharper, fruitier punch. Their fresh chili character helps balance the savory pork fat and fermented bean paste.'],
      ['Spice Adjustment','Finely chop the chili so it disperses throughout the mince. The inner ribs and surrounding membrane contain much of a chili’s capsaicin, so keeping them increases the heat. Remove some for a milder result. Seeds can carry capsaicin on their surfaces, but they are not the main source of heat.'],
      ['Substitute','Thai bird’s-eye chilies give intense heat, while Fresno or other mild red chilies provide a gentler result. Red chili flakes or chili paste can also work. Choose an unsweetened chili paste when possible, and adjust the amount to taste, as some varieties contain added salt, sugar, or other seasonings. These substitutes will not provide quite the same fresh, fruity aroma as fresh chili.'],
      ['Storage','Refrigerate fresh chilies in a breathable bag or loosely wrapped. For longer storage, freeze whole or chopped chilies in an airtight freezer bag. They can be used straight from frozen in cooked dishes; thawing is not necessary. Frozen chilies will soften after thawing, so they are best used in stir-fries, sauces, and other cooked recipes.']
]
  },
  {
    name:'GARLIC',
    tag:'THE ADDICTIVE CORE',
    details:[
      ['Why It Matters','Garlic is one of the main aromatic foundations of this Misen-inspired mince. The generous amount gives the pork its punchy, unmistakable garlic aroma.'],
      ['Technique','Start the minced garlic in the cold pan with the oil and chili, then bring the heat up gently. Slow heating allows the garlic flavor to infuse the oil. Keep it pale to golden rather than dark brown, which can taste bitter. If it browns too quickly, lower the heat before continuing.'],
      ['Why Finely Minced','Finely minced garlic disperses throughout the meat and exposes more surface area to the oil, allowing its aroma to reach the whole pan instead of remaining in larger pieces.']
    ]
  },
  {
    name:'DOUBANJIANG (四川豆瓣酱 / 豆板醤)',
    tag:'THE UMAMI POWERHOUSE',
    details:[
      ['Flavor','Salty, fermented, savory, and spicy, with deep umami and a distinctive red chili aroma. Brands and styles vary in heat, saltiness, texture, and sweetness.'],
      ['Why Fry It First','Frying doubanjiang briefly in the oil before adding the liquids helps release its chili color and aroma while softening its raw fermented edge. Fry for about 30–45 seconds, stirring constantly, until fragrant without scorching.'],
      ['Substitute','Gochujang can work, but it is generally sweeter and has a different fermented flavor. A mixture of red chili paste and dark miso can also approximate some of doubanjiang’s savory depth, although the result will not be identical.'],
  ['Midnight Fix','When using gochujang, start with the same amount as doubanjiang and add a small pinch of salt to balance its sweetness. For another alternative, mix 2 parts red chili paste with 1 part dark miso. Adjust the chili paste to your preferred heat level, and taste before adding extra salt.'],
      ['Salt Check','Doubanjiang is already salty, and this recipe also uses soy sauce, oyster sauce, and bouillon. Taste before adding any extra salt.']
    ]
  },
  {
    name:'GARLIC CHIVES (NIRA / 韮)',
    tag:'THE FRESH FINISH',
    details:[
      ['Flavor','Garlic chives add a fresh, sharp, garlicky flavor, a little crunch, and a vivid green finish that lifts the rich pork mince.'],
      ['When to Add','Cut the chives into 3–4 cm pieces and add them near the end. Toss for about 30–45 seconds—just long enough to soften them slightly while keeping their color and fresh aroma.'],
      ['Substitute','Green onions (scallions) cut into 3–4 cm pieces are an easy substitute. They are milder and less garlicky.'],
    ]
  }
],
    ingredients:[
      {group:'Taiwan Mince'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Regular Ground Pork'},
      {amount:20,unit:'g',item:'Garlic, Finely Minced',imperialMinAmount:6,imperialMaxAmount:8,imperialMinUnit:'cloves',imperialMaxUnit:'cloves',instructionImperialMinUnit:'garlic cloves',instructionImperialMaxUnit:'garlic cloves',instructionMetricSuffix:' of garlic',compactRange:true},
      {minAmount:3,maxAmount:5,unit:'',item:'Fresh Red Chilies, Finely Minced, Seeds Included'},
      {amount:45,unit:'ml',item:'Sesame Oil'},
      {amount:30,unit:'ml',item:'Soy Sauce'},
      {amount:30,unit:'ml',item:'Shaoxing Wine'},
      {amount:15,unit:'ml',item:'Doubanjiang'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Oyster Sauce'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Gochujang'},
      {amount:2,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Chicken Bouillon Powder'},
      {amount:180,unit:'ml',imperialAmount:0.75,imperialUnit:'cup',item:'Water'},
      {amount:55,unit:'g',imperialAmount:1,imperialUnit:'small bunch',item:'Garlic Chives or Green Onion, Cut into 3–4 cm Pieces'},
      {minAmount:3,maxAmount:5,unit:'ml',imperialMinAmount:0.5,imperialMaxAmount:1,imperialMinUnit:'tsp',imperialMaxUnit:'tsp',compactRange:true,item:'Sesame Oil, for Finishing'},
      {group:'To Serve'},
      {unit:'',item:'Hot Steamed White Rice'},
      {unit:'',item:'Soft-boiled Egg'}
    ],
    stats:{prep:'10 mins',cook:'20 mins',total:'30 mins',serves:'4',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'BUILD THE CHILI-GARLIC OIL',clock:'11:14 PM',paragraphs:[
        'Add {{qty:sesame oil}} sesame oil, minced {{qty:garlic}}, and {{qty:fresh red chilies}} finely minced fresh red chilies to a cold frying pan.',
        'Turn the heat to low and gently cook for 1–2 minutes.',
        'Keep the garlic pale. You want the oil infused with garlic and chili, not burnt garlic.'
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-01-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-01-02.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-01-03.JPG']},
      {number:'02',title:'COOK THE PORK',clock:'11:17 PM',paragraphs:[
        'Increase the heat to medium-high and add {{qty:regular ground pork}} ground pork.',
        'Let the pork sit against the pan briefly so it develops some browned edges.',
        'Break it apart and continue cooking until deeply browned and the pork fat has rendered.',
        'Push the pork toward one side of the pan. Add {{qty:doubanjiang}} doubanjiang to the exposed oil.',
        'Fry the doubanjiang for 30–45 seconds, then mix it thoroughly into the pork.',
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-02-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-02-02.JPG']},
      {number:'03',title:'BRAISE & REDUCE',clock:'11:22 PM',paragraphs:[
        'Add {{qty:Shaoxing wine}} Shaoxing wine and let it bubble for about 30 seconds.',
        'Add {{qty:soy sauce}} soy sauce, {{qty:oyster sauce}} oyster sauce, {{qty:gochujang}} gochujang, {{qty:Granulated Sugar}} sugar, {{qty:chicken bouillon powder}} chicken bouillon powder, and {{qty:water}} water.',
        'Stir everything together and bring to a simmer. Reduce the heat to low and simmer uncovered for 10–15 minutes.',
        'Do not completely dry out the mince.',
        'The finished meat should be deeply colored, glossy and intensely savory, with a small amount of concentrated sauce and pork fat still coating the pan.'
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-03-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-03-02.JPG']},
      {number:'04',title:'FINISH WITH GARLIC CHIVES',clock:'11:34 PM',paragraphs:[
        'Add {{qty:garlic chives or green onion}} garlic chives.',
        'Toss over medium heat for 30–45 seconds.',
        'Turn off the heat. Add {{qty:sesame oil, for finishing}} sesame oil.',
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-04-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-04-02.JPG']},
      {number:'05',title:'BRING IT HOME',clock:'11:37 PM',paragraphs:[
        'Spoon hot steamed white rice into a shallow bowl.',
        'Pile the Taiwan mince generously over the rice. Make sure some of the concentrated sauce drips down into the rice.',
        'Top with a soft-boiled egg with a runny yolk.'
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-05-01.jpg']}
    ],
    notes:[
      ['The Fresh Chili Trick','Fresh red chili replaces the dried chili traditionally used in many versions of Taiwan mince. Finely chopping the chili with the seeds and membrane distributes the heat throughout the meat rather than giving you occasional bites of whole chili.'],
      ['Why the Sauce Is Deliberately Generous','This version is designed specifically for rice. The mince shouldn’t be dry like ordinary *soboro* (そぼろ: finely crumbled and seasoned ground meat). It should sit somewhere between a stir-fried mince and a braised mince, with enough concentrated sauce to soak into the rice. The rice is supposed to get spicy, too.']
    ],
    finePrint:{
      'BEST EATEN':'Fresh, served hot over steamed white rice with a soft-boiled egg.',
      'MAKE AHEAD':'Yes. Prepare the Taiwan mince ahead of time. Cook the rice and soft-boiled egg just before serving.',
      'STORAGE':'Refrigerate the Taiwan mince in an airtight container for up to 3 days. Store the rice separately.',
      'FREEZER':'Freeze the Taiwan mince in an airtight container for up to 1–2 months. Thaw in the refrigerator before reheating.',
      'REHEAT':'Reheat the mince in the microwave or on the stovetop. Add a splash of water if it becomes too dry.'
    },
    tags:['Restaurant','Main Dishes','Japanese','Ground Pork','Garlic','Fresh Red Chili','Garlic Chives','Doubanjiang'],
    mainIngredients:['Ground Pork','Garlic','Fresh Red Chili','Garlic Chives','Doubanjiang'],
    usualsCategory:''
  },

  {
    slug:'apple-creme-brulee',
    title:'Apple Crème Brûlée',
    source:'Movie & TV',
    original:'Amélie (2001)',
    dish:'Crème Brûlée',
    cuisine:'French',
    course:'Desserts',
    categories:['Desserts'],
    dateAdded:'2026-09-27',
    timeStamp:'11:20 PM',
    description:'Apple crème brûlée inspired by Amélie (2001), with soft tart apples beneath silky custard and brittle caramel.',
    heroImage:'images/recipes/apple-creme-brulee/hero.jpg', recipeImage:'images/recipes/apple-creme-brulee/recipe.jpg',
    unitOverrides:{metric:{'apples':'g','unsalted butter':'g','brown sugar':'g','lemon juice':'ml','ground cinnamon':'g','whole milk':'ml','35% whipping cream':'ml','granulated sugar':'g','granulated sugar, for brûlée':'g','vanilla extract':'ml'},imperial:{'apples':'cup','unsalted butter':'tbsp','brown sugar':'tbsp','lemon juice':'tbsp','granulated sugar':'tbsp','ground cinnamon':'tsp','vanilla extract':'tsp'}},
    integerUnits:{metric:['apples','unsalted butter','brown sugar','lemon juice','ground cinnamon','whole milk','35% whipping cream','granulated sugar','vanilla extract','granulated sugar, for brûlée','granulated sugar for br l e']},
    usCupFractions:true,
    densityOverrides:{'brown sugar|tbsp':12.5,'granulated sugar|tbsp':12.5},
    stepQuantityConversion:true,
    story:`What is the first thing that comes to mind when you hear crème brûlée?

For me, it is the movie Amélie. She is a little awkward, but she knows exactly what she likes and dislikes, and she is so good at finding joy in the smallest things—plunging her hand into a sack of grain, skipping stones across a canal, and, of course, cracking the caramelized top of a crème brûlée with the back of a teaspoon.

Like her, I believe we should all find simple things that bring us joy. Tonight, I wanted to recreate that quiet, quirky kind of magic, but with a cozy midnight twist. Instead of a standard custard, I tucked a layer of tender, cinnamon-spiced apples right at the bottom of the ramekin—a sweet, unexpected surprise meant to bring a smile to whoever eats it after a long day.

I also used a blend of whole milk and whipping cream, even though a traditional crème brûlée relies entirely on heavy cream. The milk creates a lighter, silky texture with a clean aftertaste that pairs beautifully with the crisp sourness of the apples—making you feel just a little less guilty about enjoying a late-night treat! 

(And of course, don’t forget to crack the top before taking your first bite!)`,
    ingredientFile:[
  {
    name:'APPLE',
    tag:'THE FRUIT FOUNDATION',
    details:[
      ['Flavor','Sweet-tart, crisp, and floral.'],
      ['Best cChoice','In Canada, Honeycrisp is a popular choice for baking. Unlike softer apples that can turn mushy, Honeycrisp holds its shape well while releasing just enough tart juices to balance the rich dairy.'],
      ['Substitute','Pink Lady or Braeburn offer a similar sweet-tart balance. Firm pears are another option for a softer, more autumnal fruit base.'],
      ['Cooking Secret','Sautéing the apples beforehand does more than soften them—it also evaporates excess moisture. Adding raw apples directly to the custard can release water during baking and interfere with the silky texture of the set cream.']
    ]
  },
  {
    name:'WHOLE MILK + 35% WHIPPING CREAM',
    tag:'THE CREAMY BALANCE',
    details:[
      ['The 4:1 Ratio','While many classic French recipes rely exclusively on heavy cream, this version uses a carefully balanced 4:1 ratio of 35% whipping cream to whole milk.'],
      ['Why Add Milk?','The spiced apples already contribute moisture and fruit acidity, so a custard made entirely with cream can feel overly heavy. Whole milk keeps the custard silky and lighter, allowing the vanilla and apple flavors to shine without weighing it down.']
    ]
  }
],
    ingredients:[
      {group:'Apple mixture'},
      {amount:300,unit:'g',item:'Apples, Peeled, Cored, and Cut into 1 cm Cubes'},
      {amount:15,unit:'g',item:'Unsalted Butter'},
      {amount:19,unit:'g',imperialAmount:1.5,imperialUnit:'tbsp',item:'Brown Sugar'},
      {amount:15,unit:'ml',item:'Lemon Juice'},
      {amount:2,unit:'g',item:'Ground Cinnamon'},
      {amount:1,unit:'pinch',item:'Fine Salt'},
      {group:'Custard'},
      {amount:100,unit:'ml',imperialAmount:7,imperialUnit:'tbsp',item:'Whole Milk'},
      {amount:400,unit:'ml',item:'35% Whipping Cream'},
      {amount:5,unit:'',item:'Large Egg Yolks'},
      {amount:63,unit:'g',imperialAmount:5,imperialUnit:'tbsp',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Vanilla Extract'},
      {amount:1,unit:'pinch',item:'Fine Salt'},
      {group:'Brûlée'},
      {unit:'',item:'Granulated Sugar, for Brûlée'}
    ],
    stats:{prep:'20 mins',cook:'35 mins',chill:'2 hrs+',total:'2 hrs 55 mins+',serves:'6',quiet:'⭐⭐⭐⭐⭐'},
    steps:[
      {number:'01',title:'PREHEAT & SOFTEN THE APPLES',clock:'11:20 PM',paragraphs:[
        'Preheat your oven to 140°C / 285°F.',
        'Melt {{qty:unsalted butter}} butter over medium heat.',
        'Add {{qty:apples}} apples, {{qty:brown sugar}} brown sugar, {{qty:lemon juice}} lemon juice, {{qty:Ground Cinnamon}} cinnamon, and a pinch of salt.',
        'Cook for 5–7 minutes, until the apples are tender but still hold their shape.',
        'If there is excess liquid, cook for another 1–2 minutes until glossy but not wet.',
        'Cool slightly.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-01-01.jpg','images/recipes/apple-creme-brulee/step-01-02.jpg','images/recipes/apple-creme-brulee/step-01-03.jpg','images/recipes/apple-creme-brulee/step-01-04.jpg']},
      {number:'02',title:'MAKE THE CUSTARD',clock:'11:32 PM',paragraphs:[
        'Heat {{qty:whole milk}} whole milk and {{qty:35% Whipping Cream}} 35% whipping cream over medium-low heat until hot and steaming, but do not boil.',
        'Whisk {{qty:Large Egg Yolks}} egg yolks, {{qty:Granulated Sugar}} sugar, and a pinch of salt gently. Avoid creating too much foam.',
        'Slowly add the hot dairy while whisking.',
        'Stir in {{qty:vanilla extract}} vanilla extract.',
        'Strain through a fine-mesh sieve.',
        'Let the custard rest for 5–10 minutes, then skim off any foam.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-02-01.jpg','images/recipes/apple-creme-brulee/step-02-02.JPG','images/recipes/apple-creme-brulee/step-02-03.JPG','images/recipes/apple-creme-brulee/step-02-04.JPG']},
      {number:'03',title:'FILL',clock:'11:42 PM',paragraphs:[
        'Divide the apples among mini cocottes.',
        'Pour the custard over the apples, almost to the top.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-03-01.JPG']},
      {number:'04',title:'WATER BATH & BAKE',clock:'11:45 PM',paragraphs:[
        'Place the cocottes in a deep baking dish.',
        'Add hot water until it reaches halfway up the sides of the cocottes.',
        'Bake at 140°C / 285°F for 30–35 minutes.',
        'The edges should be set while the centers still have a gentle, even wobble.',
        'Carefully remove the cocottes from the water bath.',
        'Cool, then refrigerate for at least 2 hours, preferably overnight.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-04-01.jpg']},
      {number:'05',title:'CRACK THE TOP',clock:'DAY',paragraphs:[
        'Blot any moisture from the surface.',
        'Sprinkle sugar evenly over the six custards in a thin layer.',
        'Torch until deeply golden and glassy. Let stand for 2–3 minutes.',
        'Crack the caramelized top with the back of a spoon, like *Amélie*.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-05-01.jpg','images/recipes/apple-creme-brulee/step-05-02.jpg']}
    ],
    notes:[
      ['Keeping the Apples Distinct','Cooking the apples separately concentrates their flavor and removes excess moisture before they meet the custard. Just be careful not to overcook them—keeping a slight crispness gives the best contrast in texture.'],
      ['A Smooth Surface','Gentle mixing, straining, resting, and skimming off any foam help keep the custard surface glass-smooth. Baking in a water bath is equally crucial, as it gently cooks the eggs and prevents your silky custard from turning into scrambled eggs.'],
      ["Don't Overbake",'The center should still wobble gently when it comes out of the oven. It will continue to set as it cools in its ramekin.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly. Caramelize the sugar just before serving.',
      'MAKE AHEAD':'Yes. Prepare the custard ahead of time and refrigerate. Caramelize the sugar just before serving.',
      'STORAGE':'Cover and refrigerate for up to 3–4 days. Caramelize the sugar just before serving.',
      'FREEZER':'Not applicable.',
      'REHEAT':'Not applicable.'
    },
    tags:['Dessert','French','Apples','CremeBrulee','Custard','Movie'],
    mainIngredients:['Apples','Cream','Milk','Egg Yolks','Vanilla'],
    usualsCategory:''
  },


  {
    slug:'mexican-calabaza-en-tacha-pumpkin-pie',
    title:'Mexican (Calabaza en Tacha) Pumpkin Pie', description:'Inspired by Coco and Día de Muertos, this pumpkin pie reimagines calabaza en tacha with warm spices and the comforting flavors of a traditional Mexican seasonal sweet.',
    source:'Movie & TV', sourceSecondary:'Family & Tradition', original:'Coco (2017)', dish:'Calabaza en Tacha-inspired Pumpkin Pie', cuisine:'Mexican',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'],
    dateAdded:'2026-09-27', timeStamp:'11:48 PM',
    usCupFractions:true, stepQuantityConversion:true,
    tags:['Movie','Coco','Pie','Mexican','Pumpkin','DíaDeMuertos','Ofrenda','CalabazaenTacha','Baking','Dessert'],
    heroImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/hero.jpg',
    recipeTitle:'Calabaza en Tacha Pumpkin Pie', showPan:true,
    recipeImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/recipe.jpg', usesUsual:'building-block-pie-crust',
    story:`Mexico's *Día de Muertos*, the traditional celebration featured in the movie *Coco*, centers around remembering and welcoming back loved ones who have passed away.

Celebrated especially on November 1 and 2, families create vibrant ofrendas (altars) decorated with photographs, candles, marigolds, and the favorite foods that their loved ones enjoyed.

Growing up in Japan, our summer tradition of welcoming ancestral spirits during *Obon* (お盆) was always quiet, solemn, and reflective. I wasn't used to a tradition that celebrates and remembers the dead in such a bright, warm, and lively way. When I watched *Coco*, I found that perspective beautiful and special.

*Calabaza en Tacha* is a traditional Mexican seasonal pumpkin sweet often placed on these ofrendas. Traditionally, pieces of hard-shelled pumpkin are slowly simmered in a dark piloncillo (panela) syrup infused with whole cinnamon, cloves, star anise, and fresh orange until perfectly tender and glazed.

Tonight, I wanted to create something a little different from a standard pumpkin pie—a dessert warmly inspired by *Calabaza en Tacha*, taking a quiet moment late at night to remember the people I love. By transferring those traditional flavors into a pie format, using spice-infused cream and topping it with a glossy orange-molasses syrup, this pie comes together with a beautifully rounded flavor and a smooth, comforting texture.`,
    ingredientFile:[
    {name: 'PUMPKIN PURÉE',
     tag:'THE VELVETY BASE',
      details: [
        ['Flavor', 'Earthy, naturally sweet, mellow, and velvety.'],
        ['Canned vs. Fresh', 'While roasting a whole sugar pumpkin from scratch is lovely, canned pumpkin purée actually has a lower, more consistent water content. At midnight, using pure pumpkin purée guarantees a silky custard without risking a watery pie base.'],
        ['Best choice', 'Look for 100% pure pumpkin purée on the label, not canned "pumpkin pie mix," which already contains added sugar and ground spices.']]
    },
    {name: 'DARK BROWN SUGAR + MOLASSES',
     tag:'THE PILONCILLO DUPE',
      details: [
        ['What is Piloncillo?', 'Piloncillo (or Panela) is unrefined whole cane sugar traditional to Mexican cooking. It has an intense, smoky, dark-caramel flavor that standard white sugar cannot match.'],
        ['Why Molasses?', 'Combining dark brown sugar with a touch of dark molasses introduces that distinct, slightly bitter, mineral-rich complexity of authentic piloncillo, mimicking its cooked-down syrup flavor perfectly.']]
    },
    {name: 'THE WHOLE SPICE INFUSION (CINNAMON, STAR ANISE, CLOVE, ORANGE PEEL)',
     tag:'THE AROMATIC HEART',
     details: [
        ['Why Whole Spices Instead of Powder?', 'Standard pumpkin pies rely on ground cinnamon, nutmeg, and ginger, which can make the custard look muddy and feel slightly gritty on the tongue. By gently steeping whole spices in warm Half & Half, the fat absorbs their pure, aromatic essential oils.'],
        ['The Magic of Orange Peel', 'Steeping a strip of fresh orange peel introduces bright citrus oils to the dairy. It cuts through the heavy pumpkin and rich eggs, leaving a fresh, fragrant finish that defines Calabaza en Tacha. Just be careful not to over-steep, as it can turn bitter.']]
    }
  ],
    stats:{prep:'25 mins',cook:'55–65 mins',chill:'4 hrs+',total:'5 hrs 20 mins+',serves:'8',pan:'23 cm / 9-inch pie dish',quiet:'⭐⭐⭐⭐☆'},
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'CALABAZA FILLING'},
      {amount:400,unit:'g',imperialAmount:5/3,imperialUnit:'cup',item:'Pumpkin Purée'}, {amount:2,unit:'large',imperialAmount:2,imperialUnit:'large',item:'Eggs'}, {amount:180,unit:'ml',imperialAmount:3/4,imperialUnit:'cup',item:'Half & Half / 10% Cream'},
      {amount:55,unit:'g',imperialAmount:0.25,imperialUnit:'cup',item:'Dark Brown Sugar'}, {amount:10,unit:'g',imperialAmount:1/2,imperialUnit:'tbsp',item:'Molasses'}, {amount:15,unit:'ml',imperialAmount:1,imperialUnit:'tbsp',item:'Orange Juice'}, {amount:0.25,unit:'tsp',imperialAmount:1/4,imperialUnit:'tsp',item:'Salt'},
      {group:'SPICE INFUSION'},
      {amount:0.5,unit:'',imperialAmount:0.5,imperialUnit:'',item:'Cinnamon Stick'}, {amount:2,unit:'',item:'Whole Cloves'}, {amount:1,unit:'',item:'Star Anise'}, {amount:1,unit:'strip',item:'Orange Peel, About 2–3 cm (1 Inch) Long'},
      {group:'THE PILONCILLO SYRUP'},
      {amount:38,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Dark Brown Sugar'}, {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Molasses'}, {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Orange Juice'}, {amount:15,unit:'ml',imperialAmount:1,imperialUnit:'tbsp',item:'Water'}, {amount:1,unit:'strip',imperialAmount:1,imperialUnit:'strip',item:'Orange Peel, About 2–3 cm (1 Inch) Long'}, {amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt'}
    ],
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'11:48 PM',paragraphs:['Preheat your oven to 175°C / 350°F.','Start with one of our usual recipes - Building Block Pie Crust (OPTION B — PARTIAL BLIND-BAKE).'],stepNote:'**Midnight Shortcut:** Use a good-quality store-bought pie crust. Tonight is about the filling.'},
      {number:'02',title:'INFUSE THE SPICES',clock:'12:05 AM',paragraphs:['Squeeze the orange juice and keep the orange peel strip aside for the spice infusion and syrup.','Pour {{qty:CALABAZA FILLING::Half & Half / 10% Cream}} Half & Half into a small saucepan.','Add {{qty:SPICE INFUSION::Cinnamon Stick}} cinnamon stick, {{qty:SPICE INFUSION::Whole Cloves}} whole cloves, {{qty:SPICE INFUSION::Star Anise}} star anise, and {{qty:SPICE INFUSION::Orange Peel, About 2–3 cm (1 Inch) Long}} of orange peel.','Warm gently over low heat for 10 minutes. Do not let the Half & Half boil.','Turn off the heat and let the spices steep for another 10 minutes.','Remove the cinnamon stick, cloves, star anise, and orange peel. Prolonged steeping can make the peel bitter.','While the infused Half & Half is still warm, whisk in {{qty:CALABAZA FILLING::Dark Brown Sugar}} dark brown sugar and {{qty:CALABAZA FILLING::Molasses}} molasses until completely dissolved.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-02-01.jpg','images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-02-02.JPG','images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-02-03.jpg']},
      {number:'03',title:'MAKE THE FILLING',clock:'12:18 AM',paragraphs:['In a large bowl, whisk together {{qty:CALABAZA FILLING::Pumpkin Purée}} pumpkin purée, {{qty:CALABAZA FILLING::Eggs}} eggs, {{qty:CALABAZA FILLING::Orange Juice}} orange juice, and {{qty:CALABAZA FILLING::Salt}} salt.','Slowly pour in the warm spiced Half & Half mixture.','Whisk gently until everything is smooth and evenly combined.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-03-01.JPG','images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-03-02.JPG']},
      {number:'04',title:'BAKE',clock:'12:22 AM',paragraphs:['Pour the pumpkin filling into the crust.','Bake for 40–50 minutes.','The edges should be set while the center still has a slight wobble when the pie is gently shaken.','Remove from the oven.','Let the pie cool slightly until it is no longer hot, then refrigerate.','Don\'t worry if the center looks slightly soft when it first comes out. The custard will continue to set as it cools.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-04-01.JPG']},
      {number:'05',title:'FAKE THE PILONCILLO SYRUP',clock:'12:45 AM',paragraphs:['Add {{qty:THE PILONCILLO SYRUP::Dark Brown Sugar}} dark brown sugar, {{qty:THE PILONCILLO SYRUP::Molasses}} molasses, {{qty:THE PILONCILLO SYRUP::Orange Juice}} orange juice, {{qty:THE PILONCILLO SYRUP::Water}} water, {{qty:THE PILONCILLO SYRUP::Orange Peel, About 2–3 cm (1 Inch) Long}} of orange peel, and {{qty:THE PILONCILLO SYRUP::Salt}} salt to a small saucepan.','Bring to a gentle simmer over medium-low heat.','Cook for 3–5 minutes, stirring occasionally, until the sugar has dissolved and the syrup has thickened slightly.','Remove the orange peel. Let the syrup cool slightly.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-05-01.JPG']},
      {number:'06',title:'FINISH',clock:'NEXT DAY',paragraphs:['Once the pie is no longer hot, refrigerate for at least 4 hours, preferably overnight.','Before serving, spoon a thin layer of the piloncillo syrup over the surface. For the glossiest finish, warm the syrup slightly and drizzle it over the pie just before serving.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-06-01.JPG']}
    ],
    notes:[
      ['The Art of Steeping (Why Whole Spices Matter)','Instead of dumping ground "pumpkin pie spice" into the bowl, I steep whole cinnamon, star anise, cloves, and orange peel in warm Half & Half over low heat. Fat is an incredible flavor carrier. By letting the spices sit in the warm dairy for 20 minutes, you get a clean, silky custard infused with a soft, rounded botanical aroma without any grittiness.'],
      ['Recreating Piloncillo without Piloncillo',"Authentic Calabaza en Tacha relies on piloncillo cones. Since it's not always in my pantry late at night, combining dark brown sugar with a splash of molasses mimics that deep, unrefined caramel profile effortlessly."],
      ['Why the Glaze Goes on Last (And How to Apply It)','Traditional Calabaza en Tacha pumpkin is coated in a sticky, glossy reduction. Drizzling our warm orange-molasses syrup over the chilled custard just before serving gives each slice a gorgeous sheen and an instant hit of bright citrus-caramel sweetness on your first bite. Do not drizzle the syrup the night before, as the custard will gradually absorb it, leaving the top surface looking dull and matte. Also, I recommend gently pouring or spooning the syrup straight over the pie instead of brushing it on—a pastry brush can leave unsightly streak marks on the delicate custard surface.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly. The orange and spices develop a rounder flavor overnight. For the cleanest slices, refrigerate for several hours before serving. Serve cold or at room temperature.',
      'MAKE AHEAD':'Yes. Make the pie the day before serving so it can chill overnight.',
      'STORAGE':'Cover and refrigerate for up to 3 days. Store the orange-molasses syrup separately in a covered container in the refrigerator for up to 5 days.',
      'FREEZER':'Freeze the fully cooled pie, wrapped tightly and placed in a freezer-safe container, for up to 1 month for best quality. Thaw overnight in the refrigerator before serving. The filling may be slightly softer after thawing.',
      'REHEAT':'Gently warm individual slices in a low oven if you prefer the pie warm.'
    },
    tags:['Movie','Coco','Pie','Mexican','Pumpkin','DíaDeMuertos','Ofrenda','CalabazaenTacha','Baking','Dessert'], mainIngredients:['Pumpkin','Orange','Cinnamon','Molasses'],
    footerInspiredBy:'Calabaza en Tacha', footerCuisine:'Mexican, Canadian, North American', footerCourse:'Baking · Desserts', footerMainIngredients:['Pumpkin','Orange','Cinnamon','Molasses']
  },
  {
    slug:'banana-banana-cream-pie', title:'Banana Banana Cream Pie', description:'Made for seriously banana-y flavor, this cream pie uses very ripe bananas cooked down into a sweet, concentrated filling beneath a smooth custard.', source:'Midnight Experiment', dish:'Banana Cream Pie', cuisine:'American',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], dateAdded:'2026-09-27', timeStamp:'2:55 AM',
    tags:['Dessert','Baking','Banana','Pie'], heroImage:'images/recipes/banana-banana-cream-pie/hero.jpg', recipeImage:'images/recipes/banana-banana-cream-pie/recipe.jpg',
    unitOverrides:{imperial:{'plain biscuits, finely crushed':'cup','unsalted butter, melted':'cup','whole milk':'cup','granulated sugar':'tbsp','cornstarch':'tbsp','35% Whipping Cream':'cup','Granulated Sugar, To Taste':'tbsp'}},
    densityOverrides:{'plain biscuits|cup':100,'granulated sugar|tbsp':35/3},
    usCupFractions:true,
    forceCupUnits:true,
    compactStory:true,
    stepQuantityConversion:true,
    story:`A few nearly black bananas had been sitting on my counter for way too long. They were way past the point where I'd normally eat them fresh, but as it turns out, they were absolute perfection for this pie.

I started looking through traditional banana cream pie recipes and noticed that most of them rely on a few slices of fresh banana hiding underneath a mountain of standard vanilla custard. 

I wanted a pie that was seriously, unapologetically banana-y. Not vanilla pudding with a vague hint of banana flavor, but a rich, velvety banana custard made from real fruit.

So I took those overripe bananas, cooked them down in a skillet until they were thick, dark, and sweet, and blended them right into the custard. Then, I tucked fresh banana halves underneath for a little bite and that beautiful, clean cross-section when you slice into it.

To complement all that fruitiness, I crafted a custom spiced biscuit crust. The warm, exotic notes of cinnamon, ginger, and nutmeg cut through the rich sweetness of the banana, creating a beautiful depth of flavor. 

Basically, this pie is my answer to one very simple, late-night question: 
What if we just stopped treating the banana like an afterthought and made the banana the custard itself?`,
ingredientFile:[
  {
    name:'BANANA',
    tag:'OUR HERO!',
    details:[
      ['Flavor','Deep and caramel-like when roasted, with a fresh, aromatic sweetness when raw.'],
      ['Where to find','Your Kitchen Counter'],
      ['Best Choice','Choose very ripe bananas with heavily spotted or almost completely black skins. The blacker, the better! As bananas develop dark skins and abundant brown spots, their starches convert into natural sugars, making them soft, fragrant, and ideal for baking.'],
      ['Storage','Keep at room temperature until fully ripe. If your bananas are still green, place them in a paper bag with a ripe apple or banana to speed up ripening.'],
      ['Why Cook?','Cooking the bananas in a skillet drives off excess moisture and concentrates their natural sugars, creating a thick, jammy texture and deep banana flavor without adding extra sugar.']
    ]
  },
  {
    name:'PLAIN BISCUITS',
    tag:'THE CRUST FOUNDATION',
    details:[
      ['Flavor','A crisp, spiced crumb crust featuring cinnamon, ginger, and nutmeg that beautifully balances the rich, sweet banana filling.'],
      ['Substitute','Biscoff cookies or graham crackers.'],
      ['Midnight Fix','If using Biscoff, skip the cinnamon, ginger, and nutmeg. Simply combine the crumbs with melted butter.'],
      ['Crust Technique','Baking the crust for 8–10 minutes helps set its structure, preventing it from becoming soggy under the rich custard and fresh bananas.']
    ]
  },
  {
    name:'WHOLE MILK',
    tag:'THE CREAMY BALANCE',
    details:[
      ['Why Whole Milk?','Its fat content gives the filling a richer, creamier mouthfeel while keeping the custard lighter than one made entirely with cream.'],
      ['Substitute','2% milk works too, but the filling will be slightly lighter.']
    ]
  }
],
    stats:{prep:'20 mins',cook:'30 mins',chill:'3 hrs+',total:'3 hrs 50 mins+',serves:'6–8',pan:'9-inch / 23 cm pie plate',quiet:'⭐⭐⭐☆☆'}, showPan:true, showChill:true,
    ingredients:[
      {group:'Crust'},
      {amount:200,unit:'g',item:'Plain Biscuits, Finely Crushed'}, {amount:0.5,unit:'tsp',imperialAmount:0.5,imperialUnit:'tsp',item:'Ground Cinnamon'}, {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Ground Ginger'}, {amount:1,unit:'pinch',item:'Ground Nutmeg'}, {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Salt'}, {amount:80,unit:'g',item:'Unsalted Butter, Melted'},
      {group:'Filling'},
      {amount:3,unit:'',item:'Bananas (Approx. 250 g Flesh), Very Ripe and Mashed'}, {amount:2,unit:'',item:'Firm-Ripe Bananas, Cut in Half Lengthwise'}, {amount:400,unit:'ml',item:'Whole Milk'}, {amount:3,unit:'large',item:'Egg Yolks'}, {amount:35,unit:'g',item:'Granulated Sugar'}, {amount:32,unit:'g',imperialAmount:4,imperialUnit:'tbsp',item:'Cornstarch'}, {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Vanilla Extract'}, {amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt'},
      {group:'Topping (Optional)'},
      {amount:180,unit:'ml',item:'35% Whipping Cream'}, {amount:38,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Granulated Sugar'}, {unit:'',item:'Cinnamon or Sliced Banana, to Finish',hideIngredientInfo:true}
    ],
    steps:[
      {number:'01',title:'TURN IT UP & MAKE IT JAMMY',clock:'2:55 AM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Cook {{qty:bananas (approx. 250 g flesh), very ripe and mashed}} very ripe mashed bananas (approx. {{approx:bananas (approx. 250 g flesh), very ripe and mashed}}) in a nonstick skillet over medium-low heat for 8–12 minutes, stirring often.',
        'Keep cooking until the moisture cooks off and the banana turns thick, glossy, and jammy.',
        'No sugar. No butter. Just banana. Set aside.'
      ],stepImages:[]},
      {number:'02',title:'FAKE THE BISCOFF',clock:'3:08 AM',paragraphs:[
        'Crush {{qty:Plain Biscuits, Finely Crushed}} plain biscuits finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Mix with {{qty:Ground Cinnamon}} cinnamon, {{qty:Ground Ginger}} ginger, {{qty:Ground Nutmeg}} nutmeg, {{qty:Salt}} salt, and {{qty:Unsalted Butter, Melted}} melted butter.',
        'Press firmly into a 9-inch (23 cm) pie dish.',
        'Bake for 8–10 minutes, then let cool.'
      ],stepNote:'**Midnight Shortcut:** Skip the oven entirely! Just press the crust into the dish and freeze it while making the filling. It won\'t be quite as toasted, but it sets super fast.',stepImages:[]},
      {number:'03',title:'MAKE IT THICK',clock:'3:20 AM',paragraphs:[
        'Whisk {{qty:Filling::granulated sugar}} sugar, {{qty:cornstarch}} cornstarch, and {{qty:Filling::salt}} salt in a saucepan.',
        'Gradually whisk in {{qty:Whole Milk}} whole milk until smooth.',
        'Cook over medium heat, whisking constantly, until the custard becomes very thick and starts to bubble.',
        'Keep whisking and cook for another 1–2 minutes after it starts bubbling.',
        'The whisk should leave a clear trail, and the custard should slowly fill it back in.'
      ],stepImages:[]},
      {number:'04',title:'WARM THE EGGS',clock:'3:25 AM',paragraphs:[
        'Whisk {{qty:egg yolks}} egg yolks in a bowl.',
        'Slowly add the hot custard, a little at a time, whisking constantly.',
        'Pour everything back into the saucepan.',
        'Return to low heat and cook for 1 minute, whisking constantly, until thick and glossy.',
        'Remove from the heat.'
      ],stepImages:[]},
      {number:'05',title:'BLEND THE BANANA IN',clock:'3:30 AM',paragraphs:[
        'Add the concentrated banana and {{qty:vanilla extract}} vanilla extract to the warm custard.',
        'Blend until completely smooth and silky.',
        '**Quiet Mode (Silent):** Want a little texture? Skip the food processor and stir it in by hand.'
      ],stepImages:[]},
      {number:'06',title:'HIDE THE BANANAS & NOW WE WAIT',clock:'3:35 AM',paragraphs:[
        'Peel {{qty:firm-ripe bananas, cut in half lengthwise}} firm-ripe bananas and cut each one in half lengthwise.',
        'Arrange the banana halves along the outer edge of the cooled crust, flat-side down.',
        'Pour the banana cream over the top and smooth the surface.',
        'Refrigerate for at least 4 hours. Overnight is even better!'
      ],stepImages:[]},
      {number:'07',title:'TOP IT OFF',clock:'NEXT DAY',paragraphs:[
        'Whip {{qty:35% Whipping Cream}} cold heavy cream to soft peaks. Add {{qty:Granulated Sugar, To Taste}} sugar and whip to medium-firm peaks.',
        'Dollop over the chilled pie and finish with cinnamon or sliced banana, if you like.'
      ],stepImages:[]}
    ],
    notes:[
      ['Midnight (Non)Compromises','Even in the middle of the night, concentrating the bananas is a non-negotiable.\n\nThose nearly black bananas are already packed with natural sweetness, so instead of adding more sugar, I cook them down in a skillet until their moisture evaporates and their natural sugars become concentrated.'],
      ['Experiment 1: The Banana Shape','Putting whole round banana slices in the pie made the banana presence too overwhelming.\n\nThe slices took over each bite and made the texture feel repetitive.\n\nCutting the fresh bananas **in half lengthwise** solved that problem.\n\nThe larger pieces create a clean cross-section while giving the pie a firm, juicy banana texture that contrasts with the smooth filling.'],
      ['Experiment 2: Concentrating the Banana','Simply mashing overripe bananas into the custard didn\'t give the banana flavor enough intensity.\n\nCooking the banana in a skillet first changed everything.\n\nThe excess moisture cooks away, the natural sugars become concentrated, and the banana develops a deeper, almost caramel-like flavor.'],
      ['Experiment 3: Blend it All Together',"I originally considered keeping the banana and vanilla custards separate, but that meant making two different layers and adding extra steps.\n\nInstead, I decided to blend the concentrated banana directly into the finished custard.\n\nThe food processor turns everything into a completely smooth, silky banana cream while keeping the process simple. (If you prefer a little rustic texture or don't want to wake up the house by running a food processor late at night—you can simply whisk or mash the cooked banana paste into the custard by hand.)\n\nThe result is a filling that tastes intensely of banana from the first bite to the last."],
      ['The Result','The final pie has a simple but satisfying contrast.\n\nThe fresh banana gives it texture, the concentrated banana brings depth, and the whipped cream adds a light finish.\n\nMost importantly, the banana isn\'t just sitting somewhere underneath the custard.\n\n**The banana is the custard!**']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly. Enjoy chilled straight from the fridge.',
      'MAKE AHEAD':'Yes. Prepare the pie the day before serving so it has time to chill thoroughly.',
      'STORAGE':'Store in an airtight container in the refrigerator for up to 3 days.',
      'FREEZER':'Freezing is not recommended. The bananas may darken and the custard filling can become watery or change texture after thawing.',
      'REHEAT':'Not applicable.'
    },
    mainIngredients:['Banana','Milk','Egg Yolks','Biscuits'], footerInspiredBy:'Midnight Experiment', footerCuisine:'American', footerCourse:'Baking, Desserts', footerMainIngredients:['Banana','Milk','Egg Yolks','Biscuits']
  },
  {
    slug:'sweet-potato-ginger-pie', title:'Sweet Potato Ginger Pie', description:'Inspired by Chinese sweet potato ginger dessert soup, this silky pie pairs earthy sweet potato with fresh ginger, cinnamon, and a gentle warming spice.', source:'Midnight Experiment', original:'N/A', cuisine:'Chinese', cuisineSecondary:'American',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], dateAdded:'2026-09-27', timeStamp:'11:35 PM',
    tags:['Midnight Experiment','Dessert','Baking','Chinese','American','Sweet Potato','Ginger','Pie'], heroImage:'images/recipes/sweet-potato-ginger-pie/hero.jpg', recipeImage:'images/recipes/sweet-potato-ginger-pie/recipe.jpg', usesUsual:'building-block-pie-crust', usCupFractions:true, forceCupUnits:true, stepQuantityConversion:true,
    story:`This pie is inspired by a traditional Chinese Sweet Potato Ginger Dessert Soup (番薯姜糖水), a simple, soothing sweet soup made by simmering sweet potatoes with fresh ginger and sugar in water.

I love how naturally sweet potato and ginger complement each other, the earthy sweetness of the sweet potato balanced by the warm, peppery kick of fresh ginger. I thought that combination would work beautifully in a pie, and I was right!

On a cold night, or after a long, exhausting day, this pie calls for real, freshly grated ginger rather than standard ground ginger. Fresh ginger brings a bright, comforting heat that truly warms you up from the inside and helps you unwind.

Instead of simply swapping pumpkin for sweet potato in a classic pumpkin pie recipe, I wanted a warmer, punchier dessert where fresh ginger could take center stage.

What you get is a silky, creamy pie filled with naturally sweet roasted sweet potato, a touch of cinnamon warmth, and that unmistakable, gentle kick of fresh ginger.`,
    ingredientFile:[
  {
    name:'SWEET POTATOES',
    tag:'THE COMFORTING CORE',
    details:[
      ['Flavor','Naturally sweet, earthy, creamy, and comforting.'],
      ['Roasting vs. Quick Cooking','Roasting whole sweet potatoes in their skins helps convert starches into maltose, developing deeper sweetness while evaporating excess moisture. If you choose the midnight shortcut (microwaving or boiling), let the cooked sweet potato steam-dry thoroughly before mashing so your pie filling won’t turn watery.'],
      ['Substitute','Japanese (Satsumaimo) or Korean sweet potatoes work well for an even denser, sweeter interior. You may need a splash of extra cream to loosen the thicker purée.'],
      ['Storage','Store whole sweet potatoes in a cool, dry, well-ventilated place. Once cooked, refrigerate in an airtight container for up to 3 days.']
    ]
  },
  {
    name:'FRESH GINGER',
    tag:'THE AROMATIC KICK',
    details:[
      ['Flavor','Warm, peppery, citrusy, and pleasantly spicy.'],
      ['Peeling Tip','Use the edge of a spoon to gently scrape away the skin. It follows ginger’s knobby shape and reaches into tight corners without removing too much flesh. If using organic ginger, you can also leave the skin on after washing and scrubbing it thoroughly.']
      ['Substitute','Ground ginger can be used in place of fresh ginger, but it produces a warmer, more subtle flavor.'],
      ['Midnight Fix','Use ¾ tsp (1½ g) ground ginger to replace 3/4 tsp (6 g) fresh ginger. Ground ginger provides gentle background warmth, while finely grated fresh ginger delivers the bright, peppery, citrusy zing that defines the flavor of Sweet Potato Ginger Dessert Soup (番薯姜糖水).'],
      ['Storage','Submerge peeled ginger in a clean container of water, refrigerate, and change the water every 2–3 days. For longer storage, freeze whole and grate directly from frozen.']
    ]
  },
  {
    name:'10% CREAM',
    tag:'ONLY 10%, BUT ESSENTIAL',
    details:[
      ['Flavor','Light, creamy, and milky.'],
      ['Why Here','Heavy 35% whipping cream can coat the palate and dull the fresh ginger aroma. Using 10% cream provides just enough dairy fat to create a silky custard while keeping the dessert light and allowing the ginger flavor to shine.'],
      ['Substitute','Half-and-half works well. For a similar fat content, mix mix 7 parts 2% milk with 3 parts 35% whipping cream (about ¼ cup (60ml) milk + 2 tbsp (30ml) cream for this recipe)'],
    ]
  }
],
    stats:{prep:'30 mins',cook:'1 hr 45 mins',chill:'2 hrs+',total:'4 hrs 15 mins+',serves:'8',quiet:'⭐⭐⭐⭐☆'},
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'FILLING'},
      {amount:400,unit:'g',imperialAmount:2,imperialUnit:'cup',item:'Cooked Sweet Potato Flesh'}, {amount:90,unit:'ml',imperialAmount:6,imperialUnit:'tbsp',item:'10% Cream'}, {amount:70,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Granulated Sugar'}, {amount:2,unit:'',item:'Large Eggs'}, {amount:6,unit:'g',item:'Fresh Ginger, Finely Grated'}, {amount:2,unit:'g',imperialAmount:0.75,imperialUnit:'tsp',item:'Ground Cinnamon'}, {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Kosher Salt'},
      {group:'For Finishing'},
      {unit:'',item:'Crystallized Ginger, Finely Chopped, for Finishing'}, {unit:'',item:'Ground Cinnamon, for Dusting'}
    ],
    steps:[
      {number:'01',title:'COOK THE SWEET POTATO',clock:'11:35 PM',paragraphs:[
        'For the best flavor, roast whole sweet potatoes at 175°C / 350°F for 45–60 minutes, until completely soft.',
        'Midnight Shortcut — Microwave',
        'Peel and cut the sweet potato into chunks. Place in a microwave-safe bowl with a small splash of water and cover.',
        'Midnight Shortcut — Boil',
        'Peel and cut the sweet potato into chunks. Simmer in water for 15–20 minutes, until fork-tender.'
      ],stepImages:[]},
      {number:'02',title:'MAKE THE CRUST',clock:'11:45 PM',paragraphs:[
        'While the sweet potatoes are roasting… start making Building Block Pie Crust (OPTION B — PARTIAL BLIND-BAKE).',
        'Midnight Shortcut',
        'Use a good-quality store-bought pie crust. Tonight is about the filling.'
      ],stepImages:[]},
      {number:'03',title:'BLEND THE FILLING',clock:'12:25 AM',paragraphs:[
        'Once the sweet potato is cooked and cool enough to handle, measure {{qty:Cooked Sweet Potato Flesh}}.',
        'Finely grate {{qty:Fresh Ginger, Finely Grated}} ginger.',
        'Combine {{qty:Cooked Sweet Potato Flesh}} sweet potato, {{qty:10% Cream}} 10% cream, {{qty:FILLING::Granulated Sugar}} Granulated Sugar, {{qty:large eggs}} large eggs, {{qty:Fresh Ginger, Finely Grated}} fresh ginger, {{qty:Ground Cinnamon}} ground cinnamon, and {{qty:Kosher Salt}} kosher salt.',
        'Food Processor — Fastest',
        'Blend the sweet potato and all remaining filling ingredients and blend briefly until silky.',
        'Quiet Mode — Silent',
        'Mash the sweet potato thoroughly, add all remaining filling ingredients, and blend directly in the bowl with a hand blender until completely smooth.'
      ],stepImages:[]},
      {number:'04',title:'BAKE',clock:'12:30 AM',paragraphs:[
        'Pour the filling into the crust.',
        'Bake at 175°C / 350°F for 40–50 minutes.',
        'The edges should be set and the centre should still have a slight wobble.',
        'Remove from the oven and cool completely at room temperature.',
        'The filling will continue to set as it cools.'
      ],stepImages:[]},
      {number:'05',title:'CHILL & FINISH',clock:'1:20 AM',paragraphs:[
        'Let the pie cool completely before refrigerating. Once cooled, refrigerate for at least 2 hours, preferably overnight.',
        'Just before serving, sprinkle the pie with finely chopped crystallized ginger and a light dusting of cinnamon.',
        'Slice and serve chilled.'
      ],stepImages:[]}
    ],
    notes:[
      ['Recreating the Soup Flavor',`Fresh ginger is the signature. It gives the pie the warm, peppery character that defines Chinese Sweet Potato Ginger Dessert Soup (番薯姜糖水).
Keep the spices simple. There is no nutmeg, cloves, cardamom, or vanilla. Cinnamon supports the ginger instead of turning this into a classic pumpkin-spice pie.
Don\'t over-sweeten it. The sweet potato provides natural sweetness, while crystallized ginger adds a little sweetness and a pleasant spicy bite.`],
      ['Moisture Control (This is CRUCIAL!)',`No time to roast? If you take the midnight shortcut and boil your sweet potato chunks, spread them out on a plate for 5 minutes after draining to let the steam escape. Excess trapped water will weaken the custard structure and lead to a soggy pie base.`]
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly, when the sweet potato, ginger, and cinnamon flavors have had time to come together.',
      'MAKE AHEAD':'Yes. Make the pie the day before serving and refrigerate overnight.',
      'STORAGE':'Cover and refrigerate for up to 4 days.',
      'FREEZER':'Freeze the fully cooled pie, wrapped tightly and placed in a freezer-safe container, for up to 1 month for best quality. Thaw overnight in the refrigerator. The filling may soften slightly after thawing.',
      'REHEAT':'Gently warm individual slices in a low oven if you prefer the pie warm.'
    },
    mainIngredients:['Sweet Potato','Ginger','Cream','Cinnamon'], footerInspiredBy:'Traditional', footerCuisine:'Chinese · American', footerCourse:'Desserts', footerMainIngredients:['Sweet Potato','Ginger','Cream','Cinnamon']
  },
  {
    slug:'building-block-pie-crust', title:'Building Block Pie Crust', source:'The Usuals', cuisine:'American', course:'Baking', courseDisplay:'Baking', categories:['Baking'], dateAdded:'2026-09-27', timeStamp:'',
    isUsuals:true, usualsCategory:'BASES & CRUSTS', foundInIntro:'Recipes that use this crust...', hideRecipeTags:true,
    description:'The crust we make when a pie calls for a crust.',
    usualIntro:`This is our go-to pie crust — the one we come back to whenever a recipe needs a buttery, tender crust. Nothing fancy. Just a reliable crust that works.\n\nWe use it for sweet pies, savoury pies, and pretty much anything in between.\n\nAt Midnight Recipes, our pies take three different routes: some go into the oven with an unbaked crust (No Pre-Baking), some need a little head start (Partial Blind-Baking), and others need the crust fully baked before the filling goes in (Full Blind-Baking).\n\n**No Pre-Baking** is for pies like Sweet Cherry Pie, where the filling and crust bake together. For a double-crust pie, the second portion of dough becomes the top crust.\n\n**Partial Blind-Baking** gives the crust a head start before the filling goes in. We use this method for pies like [Classic Pumpkin Pie](recipes/recipe.html?slug=classic-pumpkin-pie) and [Sweet Potato Ginger Pie](recipes/recipe.html?slug=sweet-potato-ginger-pie), where the crust needs extra time to bake without overcooking the filling.\n\n**Full Blind-Baking** takes the crust all the way to golden and crisp before the filling is added. This is useful for pies with fillings that are already cooked or don't need to be baked.\n\nThree methods, one dependable crust. Choose the route that suits your pie.\n\nThis recipe makes enough for one double-crust pie, or two single-crust pies. If you only need a bottom crust, use half and freeze the rest. Or make the full batch anyway. Future-you might be grateful when the midnight urge to bake strikes.`,
    heroImage:'images/recipes/building-block-pie-crust/hero.jpg', recipeImage:'images/recipes/building-block-pie-crust/recipe.jpg',
    unitOverrides:{imperial:{'all-purpose flour':'cup','cold unsalted butter, cubed':'cup','salt':'tsp'},metric:{'cold water':'ml'}},
    densityOverrides:{'all purpose flour|cup':120,'cold unsalted butter cubed|cup':113},
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[],
    ingredients:[
      {amount:360,unit:'g',imperialAmount:3,imperialUnit:'cup',item:'All-Purpose Flour'},
      {amount:226,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Cold Unsalted Butter, Cubed'},
      {amount:6,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Salt'},
      {minAmount:80,maxAmount:100,unit:'ml',imperialMinAmount:5,imperialMaxAmount:7,imperialMinUnit:'tbsp',imperialMaxUnit:'tbsp',item:'Cold Water'}
    ],
    stats:{prep:'20 mins',cook:'20–45 mins depending on finish',total:'40–65 mins depending on finish',serves:'Enough for one 23 cm / 9-inch double-crust pie, or two single-crust pies.',pan:'23 cm / 9-inch pie dish',quiet:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'MAKE THE DOUGH',clock:'',paragraphs:[
        'Mix the flour and salt in a large bowl. Add the cold, cubed butter and work it into the flour until the mixture resembles coarse crumbs, with some small pieces of butter still visible.',
        'Start with 80 ml ice-cold water, adding it gradually while mixing gently. Add more, a little at a time, only until the dough holds together when pressed. It should not feel wet or sticky.',
        '**Midnight Shortcut — Food Processor:** Pulse the flour, salt, and cold butter until coarse crumbs form. Add the water gradually and pulse just until the dough begins to come together. Avoid overmixing.'
      ]},
      {number:'02',title:'DIVIDE & CHILL',clock:'',paragraphs:[
        'Divide the dough into two equal portions. Shape each portion into a flat disc, wrap tightly, and refrigerate for at least 30 minutes, or until firm but still pliable.',
        'For a single-crust pie, use one portion and freeze the other for later. For a double-crust pie, use one disc for the base and the other for the top.',
        'When ready to assemble, roll out the dough on a lightly floured surface. Transfer the bottom crust to a 23 cm / 9-inch pie dish, gently pressing it into the base and sides without stretching. Trim or crimp the edges as needed.',
        'If the dough feels too firm to roll, let it sit at room temperature for a few minutes. If it becomes soft or sticky, return it to the refrigerator before continuing.'
      ]},
      {number:'',title:'OPTION A — NO PRE-BAKING',clock:'',paragraphs:[
        '**For pies that bake with their filling**, such as Sweet Cherry Pie.',
        'Add the filling to the unbaked crust and bake according to the individual pie recipe.',
        'For a double-crust pie, roll out the second portion, cover the filling, and gently press the top and bottom edges together to seal. Trim any excess dough, crimp the edges, and cut a few vents in the top crust to let steam escape.',
        'Follow the temperature and baking time specified in the individual pie recipe. Fruit pies often need a longer bake so the filling cooks through and the bottom crust has time to bake properly.'
      ]},
      {number:'',title:'OPTION B — PARTIAL BLIND-BAKE',clock:'',paragraphs:[
        '**For pies that need a head start**, such as Classic Pumpkin Pie and Sweet Potato Ginger Pie.',
        'Preheat the oven to 175°C / 350°F, unless the individual pie recipe specifies otherwise.',
        'Line the chilled crust with parchment paper, pressing it gently into the base and sides. Fill with pie weights or dried beans, distributing them evenly to support the sides as well as the base.',
        'Bake for about 15–20 minutes, until the edges are set and the pastry no longer looks raw. Carefully remove the parchment and weights.',
        'Prick the base several times with a fork, then return the crust to the oven for another 5–10 minutes. The base should look dry and set, but it does not need to be fully browned.',
        'Let the crust cool slightly, then add the filling and continue baking according to the individual pie recipe.',
        '**Midnight Compromise — No Pie Weights?:** Pricking the base with a fork before baking can help steam escape, but it is less reliable than weights for preventing the sides from shrinking or slumping. If you skip the weights, keep a close eye on the crust as it bakes.'
      ]},
      {number:'',title:'OPTION C — FULL BLIND-BAKE',clock:'',paragraphs:[
        '**For pies with cooked or no-bake fillings** that will not go back into the oven.',
        'Preheat the oven to 175°C / 350°F, unless the filling recipe specifies otherwise.',
        'Line the chilled crust with parchment paper and fill with pie weights or dried beans. Bake for about 15–20 minutes, until the edges are set and the pastry no longer looks raw.',
        'Carefully remove the parchment and weights. Prick the base several times with a fork, then return the crust to the oven for another 15–25 minutes, checking regularly, until the base is dry and the pastry is evenly golden.',
        'The total baking time will vary depending on your oven and pie dish, so look for the finished texture and colour rather than relying on the clock alone. Cool completely before adding the filling.'
      ]}
    ],
    notes:[
      ['The Two-Minute Decision','Before you start, ask what happens to the filling after it goes into the crust. If the filling and crust bake together, choose No Pre-Baking for pies such as Sweet Cherry Pie, unless the individual recipe says otherwise. If the filling needs less oven time than the crust, choose Partial Blind-Baking. If the filling will not be baked, choose Full Blind-Baking and cool the crust completely before filling. Always follow the individual pie recipe if it specifies a particular crust preparation method.'],
      ['Tip #1 — Keep the Butter Cold','Cold butter is part of what gives pie crust its flaky texture. If it softens too much before baking, the crust can lose some of that texture and shrink more easily. If the dough starts feeling greasy or soft, stop and put it back in the fridge. There is no need to rush it.'],
      ['Tip #2 — Water Is a Slow Addition','Start with the smaller amount and add more gradually. The dough is ready when you can press a handful together and it holds its shape. It may still look a little crumbly. That is fine. You want it to come together, not become a smooth, wet ball.'],
      ['Tip #3 — Crumbly Is Not Always a Crisis','If the dough falls apart when pressed, it may simply need a little more water. Sprinkle in cold water a teaspoon at a time and gently press the dough together. Avoid kneading it until smooth. Too much handling can make the crust tough.'],
      ['Tip #4 — Give It a Cold Rest','Chilling the shaped crust helps firm the butter and relax the dough, making it less likely to shrink in the oven. The refrigerator is the usual choice; the freezer is the midnight shortcut. Dough frozen solid may need time to soften before it can be handled. Aim for cold and firm, not brittle.'],
      ['Tip #5 — Let the Glass Dish Tell You','Glass pie dishes heat differently from metal ones. Check the bottom and edges instead of relying on time alone. If the base still looks pale or damp, it may need more time.']
    ],
    finePrint:{
      'BEST EATEN':'Use the crust in your chosen pie, following that recipe’s baking instructions.',
      'MAKE AHEAD':'Yes. Prepare the dough ahead of time and refrigerate until ready to use.',
      'STORAGE':'Wrap dough tightly and refrigerate for 2–3 days.',
      'FREEZER':'Wrap unused dough tightly and freeze for up to 2 months for best quality. Thaw in the refrigerator before using. A shaped, unbaked pie shell can also be frozen; follow the individual pie recipe for baking from frozen or thawed.',
      'REHEAT':'Not applicable.'
    },
    tags:['The Usuals','Bases & Crusts','Pie'], mainIngredients:['Flour','Butter','Salt','Pie']
  },

  {
    slug:'fun-key-lime-pie', title:'Fun(Key) Lime Pie', source:'Grocery Store Find', original:'', dish:'Lime Pie', cuisine:'American', dateAdded:'2026-10-08',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], timeStamp:'11:20 PM',
    description:'A Key Lime Pie-inspired pie made with the limes you can actually find.',
    story:`Key Lime Pie is everywhere in Toronto. I kept seeing it in grocery store freezer sections and bakery display cases, almost as if it were just another everyday dessert.

One night, I decided to make one myself and went looking for actual Key limes. 
And suddenly, they were nowhere to be found. 

The pie was easy to find. The Key limes were not.

So I stopped hunting for the elusive Key lime and worked with what I could actually buy: standard Persian limes. 

A traditional Key Lime Pie is a clash of extremes—intensely sharp lime sourness meeting heavy, syrup-sweet condensed milk. The first time I ever tried an authentic slice, my immediate thought was, *“Wow, everything about this is SO strong... this is THE classic American flavor!”*

To make it a little milder and more refined for my late-night palate, I brought in sour cream for extra body and a soft, smooth tang. 

It isn't a traditional Key Lime Pie, but it delivers all the creamy, tart, and sun-bright character I was craving. It’s a Key Lime Pie-inspired dessert, made with the limes you can actually find!`,
    heroImage:'images/recipes/fun-key-lime-pie/hero.jpg', recipeImage:'images/recipes/fun-key-lime-pie/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    forceCupUnits:true,
    ingredientFile:[
  {
    name:'SWEETENED CONDENSED MILK',
    tag:'THE SWEET & MILKY MAGIC',
    details:[
      ['Flavor','Rich, milky, and intensely sweet, with a caramel-like note.'],
      ['Best Choice','Use standard full-fat sweetened condensed milk. The entire 300 ml can is used in this recipe.'],
      ['Why Here','The acidity in lime juice reacts with the milk proteins (casein), helping the filling thicken naturally without the need for starch or gelatin.'],
      ['No Substitute','Evaporated milk is not a direct substitute. It is unsweetened and has a much thinner consistency.'],
      ['Storage','Refrigerate any leftovers in an airtight container after opening.']
    ]
  },
  {
    name:'PERSIAN / TAHITI LIMES',
    tag:'THE ACCESSIBLE STAR',
    details:[
      ['Flavor','Bright, tart, fresh, and aromatic.'],
      ['Best Choice','Choose firm, heavy limes with fragrant skin. Since the zest is used, organic or unwaxed limes are ideal. If using waxed limes, scrub and rinse them thoroughly before zesting.'],
      ['Why Here','Regular Persian (Tahiti) limes are much easier to find in Toronto while still providing the bright acidity and fresh lime aroma this pie needs.'],
      ['Why Extra Zest?','Persian limes are generally less floral and intense than tiny Key limes. Adding a generous finely grated fresh zest helps bridge that flavor gap, bringing vivid lime aromatics to every bite.'],
      ['Substitute','Key limes can be used if you are lucky enough to find them. Use the same total amount of juice. Bottled Key lime juice works in a pinch, but fresh juice and zest are preferred for the brightest flavor.'],
      ['Storage','Store whole limes at room temperature for short-term use or refrigerate them for longer storage.'],
      ['Juicing Tip','One average-sized lime yields about 2 tbsp (30 ml) of fresh juice. Roll each lime firmly against the counter before juicing to help release more juice. Make sure to zest the limes before squeezing.']
    ]
  },
  {
    name:'SOUR CREAM',
    tag:'THE UNSUNG HERO',
    details:[
      ['Flavor','Creamy and slightly tangy, with a subtle fermented note.'],
      ['Best Choice','Use regular full-fat sour cream rather than a very low-fat version.'],
      ['Why Here','It adds body, creaminess, and extra tang to the filling without increasing the amount of condensed milk.'],
      ['Substitute','Plain full-fat Greek yogurt can work, although the flavor will be slightly different.']
    ]
  },
  {
    name:'CREAM OF TARTAR',
    tag:'THE MERINGUE BACKBONE',
    details:[
      ['Flavor','Mildly acidic, but the small amount used here does not noticeably affect the flavor.'],
      ['Why Here','Egg white proteins can over-expand and collapse easily. Cream of tartar helps stabilize the protein network, reducing the risk of the meringue weeping (releasing liquid) or shrinking after baking.'],
      ['Substitute','A small amount of lemon juice or white vinegar can help stabilize meringue, but cream of tartar is preferred here because it adds very little extra liquid.'],
      ['Midnight Fix','If you don’t have cream of tartar, you can still make the meringue without it. Make sure the bowl and beaters are completely clean and dry, and add the sugar gradually.']
    ]
  }
],
    ingredients:[
      {group:'Graham Cracker Crust'},
      {amount:200,unit:'g',item:'Graham Crackers, Finely Crushed'},
      {amount:76,unit:'g',item:'Unsalted Butter, Melted'},
      {group:'Lime Filling'},
      {amount:300,unit:'ml',item:'Sweetened Condensed Milk'},
      {amount:3,unit:'large',item:'Egg Yolks'},
      {amount:58,unit:'g',imperialAmount:1/4,imperialUnit:'cup',item:'Sour Cream'},
      {amount:120,unit:'ml',item:'Fresh Lime Juice'},
      {amount:6,unit:'g',item:'Finely Grated Lime Zest'},
      {group:'Meringue'},
      {amount:3,unit:'large',item:'Egg Whites'},
      {amount:50,unit:'g',item:'Granulated Sugar'},
      {amount:0.5,unit:'g',item:'Cream of Tartar'}
    ],
    stats:{prep:'20 mins',cook:'30 mins',chill:'4 hrs+',total:'4 hrs 50 mins +',serves:'6–8',pan:'23 cm / 9-inch pie dish',quiet:'⭐☆☆☆☆'},
    steps:[
      {number:'01',title:'CRUSH IT DOWN',clock:'11:20 PM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Crush {{qty:Graham Cracker Crust::Graham Crackers, Finely Crushed}} graham crackers finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Add {{qty:Graham Cracker Crust::Unsalted Butter, Melted}} melted butter to the crushed graham crackers and mix until the crumbs are evenly coated.',
        'Press the crumb mixture firmly into a 9-inch (23 cm) pie dish using the flat bottom of a cup.',
        'Bake for 8–10 minutes. Let it cool.'
      ],stepNote:'**Midnight Shortcut:** Skip baking and freeze the crust while you make the filling.',stepImages:['images/recipes/fun-key-lime-pie/step-01-01.jpg','images/recipes/fun-key-lime-pie/step-01-02.jpg','images/recipes/fun-key-lime-pie/step-01-03.jpg']},
      {number:'02',title:'MIX THE LIME FILLING',clock:'11:32 PM',paragraphs:[
        'Finely grate the zest from the limes, then squeeze the limes to make {{qty:Lime Filling::Fresh Lime Juice}} of fresh lime juice.',
        'Separate the eggs, placing the {{qty:Lime Filling::Egg Yolks}} egg yolks in a mixing bowl and reserving the {{qty:Meringue::Egg Whites}} egg whites for the meringue.',
        'Add the {{qty:Lime Filling::Sweetened Condensed Milk}} sweetened condensed milk, {{qty:Lime Filling::Sour Cream}} sour cream, {{qty:Lime Filling::Finely Grated Lime Zest}} lime zest, and {{qty:Lime Filling::Fresh Lime Juice}} lime juice to the egg yolks.',
        'Whisk everything together until completely smooth.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-02-01.jpg','images/recipes/fun-key-lime-pie/step-02-02.jpg','images/recipes/fun-key-lime-pie/step-02-03.jpg','images/recipes/fun-key-lime-pie/step-02-04.jpg']},
      {number:'03',title:'BAKE THE FILLING',clock:'11:40 PM',paragraphs:[
        'Pour the lime filling into the cooled 23 cm / 9-inch graham cracker crust.',
        'Bake at 175°C / 350°F for 10 minutes.',
        'The edges should be beginning to set while the center still has a gentle jiggle.',
        'Remove the pie from the oven and let it rest for 5–10 minutes while preparing the meringue.'
      ],stepNote:'**Midnight Shortcut:** You can make the meringue before this step and bake the filling and meringue together for about 10 minutes. Doing them separately is a little less risky and gives you more control.',stepImages:['images/recipes/fun-key-lime-pie/step-03-01.jpg','images/recipes/fun-key-lime-pie/step-03-02.jpg']},
      {number:'04',title:'WHIP THE MERINGUE',clock:'11:50 PM',paragraphs:[
        'Place the {{qty:Meringue::Egg Whites}} egg whites in a completely clean and dry bowl. Beat until foamy.',
        'Add {{qty:Meringue::Cream of Tartar}} cream of tartar.',
        'Gradually add the {{qty:Meringue::Granulated Sugar}} granulated sugar, a little at a time, while continuing to beat.',
        'Continue beating until the meringue is glossy and holds stiff peaks.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-04-01.jpg','images/recipes/fun-key-lime-pie/step-04-02.jpg']},
      {number:'05',title:'MAKE THE PEAKS',clock:'11:55 PM',paragraphs:[
        'Spoon the meringue over the **warm** lime filling.',
        'Spread the meringue all the way to the edge of the crust, making sure it completely touches and seals against the filling and crust edge. Leaving zero gaps is crucial to prevent the meringue from shrinking or weeping liquid later.',
        'Gently touch the back of a spoon to the meringue and pull straight up to build rustic, airy peaks.',
      ],stepImages:['images/recipes/fun-key-lime-pie/step-05-01.jpg','images/recipes/fun-key-lime-pie/step-05-02.jpg']},
      {number:'06',title:'BROWN THE MERINGUE & CHILL',clock:'12:00 AM',paragraphs:[
        'Return the pie to the 175°C / 350°F oven for 5–10 minutes, until the peaks are lightly golden.',
        'Watch closely near the end because the tips can brown quickly.',
        'Refrigerate for at least 4 hours before slicing.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-06-01.jpg']}
    ],
    notes:[
      ['This is a seriously easy pie.','If I had to name the most annoying part, it\'s squeezing the limes and grating the zest. Once that\'s done, you\'re basically finished. Everything else is just mixing, baking, and waiting for the pie to chill—which is most of the work. So if you\'re making this at midnight, don\'t let the long recipe card fool you. The lime is the hardest part!'],
      ["Can't Find Key Limes? Not a Problem at All!",'Key limes are tiny, seeded, and notoriously hard to find in Toronto. Regular Persian limes are readily available everywhere. By doubling down on fresh zest and adding sour cream, you get all the vivid citrus punch and creamy texture without a wild goose chase.'],
      ['Preventing Meringue Weeping','Meringue weeps (releases droplets of syrup or separates from the filling) when there is a temperature mismatch or moisture trapped between layers.\n1. Spread Over Warm Filling: Always dollop your meringue while the baked lime custard is still warm (fresh out of Step 03). The heat from below cooks the bottom of the meringue slightly, anchoring it firmly to the custard.\n2. Seal to the Edge: Spread the meringue so it touches the graham crust all the way around. Leaving any exposed filling creates a gap where moisture condenses as the pie cools.\n3. Stabilize with Acid: Cream of tartar prevents the egg white proteins from collapsing, holding onto moisture.'],
    ],
    finePrint:{
      'BEST EATEN':'A lime pie requires at least 4 hours in the fridge to set into clean slices, but leaving a meringue pie in the fridge for 2–3 days will cause the meringue to absorb humidity and turn soft.',
      'MAKE AHEAD':'Yes. Bake the night before and chill overnight in the refrigerator',
      'STORAGE':'Refrigerate, covered, for up to 2 days. Best enjoyed within 24 hours of baking to prevent meringue weeping.',
      'FREEZER':'Freezing is not recommended for this meringue-topped pie. The meringue may weep or become watery, and its texture can change after thawing.',
      'REHEAT':'Not applicable.'
    },
    tags:['Baking','Dessert','American','Lime','Key Lime Pie','Pie','Meringue','Toronto','Grocery Store Find'], mainIngredients:['Lime','Eggs','Cream','Pie'], usualsCategory:''
  },

  {
    slug:'tom-kha-gai',
    title:'Tom Kha Gai (Coconut Chicken Soup)',
    source:'Internet Find',
    original:'TasteAtlas',
    originalUrl:'https://www.tasteatlas.com/',
    dish:'Tom Kha Gai / ต้มข่าไก่',
    cuisine:'Thai',
    course:'Soups',
    courseDisplay:'Soups',
    categories:['Soups'], mainIngredients:['Chicken','Coconut Milk','Galangal','Lemongrass','Mushrooms'],
    dateAdded:'2026-10-08',
    timeStamp:'11:21 PM',
    description:'A Thai coconut chicken soup with galangal (kha), lemongrass, makrut lime leaves, fresh lime, and gentle chili heat—my late-night attempt to see if it deserved its reputation.',
    story:`TasteAtlas had ranked Tom Kha Gai #1 on its list of the world’s best chicken soups. I was already familiar with Tom Yum, but somehow Tom Kha Gai had always stayed in the background for me.

It sounded like a dream combination: creamy coconut milk, the bright citrus of makrut lime leaf and lemongrass, fresh lime acidity, and the gentle heat and peppery bite of chilies and galangal.

The biggest challenge was simply finding all the ingredients. The actual cooking is surprisingly quick and simple, and in a diverse city like Toronto, hunting down those fresh Asian herbs isn't as difficult as you might think.

When I took my first sip, I instantly understood why it earned that top spot. It’s an incredible balance of contrasts: the soothing, rich coconut milk hits you first, followed by the sharp citrus of makrut lime and lemongrass, the woody-peppery warmth of fresh galangal, and finally a clean, bright sour kick from fresh lime juice. It’s rich, velvety, sour, and mildly spicy all in one spoon.

If the internet was calling it the world’s best chicken soup, I just had to find out for myself even at midnight..!`,
    heroImage:'images/recipes/tom-kha-gai/hero.jpg',
    recipeImage:'images/recipes/tom-kha-gai/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[
  {
    name:'COCONUT MILK',
    tag:'THE CREAMY SOUL',
    details:[
      ['Flavor','Rich, creamy, tropical, and subtly nutty.'],
      ['Best Choice','Use full-fat coconut milk for a richer, creamier broth.'],
      ['Temperature Control','Never let coconut milk come to a hard, rolling boil. High heat can destabilize the fat-and-water emulsion, causing the broth to separate and look oily or curdled. Keep the heat low once the coconut milk is added.'],
      ['Substitute','Lite coconut milk can be used, but the broth will be less rich.'],
      ['Midnight Fix','If using lite coconut milk, reduce the added water or chicken stock by about ¼ cup (60–80 ml). Lite coconut milk contains more water, so reducing the extra liquid helps prevent a thin, watery soup.']
    ]
  },
  {
    name:'GALANGAL',
    tag:'THE SIGNATURE AROMATIC',
    details:[
      ['Flavor','Woody, citrusy, piney, and distinctly peppery. Its flavor is quite different from ordinary ginger.'],
      ['Where to Find','Look in Toronto Asian grocery stores such as Best Fresh Foods, Nations, Chinatown markets, and T&T.'],
      ['Substitute','Fresh ginger with a little extra lemongrass can approximate some of its aromatic qualities. Ginger brings a sharper, biting heat, while galangal has a rounder, more botanical aroma that defines Tom Kha.'],
      ['Storage','Wrap fresh galangal loosely and freeze for longer storage. Keep dried galangal in an airtight container in a cool, dark place.'],
      ['Midnight Fix','Frozen or dried galangal works when fresh is unavailable.']
    ]
  },
  {
    name:'MAKRUT LIME LEAVES',
    tag:'THE CITRUS PERFUME',
    details:[
      ['Flavor','Intensely citrusy, floral, sweet, and aromatic.'],
      ['Best Choice','Fresh makrut lime leaves offer the most vibrant fragrance.'],
      ['Pro Technique','Tear or gently bruise the leaves with your hands before adding them to the pot. This helps release their aromatic oils and infuse the broth.'],
      ['Where to Find','Look in Toronto Asian grocery stores such as Best Fresh Foods, Nations, Chinatown markets, and T&T.'],
      ['Substitute','Fresh lime zest adds some citrus aroma, but cannot fully replace the distinctive fragrance of makrut lime leaves.'],
      ['Storage','Freeze fresh leaves in an airtight bag so you can use them whenever needed. Dried leaves can also be stored in an airtight container.']
    ]
  },
  {
    name:'LEMONGRASS',
    tag:'THE LEMON IMPERSONATOR',
    details:[
      ['Flavor','Bright, citrusy, grassy, and refreshing.'],
      ['Substitute','Frozen or pre-minced lemongrass is convenient when fresh stalks are unavailable.'],
      ['Storage','Refrigerate fresh stalks for about a week or freeze them for longer storage.'],
      ['Midnight Fix','When whole stalks are inconvenient, use 1½ tbsp (about 8-10g) finely minced lemongrass instead.']
    ]
  }
],
    ingredients:[
      {group:'Chicken & Coconut Base'},
      {amount:227,unit:'g',imperialAmount:0.5,imperialUnit:'lb',item:'Boneless, Skinless Chicken Thighs'},
      {amount:150,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Mushrooms'},
      {amount:400,unit:'ml',imperialAmount:5/3,imperialUnit:'cup',item:'Coconut Milk'},
      {amount:240,unit:'ml',imperialAmount:1,imperialUnit:'cup',item:'Water or Chicken Stock'},
      {group:'Aromatics'},
      {amount:30,unit:'g',imperialMinAmount:10,imperialMaxAmount:12,imperialMinUnit:'slices',imperialMaxUnit:'slices',item:'Galangal, Thinly Sliced',compactRange:true},
      {minAmount:1,maxAmount:2,unit:'stalks',imperialMinAmount:1,imperialMaxAmount:2,imperialMinUnit:'stalks',imperialMaxUnit:'stalks',item:'Lemongrass, Bruised and Cut Into Pieces',compactRange:true},
      {minAmount:4,maxAmount:5,unit:'leaves',imperialMinAmount:4,imperialMaxAmount:5,imperialMinUnit:'leaves',imperialMaxUnit:'leaves',item:'Makrut Lime Leaves, Rehydrated if Dried',compactRange:true},
      {amount:0.5,unit:'',imperialAmount:0.5,imperialUnit:'',item:'Onion, Sliced'},
      {amount:1,unit:'clove',imperialAmount:1,imperialUnit:'clove',item:'Garlic, Lightly Crushed'},
      {minAmount:2,maxAmount:4,unit:'',imperialMinAmount:2,imperialMaxAmount:4,imperialMinUnit:'',imperialMaxUnit:'',item:'Fresh Chilies, Lightly Crushed',compactRange:true},
      {group:'Seasoning'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Fish Sauce'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Fresh Lime Juice'},
      {amount:4,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Palm Sugar or Granulated Sugar'},
      {minAmount:2,maxAmount:3,unit:'g',imperialMinAmount:0.25,imperialMaxAmount:0.5,imperialMinUnit:'tsp',imperialMaxUnit:'tsp',item:'Salt',compactRange:true},
      {group:'Garnish'},
      {unit:'',item:'Cilantro'}
    ],
    stats:{prep:'10 mins',cook:'20 mins',total:'30 mins',serves:'2–3',quiet:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'BUILD THE AROMATIC BROTH',clock:'11:21 PM',paragraphs:[
        'If using dried {{qty:Makrut Lime Leaves, Rehydrated if Dried}} makrut lime leaves, soak them in hot water for 5–10 minutes. Drain and gently tear them.',
        'Thinly slice {{qty:Galangal, Thinly Sliced}} galangal. Remove the tough outer layers from {{qty:Lemongrass, Bruised and Cut Into Pieces}} lemongrass stalks, bruise them with the back of a knife, and cut them into 5–6 cm pieces.',
        'If using minced lemongrass instead, measure 1½ tbsp.',
        'Add {{qty:Water or Chicken Stock}} water or chicken stock, galangal, lemongrass, makrut lime leaves, {{qty:Onion, Sliced}} onion, {{qty:Garlic, Lightly Crushed}} garlic, and {{qty:Fresh Chilies, Lightly Crushed}} fresh chilies to a saucepan.',
        'Bring to a gentle simmer over medium heat and cook for 5–10 minutes, until the broth smells deeply aromatic.'
      ],stepImages:['images/recipes/tom-kha-gai/step-01-01.jpg','images/recipes/tom-kha-gai/step-01-02.jpg','images/recipes/tom-kha-gai/step-01-03.jpg']},
      {number:'02',title:'COOK THE CHICKEN & COCONUT',clock:'11:33 PM',paragraphs:[
        'Cut {{qty:Boneless, Skinless Chicken Thighs}} boneless, skinless chicken thighs into bite-sized pieces.',
        'Add the chicken thighs to the aromatic broth and simmer until just cooked through.',
        'Add {{qty:Mushrooms}} mushrooms and cook for another 2–3 minutes.',
        'Pour in {{qty:Coconut Milk}} coconut milk. Reduce the heat to low and warm gently.',
        'Do not let the coconut milk boil aggressively. This prevents the coconut milk emulsion from splitting.'
      ],stepImages:['images/recipes/tom-kha-gai/step-02-01.jpg','images/recipes/tom-kha-gai/step-02-02.jpg','images/recipes/tom-kha-gai/step-02-03.jpg']},
      {number:'03',title:'SEASON & FINISH',clock:'11:41 PM',paragraphs:[
        'Stir in {{qty:Fish Sauce}} fish sauce and {{qty:Palm Sugar or Granulated Sugar}} palm sugar or granulated sugar. Turn off the heat.',
        'Add {{qty:Fresh Lime Juice}} fresh lime juice.',
        'Taste and adjust with a little more fish sauce for saltiness, lime juice for acidity, or sugar if the flavors feel too sharp.',
        'Finish with fresh cilantro.'
      ],stepImages:['images/recipes/tom-kha-gai/step-03-01.jpg','images/recipes/tom-kha-gai/step-03-02.jpg']}
    ],
    notes:[
      ['The Lime Trick','Makrut Lime Leaf gives the soup its floral citrus aroma, while Fresh Lime Juice brings the sharp acidity. Add the juice after turning off the heat to keep that fresh citrus character.'],
      ['Galangal Matters','Ginger is an acceptable emergency substitute, but fresh Galangal gives a distinctly peppery, floral flavor that makes the soup taste much more like Tom Kha.'],
      ['Toronto Pantry Reality','Fresh Galangal and Lemongrass are easy to find at Toronto Asian grocery stores, while dried Makrut Lime Leaves are useful when you want to make this on a random midnight without another grocery run. If you buy fresh galangal or lime leaves and have extra, freeze them immediately!'],
      ['Do you Eat the Herbs?', 'Just like bay leaves in Western cooking, lemongrass, galangal, and makrut lime leaves are used to infuse the broth. They are generally left in the bowl for rustic presentation, but you do not eat the tough stalks or thick galangal pieces.']
    ],
    finePrint:{
      'BEST EATEN':'Fresh, while the aromatics are fragrant and the lime flavor is bright.',
      'MAKE AHEAD':'Yes. If possible, add the fresh lime juice just before serving rather than before storing.',
      'STORAGE':'Refrigerate in an airtight container for up to 3 days.',
      'FREEZER':'Freezing may cause the coconut broth to separate and the mushrooms to soften. Stir well after reheating.',
      'REHEAT':'Reheat gently on the stovetop or in the microwave. Avoid bringing the soup to a hard boil.'
    },
    tags:['Galangal','Makrut Lime Leaves','Lemongrass','Coconut Milk','Chicken'],
    usualsCategory:''
  },

  {
    slug:'sweet-chili-peanut-chicken',
    title:'Sweet Chili Peanut Chicken',
    source:'Travel',
    cuisine:'Thai',
    course:'Main Dishes',
    courseDisplay:'Main Dishes',
    categories:['Main Dishes'],
    dateAdded:'2026-10-08',
    timeStamp:'10:15 PM',
    description:'Inspired by sweet chili sauce and crushed peanuts served with Thai fish cakes, this chicken brings together sweet, tangy, spicy, and nutty flavors in a quick homemade dish.',
    story:`I first fell in love with the combination of sweet chili sauce and peanuts in Thailand. They were served alongside crispy Thai fish cakes (Tod Mun Pla), and honestly, I think I enjoyed the sauce just as much as the fish cakes, if not more.

It was sweet, tangy, a little spicy, and had that nice crunch from the crushed peanuts. Such a simple combination, but I couldn't stop thinking about it even after I got back home.

Thailand isn't exactly around the corner from Toronto, and going back just for that sauce wasn't really an option. So one night, with some chicken sitting in the fridge, I started wondering if I could bring those flavors into a dish of my own.

I decided to give it a try.

This isn't a traditional Thai dish, and I'm not trying to recreate the original fish cakes. I just wanted to bring back a flavor I really liked and see what I could make with it.

And that's how this recipe came about. Sometimes, it's not the dish itself that stays with you, but a flavor you just can't forget.`,
    heroImage:'images/recipes/sweet-chili-peanut-chicken/hero.jpg',
    recipeImage:'images/recipes/sweet-chili-peanut-chicken/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[
  {
    name:'100% PEANUT BUTTER',
    tag:'THE NUTTY HEART',
    details:[
      ['Flavor','Rich, nutty, roasted, and creamy.'],
      ['Best Choice','Use smooth peanut butter made from 100% peanuts, with no added sugar.'],
      ['Why Here','Adds concentrated roasted-peanut flavor and creates a creamy, glossy sauce without the need for a separate peanut sauce.'],
      ['Substitute','Other smooth nut butters, such as almond or cashew butter, can work, although the flavor will be different.']
    ]
  },
  {
    name:'SAMBAL OELEK',
    tag:'THE CONTROLLED HEAT',
    details:[
      ['Flavor','Fresh chili heat with a slightly tangy edge.'],
      ['Best Choice','Choose a simple chili paste with minimal added ingredients.'],
      ['Why Here','Provides a clean chili kick without making the peanut sauce overwhelmingly spicy.'],
      ['Substitute','Finely minced fresh red chili or a mild chili paste. Adjust the amount to taste.'],

    ]
  },
  {
    name:'RICE VINEGAR',
    tag:'THE FLAVOR BALANCER',
    details:[
      ['Flavor','Clean, mild acidity.'],
      ['Best Choice','Use plain, unseasoned rice vinegar.'],
      ['Why Here','Cuts through the richness of peanut butter and balances the sweetness of sugar, keeping the sauce from tasting too heavy.'],
      ['Substitute','White vinegar can work. Start with slightly less, then adjust to taste.']
    ]
  }
],
    ingredients:[
      {group:'Chicken'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Chicken Thighs, Cut Into Bite-Sized Pieces'},
      {amount:24,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Cornstarch'},
      {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Salt'},
      {amount:1,unit:'g',imperialAmount:0.25,imperialUnit:'tsp',item:'Black Pepper'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Neutral Oil, for Pan-Frying'},
      {group:'Sweet Chili Peanut Sauce'},
      {amount:32,unit:'g',imperialAmount:2,imperialUnit:'tbsp',item:'100% Peanut Butter'},
      {amount:45,unit:'ml',imperialAmount:3,imperialUnit:'tbsp',item:'Water'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Rice Vinegar'},
      {amount:25,unit:'g',imperialAmount:2,imperialUnit:'tbsp',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Soy Sauce'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Sambal Oelek'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Garlic, Finely Grated'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Fresh Ginger, Finely Grated'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Sesame Oil'},
      {amount:1,unit:'g',imperialAmount:0.125,imperialUnit:'tsp',item:'Salt, or to Taste'},
      {group:'Garnish'},
      {unit:'',item:'Roasted Peanuts, Roughly Crushed'},
      {unit:'',item:'Fresh Cilantro, Chopped'},
      {unit:'',item:'1–2 Lime Wedges'}
    ],
    stats:{prep:'10 mins',cook:'15 mins',total:'25 mins',serves:'2',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'CRISP THE CHICKEN',clock:'10:15 PM',paragraphs:[
        'Pat the {{qty:Chicken Thighs, Cut Into Bite-Sized Pieces}} chicken thighs dry and cut them into bite-sized pieces.',
        'Toss the chicken with the {{qty:Chicken::Cornstarch}} cornstarch, {{qty:Chicken::Salt}} salt, and {{qty:Black Pepper}} black pepper until evenly coated.',
        'Heat the {{qty:Neutral Oil, for Pan-Frying}} neutral oil in a large skillet over medium-high heat.',
        'Arrange the chicken in a single layer. Cook for 3–4 minutes per side until golden and crisp. Work in batches if needed.',
        'Transfer the chicken to a plate, leaving about 1–2 teaspoons of oil in the skillet.'
      ],stepImages:['images/recipes/sweet-chili-peanut-chicken/step-01-01.jpg','images/recipes/sweet-chili-peanut-chicken/step-01-02.jpg','images/recipes/sweet-chili-peanut-chicken/step-01-03.jpg','images/recipes/sweet-chili-peanut-chicken/step-01-04.jpg']},
      {number:'02',title:'BUILD THE SAUCE',clock:'10:25 PM',paragraphs:[
        'Reduce the heat to medium-low.',
        'Add the {{qty:Sambal Oelek}} sambal oelek, {{qty:Garlic, Finely Grated}} garlic, and {{qty:Fresh Ginger, Finely Grated}} fresh ginger to the skillet. Sauté for 20–30 seconds, stirring gently. Do not let the garlic burn.',
        'Add the {{qty:100% Peanut Butter}} peanut butter, {{qty:Water}} water, {{qty:Rice Vinegar}} rice vinegar, {{qty:Granulated Sugar}} granulated sugar, {{qty:Soy Sauce}} soy sauce, and {{qty:Sweet Chili Peanut Sauce::Salt, or to Taste}} salt.',
        'Stir for 1–2 minutes until the sauce becomes smooth and glossy.',
        'Stir in the {{qty:Sesame Oil}} sesame oil.',
        'Taste and adjust the seasoning. Add a little more salt only if needed. If the sauce is too thick, add water a teaspoon at a time.'
      ],stepImages:['images/recipes/sweet-chili-peanut-chicken/step-02-01.jpg','images/recipes/sweet-chili-peanut-chicken/step-02-02.jpg']},
      {number:'03',title:'COAT THE CHICKEN',clock:'10:29 PM',paragraphs:[
        'Return the crispy chicken to the skillet.',
        'Toss gently for 1–2 minutes until the pieces are evenly coated.',
        'If the sauce is too thick, add 5–10 ml water and toss again. This is extra adjustment water, separate from the sauce water listed in the ingredients.',
        'Remove from the heat once the chicken is coated in the glossy sauce.'
      ],stepImages:['images/recipes/sweet-chili-peanut-chicken/step-03-01.jpg','images/recipes/sweet-chili-peanut-chicken/step-03-02.jpg']},
      {number:'04',title:'GARNISH AND SERVE',clock:'Optional',paragraphs:[
        'Sprinkle with roughly crushed roasted peanuts and chopped cilantro.',
        'Serve with lime wedges for squeezing over the chicken just before eating.'
      ],stepImages:[]}
    ],
    notes:[
      ['Building the Sweet Chili Base','Instead of using bottled Thai sweet chili sauce, this recipe builds a quick version from vinegar, sugar, chili, garlic, and seasonings. Peanut butter adds a creamy, nutty twist.'],
      ['Keeping It Mild','The sambal provides a gentle chili kick rather than dominating the sauce. Add a little more if you prefer a spicier finish.'],
      ['Crispy First, Sauce Second','Cook the chicken until golden before making the sauce. Coating it too early would prevent the chicken from developing its crisp exterior.'],
      ['The One-Pan Midnight Rule','The chicken and sauce are made in the same skillet. Less cleanup means more time to enjoy dinner.']
    ],
    finePrint:{
      'BEST EATEN':'Immediately after cooking, while the chicken is at its crispest.',
      'MAKE AHEAD':'Yes. Prepare the components ahead, then cook the chicken and combine it with the sauce just before serving.',
      'STORAGE':'Refrigerate leftovers in an airtight container for 3–4 days.',
      'FREEZER':'Freezing may reduce the coating’s crispness. If freezing, store the chicken and sauce separately.',
      'REHEAT':'Reheat in the oven or air fryer to restore some crispness. The microwave is convenient but will soften the coating.'
    },
    tags:['Chicken','Peanut Butter','Sweet Chili','One-Pan','Weeknight Dinner'],
    mainIngredients:['Chicken','Pantry','Herbs & Spices'],
    usualsCategory:''
  },
  {
    slug:'moms-hamburg-steak',
    title:'Mom’s Hamburg Steak', description:'A Japanese-style hamburg steak inspired by my mom’s cooking, served with a rich, sweet-tangy sauce that brings back the comforting taste of home.',
    source:'Memory',
    dish:'Japanese Hamburg Steak',
    cuisine:'Japanese',
    course:'Main Dishes',
    courseDisplay:'Main Dishes',
    categories:['Main Dishes'],
    mainIngredients:['Ground Meat','Onion','Eggs','Breadcrumbs','Milk'],
    dateAdded:'2026-10-08',
    timeStamp:'1:15 AM',
    story:`In Japan, hamburg steak is one of those dishes that feels like “*haha no aji*” (母の味) — literally, “the taste of mother.” It’s that familiar, nostalgic taste we associate with home and childhood.

For me, hamburg steak is one of the dishes my mom used to make. When I was younger, I never really thought much about it. It was just hamburg steak — something that appeared on the dinner table.

But looking back, it’s actually not the easiest dish to make. You have to chop the onion, knead the meat, shape each patty, cook them without drying them out, and then make the sauce. There’s definitely some work involved.

And yet, my mom made it.

The sauce is part of what makes it feel like Japanese hamburg steak, too. Japanese-style *“demi-glace”* sauce is rich, sweet, tangy, and made with familiar pantry staples. It’s the kind of sauce that makes the whole dish feel complete.

Maybe that’s what *haha no aji* really means. Not that every mom made the same dish, but that somewhere along the way, an ordinary meal becomes a taste you remember. And the hamburg steak you make for your own family might just become their favorite — the one they remember most.`,
    heroImage:'images/recipes/moms-hamburg-steak/hero.jpg',
    recipeImage:'images/recipes/moms-hamburg-steak/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[
      {name:'Ground Meat',details:[
        ['Flavor','Rich, savory, meaty'],
        ['Best choice','Ground beef, ground pork, or a combination of both'],
        ['Substitute','Beef and pork can be used individually or combined, depending on preference.']
      ]},
      {name:'Onion',details:[
        ['Flavor','Sweet, savory, aromatic'],
        ['Best choice','Yellow onion'],
        ['Why here','Adds moisture and sweetness to the patties.'],
        ['Substitute','Shallot']
      ]},
      {name:'Worcestershire Sauce',details:[
        ['Origin','England'],
        ['Flavor','Tangy, savory, slightly sweet, spiced'],
        ['Best choice','Standard Worcestershire sauce'],
        ['Why here','Adds tangy, savory depth to the quick Japanese-style sauce.'],
        ['Substitute','A little extra ketchup and soy sauce can work in a pinch.']
      ]},
      {name:'Ketchup',details:[
        ['Flavor','Sweet, tangy, tomato-rich'],
        ['Best choice','Regular tomato ketchup'],
        ['Why here','Forms the sweet-tangy base of the quick sauce.']
      ]},
      {name:'Sake',details:[
        ['Origin','Japan'],
        ['Flavor','Mild, lightly sweet, rice-based'],
        ['Best choice','Cooking sake or regular sake'],
        ['Why here','Adds depth to the sauce.'],
        ['Substitute','Dry white wine or Chinese Shaoxing wine'],
      ]}
    ],
    ingredients:[
      {group:'Hamburg Steak'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Ground Meat'},
      {amount:120,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Onion, Very Finely Chopped'},
      {amount:1,unit:'large',imperialAmount:1,imperialUnit:'large',item:'Egg'},
      {amount:50,unit:'g',imperialAmount:0.5,imperialUnit:'cup',item:'Breadcrumbs'},
      {amount:60,unit:'ml',imperialAmount:0.25,imperialUnit:'cup',item:'Milk'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Salt'},
      {amount:0.5,unit:'g',imperialAmount:0.25,imperialUnit:'tsp',item:'Black Pepper'},
      {amount:0.25,unit:'g',imperialAmount:0.125,imperialUnit:'tsp',item:'Ground Nutmeg'},
      {unit:'',item:'Neutral Oil, for Cooking'},
      {group:'Japanese-Style “Demi-Glace” Sauce'},
      {amount:60,unit:'ml',imperialAmount:4,imperialUnit:'tbsp',item:'Sake or Dry White Wine'},
      {amount:60,unit:'ml',imperialAmount:4,imperialUnit:'tbsp',item:'Ketchup'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Worcestershire Sauce'},
      {amount:2,unit:'tbsp',imperialAmount:2,imperialUnit:'tbsp',item:'Granulated Sugar'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Soy Sauce'}
    ],
    stats:{prep:'15 mins',cook:'15 mins',total:'30 mins',serves:'4',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'MIX',clock:'1:15 AM',paragraphs:[
        'Place {{qty:Hamburg Steak::Ground Meat}} ground meat in a bowl. Add {{qty:Hamburg Steak::Salt}} salt and knead until sticky and cohesive.',
        'Add {{qty:Hamburg Steak::Egg}} egg, {{qty:Hamburg Steak::Breadcrumbs}} breadcrumbs, {{qty:Hamburg Steak::Milk}} milk, {{qty:Hamburg Steak::Onion, Very Finely Chopped}} finely chopped onion, {{qty:Hamburg Steak::Black Pepper}} black pepper, and {{qty:Hamburg Steak::Ground Nutmeg}} ground nutmeg. Mix just until combined.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-01-01.jpg','images/recipes/moms-hamburg-steak/step-01-02.jpg','images/recipes/moms-hamburg-steak/step-01-03.jpg','images/recipes/moms-hamburg-steak/step-01-04.jpg']},
      {number:'02',title:'SHAPE & SEAR',clock:'1:23 AM',paragraphs:[
        'Divide the mixture into 4 portions. Shape into oval patties about 2–2.5 cm thick and make a shallow indentation in the center of each.',
        'Heat a little neutral oil in a frying pan over medium heat. Cook the patties for 2–3 minutes per side, until well browned.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-02-01.jpg','images/recipes/moms-hamburg-steak/step-02-02.jpg']},
      {number:'03',title:'STEAM',clock:'1:30 AM',paragraphs:[
        'Add a little water to the pan and cover with a lid. Reduce the heat to medium-low and steam for 5–7 minutes, until cooked through.',
        'Transfer the patties to a plate and rest for 3–5 minutes. Keep the pan for the sauce.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-03-01.jpg']},
      {number:'04',title:'MAKE THE “DEMI-GLACE” SAUCE',clock:'1:37 AM',paragraphs:[
        'Add {{qty:Japanese-Style “Demi-Glace” Sauce::Sake or Dry White Wine}} sake or dry white wine, {{qty:Japanese-Style “Demi-Glace” Sauce::Ketchup}} ketchup, {{qty:Japanese-Style “Demi-Glace” Sauce::Worcestershire Sauce}} Worcestershire sauce, {{qty:Japanese-Style “Demi-Glace” Sauce::Granulated Sugar}} granulated sugar, and {{qty:Japanese-Style “Demi-Glace” Sauce::Soy Sauce}} soy sauce to the same pan.',
        'Scrape up the browned bits and simmer for 1–2 minutes, until slightly thickened. Spoon the sauce over the hamburg steaks.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-04-01.jpg']}
    ],
    notes:[
      ['SALT FIRST','Kneading the meat with salt first helps bind the meat proteins together, giving the patties structure and helping them hold onto their juices.'],
      ['RAW ONION','No need to sauté the onion first. Finely chop it and add it straight to the mixture. It cooks while the hamburg steak cooks.'],
      ['SAME PAN','Don’t wash the pan after cooking the patties. Those browned bits add flavor to the sauce.']
    ],
    finePrint:{
      'BEST EATEN':'Fresh, while warm.',
      'MAKE AHEAD':'Shape the patties up to 1 day ahead. Cover and refrigerate.',
      'STORAGE':'Refrigerate in an airtight container for up to 3 days.',
      'FREEZER':'Freeze cooked patties in an airtight, freezer-safe container for up to 3 months for best quality. Cool promptly before freezing and thaw in the refrigerator before reheating.',
      'REHEAT':'Reheat covered in a pan with a splash of water, or gently in the microwave.'
    },
    tags:['Memory','Japanese','Hamburg Steak','Ground Meat','Family Cooking','Demi-Glace Sauce'],
    usualsCategory:''
  }
,
  {
    slug:'silky-cheesecake',
    title:'Silky Cheesecake', description:'Inspired by a memorable moment in Haruki Murakami’s Norwegian Wood, this silky cheesecake reflects on comfort, love, and the small things food can say.',
    source:'Book',
    original:'Norwegian Wood (1987) by Haruki Murakami',
    dish:'Cheesecake',
    cuisine:'American',
    course:'Baking',
    courseDisplay:'Baking, Desserts',
    mainIngredients:['Cream Cheese','Sour Cream','Eggs','Whipping Cream','Lemon'],
    categories:['Baking','Desserts'],
    dateAdded:'2026-10-10',
    timeStamp:'10:10 PM',
    heroImage:'images/recipes/silky-cheesecake/hero.jpg', recipeImage:'images/recipes/silky-cheesecake/recipe.jpg',
    story:`In Haruki Murakami's *Norwegian Wood*, Midori has an unusual idea of what it means to be loved.
Imagine someone buying her a strawberry shortcake, only for her to throw it out of the window. Instead of getting angry, she wants him to ask, “Chocolate mousse or cheesecake?”
It's a slightly unreasonable thing to ask of someone, isn't it? But I think that's what makes the scene so memorable. Midori isn't really talking about cake. She wants to know that even when she's difficult, even when she pushes someone away, they might still choose to stay.
I don't completely agree with her, because I don't think love means putting up with everything someone does. We all have our limits, and loving someone doesn't mean ignoring your own feelings. But there's something comforting about being with someone who doesn't give up on you the moment things get difficult. Someone who is willing to ask again, rather than assuming the answer will always be no.
For me, food has always been one of the ways we express love. Cooking for someone is a way of saying, "I thought of you. I want you to be happy. I care about what you need." Sometimes, love is simply remembering what someone likes to eat. And sometimes, it's being willing to ask one more time.
 *"To make it up to you, I'll go out and buy you something else. What would you like? Chocolate mousse? Cheesecake?"*
If you choose cheesecake, try this recipe tonight.`,
    ingredientFile:[
      {name:'Cream Cheese',details:[
        ['Flavor','Smooth, rich, milky, and slightly tangy, with a subtle salty note.'],
        ['Best Choice','Full-fat cream cheese for a richer flavor and creamier texture.'],
        ['Substitute','There is no substitute for the main character!'],
        ['Storage','Keep refrigerated. For this recipe, soften at room temperature before using.']
      ]},
      {name:'Sour Cream',details:[
        ['Flavor','Creamy with a pleasant tang that balances the richness of the cheese and creates a lighter finish.'],
        ['Best Choice','Full-fat sour cream for a creamy texture and balanced tanginess.'],
        ['Why Here','Adds acidity to balance the richness of the cream cheese, creating a smooth texture that doesn\'t feel too heavy.'],
        ['Substitute','Plain Greek yogurt can be used.'],
        ['Storage','Keep refrigerated. For this recipe, bring it close to room temperature before using.'],
        ['Midnight Fix','Replace sour cream with the same amount of plain Greek yogurt. The cheesecake will taste slightly tangier and may have a somewhat lighter, less rich texture. Choose full-fat Greek yogurt if possible for the creamiest result.']
      ]},
      {name:'35% Whipping Cream',details:[
        ['Flavor','Mild, milky, and creamy. It softens the tanginess of the sour cream and contributes to a smooth mouthfeel.'],
        ['Best Choice','35% milk-fat whipping cream for a smooth, rich texture without making the cheesecake as dense as a New York-style cheesecake.'],
        ['Why Here','Adds moisture and milk fat to create a cheesecake that feels silky and creamy without being overly heavy.'],
        ['Substitute','Other creams may have different fat and water contents, so the final texture may vary.'],
        ['Storage','Keep refrigerated until ready to use. For this recipe, bring it close to room temperature before using.'],
        ['Midnight Fix','When using a substitute, consider its fat and water content, as these can affect the cheesecake\'s richness and texture.']
      ]}
    ],
    ingredients:[
      {amount:250,unit:'g',item:'Cream Cheese',imperialAmount:1,imperialUnit:'cup'},
      {amount:85,unit:'g',item:'Granulated Sugar'},
      {amount:170,unit:'g',item:'Sour Cream',imperialAmount:0.75,imperialUnit:'cup'},
      {amount:125,unit:'ml',item:'35% Whipping Cream'},
      {amount:2,unit:'',item:'Eggs'},
      {amount:8,unit:'g',item:'Cornstarch'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Lemon Juice'},
      {amount:0.5,unit:'tsp',item:'Vanilla Extract'}
    ],
    stats:{prep:'20 mins',cook:'45–50 mins',chill:'8 hrs+',total:'9 hrs 5 mins+',serves:'6–8 slices',pan:'18 cm loaf pan',quiet:'⭐⭐⭐⭐⭐'},
    showPan:true,
    showChill:true,
    stepQuantityConversion:true,
    usCupFractions:true,
    steps:[
      {number:'01',title:'PREPARE THE INGREDIENTS',clock:'10:10 PM',paragraphs:[
        'Bring the cream cheese, sour cream, and eggs close to room temperature.',
        'Preheat your oven to 150°C / 300°F. Line an 18 cm loaf pan with parchment paper.',
        'Beat the eggs in a separate bowl and set aside.'
      ],stepImages:[]},
      {number:'02',title:'BUILD THE CREAMY BASE',clock:'10:15 PM',paragraphs:[
        'In a large bowl, mix the {{qty:Cream Cheese}} cream cheese until completely smooth and free of lumps.',
        'Add the {{qty:Granulated Sugar}} granulated sugar, {{qty:Sour Cream}} sour cream, and {{qty:35% Whipping Cream}} whipping cream. Mix until evenly combined.'
      ],stepImages:['images/recipes/silky-cheesecake/step-02-01.jpg','images/recipes/silky-cheesecake/step-02-02.jpg','images/recipes/silky-cheesecake/step-02-03.jpg']},
      {number:'03',title:'FINISH WITH A SILKY BATTER',clock:'10:20 PM',paragraphs:[
        'Gradually add {{qty:Eggs}} beaten eggs in two or three additions, mixing gently after each addition.',
        'Sift in the {{qty:Cornstarch}} cornstarch, then add the {{qty:Lemon Juice}} lemon juice and {{qty:Vanilla Extract}} vanilla extract. Mix until the batter is smooth and uniform.',
        'Pour the batter into the prepared loaf pan. Gently tap the pan against the counter to release large air bubbles.',
        'For an extra-silky texture, strain the batter through a fine-mesh sieve before pouring it into the pan.'
      ],stepNote:'**Midnight Shortcut:** Put all the batter ingredients into the food processor and blend until smooth. Avoid overmixing to prevent unnecessary air incorporation.',stepImages:['images/recipes/silky-cheesecake/step-03-01.jpg','images/recipes/silky-cheesecake/step-03-02.jpg','images/recipes/silky-cheesecake/step-03-03.jpg','images/recipes/silky-cheesecake/step-03-04.jpg']},
      {number:'04',title:'LET THE WATER BATH DO THE WORK',clock:'10:30 PM',paragraphs:[
        'Place the loaf pan inside a larger, deep oven-safe tray. Carefully pour hot water into the outer tray to create a water bath.',
        'Bake at 150°C / 300°F for approximately 45–50 minutes, checking for doneness from around 45 minutes. The edges should be set while the center still jiggles slightly when the pan is gently moved.',
        'While the cheesecake bakes, you can go take a shower. Let the oven do the work for a while.'
      ],stepImages:['images/recipes/silky-cheesecake/step-04-01.jpg']},
      {number:'05',title:'GIVE IT THE NIGHT',clock:'11:15 PM',paragraphs:[
        'Remove the pan from the water bath and let the cheesecake cool in the pan until it reaches room temperature.',
        'Refrigerate overnight for at least 8 hours to allow the texture to set completely.',
        'Once thoroughly chilled, lift the cheesecake out of the pan.'
      ],stepImages:['images/recipes/silky-cheesecake/step-05-01.jpg','images/recipes/silky-cheesecake/step-05-02.jpg']}
    ],
    notes:[
      ['Not Quite New York, Not Quite Soufflé','This cheesecake sits somewhere between a dense New York-style cheesecake and a light Japanese soufflé cheesecake. It has a creamy, silky mouthfeel without feeling quite so heavy, while remaining rich enough to satisfy a cheesecake craving. The goal is a delicate texture that feels just right, even for a late-night slice.'],
      ['Why Bake It in a Water Bath?','A water bath helps moderate the heat around the pan, encouraging the cheesecake to bake more gently and evenly. This is especially useful when aiming for a soft, creamy texture rather than a dry or overly firm one.'],
      ['To Strain or Not to Strain?','Straining is optional, but I recommend it if you want the smoothest texture. A fine-mesh sieve catches small lumps of cream cheese and any undissolved bits that might otherwise affect the finished mouthfeel.'],
      ['The Gentle Jiggle','The cheesecake should still have a slight wobble in the center when it comes out of the oven. It will continue to set as it cools and chills. Waiting until the center is completely firm in the oven may result in a drier texture.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow. Let the cheesecake sit at room temperature for 5–10 minutes before serving. This helps soften the texture and bring out its creamy, silky mouthfeel.',
      'MAKE AHEAD':'Yes. Prepare the cheesecake the day before serving and refrigerate overnight to allow it to set completely.',
      'STORAGE':'Cover and refrigerate for up to 4 days.',
      'FREEZER':'Cheesecake can be frozen for longer storage. For the best texture, wrap individual slices tightly and place them in an airtight freezer-safe container. Use within 1 month for best quality. Thaw overnight in the refrigerator before serving. The texture may change slightly after freezing.',
      'REHEAT':'Not applicable.'
    },
    tags:['cheesecake','baked cheesecake','creamy cheesecake','silky texture','cream cheese','water bath','make ahead dessert','Haruki Murakami','Norwegian Wood'],
    usualsCategory:''
  },

  {
    slug:'classic-pumpkin-pie', title:'Classic Pumpkin Pie', description:'My take on a Canadian Thanksgiving classic, with silky pumpkin filling and a warm blend of cinnamon, cloves, and nutmeg—especially comforting on a quiet autumn night.', source:'Family & Tradition', dish:'Pumpkin Pie', cuisine:'Canadian', cuisineSecondary:'American',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'],
    dateAdded:'2026-10-11', timeStamp:'12:15 AM',
    heroImage:'images/recipes/classic-pumpkin-pie/hero.jpg', recipeImage:'images/recipes/classic-pumpkin-pie/recipe.jpg',
    usesUsual:'building-block-pie-crust', showPan:true, showChill:true, hideRecipeTags:true,
    stepQuantityConversion:true, usCupFractions:true, fractionDenominator:16,
    story:`Pumpkin pie is *the* Canadian Thanksgiving classic, and I had my very first bite on Thanksgiving Monday back in October during my first year in Canada. Safe to say, I was completely hooked! The smooth, silky pumpkin filling and that warm punch of cinnamon, cloves, and nutmeg were unlike anything I knew back home with Japanese Kabocha. After that, I went a little crazy trying pumpkin pie everywhere I could get my hands on. Fast forward through endless pie runs and tweaking ingredients, I’ve finally nailed my dream spice mix. I make it all the time now. Especially, baking it in the middle of a quiet autumn night hits differently.`,
    ingredientFile:[
      {name:'PUMPKIN PURÉE',details:[['Flavor','Earthy, mellow, and mildly sweet; it gives the filling its signature pumpkin flavor and creamy body.'],['Best Choice','In Toronto/Canada, you’ll mostly find E.D. Smith “100% Pure Pumpkin” (make sure it says Pure, not Pumpkin Pie Mix!).'],['Substitute','Steamed and puréed Kabocha squash or sweet potatoes. Avoid butternut squash, as its higher water content can make the filling too loose.'],['Storage','Freeze extra purée in airtight containers or Ziploc bags for up to 3 months.'],['Midnight Fix','Use pure pumpkin purée, not pumpkin pie mix, which already contains sweeteners and spices. If the purée seems unusually watery, drain it briefly before measuring so the filling is less likely to turn loose.']]},
      {name:'BROWN SUGAR',details:[['Flavor','Warm, caramel-like, molasses-rich'],['Role','Adds sweetness and moisture while balancing the earthy pumpkin and warm spices.'],['Best Choice','Light brown sugar gives a balanced flavor; dark brown sugar adds a deeper molasses note. Either can be used.'],['Substitute','White sugar, although the flavor will be slightly lighter.'],['Storage','Keep in an airtight container at room temperature to help prevent it from drying out and hardening.']]}
    ],
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'PUMPKIN FILLING'},
      {amount:400,unit:'g',imperialAmount:5/3,imperialUnit:'cup',item:'Pumpkin Purée'},
      {amount:70,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Brown Sugar'},
      {amount:2,unit:'large',imperialAmount:2,imperialUnit:'large',item:'Eggs'},
      {amount:80,unit:'ml',imperialAmount:1/3,imperialUnit:'cup',item:'Whole Milk'},
      {amount:80,unit:'ml',imperialAmount:1/3,imperialUnit:'cup',item:'35% Whipping Cream'},
      {amount:1,unit:'tsp',imperialAmount:1,imperialUnit:'tsp',item:'Ground Cinnamon'},
      {amount:0.5,unit:'tsp',imperialAmount:0.5,imperialUnit:'tsp',item:'Ground Ginger'},
      {amount:0.5,unit:'g',imperialAmount:0.25,imperialUnit:'tsp',item:'Ground Nutmeg'},
      {amount:0.25,unit:'g',imperialAmount:0.125,imperialUnit:'tsp',item:'Ground Cloves'},
      {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Salt'}
    ],
    stats:{prep:'20 mins',cook:'25–40 mins',chill:'2 hrs',total:'2 hrs 45 mins+',serves:'6–8',pan:'23 cm / 9-inch pie dish',quiet:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'12:15 AM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Start with one of our usual recipes — Building Block Pie Crust (OPTION B — PARTIAL BLIND-BAKE).',
        '**Midnight Shortcut:** Use a good-quality store-bought pie crust. Tonight is about the filling.'
      ],stepImages:[]},
      {number:'02',title:'MAKE THE FILLING',clock:'12:35 AM',paragraphs:[
        'Mix {{qty:PUMPKIN FILLING::Pumpkin Purée}} pumpkin purée, {{qty:PUMPKIN FILLING::Brown Sugar}} brown sugar, {{qty:PUMPKIN FILLING::Eggs}} eggs, {{qty:PUMPKIN FILLING::Whole Milk}} whole milk, {{qty:PUMPKIN FILLING::35% Whipping Cream}} whipping cream, {{qty:PUMPKIN FILLING::Ground Cinnamon}} ground cinnamon, {{qty:PUMPKIN FILLING::Ground Ginger}} ground ginger, {{qty:PUMPKIN FILLING::Ground Nutmeg}} ground nutmeg, {{qty:PUMPKIN FILLING::Ground Cloves}} ground cloves, and {{qty:PUMPKIN FILLING::Salt}} salt until smooth.'
      ],stepImages:['images/recipes/classic-pumpkin-pie/step-02-01.jpg','images/recipes/classic-pumpkin-pie/step-02-02.jpg']},
      {number:'03',title:'POUR & BAKE',clock:'12:50 AM',paragraphs:[
        'Pour the filling into the warm crust.',
        'Bake at 175°C / 350°F for 35–40 minutes, until the edges are set but the center still has a slight wobble.'
      ],stepImages:['images/recipes/classic-pumpkin-pie/step-03-01.jpg']},
      {number:'04',title:'COOL & CHILL',clock:'1:30 AM',paragraphs:[
        'Cool completely, then refrigerate for at least 2 hours or overnight. Slice chilled and serve.'
      ],stepImages:['images/recipes/classic-pumpkin-pie/step-04-01.jpg']}
    ],
    notes:[],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly. The filling becomes smoother and more fully set after chilling.',
      'MAKE AHEAD':'Yes. Ideal to bake the night before.',
      'STORAGE':'Keep covered and refrigerated for up to 4 days.',
      'REHEAT':'Best chilled or at room temperature. For a warm slice, heat at 160°C / 325°F for 5–10 minutes.',
      'FREEZER':'Freeze tightly wrapped individual slices for up to 1 month.',
    },
    tags:['Thanksgiving','Fall','Baking','Dessert','Pumpkin','Pie','Cinnamon','Make Ahead','Classic Pumpkin Pie'],
    mainIngredients:['Pumpkin','Pie','Eggs','Cream','Cinnamon'],
    footerCuisine:'Canadian · American', footerCourse:'Baking · Desserts', footerMainIngredients:['Pumpkin','Pie','Eggs','Cream','Cinnamon'], usualsCategory:''
  },
];
window.MIDNIGHT_SOURCES = ['Restaurant','Grocery Store Find','Movie & TV','Book','Travel','Family & Tradition','Memory','Internet Find','Midnight Experiment'];
window.MIDNIGHT_COURSES = ['Breakfast & Brunch','Appetizers','Snacks','Soups','Salads','Main Dishes','Sides','Baking','Desserts'];
window.MIDNIGHT_CUISINES = {
  'Asia':['Japanese','Chinese','Korean','Taiwan'],
  'Southeast Asia':['Thai','Vietnamese','Filipino','Indonesian','Malaysian'],
  'South Asia':['Indian','Sri Lankan','Pakistani'],
  'Europe':['Italian','French','Spanish','Greek','Portuguese','British','German','Scandinavian'],
  'Eastern Europe & The Balkans':['Georgian','Ukrainian','Polish','Romanian','Hungarian','Serbian','Croatian','Bulgarian'],
  'Middle East':['Lebanese','Turkish','Persian/Iranian','Israel','Palestinian'],
  'Africa':['Egyptian','Moroccan','Ethiopian'],
  'North America':['Canadian','American','Hawaiian','Mexican'],
  'Central & South America':['Brazilian','Peruvian','Colombian','Argentinian'],
  'Oceania':['Australian','New Zealand']
};

window.MIDNIGHT_USUALS_CATEGORIES = ['SAUCES & DRESSINGS','BASES & CRUSTS','TOPPINGS & EXTRAS','SWEET STAPLES','FROZEN','MAYBE MORE…'];

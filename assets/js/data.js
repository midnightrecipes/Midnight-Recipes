/* MIDNIGHT RECIPES — single source of truth for all recipe pages */
window.MIDNIGHT_RECIPES = [
  {
    slug:'chocolate-pie', title:'Chocolate pie', source:'Restaurant', cuisine:'American', course:'Desserts', meal:'Dessert',
    categories:['Desserts','The Usuals'], ingredientCategories:['Pantry','Eggs','Cheese'], dateAdded:'2026-09-25', timeStamp:'12:38 AM',
    description:'A midnight recreation of a chocolate cream pie inspired by a restaurant dessert counter and Julie & Julia.',
    heroImage:'images/recipes/chocolate-pie-hero.jpg', cardImage:'images/recipes/chocolate-pie-card.jpg', stepImages:[],
    story:"I started noticing something about Toronto's dessert scene — every diner counter had a pie under glass, and none of them tasted like the one I remembered from the movie. So I went home and made it at 12:38 in the morning.",
    ingredientFile:{'Ingredient name':'Plain skyr','Origin / Why':'Used here for a tangy, creamy filling with a lighter texture.','Best choice':'Plain, unsweetened skyr with a thick consistency.','Substitute':'Greek yogurt or cream cheese, depending on the texture you want.','Midnight fix':'Use what is already in the fridge rather than making a late-night grocery run.'},
    ingredients:[{amount:300,unit:'g',item:'plain skyr'},{amount:40,unit:'g',item:'sweetened condensed milk'},{group:'Optional finish'},{amount:50,unit:'ml',item:'heavy cream'},{amount:1,unit:'tsp',item:'icing sugar'}],
    stats:{prep:'20 mins',cook:'20 mins',total:'40 mins',serves:2,quest:'★★★☆☆'},
    steps:[
      {label:'01  SLICE',clock:'12:45 AM',text:'Seal 300 g of biscuits in a bag and crush them with a rolling pin until no large pieces remain.',photos:[]},
      {label:'02  MIX',clock:'12:52 AM',text:'Fold 40 g of sweetened condensed milk into 300 g of plain skyr until the mixture holds a ribbon.',photos:[]},
      {label:'03  CHILL',clock:'1:10 AM',text:'Rest in the fridge for at least two hours. Overnight is better, if you can wait that long.',photos:[]}
    ],
    notes:[['Recreating the flavor','Plain skyr instead of cream cheese keeps the tang of the original filling, folded with condensed milk for sweetness.'],['Midnight compromises','Store-bought graham crust — it was already past midnight, no time to bake one.']],
    finePrint:{'Best eaten':'Next day, once fully chilled','Make ahead':'Yes','Storage':'Airtight container in the fridge, up to 3 days','Reheat':'N/A — served cold'},
    tags:['Desserts','Chocolate','Pie','Baking','American'], mainIngredients:['Chocolate','Cream','Graham cracker']
  },
  {
    slug:'banana-pudding', title:'Banana pudding', source:'Grocery Store', cuisine:'American', course:'Desserts', meal:'Dessert', categories:['Desserts'], ingredientCategories:['Fruit','Pantry'], dateAdded:'2026-09-24', timeStamp:'11:58 PM',
    description:'A simple banana pudding built from an easy grocery-store haul.', heroImage:'images/recipes/banana-pudding-hero.jpg', cardImage:'images/recipes/banana-pudding-card.jpg', stepImages:[],
    story:'A grocery-store dessert for the nights when the easiest ingredients are the ones worth making.',
    ingredientFile:{'Ingredient name':'Bananas','Best choice':'Yellow bananas with a little give but no bruised spots.','Substitute':'Plantain is not a direct substitute; use another soft, ripe fruit instead.','Midnight fix':'Use the ripest bananas first and chill the pudding before serving.'},
    ingredients:[{amount:4,unit:'',item:'ripe bananas'},{amount:500,unit:'ml',item:'vanilla pudding'},{amount:150,unit:'g',item:'vanilla wafers'}],
    stats:{prep:'15 mins',cook:'0 mins',total:'15 mins',serves:4,quest:'★★☆☆☆'},
    steps:[
      {label:'01  LAYER',clock:'11:58 PM',text:'Layer wafers, sliced bananas, and pudding in a serving dish.',photos:[]},
      {label:'02  CHILL',clock:'12:10 AM',text:'Chill until the wafers soften slightly and the pudding is cold.',photos:[]}
    ],
    notes:[['Texture','The longer it rests, the softer the wafers become.']], finePrint:{'Best eaten':'Same day','Make ahead':'Yes','Storage':'Covered in the fridge, up to 2 days'}, tags:['Desserts','Baking','American'], mainIngredients:['Banana','Vanilla']
  }
];
window.MIDNIGHT_SOURCES = ['Restaurant','Grocery Store','Movie & TV','Book','Travel','Family & Tradition','Memory','Internet Find','Midnight Experiment'];
window.MIDNIGHT_COURSES = ['Breakfast & Brunch','Appetizers','Snacks','Soups','Salads','Main Dishes','Sides','Rice, Noodles, Pasta','Bread','Baking','Desserts','Drinks'];
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
window.MIDNIGHT_INGREDIENTS = ['Chicken','Beef','Pork','Fish & Seafood','Vegetable','Potatoes','Rice','Noodles','Eggs','Cheese','Fruit','Pantry','Herbs & Spices'];
window.MIDNIGHT_MEALS = window.MIDNIGHT_COURSES;

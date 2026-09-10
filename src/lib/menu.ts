export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  note?: string;
  featured?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
};

export const DINNER: MenuSection[] = [
  {
    id: "signatures",
    title: "Signatures",
    intro: "The dishes guests return for — lavender-kissed pasta, the grill, and Ottawa’s favourite cheesecake.",
    items: [
      {
        name: "Lavender Gnocchi",
        description: "Pillowy potato dumplings in a lavender cream, sage, and parmigiana.",
        price: "28",
        featured: true,
      },
      {
        name: "Lavender Ravioli",
        description: "House ravioli finished in lavender cream. A ByWard Market classic.",
        price: "32",
        featured: true,
      },
      {
        name: "Grilled Atlantic Salmon",
        description: "Herb-grilled salmon with seasonal vegetables.",
        price: "36",
        featured: true,
      },
      {
        name: "Filet Mignon 8oz",
        description: "AAA tenderloin, grilled to temperature, with house sauce.",
        price: "52",
        featured: true,
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Soup of the Day", description: "Ask your server for today’s pot.", price: "10" },
      {
        name: "Spinach & Artichoke Dip",
        description: "Baked spinach, artichoke, and mixed cheese. Served with lavender chips or naan.",
        price: "18",
      },
      {
        name: "Lavender Nachos",
        description: "Purple nacho chips, mixed cheese, pico de gallo, sour cream, jalapeños, guacamole.",
        price: "19",
      },
      {
        name: "Calamari",
        description: "Fresh-cut squid, hand-breaded in cajun flour, lemon.",
        price: "18",
      },
      {
        name: "Salmon Tartare",
        description: "Sushi-grade salmon, shallots, herbs, capers, chardonnay, soya, grainy mustard, citrus zest.",
        price: "23",
      },
      {
        name: "Steak Tartare",
        description: "AAA tenderloin, shallots, herbs, capers, soya, grainy mustard, tabasco, citrus zest.",
        price: "25",
      },
      {
        name: "Cauliflower Bites",
        description: "Breaded cauliflower tossed in Thai chili sauce.",
        price: "15",
      },
      {
        name: "Escargot",
        description: "Baked with garlic butter and served with garlic bread.",
        price: "16",
      },
      {
        name: "Shrimp Cocktail",
        description: "Chilled shrimp, classic cocktail sauce.",
        price: "16",
      },
      { name: "Bruschetta", description: "Tomato, red onion, basil, garlic, olive oil.", price: "16" },
      { name: "Garlic Bread", description: "Baguette toasted with garlic butter. Add cheese +3.", price: "10" },
      {
        name: "Hand-Breaded Chicken Tenders",
        description: "Buttermilk-marinated, panko fried, choice of sauce.",
        price: "19",
      },
      {
        name: "Poutine",
        description: "Fries, cheese curds, house gravy. Add chicken, beef, or pulled pork +8.",
        price: "14",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    intro: "Add chicken 8 · salmon 12 · shrimp 12 · steak 16",
    items: [
      {
        name: "Garden Salad",
        description: "Mixed greens, tomato, cucumber, red onion, house dressing.",
        price: "14",
      },
      {
        name: "Caesar Salad",
        description: "Romaine, parmesan, croutons, house Caesar. Anchovies on request.",
        price: "16",
      },
      {
        name: "Cobb Salad",
        description: "Greens, egg, tomato, avocado, bacon, cucumber, cheese, cranberries, grilled chicken.",
        price: "26",
      },
      {
        name: "Beet & Goat Cheese",
        description: "Roasted beets, goat cheese, walnuts, greens.",
        price: "18",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      {
        name: "Gnocchi",
        description: "Potato dumplings, sage, garlic cream, parmigiana.",
        price: "24",
      },
      { name: "Ravioli of the Day", description: "Ask your server.", price: "28" },
      {
        name: "Perogies",
        description: "Potato and cheese, caramelized onion, sour cream. Add bacon +3.",
        price: "22",
      },
      {
        name: "Chicken Parmesan",
        description: "Breaded chicken, tomato sauce, mozzarella, served with pasta.",
        price: "28",
      },
      {
        name: "Fettuccine Alfredo",
        description: "Classic cream, garlic, parmesan. Add chicken +8.",
        price: "24",
      },
      {
        name: "Fish & Chips",
        description: "Beer-battered haddock, fries, coleslaw, tartar.",
        price: "24",
      },
      {
        name: "Chicken Souvlaki",
        description: "Marinated grilled chicken, rice or fries, Greek salad, tzatziki.",
        price: "26",
      },
      {
        name: "Steak Frites",
        description: "Grilled striploin, fries, peppercorn or mushroom sauce.",
        price: "38",
      },
      {
        name: "New York Striploin 10oz",
        description: "AAA striploin, grilled to temperature.",
        price: "46",
      },
      {
        name: "Lavender Burger",
        description: "House beef patty, lettuce, tomato, pickles, brioche. Add bacon or cheese +3.",
        price: "22",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Lavender Cheesecake",
        description: "House cheesecake — the one guests tell their friends about.",
        price: "14",
        featured: true,
      },
      { name: "Crème Brûlée", description: "Classic vanilla, caramelized sugar.", price: "12" },
      { name: "Chocolate Mousse", description: "Dark chocolate, whipped cream.", price: "12" },
      { name: "Ice Cream or Sorbet", price: "8" },
    ],
  },
];

export const DRINKS: MenuSection[] = [
  {
    id: "signatures",
    title: "Signature Cocktails",
    items: [
      {
        name: "Pomegranate Margarita",
        description: "Tequila, pomegranate, citrus — the house favourite.",
        price: "18",
        featured: true,
      },
      {
        name: "Lavender Gin & Tonic",
        description: "Gin, lavender, tonic, citrus.",
        price: "16",
        featured: true,
      },
      {
        name: "Lavender Royale",
        description: "Sparkling wine, lavender cordial.",
        price: "16",
      },
      {
        name: "Kiwi Breeze",
        description: "A bright, tropical house cocktail.",
        price: "16",
      },
      {
        name: "Lavender Mocktail",
        description: "The signature purple pour — lime, sweet-and-sour, dried lime wheel.",
        price: "12",
      },
    ],
  },
  {
    id: "classics",
    title: "Classics & Highballs",
    items: [
      { name: "Old Fashioned", price: "16" },
      { name: "Espresso Martini", price: "17" },
      { name: "Negroni", price: "16" },
      { name: "Aperol Spritz", price: "15" },
      { name: "Caesar", price: "14" },
      { name: "Mimosa", description: "Complimentary with brunch. Additional glasses à la carte.", price: "12" },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    intro: "Ask for today’s by-the-glass list. Full bottles from the cellar.",
    items: [
      { name: "House White — glass / bottle", price: "12 / 48" },
      { name: "House Red — glass / bottle", price: "12 / 48" },
      { name: "Prosecco — glass / bottle", price: "13 / 52" },
      { name: "Rosé — glass / bottle", price: "13 / 52" },
    ],
  },
  {
    id: "beer",
    title: "Beer & Cider",
    items: [
      { name: "Draft pint — rotating local", price: "9" },
      { name: "Domestic bottle", price: "8" },
      { name: "Import / craft bottle", price: "9" },
      { name: "Cider", price: "9" },
    ],
  },
];

export const BRUNCH: MenuSection[] = [
  {
    id: "brunch",
    title: "Brunch",
    intro: "Saturday & Sunday, 11AM – 3PM. Every brunch includes a complimentary Mimosa.",
    items: [
      {
        name: "Eggs Benedict",
        description: "Poached eggs, hollandaise, English muffin, home fries. Classic, smoked salmon, or florentine.",
        price: "22",
      },
      {
        name: "Lavender Breakfast",
        description: "Two eggs any style, bacon or sausage, toast, home fries.",
        price: "18",
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado, chili, greens, poached egg, sourdough.",
        price: "19",
      },
      {
        name: "Buttermilk Pancakes",
        description: "Berry compote, maple syrup, whipped cream.",
        price: "18",
      },
      {
        name: "French Toast",
        description: "Brioche, maple, berries.",
        price: "18",
      },
      {
        name: "Omelette",
        description: "Three eggs, choice of fillings, home fries, toast.",
        price: "20",
      },
      {
        name: "Steak & Eggs",
        description: "Grilled steak, two eggs, home fries.",
        price: "28",
      },
      {
        name: "Brunch Burger",
        description: "Beef patty, fried egg, cheddar, brioche, fries.",
        price: "22",
      },
      {
        name: "Eggs Any Style with Salmon",
        description: "Smoked salmon, capers, red onion, toast.",
        price: "24",
      },
    ],
  },
];

export const MENU_TABS = [
  { id: "dinner", label: "Dinner", sections: DINNER },
  { id: "drinks", label: "Drinks", sections: DRINKS },
  { id: "brunch", label: "Brunch", sections: BRUNCH },
] as const;

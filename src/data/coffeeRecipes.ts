import { CoffeeRecipe } from './types';

export const coffeeRecipes: CoffeeRecipe[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'A concentrated coffee beverage brewed by forcing hot water through finely-ground coffee beans.',
    category: 'espresso',
    ingredients: ['espresso', 'water'],
    instructions: [
      'Grind 18-20g of coffee beans to a fine consistency',
      'Tamp the grounds evenly in the portafilter',
      'Extract 25-30ml of espresso in 25-30 seconds',
      'Serve immediately in a preheated cup'
    ],
    flavorProfile: {
      sweetness: 2,
      bitterness: 8,
      acidity: 6,
      body: 9,
      aroma: 9
    },
    flavorNotes: ['Bold', 'Intense', 'Rich', 'Full-bodied'],
    difficulty: 'medium',
    prepTime: 3,
    brewingMethods: ['espresso', 'moka-pot']
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and foamed milk, creating a perfect balance.',
    category: 'latte',
    ingredients: ['espresso', 'steamed-milk', 'foamed-milk'],
    instructions: [
      'Pull a shot of espresso',
      'Steam milk to 150°F with microfoam',
      'Pour steamed milk into espresso',
      'Top with a layer of foamed milk',
      'Optional: dust with cocoa powder'
    ],
    flavorProfile: {
      sweetness: 5,
      bitterness: 5,
      acidity: 4,
      body: 7,
      aroma: 7
    },
    flavorNotes: ['Creamy', 'Balanced', 'Smooth', 'Velvety'],
    difficulty: 'medium',
    prepTime: 5,
    brewingMethods: ['espresso']
  },
  {
    id: 'latte',
    name: 'Caffè Latte',
    description: 'Espresso with steamed milk and a light layer of foam.',
    category: 'latte',
    ingredients: ['espresso', 'steamed-milk', 'foamed-milk'],
    instructions: [
      'Pull a shot of espresso',
      'Steam milk to create microfoam',
      'Pour steamed milk into espresso, holding back foam',
      'Finish with a thin layer of foam',
      'Create latte art if desired'
    ],
    flavorProfile: {
      sweetness: 6,
      bitterness: 3,
      acidity: 3,
      body: 6,
      aroma: 6
    },
    flavorNotes: ['Mild', 'Creamy', 'Smooth', 'Delicate'],
    difficulty: 'easy',
    prepTime: 4,
    brewingMethods: ['espresso', 'moka-pot']
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    description: 'A smooth latte sweetened with vanilla syrup.',
    category: 'latte',
    ingredients: ['espresso', 'steamed-milk', 'vanilla-syrup'],
    instructions: [
      'Add vanilla syrup to the cup',
      'Pull a shot of espresso over the syrup',
      'Steam milk and pour into the cup',
      'Stir gently to combine'
    ],
    flavorProfile: {
      sweetness: 8,
      bitterness: 2,
      acidity: 2,
      body: 5,
      aroma: 7
    },
    flavorNotes: ['Sweet', 'Vanilla', 'Smooth', 'Aromatic'],
    difficulty: 'easy',
    prepTime: 4,
    brewingMethods: ['espresso', 'moka-pot']
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Espresso marked with vanilla syrup, steamed milk, and caramel drizzle.',
    category: 'latte',
    ingredients: ['espresso', 'steamed-milk', 'vanilla-syrup', 'caramel-syrup', 'foamed-milk'],
    instructions: [
      'Add vanilla syrup to the cup',
      'Pour steamed milk over the syrup',
      'Pull espresso shot and pour over milk',
      'Top with foamed milk',
      'Drizzle caramel syrup on top'
    ],
    flavorProfile: {
      sweetness: 9,
      bitterness: 2,
      acidity: 2,
      body: 6,
      aroma: 8
    },
    flavorNotes: ['Caramel', 'Sweet', 'Rich', 'Indulgent'],
    difficulty: 'medium',
    prepTime: 5,
    brewingMethods: ['espresso']
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Coffee steeped in cold water for 12-24 hours, resulting in a smooth, less acidic brew.',
    category: 'cold',
    ingredients: ['coffee-beans', 'water', 'ice'],
    instructions: [
      'Coarsely grind coffee beans',
      'Combine coffee grounds with cold water (1:4 ratio)',
      'Steep for 12-24 hours in the refrigerator',
      'Strain the coffee concentrate',
      'Serve over ice, diluted to taste'
    ],
    flavorProfile: {
      sweetness: 4,
      bitterness: 5,
      acidity: 2,
      body: 7,
      aroma: 6
    },
    flavorNotes: ['Smooth', 'Less acidic', 'Refreshing', 'Bold'],
    difficulty: 'easy',
    prepTime: 1440, // 24 hours
    brewingMethods: ['cold-brew']
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso combined with chocolate and steamed milk.',
    category: 'specialty',
    ingredients: ['espresso', 'steamed-milk', 'chocolate-syrup', 'cocoa-powder'],
    instructions: [
      'Add chocolate syrup to the cup',
      'Pull a shot of espresso',
      'Steam milk and pour into the cup',
      'Stir to combine',
      'Dust with cocoa powder'
    ],
    flavorProfile: {
      sweetness: 8,
      bitterness: 4,
      acidity: 3,
      body: 7,
      aroma: 7
    },
    flavorNotes: ['Chocolatey', 'Rich', 'Indulgent', 'Smooth'],
    difficulty: 'easy',
    prepTime: 4,
    brewingMethods: ['espresso', 'moka-pot']
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso diluted with hot water, creating a coffee similar to drip coffee.',
    category: 'espresso',
    ingredients: ['espresso', 'water'],
    instructions: [
      'Pull a shot of espresso',
      'Add hot water (1:2 or 1:3 ratio)',
      'Serve immediately'
    ],
    flavorProfile: {
      sweetness: 3,
      bitterness: 6,
      acidity: 5,
      body: 5,
      aroma: 6
    },
    flavorNotes: ['Bold', 'Clean', 'Smooth', 'Balanced'],
    difficulty: 'easy',
    prepTime: 3,
    brewingMethods: ['espresso', 'moka-pot', 'pour-over', 'aeropress']
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Espresso with microfoam milk, stronger than a latte.',
    category: 'latte',
    ingredients: ['espresso', 'steamed-milk'],
    instructions: [
      'Pull a double shot of espresso',
      'Steam milk to create microfoam (no large bubbles)',
      'Pour milk into espresso, creating a thin layer of foam',
      'Serve immediately'
    ],
    flavorProfile: {
      sweetness: 4,
      bitterness: 5,
      acidity: 4,
      body: 7,
      aroma: 7
    },
    flavorNotes: ['Strong', 'Creamy', 'Smooth', 'Rich'],
    difficulty: 'medium',
    prepTime: 4,
    brewingMethods: ['espresso']
  },
  {
    id: 'cortado',
    name: 'Cortado',
    description: 'Espresso cut with a small amount of warm milk.',
    category: 'espresso',
    ingredients: ['espresso', 'steamed-milk'],
    instructions: [
      'Pull a shot of espresso',
      'Steam a small amount of milk',
      'Pour milk into espresso (1:1 ratio)',
      'Serve in a small glass'
    ],
    flavorProfile: {
      sweetness: 4,
      bitterness: 6,
      acidity: 5,
      body: 7,
      aroma: 8
    },
    flavorNotes: ['Bold', 'Balanced', 'Smooth', 'Intense'],
    difficulty: 'easy',
    prepTime: 3,
    brewingMethods: ['espresso', 'moka-pot']
  }
];

export const getRecipeById = (id: string): CoffeeRecipe | undefined => {
  return coffeeRecipes.find(recipe => recipe.id === id);
};


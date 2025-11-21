import { Ingredient } from './types';

export const ingredients: Ingredient[] = [
  // Coffee
  { id: 'espresso', name: 'Espresso', category: 'coffee', required: true },
  { id: 'coffee-beans', name: 'Coffee Beans', category: 'coffee', required: true },
  { id: 'cold-brew', name: 'Cold Brew', category: 'coffee', required: false },
  
  // Milk
  { id: 'whole-milk', name: 'Whole Milk', category: 'milk', required: false },
  { id: 'oat-milk', name: 'Oat Milk', category: 'milk', required: false },
  { id: 'almond-milk', name: 'Almond Milk', category: 'milk', required: false },
  { id: 'steamed-milk', name: 'Steamed Milk', category: 'milk', required: false },
  { id: 'foamed-milk', name: 'Foamed Milk', category: 'milk', required: false },
  
  // Syrups
  { id: 'vanilla-syrup', name: 'Vanilla Syrup', category: 'syrup', required: false },
  { id: 'caramel-syrup', name: 'Caramel Syrup', category: 'syrup', required: false },
  { id: 'hazelnut-syrup', name: 'Hazelnut Syrup', category: 'syrup', required: false },
  { id: 'chocolate-syrup', name: 'Chocolate Syrup', category: 'syrup', required: false },
  
  // Spices & Other
  { id: 'cinnamon', name: 'Cinnamon', category: 'spice', required: false },
  { id: 'cocoa-powder', name: 'Cocoa Powder', category: 'spice', required: false },
  { id: 'whipped-cream', name: 'Whipped Cream', category: 'other', required: false },
  { id: 'ice', name: 'Ice', category: 'other', required: false },
  { id: 'water', name: 'Water', category: 'other', required: false },
];

export const getIngredientById = (id: string): Ingredient | undefined => {
  return ingredients.find(ing => ing.id === id);
};

export const getIngredientsByIds = (ids: string[]): Ingredient[] => {
  return ids.map(id => getIngredientById(id)).filter(Boolean) as Ingredient[];
};


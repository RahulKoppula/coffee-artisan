export interface Ingredient {
  id: string;
  name: string;
  category: 'coffee' | 'milk' | 'syrup' | 'spice' | 'other';
  required: boolean;
}

export interface FlavorProfile {
  sweetness: number;    // 0-10
  bitterness: number;    // 0-10
  acidity: number;       // 0-10
  body: number;          // 0-10
  aroma: number;         // 0-10
}

export interface FlavorModifier {
  sweetness?: number;    // -2 to +2
  bitterness?: number;   // -2 to +2
  acidity?: number;      // -2 to +2
  body?: number;         // -2 to +2
  aroma?: number;        // -2 to +2
}

export interface CoffeeBean {
  id: string;
  name: string;
  description: string;
  origin: string;
  flavorModifier: FlavorModifier;
  flavorNotes: string[];
}

export type BrewingMethod = 
  | 'espresso'
  | 'pour-over'
  | 'french-press'
  | 'aeropress'
  | 'cold-brew'
  | 'moka-pot'
  | 'chemex'
  | 'siphon';

export interface CoffeeRecipe {
  id: string;
  name: string;
  description: string;
  category: 'espresso' | 'latte' | 'cold' | 'specialty';
  ingredients: string[]; // Ingredient IDs
  instructions: string[];
  flavorProfile: FlavorProfile; // Base flavor profile
  flavorNotes: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;       // minutes
  brewingMethods: BrewingMethod[]; // Available brewing methods
}


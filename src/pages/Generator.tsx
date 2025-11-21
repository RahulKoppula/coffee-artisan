import { useState } from 'react';
import { coffeeRecipes } from '../data/coffeeRecipes';
import { matchRecipesToIngredients } from '../utils/recipeMatcher';
import IngredientSelector from '../components/generator/IngredientSelector';
import RecipeResults from '../components/generator/RecipeResults';
import BeanSelector from '../components/coffee/BeanSelector';
import { defaultBean } from '../data/coffeeBeans';

export default function Generator() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedBean, setSelectedBean] = useState<string>(defaultBean.id);

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const matchedRecipes = matchRecipesToIngredients(selectedIngredients, coffeeRecipes);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-coffee-text mb-3 sm:mb-4">
            Recipe Generator
          </h1>
          <p className="text-coffee-text/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Select the ingredients you have available, and we'll show you what coffee recipes you can make.
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <BeanSelector 
              selectedBean={selectedBean} 
              onSelect={setSelectedBean}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-coffee-text mb-4 sm:mb-6">
              Select Your Ingredients
            </h2>
            <IngredientSelector
              selectedIngredients={selectedIngredients}
              onToggle={toggleIngredient}
            />
            {selectedIngredients.length > 0 && (
              <button
                onClick={() => setSelectedIngredients([])}
                className="mt-4 sm:mt-6 px-4 py-2 bg-coffee-warning text-coffee-text rounded-full text-sm font-medium hover:bg-coffee-warning/80 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          <div>
            <RecipeResults 
              recipes={matchedRecipes} 
              availableIngredients={selectedIngredients}
              selectedBean={selectedBean}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


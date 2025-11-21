import { CoffeeRecipe } from '../data/types';

export const matchRecipesToIngredients = (
  availableIngredients: string[],
  recipes: CoffeeRecipe[]
): CoffeeRecipe[] => {
  return recipes
    .map(recipe => {
      const requiredIngredients = recipe.ingredients.filter(ingId => {
        // Check if ingredient is available
        return availableIngredients.includes(ingId);
      });
      
      const matchPercentage = (requiredIngredients.length / recipe.ingredients.length) * 100;
      
      return {
        recipe,
        matchPercentage,
        missingIngredients: recipe.ingredients.filter(
          ingId => !availableIngredients.includes(ingId)
        )
      };
    })
    .filter(result => result.matchPercentage > 0)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .map(result => result.recipe);
};

export const canMakeRecipe = (
  recipe: CoffeeRecipe,
  availableIngredients: string[]
): boolean => {
  return recipe.ingredients.every(ingId => availableIngredients.includes(ingId));
};


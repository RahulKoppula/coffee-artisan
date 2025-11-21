import { CoffeeRecipe } from '../../data/types';
import { getIngredientsByIds } from '../../data/ingredients';
import { canMakeRecipe } from '../../utils/recipeMatcher';
import CoffeeCard from '../coffee/CoffeeCard';
import { motion } from 'framer-motion';

interface RecipeResultsProps {
  recipes: CoffeeRecipe[];
  availableIngredients: string[];
  selectedBean?: string;
}

export default function RecipeResults({ recipes, availableIngredients, selectedBean }: RecipeResultsProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <p className="text-coffee-text/60 text-base sm:text-lg">
          No recipes found with your selected ingredients.
        </p>
        <p className="text-coffee-text/40 text-sm mt-2">
          Try selecting different ingredients!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-serif font-semibold text-coffee-text">
        Recipes You Can Make ({recipes.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {recipes.map((recipe, index) => {
          const canMake = canMakeRecipe(recipe, availableIngredients);
          const missingIngredients = recipe.ingredients.filter(
            ingId => !availableIngredients.includes(ingId)
          );
          const missingIngredientNames = getIngredientsByIds(missingIngredients).map(ing => ing.name);

          return (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <CoffeeCard recipe={recipe} selectedBean={selectedBean} />
                {!canMake && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-coffee-warning/90 text-coffee-text px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Missing {missingIngredients.length} ingredient{missingIngredients.length > 1 ? 's' : ''}
                  </div>
                )}
                {canMake && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-coffee-success/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    ✓ Can Make
                  </div>
                )}
                {missingIngredientNames.length > 0 && (
                  <div className="mt-2 p-2 sm:p-3 bg-coffee-background rounded-lg">
                    <p className="text-xs text-coffee-text/60 mb-1">Missing:</p>
                    <p className="text-xs text-coffee-text/80">{missingIngredientNames.join(', ')}</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


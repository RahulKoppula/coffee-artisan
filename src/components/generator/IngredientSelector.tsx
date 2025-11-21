import { ingredients } from '../../data/ingredients';
import { Ingredient } from '../../data/types';
import { motion } from 'framer-motion';

interface IngredientSelectorProps {
  selectedIngredients: string[];
  onToggle: (ingredientId: string) => void;
}

export default function IngredientSelector({ selectedIngredients, onToggle }: IngredientSelectorProps) {
  const groupedIngredients = ingredients.reduce((acc, ing) => {
    if (!acc[ing.category]) {
      acc[ing.category] = [];
    }
    acc[ing.category].push(ing);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  return (
    <div className="space-y-4 sm:space-y-6">
      {Object.entries(groupedIngredients).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-base sm:text-lg font-serif font-semibold text-coffee-text mb-2 sm:mb-3 capitalize">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {items.map((ingredient) => {
              const isSelected = selectedIngredients.includes(ingredient.id);
              return (
                <motion.button
                  key={ingredient.id}
                  onClick={() => onToggle(ingredient.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-coffee-primary text-white shadow-md'
                      : 'bg-white text-coffee-text hover:bg-coffee-secondary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ingredient.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}


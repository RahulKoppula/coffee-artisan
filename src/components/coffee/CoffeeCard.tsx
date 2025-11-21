import { CoffeeRecipe } from '../../data/types';
import { motion } from 'framer-motion';
import Coffee3D from './Coffee3D';
import FlavorProfile from './FlavorProfile';
import { getBeanById } from '../../data/coffeeBeans';
import { applyFlavorModifier } from '../../utils/flavorCalculator';

interface CoffeeCardProps {
  recipe: CoffeeRecipe;
  selectedBean?: string;
  onClick?: () => void;
}

const formatBrewingMethod = (method: string): string => {
  return method.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function CoffeeCard({ recipe, selectedBean, onClick }: CoffeeCardProps) {
  const bean = selectedBean ? getBeanById(selectedBean) : null;
  const flavorProfile = bean 
    ? applyFlavorModifier(recipe.flavorProfile, bean.flavorModifier)
    : recipe.flavorProfile;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 bg-gradient-to-br from-coffee-secondary to-coffee-accent relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Coffee3D className="w-full h-full" autoRotate={true} />
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-serif font-semibold text-coffee-text mb-2">
          {recipe.name}
        </h3>
        <p className="text-coffee-text/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {recipe.description}
        </p>
        {bean && (
          <div className="mb-3 text-xs text-coffee-primary font-medium">
            With {bean.name} beans
          </div>
        )}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {recipe.flavorNotes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="px-2 sm:px-3 py-1 bg-coffee-secondary text-coffee-text text-xs rounded-full"
            >
              {note}
            </span>
          ))}
        </div>
        {recipe.brewingMethods && recipe.brewingMethods.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <div className="text-xs text-coffee-text/60 mb-1">Brewing Methods:</div>
            <div className="flex flex-wrap gap-1.5">
              {recipe.brewingMethods.map((method) => (
                <span
                  key={method}
                  className="px-2 py-0.5 bg-coffee-background text-coffee-text text-xs rounded-md"
                >
                  {formatBrewingMethod(method)}
                </span>
              ))}
            </div>
          </div>
        )}
        <FlavorProfile profile={flavorProfile} size="small" />
        <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs text-coffee-text/60">
          <span>{recipe.prepTime < 60 ? `${recipe.prepTime} min` : `${Math.floor(recipe.prepTime / 60)}h`}</span>
          <span className="capitalize">{recipe.difficulty}</span>
        </div>
      </div>
    </motion.div>
  );
}


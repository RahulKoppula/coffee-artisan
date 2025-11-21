import { useState } from 'react';
import { coffeeRecipes } from '../data/coffeeRecipes';
import CoffeeCard from '../components/coffee/CoffeeCard';
import BeanSelector from '../components/coffee/BeanSelector';
import { defaultBean } from '../data/coffeeBeans';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBean, setSelectedBean] = useState<string>(defaultBean.id);

  const categories = ['all', 'espresso', 'latte', 'cold', 'specialty'] as const;

  const filteredRecipes = coffeeRecipes.filter((recipe) => {
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-coffee-text mb-3 sm:mb-4">
            Our Menu
          </h1>
          <p className="text-coffee-text/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Explore our curated collection of coffee recipes, each crafted with precision and passion.
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <BeanSelector 
            selectedBean={selectedBean} 
            onSelect={setSelectedBean}
            className="mb-6 sm:mb-8"
          />
        </div>

        <div className="mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Search coffee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-coffee-secondary focus:border-coffee-primary focus:outline-none bg-white text-coffee-text text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'all' ? null : category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                (!selectedCategory && category === 'all') || selectedCategory === category
                  ? 'bg-coffee-primary text-white shadow-md'
                  : 'bg-white text-coffee-text hover:bg-coffee-secondary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredRecipes.map((recipe) => (
            <CoffeeCard key={recipe.id} recipe={recipe} selectedBean={selectedBean} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-coffee-text/60 text-base sm:text-lg">No recipes found.</p>
          </div>
        )}
      </div>
    </div>
  );
}


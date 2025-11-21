import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LearnSection {
  id: string;
  title: string;
  content: string;
}

const learnSections: LearnSection[] = [
  {
    id: 'beans',
    title: 'Coffee Bean Types',
    content: 'Coffee beans come in two main varieties: Arabica and Robusta. Arabica beans are known for their smooth, complex flavors with higher acidity and lower caffeine content. Robusta beans have a stronger, more bitter taste with higher caffeine content. The origin, altitude, and processing method all contribute to the unique flavor profile of each bean.',
  },
  {
    id: 'brewing',
    title: 'Brewing Methods',
    content: 'Different brewing methods extract different flavors from coffee. Espresso uses pressure to create a concentrated shot. Pour-over methods like V60 allow for precise control over extraction time and temperature. Cold brew steeps coffee in cold water for 12-24 hours, resulting in a smoother, less acidic brew. Each method brings out different characteristics of the coffee.',
  },
  {
    id: 'flavor',
    title: 'Understanding Flavor Profiles',
    content: 'Coffee flavor is described through five main dimensions: Sweetness (natural sugars), Bitterness (roast level and extraction), Acidity (brightness and liveliness), Body (mouthfeel and weight), and Aroma (fragrance and scent). Understanding these dimensions helps you identify what you like and discover new coffees that match your preferences.',
  },
  {
    id: 'grind',
    title: 'Grind Size Matters',
    content: 'The grind size significantly affects extraction. Fine grinds (like espresso) have more surface area and extract quickly. Coarse grinds (like cold brew) extract slowly. Matching your grind size to your brewing method is crucial for achieving the perfect cup. Too fine can lead to over-extraction (bitter), while too coarse can cause under-extraction (sour).',
  },
  {
    id: 'milk',
    title: 'Milk Steaming Techniques',
    content: 'Properly steamed milk creates microfoam - tiny bubbles that give milk a silky texture. The key is to introduce air at the beginning, then submerge the steam wand to create a whirlpool. This incorporates the air evenly throughout the milk. Different milk types (whole, oat, almond) require different techniques due to their varying fat and protein content.',
  },
];

export default function Learn() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-coffee-text mb-3 sm:mb-4">
            Learn About Coffee
          </h1>
          <p className="text-coffee-text/70 text-base sm:text-lg px-4">
            Expand your coffee knowledge and become a true coffee artisan.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {learnSections.map((section) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-coffee-background transition-colors"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-coffee-text pr-4">
                  {section.title}
                </h2>
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-coffee-primary flex-shrink-0"
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 text-sm sm:text-base text-coffee-text/80 leading-relaxed">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


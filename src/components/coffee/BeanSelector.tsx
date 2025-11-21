import { coffeeBeans } from '../../data/coffeeBeans';
import { motion } from 'framer-motion';

interface BeanSelectorProps {
  selectedBean: string;
  onSelect: (beanId: string) => void;
  className?: string;
}

export default function BeanSelector({ selectedBean, onSelect, className = '' }: BeanSelectorProps) {
  return (
    <div className={className}>
      <h3 className="text-lg font-serif font-semibold text-coffee-text mb-4">
        Select Coffee Bean
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {coffeeBeans.map((bean) => {
          const isSelected = selectedBean === bean.id;
          return (
            <motion.button
              key={bean.id}
              onClick={() => onSelect(bean.id)}
              className={`p-4 rounded-xl text-left transition-all ${
                isSelected
                  ? 'bg-coffee-primary text-white shadow-lg'
                  : 'bg-white text-coffee-text hover:bg-coffee-secondary'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-semibold mb-1">{bean.name}</div>
              <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-coffee-text/60'}`}>
                {bean.origin}
              </div>
              <div className={`text-xs mt-2 flex flex-wrap gap-1 ${isSelected ? 'text-white/90' : 'text-coffee-text/70'}`}>
                {bean.flavorNotes.slice(0, 2).map((note) => (
                  <span
                    key={note}
                    className={`px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20' : 'bg-coffee-background'
                    }`}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}


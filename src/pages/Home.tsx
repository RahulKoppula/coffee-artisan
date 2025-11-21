import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LatteArt from '../components/coffee/LatteArt';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-coffee-text mb-4 sm:mb-6">
              Coffee Artisan
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-coffee-text/70 font-light max-w-2xl mx-auto px-4">
              Discover the art of coffee. Explore recipes, learn techniques, and create the perfect cup.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12 h-64 sm:h-80 md:h-96 relative"
          >
            <LatteArt className="w-full h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/menu"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-coffee-primary text-white rounded-full text-base sm:text-lg font-medium hover:bg-coffee-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              View Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


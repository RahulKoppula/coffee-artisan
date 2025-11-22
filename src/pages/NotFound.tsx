import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl sm:text-7xl font-serif font-bold text-coffee-text mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-coffee-text mb-4">
          Page Not Found
        </h2>
        <p className="text-coffee-text/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-coffee-primary text-white rounded-full text-base sm:text-lg font-medium hover:bg-coffee-primary/90 transition-all shadow-lg hover:shadow-xl"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}


import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full py-4 sm:py-6 px-4 sm:px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl sm:text-3xl font-serif font-bold text-coffee-text hover:text-coffee-primary transition-colors">
          Coffee Artisan
        </Link>
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <Link
            to="/menu"
            className="text-sm sm:text-base text-coffee-text hover:text-coffee-primary transition-colors font-medium"
          >
            Menu
          </Link>
          <Link
            to="/generator"
            className="text-sm sm:text-base text-coffee-text hover:text-coffee-primary transition-colors font-medium"
          >
            Generator
          </Link>
          <Link
            to="/learn"
            className="text-sm sm:text-base text-coffee-text hover:text-coffee-primary transition-colors font-medium"
          >
            Learn
          </Link>
        </div>
      </nav>
    </header>
  );
}


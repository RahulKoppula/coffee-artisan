# Coffee Artisan - Cafe Menu App

A beautiful, minimal pastel-themed web application for exploring coffee recipes, learning about coffee, and generating recipes based on available ingredients.

## Features

- 🎨 **Minimal Pastel UI** - Beautiful, clean design with a warm coffee-themed color palette
- ☕ **Coffee Menu** - Browse curated coffee recipes with 3D visualizations
- 🔍 **Recipe Generator** - Select ingredients and discover what coffee recipes you can make
- 📚 **Learn Section** - Expand your coffee knowledge with educational content
- 🎭 **3D Coffee Renderings** - Interactive 3D coffee cup visualizations using Three.js

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **Three.js + React Three Fiber** - 3D graphics
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── coffee/          # Coffee-related components (3D, cards, flavor profiles)
│   ├── generator/       # Recipe generator components
│   └── layout/          # Header, navigation
├── pages/               # Main pages (Home, Menu, Generator, Learn)
├── data/                # Coffee recipes and ingredients data
├── utils/               # Utility functions (recipe matching)
└── styles/              # Global styles
```

## Pages

- **Home** (`/`) - Landing page with 3D coffee animation
- **Menu** (`/menu`) - Browse all coffee recipes
- **Generator** (`/generator`) - Generate recipes based on ingredients
- **Learn** (`/learn`) - Coffee education content

## Color Palette

- Primary: `#D4A574` (Warm beige)
- Secondary: `#E8D5C4` (Light cream)
- Accent: `#C9A9A6` (Dusty rose)
- Background: `#F5F1EB` (Off-white)
- Text: `#5C4A3A` (Dark brown)

## License

MIT


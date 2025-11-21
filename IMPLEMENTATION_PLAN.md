# Coffee Cafe Menu App - Implementation Plan

## Project Overview
A minimal, pastel-themed reactive web application focused on coffee expertise, featuring a menu system and an intelligent coffee recipe generator based on available ingredients.

## Tech Stack Selection

### Frontend Framework
- **React 18+ with TypeScript** - For reactive UI and type safety
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### 3D Rendering
- **Three.js** - Core 3D library
- **React Three Fiber (R3F)** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F (controls, loaders, etc.)
- **GLTF/GLB models** - For coffee cup/bean 3D assets

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework (perfect for minimal design)
- **Framer Motion** - Smooth animations and transitions
- **Custom pastel color palette** - Soft, coffee-themed colors

### State Management
- **Zustand** or **React Context** - Lightweight state management for recipe generator

### Data & Logic
- **JSON data files** - Coffee recipes, ingredients, flavor profiles
- **Custom algorithm** - Match ingredients to possible recipes

## Project Structure

```
coffee/
├── public/
│   ├── models/          # 3D coffee models (GLTF/GLB)
│   └── images/          # Static images
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── coffee/
│   │   │   ├── Coffee3D.tsx        # 3D coffee rendering component
│   │   │   ├── CoffeeCard.tsx       # Menu item card
│   │   │   ├── RecipeCard.tsx       # Generated recipe card
│   │   │   └── FlavorProfile.tsx    # Flavor visualization
│   │   ├── generator/
│   │   │   ├── IngredientSelector.tsx
│   │   │   ├── RecipeGenerator.tsx
│   │   │   └── RecipeResults.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── pages/
│   │   ├── Home.tsx                 # Landing page
│   │   ├── Menu.tsx                 # Coffee menu page
│   │   ├── Generator.tsx            # Recipe generator page
│   │   └── Learn.tsx                # Coffee education page
│   ├── data/
│   │   ├── coffeeRecipes.ts         # Recipe database
│   │   ├── ingredients.ts           # Available ingredients
│   │   └── flavorProfiles.ts        # Flavor data
│   ├── utils/
│   │   ├── recipeMatcher.ts         # Algorithm to match ingredients to recipes
│   │   └── colorPalette.ts          # Pastel theme colors
│   ├── hooks/
│   │   └── useCoffee3D.ts           # 3D rendering hook
│   ├── styles/
│   │   └── globals.css              # Global styles + Tailwind
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Features Breakdown

### 1. Landing Page (`Home.tsx`)
- **Hero Section**: 
  - Large 3D coffee cup/bean animation
  - Minimal text: "Welcome to [Coffee Name]"
  - Single prominent "View Menu" button
- **Design**: Clean, spacious, pastel background
- **Animation**: Subtle floating animation on 3D model

### 2. Menu Page (`Menu.tsx`)
- **Grid Layout**: Coffee items in cards
- **Each Card Contains**:
  - 3D rendered coffee visualization
  - Coffee name
  - Brief description
  - Key ingredients
  - Flavor profile tags
- **Filtering**: By type (espresso, latte, cold brew, etc.)
- **Search**: Find coffee by name

### 3. Recipe Generator (`Generator.tsx`)
- **Ingredient Selection**:
  - Multi-select checkboxes/buttons
  - Categories: Coffee beans, milk types, syrups, spices, etc.
  - Visual ingredient icons
- **Algorithm**:
  - Match selected ingredients to possible recipes
  - Show recipes that can be made with available ingredients
  - Rank by ingredient match percentage
- **Results Display**:
  - Recipe cards with:
    - Recipe name
    - Required ingredients (highlighted)
    - Step-by-step instructions
    - Flavor profile visualization
    - 3D coffee visualization
  - "Missing ingredients" suggestions

### 4. Learn Page (`Learn.tsx`)
- **Coffee Education Content**:
  - Coffee bean types
  - Brewing methods
  - Flavor profiles explained
  - Coffee history/facts
- **Interactive Elements**: Expandable sections, visual guides

### 5. Flavor Profile Component
- **Visual Representation**:
  - Radial chart/spider chart
  - Dimensions: Sweetness, Bitterness, Acidity, Body, Aroma
  - Pastel color-coded
- **Text Description**: Flavor notes

## UI/UX Design Guidelines

### Color Palette (Pastel Theme)
```javascript
{
  primary: '#D4A574',      // Warm beige
  secondary: '#E8D5C4',    // Light cream
  accent: '#C9A9A6',       // Dusty rose
  background: '#F5F1EB',   // Off-white
  text: '#5C4A3A',         // Dark brown
  success: '#A8C5A0',      // Sage green
  warning: '#F4C2A1',       // Peach
}
```

### Typography
- **Headings**: Serif font (e.g., Playfair Display, Cormorant)
- **Body**: Sans-serif (e.g., Inter, Poppins)
- **Minimal font sizes**: Large headings, readable body text

### Spacing & Layout
- **Generous whitespace**: Minimal = spacious
- **Card-based design**: Soft shadows, rounded corners
- **Consistent padding**: 1.5rem - 2rem between elements

### Animations
- **Subtle transitions**: 200-300ms ease-in-out
- **3D model animations**: Slow rotation, gentle floating
- **Hover effects**: Slight scale, shadow increase

## 3D Rendering Strategy

### Coffee Models
1. **Option 1**: Use free GLTF models from:
   - Sketchfab
   - Poly Haven
   - Create simple models in Blender
2. **Option 2**: Procedural generation using Three.js primitives
   - Coffee cup: Cylinder + handle
   - Coffee liquid: Animated surface
   - Steam: Particle system

### Implementation
- **React Three Fiber Canvas**: Wrap 3D scenes
- **OrbitControls**: Allow user interaction (optional)
- **Lighting**: Soft ambient + directional lights
- **Materials**: Pastel-colored, matte finishes
- **Performance**: Lazy load 3D models, optimize textures

## Data Structure

### Coffee Recipe Schema
```typescript
interface CoffeeRecipe {
  id: string;
  name: string;
  description: string;
  category: 'espresso' | 'latte' | 'cold' | 'specialty';
  ingredients: Ingredient[];
  instructions: string[];
  flavorProfile: {
    sweetness: number;    // 0-10
    bitterness: number;    // 0-10
    acidity: number;       // 0-10
    body: number;          // 0-10
    aroma: number;         // 0-10
  };
  flavorNotes: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;       // minutes
}
```

### Ingredient Schema
```typescript
interface Ingredient {
  id: string;
  name: string;
  category: 'coffee' | 'milk' | 'syrup' | 'spice' | 'other';
  required: boolean;      // Core ingredient vs optional
}
```

## Implementation Roadmap

### Phase 1: Project Setup
1. Initialize Vite + React + TypeScript project
2. Install dependencies (React Router, Three.js, R3F, Tailwind, Framer Motion)
3. Configure Tailwind with pastel theme
4. Set up project structure
5. Create basic routing

### Phase 2: Core UI Components
1. Design system: Button, Card components
2. Layout components: Header, Footer, Navigation
3. Implement pastel color palette
4. Global styles and typography

### Phase 3: Landing Page
1. Hero section with 3D coffee model
2. Minimal design implementation
3. Navigation to Menu

### Phase 4: Menu Page
1. Coffee recipe data structure
2. CoffeeCard component
3. Grid layout with filtering
4. 3D coffee visualizations per card

### Phase 5: Recipe Generator
1. Ingredient selector component
2. Recipe matching algorithm
3. Results display component
4. Flavor profile visualization

### Phase 6: Learn Page
1. Content structure
2. Interactive sections
3. Visual guides

### Phase 7: Polish & Optimization
1. Animations and transitions
2. 3D model optimization
3. Responsive design
4. Performance optimization
5. Accessibility improvements

## Dependencies (package.json preview)

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "three": "^0.158.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "framer-motion": "^10.16.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/three": "^0.158.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

## Next Steps

1. Review and approve this plan
2. Initialize the project with Vite
3. Set up basic structure and routing
4. Implement design system and theme
5. Build landing page with 3D coffee
6. Develop menu and generator features

---

**Note**: This plan focuses on creating a beautiful, minimal, coffee-expertise-focused web application with engaging 3D visuals and intelligent recipe generation.


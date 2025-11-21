import { CoffeeBean } from './types';

export const coffeeBeans: CoffeeBean[] = [
  {
    id: 'arabica',
    name: 'Arabica',
    description: 'Smooth, complex flavors with higher acidity and lower caffeine content.',
    origin: 'Ethiopia',
    flavorModifier: {
      sweetness: 1,
      bitterness: -1,
      acidity: 2,
      body: 0,
      aroma: 1
    },
    flavorNotes: ['Smooth', 'Complex', 'Fruity', 'Floral']
  },
  {
    id: 'robusta',
    name: 'Robusta',
    description: 'Strong, bold taste with higher caffeine content and more bitterness.',
    origin: 'Central & West Africa',
    flavorModifier: {
      sweetness: -1,
      bitterness: 2,
      acidity: -1,
      body: 1,
      aroma: 0
    },
    flavorNotes: ['Bold', 'Strong', 'Earthy', 'Nutty']
  },
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright, wine-like acidity with floral and citrus notes.',
    origin: 'Ethiopia',
    flavorModifier: {
      sweetness: 1,
      bitterness: -2,
      acidity: 2,
      body: -1,
      aroma: 2
    },
    flavorNotes: ['Bright', 'Floral', 'Citrus', 'Wine-like']
  },
  {
    id: 'colombian',
    name: 'Colombian',
    description: 'Well-balanced with mild sweetness and nutty undertones.',
    origin: 'Colombia',
    flavorModifier: {
      sweetness: 1,
      bitterness: 0,
      acidity: 1,
      body: 1,
      aroma: 1
    },
    flavorNotes: ['Balanced', 'Nutty', 'Mild', 'Smooth']
  },
  {
    id: 'sumatran',
    name: 'Sumatran',
    description: 'Full-bodied with low acidity and earthy, spicy flavors.',
    origin: 'Indonesia',
    flavorModifier: {
      sweetness: 0,
      bitterness: 1,
      acidity: -2,
      body: 2,
      aroma: 1
    },
    flavorNotes: ['Earthy', 'Spicy', 'Full-bodied', 'Rich']
  },
  {
    id: 'kenyan',
    name: 'Kenyan',
    description: 'Bright acidity with berry and wine-like flavors.',
    origin: 'Kenya',
    flavorModifier: {
      sweetness: 1,
      bitterness: -1,
      acidity: 2,
      body: 0,
      aroma: 1
    },
    flavorNotes: ['Bright', 'Berry', 'Wine-like', 'Complex']
  },
  {
    id: 'brazilian',
    name: 'Brazilian',
    description: 'Low acidity with nutty, chocolatey notes and smooth body.',
    origin: 'Brazil',
    flavorModifier: {
      sweetness: 1,
      bitterness: -1,
      acidity: -1,
      body: 1,
      aroma: 0
    },
    flavorNotes: ['Nutty', 'Chocolatey', 'Smooth', 'Mild']
  },
  {
    id: 'guatemalan',
    name: 'Guatemalan',
    description: 'Complex flavors with chocolate, spice, and bright acidity.',
    origin: 'Guatemala',
    flavorModifier: {
      sweetness: 1,
      bitterness: 0,
      acidity: 1,
      body: 1,
      aroma: 1
    },
    flavorNotes: ['Chocolatey', 'Spicy', 'Complex', 'Bright']
  }
];

export const getBeanById = (id: string): CoffeeBean | undefined => {
  return coffeeBeans.find(bean => bean.id === id);
};

export const defaultBean = coffeeBeans[0]; // Arabica as default


import { FlavorProfile, FlavorModifier } from '../data/types';

export const applyFlavorModifier = (
  baseProfile: FlavorProfile,
  modifier: FlavorModifier
): FlavorProfile => {
  const clamp = (value: number): number => {
    return Math.max(0, Math.min(10, value));
  };

  return {
    sweetness: clamp(baseProfile.sweetness + (modifier.sweetness || 0)),
    bitterness: clamp(baseProfile.bitterness + (modifier.bitterness || 0)),
    acidity: clamp(baseProfile.acidity + (modifier.acidity || 0)),
    body: clamp(baseProfile.body + (modifier.body || 0)),
    aroma: clamp(baseProfile.aroma + (modifier.aroma || 0)),
  };
};


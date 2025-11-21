import { FlavorProfile as FlavorProfileType } from '../../data/types';

interface FlavorProfileProps {
  profile: FlavorProfileType;
  size?: 'small' | 'medium' | 'large';
}

export default function FlavorProfile({ profile, size = 'medium' }: FlavorProfileProps) {
  const sizeClasses = {
    small: 'h-20',
    medium: 'h-32',
    large: 'h-40'
  };

  const attributes = [
    { key: 'sweetness', label: 'Sweet', value: profile.sweetness },
    { key: 'bitterness', label: 'Bitter', value: profile.bitterness },
    { key: 'acidity', label: 'Acidic', value: profile.acidity },
    { key: 'body', label: 'Body', value: profile.body },
    { key: 'aroma', label: 'Aroma', value: profile.aroma },
  ];

  return (
    <div className={`${sizeClasses[size]} w-full`}>
      <div className="grid grid-cols-5 gap-2 h-full">
        {attributes.map((attr) => (
          <div key={attr.key} className="flex flex-col items-center justify-end">
            <div className="w-full bg-coffee-secondary rounded-t-lg overflow-hidden mb-1" style={{ height: '80%' }}>
              <div
                className="bg-coffee-primary w-full transition-all duration-500 rounded-t-lg"
                style={{ height: `${(attr.value / 10) * 100}%` }}
              />
            </div>
            <span className="text-xs text-coffee-text/60 text-center">{attr.label}</span>
            <span className="text-xs font-semibold text-coffee-text">{attr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


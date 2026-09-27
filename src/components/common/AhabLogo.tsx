import React from 'react';

interface AhabLogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark-only' | 'monogram';
  className?: string;
  inverted?: boolean;
}

export const AhabLogo: React.FC<AhabLogoProps> = ({
  variant = 'horizontal',
  className = '',
  inverted = false,
}) => {
  const textColor = inverted ? 'text-[#FAF6F0]' : 'text-[#2A0D08]';
  const goldColor = '#B68A4C';

  // Intricate Ethiopian Tibeb inspired geometric luxury emblem
  const LogoEmblem = ({ size = 32 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-500 hover:rotate-45"
      aria-hidden="true"
    >
      {/* Outer Diamond */}
      <polygon
        points="50,6 94,50 50,94 6,50"
        stroke={goldColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Concentric Diamond */}
      <polygon
        points="50,18 82,50 50,82 18,50"
        stroke={goldColor}
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />
      {/* Central Ethiopian Cross & Weave Motif */}
      <line x1="50" y1="24" x2="50" y2="76" stroke={goldColor} strokeWidth="2" strokeLinecap="square" />
      <line x1="24" y1="50" x2="76" y2="50" stroke={goldColor} strokeWidth="2" strokeLinecap="square" />
      {/* Diagonal Weave Accents */}
      <path
        d="M38 38L62 62M62 38L38 62"
        stroke={goldColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Center Heart / Artisan knot representing "Made With Love" */}
      <circle cx="50" cy="50" r="4.5" fill={goldColor} />
    </svg>
  );

  if (variant === 'mark-only') {
    return <LogoEmblem size={36} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoEmblem size={44} />
        <span className={`mt-3 font-serif text-3xl md:text-4xl tracking-[0.25em] font-light ${textColor} uppercase`}>
          AHAB
        </span>
        <span className="mt-1 text-[10px] tracking-[0.35em] text-[#B68A4C] uppercase font-medium">
          Made With Love
        </span>
        <span className={`mt-1 text-[9px] tracking-[0.25em] ${inverted ? 'text-[#FAF6F0]/60' : 'text-[#2A0D08]/60'} uppercase`}>
          Addis Ababa · Ethiopia
        </span>
      </div>
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <LogoEmblem size={28} />
        <span className={`font-serif text-xl tracking-[0.2em] font-light ${textColor} uppercase`}>
          AHAB
        </span>
      </div>
    );
  }

  // Default horizontal lockup for sticky top navbar
  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      <LogoEmblem size={32} />
      <div className="flex flex-col leading-none">
        <span className={`font-serif text-2xl tracking-[0.22em] font-normal ${textColor} uppercase transition-colors group-hover:text-[#B68A4C]`}>
          AHAB
        </span>
        <span className="text-[9px] tracking-[0.3em] text-[#B68A4C] uppercase font-medium mt-1">
          Made With Love
        </span>
      </div>
    </div>
  );
};

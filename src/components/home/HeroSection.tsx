import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../../data/products';

export const HeroSection: React.FC = () => {
  const { setActiveTab, setSelectedCategory, closeProduct } = useShop();

  const handleShopNow = () => {
    closeProduct();
    setSelectedCategory('all');
    setActiveTab('shop');
  };

  const handleCustom = () => {
    closeProduct();
    setActiveTab('custom');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#2A0D08]">
      {/* Editorial Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="AHAB Luxury Ethiopian Fashion Campaign"
          className="w-full h-full object-cover object-top opacity-85 scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A0D08] via-[#2A0D08]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-[#FAF6F0] flex flex-col items-center">
        
        {/* Subtle Brand Tagline */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-[1px] bg-[#B68A4C]" />
          <span className="text-xs uppercase tracking-[0.35em] text-[#B68A4C] font-semibold">
            Addis Ababa · Atelier Couture
          </span>
          <span className="w-8 h-[1px] bg-[#B68A4C]" />
        </div>

        {/* Large Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#FAF6F0] font-light max-w-4xl text-balance">
          Wear Your Story.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#FAF6F0]/90 font-light tracking-wide max-w-2xl leading-relaxed">
          Contemporary Ethiopian fashion crafted with love. Traditional handspun textiles woven into timeless, modern silhouettes.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleShopNow}
            className="w-full sm:w-auto px-8 py-4 bg-[#B68A4C] hover:bg-[#A3773A] text-[#FAF6F0] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-xl cursor-pointer"
          >
            <span>Shop Collection</span>
            <ArrowRight className="w-4 h-4 stroke-[1.8]" />
          </button>
          
          <button
            onClick={handleCustom}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#FAF6F0]/60 hover:border-[#B68A4C] hover:bg-[#FAF6F0]/10 text-[#FAF6F0] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 cursor-pointer"
          >
            Explore Custom Designs
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-8 border-t border-[#FAF6F0]/15 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#B68A4C] font-medium">Bespoke Fitting</span>
            <span className="text-[11px] text-[#FAF6F0]/70 mt-0.5">Master Tailoring</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#B68A4C] font-medium">Handspun Shemma</span>
            <span className="text-[11px] text-[#FAF6F0]/70 mt-0.5">100% Ethiopian Cotton</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#B68A4C] font-medium">Worldwide Courier</span>
            <span className="text-[11px] text-[#FAF6F0]/70 mt-0.5">Express via DHL</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#B68A4C] font-medium">Local Craftsmanship</span>
            <span className="text-[11px] text-[#FAF6F0]/70 mt-0.5">Fair Artisan Living</span>
          </div>
        </div>

      </div>
    </section>
  );
};

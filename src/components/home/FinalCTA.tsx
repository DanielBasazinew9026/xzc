import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Heart } from 'lucide-react';
import { AhabLogo } from '../common/AhabLogo';

export const FinalCTA: React.FC = () => {
  const { setActiveTab, setSelectedCategory, closeProduct } = useShop();

  const handleStartShopping = () => {
    closeProduct();
    setSelectedCategory('all');
    setActiveTab('shop');
  };

  return (
    <section className="py-28 bg-[#2A0D08] text-[#FAF6F0] relative overflow-hidden text-center">
      {/* Subtle geometric background watermark with high contrast discipline */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <AhabLogo variant="mark-only" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-full border border-[#B68A4C]/40 flex items-center justify-center text-[#B68A4C] mb-6">
          <Heart className="w-5 h-5 fill-[#B68A4C]/30 stroke-[1.8]" />
        </div>

        <span className="text-xs uppercase tracking-[0.35em] text-[#B68A4C] font-semibold">
          Addis Ababa · Global Delivery
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF6F0] mt-3 tracking-tight leading-tight">
          Designed With Love.
        </h2>

        <p className="mt-5 text-sm sm:text-base text-[#FAF6F0]/80 max-w-xl font-light leading-relaxed">
          Step into timeless Ethiopian couture. Experience garments woven by hands that honor generations of artistic excellence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleStartShopping}
            className="px-10 py-4 bg-[#B68A4C] hover:bg-[#A3773A] text-[#FAF6F0] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl flex items-center gap-3 cursor-pointer"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4 stroke-[1.8]" />
          </button>
        </div>

      </div>
    </section>
  );
};

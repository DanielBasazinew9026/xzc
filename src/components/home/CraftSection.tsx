import React from 'react';
import { useShop } from '../../context/ShopContext';
import { TRADITIONAL_IMG, HERO_IMAGE } from '../../data/products';
import { ArrowRight, Sparkles, ShieldCheck, Feather } from 'lucide-react';

export const CraftSection: React.FC = () => {
  const { setActiveTab } = useShop();

  return (
    <section className="py-24 bg-[#EFE5D6] text-[#2A0D08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Diptych */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-[#DFD3C1]">
              <img
                src={TRADITIONAL_IMG}
                alt="Master Ethiopian Weaver at Pit Loom in Addis Ababa"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0D08]/50 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Atelier Seal Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#FAF6F0] p-6 max-w-xs shadow-2xl border border-[#E2D5C3]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B68A4C]/15 flex items-center justify-center text-[#B68A4C]">
                  <Feather className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-widest text-[#B68A4C] font-semibold">
                    100% Handcrafted
                  </span>
                  <span className="font-serif text-lg text-[#2A0D08] font-medium">
                    Shiro Meda & Bole Ateliers
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#5E413B] leading-relaxed font-light">
                Up to 45 hours of handloom weaving per ceremonial Kemis, preserving ancestral Ethiopian textile heritage.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Craftsmanship Prose */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#B68A4C]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
                The Craft Behind AHAB
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A0D08] leading-tight">
              Where Ancient Weaving Meets Modern Architecture.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#5E413B] leading-relaxed font-light">
              AHAB is born from the rhythmic hum of wooden pit-looms in Addis Ababa and the quiet audacity of modern African couture. We do not mass-produce; every garment is spun, dyed, cut, and sewn with deliberate affection.
            </p>

            {/* 3 Pillars */}
            <div className="mt-8 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-[#B68A4C] flex items-center justify-center text-[#B68A4C] shrink-0 mt-0.5 font-serif text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#2A0D08]">Ethical Shemma Cotton</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#5E413B] leading-relaxed font-light">
                    Sourced directly from Ethiopian smallholder farmers. Hand-carded and drop-spindle spun without harsh synthetic bleaching.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-[#B68A4C] flex items-center justify-center text-[#B68A4C] shrink-0 mt-0.5 font-serif text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#2A0D08]">Tibeb Geometric Embroidery</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#5E413B] leading-relaxed font-light">
                    Intricate geometric borders carrying millennia of Abyssinian symbology—motifs representing faith, unity, royalty, and prosperity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-[#B68A4C] flex items-center justify-center text-[#B68A4C] shrink-0 mt-0.5 font-serif text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#2A0D08]">Dignified Living Wages</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#5E413B] leading-relaxed font-light">
                    Our master weavers and seamstresses earn more than double the national fair-wage standards, ensuring their craft sustains their families.
                  </p>
                </div>
              </div>

            </div>

            {/* Link to About */}
            <div className="mt-10">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveTab('about');
                }}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#2A0D08] hover:text-[#B68A4C] transition-colors cursor-pointer group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

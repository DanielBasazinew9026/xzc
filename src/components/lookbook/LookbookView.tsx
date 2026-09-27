import React from 'react';
import { useShop } from '../../context/ShopContext';
import { LOOKBOOK_STORIES, PRODUCTS } from '../../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export const LookbookView: React.FC = () => {
  const { openProduct, setActiveTab, setSelectedCategory } = useShop();

  const handleShopSilhouette = (name: string) => {
    const prod = PRODUCTS.find((p) => p.name.toLowerCase().includes(name.toLowerCase()));
    if (prod) {
      openProduct(prod);
    } else {
      setSelectedCategory('all');
      setActiveTab('shop');
    }
  };

  return (
    <div className="py-16 bg-[#EFE5D6] min-h-screen text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#B68A4C] font-semibold">
            Atelier Visual Monograph
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#2A0D08] mt-2">
            Heritage in Motion
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5E413B] font-light leading-relaxed max-w-xl mx-auto">
            A visual anthology capturing contemporary Ethiopian couture against the high plateau light of Addis Ababa.
          </p>
        </div>

        {/* Lookbook Chapters */}
        <div className="space-y-32">
          {LOOKBOOK_STORIES.map((chapter, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={chapter.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Editorial Image */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-[#2A0D08] shadow-2xl">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-cover object-top scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A0D08]/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 text-[#FAF6F0]">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#B68A4C] block">
                        Location
                      </span>
                      <span className="text-xs font-light">{chapter.location}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Typography & Featured Garment Link */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
                    {chapter.edition}
                  </span>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] mt-2 font-light leading-tight">
                    {chapter.title}
                  </h2>

                  <div className="my-6 pl-4 border-l-2 border-[#B68A4C]">
                    <p className="font-serif text-lg sm:text-xl text-[#2A0D08] italic leading-relaxed">
                      "{chapter.quote}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E2D5C3]">
                    <span className="block text-[11px] uppercase tracking-widest text-[#5E413B] font-medium mb-3">
                      Featured Silhouettes in this Monograph:
                    </span>
                    <div className="space-y-2">
                      {chapter.featuredItems.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleShopSilhouette(item)}
                          className="w-full text-left py-2 px-3 bg-[#FAF6F0] hover:bg-[#B68A4C] hover:text-white border border-[#E2D5C3] text-xs font-medium transition-colors flex items-center justify-between cursor-pointer group"
                        >
                          <span>{item}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lookbook Endplate */}
        <div className="mt-32 pt-16 border-t border-[#E2D5C3] text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
            Printed Edition
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0D08] mt-2 font-normal">
            Atelier Catalogues Available in Addis Ababa
          </h3>
          <p className="mt-2 text-xs text-[#5E413B] font-light">
            Inquire at our Bole studio for archival hardbound seasonal lookbooks and bespoke swatch samples.
          </p>
        </div>

      </div>
    </div>
  );
};

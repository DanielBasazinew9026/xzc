import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES_METADATA } from '../../data/products';
import { ArrowUpRight } from 'lucide-react';
import { Category } from '../../types';

export const FeaturedCollections: React.FC = () => {
  const { setActiveTab, setSelectedCategory, closeProduct } = useShop();

  const handleCategoryClick = (categoryId: string) => {
    closeProduct();
    if (categoryId === 'custom') {
      setActiveTab('custom');
    } else {
      setSelectedCategory(categoryId as Category);
      setActiveTab('shop');
    }
  };

  return (
    <section className="py-24 bg-[#EFE5D6] text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-[#E2D5C3]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              The Archives & Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-2 font-normal text-[#2A0D08]">
              Curated Masterpieces
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#5E413B] max-w-md leading-relaxed font-light">
            Each silhouette honors ancestral Ethiopian loom heritage reinterpreted with sharp contemporary architecture.
          </p>
        </div>

        {/* 5 Collections Grid (Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES_METADATA.map((cat, idx) => {
            const isWide = idx === 0 || idx === 4;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group relative overflow-hidden bg-[#FAF6F0] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E2D5C3]/80 ${
                  isWide ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E7DDD0]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0D08]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Subtle Amharic Cultural Marker */}
                  <div className="absolute top-4 right-4 bg-[#FAF6F0]/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-[#2A0D08] tracking-widest">
                    {cat.amharic}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex items-end justify-between bg-[#FAF6F0] border-t border-[#E2D5C3]/60">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#B68A4C] font-semibold">
                      {cat.itemCount}
                    </span>
                    <h3 className="font-serif text-2xl text-[#2A0D08] mt-1 group-hover:text-[#B68A4C] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#5E413B] mt-1 font-light">
                      {cat.subtitle}
                    </p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full border border-[#D8C7B0] flex items-center justify-center text-[#2A0D08] group-hover:bg-[#B68A4C] group-hover:border-[#B68A4C] group-hover:text-[#FAF6F0] transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4 stroke-[1.8]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { Search, X, ArrowRight, Tag } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openProduct, formatPrice } = useShop();
  const [query, setQuery] = useState('');

  const quickPicks = ['Kemis', 'Linen', 'Tibeb', 'Bridal', 'Men', 'Gold', 'Zuria'];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchAmharic = p.amharicName?.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchSub = p.subcategory.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchFabric = p.fabricDetails.toLowerCase().includes(q);
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(q));
      const matchColors = p.colors.some((c) => c.name.toLowerCase().includes(q));
      return matchName || matchAmharic || matchCategory || matchSub || matchDesc || matchFabric || matchTags || matchColors;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  const handleSelect = (product: any) => {
    setIsSearchOpen(false);
    openProduct(product);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A0D08]/75 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xl p-6 sm:p-8 animate-fade-in">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#E2D5C3]">
          <Search className="w-5 h-5 text-[#B68A4C] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by silhouette, Shemma, Tibeb, linen, color..."
            className="w-full bg-transparent text-base sm:text-lg text-[#2A0D08] placeholder:text-[#5E413B]/60 focus:outline-none font-serif"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Chips */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-[11px] uppercase tracking-wider text-[#5E413B] font-medium shrink-0">
            Suggestions:
          </span>
          {quickPicks.map((pick) => (
            <button
              key={pick}
              onClick={() => setQuery(pick)}
              className="px-2.5 py-1 bg-[#EFE5D6] hover:bg-[#B68A4C] hover:text-white text-[11px] text-[#2A0D08] transition-colors cursor-pointer"
            >
              {pick}
            </button>
          ))}
        </div>

        {/* Results Showcase */}
        <div className="mt-6 max-h-96 overflow-y-auto divide-y divide-[#E2D5C3]">
          {query.trim() && results.length === 0 ? (
            <div className="py-12 text-center text-[#5E413B]">
              <p className="font-serif text-xl text-[#2A0D08]">No garments matching "{query}"</p>
              <p className="text-xs mt-1">Try searching for "Kemis", "Linen", or "Traditional".</p>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product)}
                className="py-3.5 flex items-center gap-4 hover:bg-[#EFE5D6]/60 p-2 cursor-pointer transition-colors"
              >
                <div className="w-14 h-16 bg-[#E7DDD0] overflow-hidden shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#B68A4C]">
                    {product.subcategory}
                  </span>
                  <h4 className="font-serif text-base text-[#2A0D08]">{product.name}</h4>
                  <div className="text-xs font-semibold text-[#2A0D08] tabular-nums mt-0.5">
                    {formatPrice(product.priceUSD, product.priceETB)}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#5E413B]" />
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-[#5E413B] text-xs font-light">
              Start typing to search our handcrafted collection.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

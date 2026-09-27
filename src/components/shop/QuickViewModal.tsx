import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Heart, ShoppingBag, ArrowRight, Star, Ruler } from 'lucide-react';
import { ProductColor } from '../../types';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice,
    openProduct,
    setIsSizeGuideOpen
  } = useShop();

  if (!quickViewProduct) return null;

  const [selectedSize, setSelectedSize] = useState<string>(quickViewProduct.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<ProductColor>(quickViewProduct.colors[0]);
  const wishlisted = isInWishlist(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, 1);
    setQuickViewProduct(null);
  };

  const handleViewFull = () => {
    const prod = quickViewProduct;
    setQuickViewProduct(null);
    openProduct(prod);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A0D08]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#FAF6F0]/90 text-[#2A0D08] hover:text-[#B68A4C] flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="aspect-[3/4] bg-[#E7DDD0] overflow-hidden">
            <img
              src={quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B68A4C] font-semibold">
                {quickViewProduct.subcategory}
              </span>
              
              <h3 className="font-serif text-2xl text-[#2A0D08] mt-1 font-normal">
                {quickViewProduct.name}
              </h3>

              <div className="mt-2 text-lg font-semibold text-[#2A0D08] tabular-nums">
                {formatPrice(quickViewProduct.priceUSD, quickViewProduct.priceETB)}
              </div>

              <p className="mt-3 text-xs text-[#5E413B] font-light leading-relaxed line-clamp-3">
                {quickViewProduct.description}
              </p>

              {/* Colors */}
              <div className="mt-4">
                <span className="block text-[11px] uppercase tracking-wider text-[#5E413B] font-medium mb-1.5">
                  Color: <strong className="text-[#2A0D08]">{selectedColor.name}</strong>
                </span>
                <div className="flex gap-2">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-6 h-6 rounded-full border p-0.5 ${
                        selectedColor.name === c.name ? 'border-[#B68A4C]' : 'border-transparent'
                      }`}
                    >
                      <span className="block w-full h-full rounded-full" style={{ backgroundColor: c.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-[11px] mb-1.5">
                  <span className="uppercase tracking-wider text-[#5E413B] font-medium">
                    Size: <strong className="text-[#2A0D08]">{selectedSize}</strong>
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[#B68A4C] hover:underline"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-2.5 py-1 text-xs border ${
                        selectedSize === s
                          ? 'bg-[#2A0D08] text-white border-[#2A0D08]'
                          : 'bg-[#FAF6F0] text-[#2A0D08] border-[#E2D5C3]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#E2D5C3] space-y-2">
              <button
                onClick={handleAdd}
                className="w-full py-3 bg-[#2A0D08] hover:bg-[#B68A4C] text-white text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#B68A4C]" />
                <span>Add to Shopping Bag</span>
              </button>

              <button
                onClick={handleViewFull}
                className="w-full py-2.5 border border-[#2A0D08] text-[#2A0D08] hover:bg-[#EFE5D6] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
              >
                View Full Product Details
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

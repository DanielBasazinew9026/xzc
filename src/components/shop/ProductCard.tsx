import React, { useState } from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    openProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const wishlisted = isInWishlist(product.id);

  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openProduct(product);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[0];
    addToCart(product, defaultSize, defaultColor, 1);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-[#FAF6F0] border border-[#E2D5C3]/70 hover:border-[#B68A4C]/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#ECE3D6]">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Quiet Editorial Status Label */}
        {product.isNewArrival && (
          <div className="absolute top-3 left-3 bg-[#2A0D08] text-[#FAF6F0] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-medium">
            New Arrival
          </div>
        )}
        {product.isBestSeller && !product.isNewArrival && (
          <div className="absolute top-3 left-3 bg-[#B68A4C] text-[#FAF6F0] px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-medium">
            Best Seller
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
            wishlisted
              ? 'bg-[#2A0D08] text-[#B68A4C]'
              : 'bg-[#FAF6F0]/90 text-[#2A0D08] hover:bg-[#FAF6F0] hover:text-[#B68A4C]'
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-[#B68A4C]' : ''}`} />
        </button>

        {/* Action Overlay Bar */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#2A0D08]/75 via-[#2A0D08]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={handleQuickView}
            className="flex-1 py-2 px-3 bg-[#FAF6F0] text-[#2A0D08] hover:bg-[#B68A4C] hover:text-white text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <button
            onClick={handleQuickAdd}
            className="py-2 px-3 bg-[#2A0D08] text-white hover:bg-[#3E1A14] text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Add Default Size to Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#B68A4C]" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-[#FAF6F0]">
        <div>
          <div className="flex items-center justify-between text-[11px] tracking-widest uppercase text-[#5E413B]">
            <span>{product.subcategory}</span>
            {product.amharicName && (
              <span className="text-[10px] text-[#B68A4C]">{product.amharicName}</span>
            )}
          </div>

          <h3 className="font-serif text-lg text-[#2A0D08] mt-1.5 line-clamp-1 group-hover:text-[#B68A4C] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Pricing & Swatches */}
        <div className="mt-3 pt-3 border-t border-[#E2D5C3]/60 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-[#2A0D08] tabular-nums">
              {formatPrice(product.priceUSD, product.priceETB)}
            </span>
            {product.originalPriceUSD && (
              <span className="text-xs text-[#5E413B]/70 line-through tabular-nums">
                {formatPrice(product.originalPriceUSD, product.originalPriceETB)}
              </span>
            )}
          </div>

          {/* Color preview swatches */}
          <div className="flex items-center gap-1">
            {product.colors.slice(0, 3).map((col) => (
              <span
                key={col.name}
                className="w-2.5 h-2.5 rounded-full border border-[#D8C7B0]"
                style={{ backgroundColor: col.hex }}
                title={col.name}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[10px] text-[#5E413B] ml-0.5">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    formatPrice,
    openProduct
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleMoveToBag = (product: any) => {
    addToCart(product, product.sizes[0] || 'M', product.colors[0], 1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-[#2A0D08]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-[#E2D5C3]">
          
          {/* Header */}
          <div className="p-6 bg-[#EFE5D6] border-b border-[#E2D5C3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 fill-[#B68A4C] text-[#B68A4C]" />
              <h2 className="font-serif text-2xl text-[#2A0D08]">Saved Wishlist</h2>
              <span className="text-xs text-[#5E413B] font-semibold tabular-nums">
                ({wishlist.length})
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E2D5C3]">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <Heart className="w-12 h-12 text-[#D8C7B0] stroke-[1] mb-3" />
                <h3 className="font-serif text-2xl text-[#2A0D08]">No Items Saved Yet</h3>
                <p className="mt-2 text-xs text-[#5E413B] max-w-xs font-light">
                  Tap the heart icon on any garment to curate your personal archive.
                </p>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div key={product.id} className="py-4 flex gap-4">
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      openProduct(product);
                    }}
                    className="w-20 h-24 bg-[#E7DDD0] shrink-0 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            openProduct(product);
                          }}
                          className="font-serif text-base text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#5E413B] hover:text-[#2A0D08] p-1 cursor-pointer"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="block text-xs font-semibold text-[#2A0D08] mt-1 tabular-nums">
                        {formatPrice(product.priceUSD, product.priceETB)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleMoveToBag(product)}
                      className="mt-3 py-2 px-3 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#B68A4C]" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

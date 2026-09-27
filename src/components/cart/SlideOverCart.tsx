import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check
} from 'lucide-react';

export const SlideOverCart: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartSubtotalUSD,
    cartSubtotalETB,
    promoCode,
    discountPercent,
    applyPromoCode,
    formatPrice,
    currency,
    setIsCheckoutOpen,
    openProduct
  } = useShop();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const rawSubtotal = currency === 'USD' ? cartSubtotalUSD : cartSubtotalETB;
  const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
  const finalTotal = rawSubtotal - discountAmount;

  // Free delivery threshold in Addis Ababa ($300 / ~40,000 ETB)
  const freeThresholdUSD = 300;
  const percentToFree = Math.min(100, Math.round((cartSubtotalUSD / freeThresholdUSD) * 100));

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const ok = applyPromoCode(inputCode);
    if (!ok) {
      setPromoError('Invalid code. Try "AHABLOVE"');
    } else {
      setPromoError('');
      setInputCode('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#2A0D08]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-[#E2D5C3]">
          
          {/* Header */}
          <div className="p-6 bg-[#EFE5D6] border-b border-[#E2D5C3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#B68A4C]" />
              <h2 className="font-serif text-2xl text-[#2A0D08]">Shopping Bag</h2>
              <span className="text-xs text-[#5E413B] font-semibold tabular-nums">
                ({cart.reduce((t, i) => t + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#2A0D08] hover:text-[#B68A4C] transition-colors cursor-pointer"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Addis Ababa Delivery Progress */}
          <div className="px-6 py-3 bg-[#FAF6F0] border-b border-[#E2D5C3]">
            <div className="flex items-center justify-between text-[11px] mb-1.5 font-medium">
              <span className="text-[#2A0D08]">Complimentary Courier in Addis Ababa</span>
              <span className="text-[#B68A4C]">
                {percentToFree >= 100 ? 'Unlocked ✓' : `${percentToFree}%`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#E2D5C3] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B68A4C] transition-all duration-500"
                style={{ width: `${percentToFree}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E2D5C3]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#EFE5D6] flex items-center justify-center text-[#B68A4C] mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2A0D08]">Your Bag is Empty</h3>
                <p className="mt-2 text-xs text-[#5E413B] max-w-xs font-light leading-relaxed">
                  Discover our traditional royal Kemis and modern cultural couture from the Addis Ababa atelier.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-3 bg-[#2A0D08] text-white text-xs uppercase tracking-widest hover:bg-[#B68A4C] transition-colors cursor-pointer"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div
                    onClick={() => {
                      setIsCartOpen(false);
                      openProduct(item.product);
                    }}
                    className="w-20 h-24 bg-[#E7DDD0] shrink-0 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            openProduct(item.product);
                          }}
                          className="font-serif text-base text-[#2A0D08] hover:text-[#B68A4C] transition-colors cursor-pointer line-clamp-1"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#5E413B] hover:text-[#2A0D08] p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-1 text-[11px] text-[#5E413B] flex items-center gap-2">
                        <span>Size: <strong className="text-[#2A0D08]">{item.selectedSize}</strong></span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span>{item.selectedColor.name}</span>
                        </span>
                      </div>
                    </div>

                    {/* Quantity Stepper & Price */}
                    <div className="flex items-center justify-between mt-3 pt-2">
                      <div className="flex items-center border border-[#E2D5C3] bg-[#FAF6F0]">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs hover:bg-[#EFE5D6]"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs hover:bg-[#EFE5D6]"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-semibold text-xs text-[#2A0D08] tabular-nums">
                        {formatPrice(
                          item.product.priceUSD * item.quantity,
                          (item.product.priceETB || item.product.priceUSD * 135) * item.quantity
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#EFE5D6] border-t border-[#E2D5C3] space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Courtesy code (e.g. AHABLOVE)"
                  className="flex-1 bg-[#FAF6F0] border border-[#E2D5C3] px-3 py-2 text-xs uppercase placeholder:normal-case text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2A0D08] text-white text-xs uppercase tracking-wider hover:bg-[#B68A4C] transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {promoCode && (
                <div className="text-[11px] text-[#B68A4C] flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Code "{promoCode}" applied ({discountPercent}% courtesy discount)</span>
                </div>
              )}
              {promoError && (
                <div className="text-[11px] text-red-700">
                  {promoError}
                </div>
              )}

              {/* Subtotal breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5E413B]">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-[#2A0D08]">
                    {formatPrice(cartSubtotalUSD, cartSubtotalETB)}
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#B68A4C] font-medium">
                    <span>Atelier Courtesy ({discountPercent}%)</span>
                    <span className="tabular-nums">
                      -{formatPrice(
                        Math.round(cartSubtotalUSD * (discountPercent / 100)),
                        Math.round(cartSubtotalETB * (discountPercent / 100))
                      )}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-[#5E413B]">
                  <span>Estimated Shipping</span>
                  <span className="text-[#B68A4C] font-medium">Calculated at Checkout</span>
                </div>
                <div className="pt-2 border-t border-[#E2D5C3] flex justify-between font-serif text-xl text-[#2A0D08]">
                  <span>Total</span>
                  <span className="font-semibold tabular-nums">
                    {formatPrice(
                      finalTotal,
                      currency === 'ETB' ? finalTotal : undefined
                    )}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] text-[#5E413B] uppercase tracking-wider">
                <span>Secure Checkout · Chapa · Telebirr · Visa / Mastercard</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

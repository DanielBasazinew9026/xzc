import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Product, ProductColor } from '../../types';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from './ProductCard';
import {
  Heart,
  ShoppingBag,
  Share2,
  Ruler,
  Truck,
  RotateCcw,
  Sparkles,
  Star,
  Check,
  ChevronRight,
  MessageCircle,
  Eye,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const {
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    setIsCheckoutOpen,
    showToast,
    closeProduct
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'fabric' | 'care' | 'delivery' | 'reviews'>('fabric');
  const [is360Active, setIs360Active] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });

  // Reviews state
  const [reviewsList, setReviewsList] = useState(product.reviews || []);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewCity, setNewReviewCity] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const wishlisted = isInWishlist(product.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' });
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsCheckoutOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const priceStr = formatPrice(product.priceUSD, product.priceETB);
    const message = encodeURIComponent(
      `Hello AHAB Atelier, I would like to order "${product.name}" in Size ${selectedSize}, Color ${selectedColor.name} (${priceStr}). Could you please advise on bespoke delivery in Addis Ababa / worldwide?`
    );
    window.open(`https://wa.me/251911234567?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard');
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor.trim(),
      location: newReviewCity.trim() || 'Addis Ababa',
      rating: newReviewRating,
      date: 'Just now',
      title: 'Artisan Excellence',
      comment: newReviewComment.trim(),
      verifiedPurchase: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewReviewAuthor('');
    setNewReviewCity('');
    setNewReviewComment('');
    setReviewSubmitted(true);
    showToast('Thank you for sharing your experience!');
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 3);

  return (
    <div className="py-8 bg-[#EFE5D6] min-h-screen text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#5E413B] mb-8 font-medium">
          <button onClick={closeProduct} className="hover:text-[#2A0D08] cursor-pointer">
            Catalog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#B68A4C]" />
          <span className="capitalize">{product.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#B68A4C]" />
          <span className="text-[#2A0D08] font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Contiguous PDP Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image Gallery with Zoom & 360° Studio Feature */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Thumbnail Column */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0 pb-2 sm:pb-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setIs360Active(false);
                  }}
                  className={`w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border transition-all cursor-pointer bg-[#E7DDD0] shrink-0 ${
                    activeImageIndex === idx && !is360Active
                      ? 'border-[#B68A4C] ring-1 ring-[#B68A4C]'
                      : 'border-[#E2D5C3] opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}

              {/* 360° Multi-Angle Studio Toggle Button */}
              <button
                onClick={() => {
                  setIs360Active(true);
                  setActiveImageIndex(0);
                }}
                className={`w-16 h-20 sm:w-20 sm:h-24 border flex flex-col items-center justify-center p-2 text-center transition-all cursor-pointer ${
                  is360Active
                    ? 'border-[#B68A4C] bg-[#FAF6F0] text-[#B68A4C] ring-1 ring-[#B68A4C]'
                    : 'border-[#E2D5C3] bg-[#FAF6F0] text-[#2A0D08] hover:border-[#B68A4C]'
                }`}
                title="Interactive Studio 360 Rotation"
              >
                <RefreshCw className={`w-5 h-5 mb-1 ${is360Active ? 'animate-spin' : ''}`} />
                <span className="text-[9px] uppercase tracking-wider font-semibold">360° View</span>
              </button>
            </div>

            {/* Main Stage Image with Optical Zoom */}
            <div className="relative flex-1 aspect-[3/4] overflow-hidden bg-[#E2D5C3] border border-[#E2D5C3] shadow-sm select-none">
              
              {/* 360° Interactive Angle Simulator */}
              {is360Active ? (
                <div className="relative w-full h-full flex items-center justify-center bg-[#1A0704]">
                  <img
                    src={product.images[activeImageIndex % product.images.length]}
                    alt={`${product.name} 360 rotation`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Angle slider */}
                  <div className="absolute bottom-4 inset-x-6 bg-[#FAF6F0]/95 backdrop-blur-md p-3 border border-[#E2D5C3] flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#B68A4C] font-semibold flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5" />
                      Rotate Studio Angle
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={product.images.length - 1}
                      step={1}
                      value={activeImageIndex}
                      onChange={(e) => setActiveImageIndex(Number(e.target.value))}
                      className="w-36 accent-[#B68A4C] cursor-pointer"
                    />
                    <button
                      onClick={() => setIs360Active(false)}
                      className="text-[10px] uppercase tracking-wider text-[#2A0D08] font-bold hover:text-[#B68A4C]"
                    >
                      Exit 360°
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="relative w-full h-full cursor-crosshair group"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={product.images[activeImageIndex] || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Zoom Lens Preview Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10 hidden md:block"
                    style={{
                      display: zoomStyle.display,
                      backgroundImage: `url(${product.images[activeImageIndex] || product.images[0]})`,
                      backgroundPosition: zoomStyle.backgroundPosition,
                      backgroundSize: '220%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />

                  {/* Hint indicator */}
                  <div className="absolute top-4 left-4 bg-[#FAF6F0]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#5E413B] font-medium hidden md:flex items-center gap-1.5 pointer-events-none">
                    <Eye className="w-3 h-3 text-[#B68A4C]" />
                    <span>Hover to inspect weave</span>
                  </div>
                </div>
              )}

              {/* Wishlist Overlay Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-md ${
                  wishlisted
                    ? 'bg-[#2A0D08] text-[#B68A4C]'
                    : 'bg-[#FAF6F0]/90 text-[#2A0D08] hover:bg-[#FAF6F0]'
                }`}
                aria-label="Toggle Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-[#B68A4C]' : ''}`} />
              </button>

            </div>

          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Top Subtitle & Amharic Title */}
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#5E413B]">
              <span>{product.subcategory}</span>
              {product.amharicName && (
                <span className="text-[#B68A4C] font-serif text-sm">{product.amharicName}</span>
              )}
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] mt-2 font-normal leading-tight">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="mt-4 flex items-center justify-between pb-6 border-b border-[#E2D5C3]">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-semibold text-[#2A0D08] tabular-nums">
                  {formatPrice(product.priceUSD, product.priceETB)}
                </span>
                {product.originalPriceUSD && (
                  <span className="text-sm text-[#5E413B]/70 line-through tabular-nums">
                    {formatPrice(product.originalPriceUSD, product.originalPriceETB)}
                  </span>
                )}
              </div>

              {/* Verified Reviews Rating */}
              <div className="flex items-center gap-1.5 text-xs text-[#5E413B]">
                <div className="flex items-center text-[#B68A4C]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-[#B68A4C]' : 'opacity-30'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#2A0D08] tabular-nums">{product.rating}</span>
                <span>({reviewsList.length})</span>
              </div>
            </div>

            {/* Description Snippet */}
            <p className="mt-6 text-sm text-[#5E413B] font-light leading-relaxed">
              {product.description}
            </p>

            {/* Available Colors Selection */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="uppercase tracking-widest text-[#5E413B] font-medium">
                  Color: <strong className="text-[#2A0D08]">{selectedColor.name}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer p-0.5 ${
                        isSelected ? 'border-[#B68A4C] scale-110' : 'border-transparent hover:border-[#D8C7B0]'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="block w-full h-full rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selection & Interactive Size Guide Trigger */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="uppercase tracking-widest text-[#5E413B] font-medium">
                  Selected Size: <strong className="text-[#2A0D08]">{selectedSize}</strong>
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#B68A4C] hover:underline font-medium cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size & Measurement Guide</span>
                </button>
              </div>

              {/* Sizes Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2.5 text-xs uppercase tracking-wider font-medium border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#2A0D08] text-[#FAF6F0] border-[#2A0D08] shadow-sm'
                          : 'bg-[#FAF6F0] text-[#2A0D08] border-[#E2D5C3] hover:border-[#B68A4C]'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-[#5E413B] font-medium">
                Quantity:
              </span>
              <div className="flex items-center border border-[#E2D5C3] bg-[#FAF6F0]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-[#2A0D08] hover:bg-[#EFE5D6] transition-colors cursor-pointer"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-semibold text-[#2A0D08] tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-[#2A0D08] hover:bg-[#EFE5D6] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-[#B68A4C] font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> In Atelier Stock
              </span>
            </div>

            {/* Primary Action Buttons (Add to Bag, Buy Now, WhatsApp) */}
            <div className="mt-8 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 bg-[#2A0D08] hover:bg-[#3E1A14] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-3 transition-colors cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#B68A4C]" />
                  <span>Add to Shopping Bag</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="sm:w-1/3 py-4 px-6 bg-[#B68A4C] hover:bg-[#A3773A] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer shadow-md"
                >
                  Buy Now
                </button>
              </div>

              {/* Direct WhatsApp Concierge Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-6 bg-[#1F4E38] hover:bg-[#183F2D] text-[#FAF6F0] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Direct via WhatsApp Atelier (+251 91 123 4567)</span>
              </button>
            </div>

            {/* Micro-Trust Services Bar */}
            <div className="mt-8 pt-6 border-t border-[#E2D5C3] grid grid-cols-2 gap-4 text-xs text-[#5E413B]">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#B68A4C] shrink-0" />
                <span>Free Express in Addis Ababa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B68A4C] shrink-0" />
                <span>Authentic Pit-Loom Shemma</span>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Product Accordion / Tabs (Fabric, Care, Delivery, Reviews) */}
        <div className="mt-20 pt-12 border-t border-[#E2D5C3]">
          
          <div className="flex items-center justify-center gap-2 sm:gap-6 border-b border-[#E2D5C3] pb-4 overflow-x-auto">
            {[
              { id: 'fabric', label: 'Fabric & Artisan Weave' },
              { id: 'care', label: 'Care & Preservation' },
              { id: 'delivery', label: 'Delivery & Shipping' },
              { id: 'reviews', label: `Patron Reviews (${reviewsList.length})` },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium pb-2 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#B68A4C] border-b-2 border-[#B68A4C] font-semibold'
                      : 'text-[#5E413B] hover:text-[#2A0D08]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="py-8 max-w-3xl mx-auto">
            {activeTab === 'fabric' && (
              <div className="space-y-4 text-sm text-[#5E413B] font-light leading-relaxed">
                <h3 className="font-serif text-2xl text-[#2A0D08]">Materials & Provenance</h3>
                <p>{product.fabricDetails}</p>
                <p className="italic bg-[#FAF6F0] p-4 border border-[#E2D5C3]">
                  "{product.story}"
                </p>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-4 text-sm text-[#5E413B] font-light leading-relaxed">
                <h3 className="font-serif text-2xl text-[#2A0D08]">Care Instructions</h3>
                <p>{product.careInstructions}</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-[#FAF6F0] border border-[#E2D5C3]">
                    <span className="block text-xs uppercase tracking-wider text-[#B68A4C] font-medium mb-1">
                      Washing
                    </span>
                    <span>Gentle cold water or specialist dry clean. Never wring delicate gold embroidery.</span>
                  </div>
                  <div className="p-4 bg-[#FAF6F0] border border-[#E2D5C3]">
                    <span className="block text-xs uppercase tracking-wider text-[#B68A4C] font-medium mb-1">
                      Storage
                    </span>
                    <span>Store flat or on wide-padded hanger. Keep away from direct dampness.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-4 text-sm text-[#5E413B] font-light leading-relaxed">
                <h3 className="font-serif text-2xl text-[#2A0D08]">Shipping & Courier Times</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-[#FAF6F0] border border-[#E2D5C3]">
                    <h4 className="font-medium text-[#2A0D08]">Addis Ababa Delivery</h4>
                    <p className="text-xs text-[#5E413B] mt-1">
                      Same-day or next-day personal courier across Bole, Kazanchis, CMC, Old Airport, and Sarbet. Complimentary.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF6F0] border border-[#E2D5C3]">
                    <h4 className="font-medium text-[#2A0D08]">Ethiopia Regional Express</h4>
                    <p className="text-xs text-[#5E413B] mt-1">
                      Hawassa, Bahir Dar, Mekelle, Dire Dawa, Gondar: 2–3 business days via verified express couriers.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF6F0] border border-[#E2D5C3]">
                    <h4 className="font-medium text-[#2A0D08]">International Courier (DHL Express)</h4>
                    <p className="text-xs text-[#5E413B] mt-1">
                      US, Canada, Europe, Middle East: 3–5 business days with full door-to-door tracking.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Existing Reviews */}
                <div className="space-y-6">
                  {reviewsList.map((rev) => (
                    <div key={rev.id} className="p-6 bg-[#FAF6F0] border border-[#E2D5C3]">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-[#2A0D08]">{rev.author}</span>
                          <span className="text-xs text-[#5E413B]">({rev.location})</span>
                        </div>
                        <div className="flex items-center text-[#B68A4C]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#B68A4C]" />
                          ))}
                        </div>
                      </div>
                      <h4 className="font-medium text-xs text-[#B68A4C] uppercase tracking-wider mb-1">
                        {rev.title}
                      </h4>
                      <p className="text-xs text-[#5E413B] leading-relaxed font-light">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Add Review Form */}
                <div className="p-6 bg-[#FAF6F0] border border-[#E2D5C3]">
                  <h4 className="font-serif text-xl text-[#2A0D08] mb-4">Write a Patron Review</h4>
                  <form onSubmit={handleAddReview} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={newReviewAuthor}
                          onChange={(e) => setNewReviewAuthor(e.target.value)}
                          placeholder="e.g. Bethlehem K."
                          className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                          City / Location
                        </label>
                        <input
                          type="text"
                          value={newReviewCity}
                          onChange={(e) => setNewReviewCity(e.target.value)}
                          placeholder="e.g. Addis Ababa or London"
                          className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                        Rating (Stars)
                      </label>
                      <select
                        value={newReviewRating}
                        onChange={(e) => setNewReviewRating(Number(e.target.value))}
                        className="bg-[#FAF6F0] border border-[#E2D5C3] px-3 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                      >
                        <option value={5}>5 Stars - Flawless Couture</option>
                        <option value={4}>4 Stars - Exquisite Quality</option>
                        <option value={3}>3 Stars - Satisfied</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                        Your Feedback & Experience
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        placeholder="Tell us about the drape, weave, and event where you wore it..."
                        className="w-full bg-[#FAF6F0] border border-[#E2D5C3] p-3 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#2A0D08] hover:bg-[#B68A4C] text-white text-xs uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Related Products Recommendation */}
        <div className="mt-20 pt-16 border-t border-[#E2D5C3]">
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              Curated Complements
            </span>
            <h2 className="font-serif text-3xl font-light text-[#2A0D08] mt-2">
              You May Also Admire
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

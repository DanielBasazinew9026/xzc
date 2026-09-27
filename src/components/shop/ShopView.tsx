import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from './ProductCard';
import { Category, Product } from '../../types';
import { Filter, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const ShopView: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    formatPrice,
    currency
  } = useShop();

  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('newest');
  const [maxPrice, setMaxPrice] = useState<number>(600);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [modernOnly, setModernOnly] = useState<boolean>(false);

  const availableSizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom Fit'];
  const availableColors = [
    { name: 'all', label: 'All Colors', hex: '#FAF6F0' },
    { name: 'White & Gold', label: 'Shemma Gold', hex: '#FAF7F0' },
    { name: 'Cream', label: 'Cream', hex: '#F0E7D8' },
    { name: 'Sand', label: 'Sand', hex: '#DBC9B0' },
    { name: 'Burgundy', label: 'Burgundy', hex: '#631B21' },
    { name: 'Chocolate', label: 'Chocolate', hex: '#2A0D08' },
    { name: 'Black', label: 'Black', hex: '#1C1B1A' },
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && selectedCategory !== 'custom') {
        if (product.category !== selectedCategory) return false;
      }
      // Modern sub-tag filter
      if (modernOnly && !product.tags.includes('Modern') && !product.tags.includes('Contemporary Luxury')) {
        return false;
      }
      // Size filter
      if (selectedSize !== 'all' && !product.sizes.includes(selectedSize)) {
        return false;
      }
      // Color filter
      if (selectedColor !== 'all') {
        const hasColor = product.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }
      // Price filter
      if (product.priceUSD > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === 'price-asc') return a.priceUSD - b.priceUSD;
      if (selectedSort === 'price-desc') return b.priceUSD - a.priceUSD;
      if (selectedSort === 'rating') return b.rating - a.rating;
      if (selectedSort === 'popular') return b.reviewCount - a.reviewCount;
      // Default: newest
      return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
    });
  }, [selectedCategory, selectedSize, selectedColor, selectedSort, maxPrice, modernOnly]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setSelectedSort('newest');
    setMaxPrice(600);
    setModernOnly(false);
  };

  return (
    <div className="py-12 bg-[#EFE5D6] min-h-screen text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Title */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
            Addis Ababa Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2A0D08] mt-2">
            The Complete Atelier Collection
          </h1>
          <p className="mt-3 text-sm text-[#5E413B] font-light leading-relaxed">
            Meticulously hand-carded, spun, and woven. Discover the union of Ethiopian sacred heritage and contemporary luxury.
          </p>
        </div>

        {/* Primary Category Segmented Bar (Interactive controls) */}
        <div className="flex items-center justify-center overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF6F0] border border-[#E2D5C3] shadow-sm">
            {[
              { id: 'all', label: 'All Silhouettes' },
              { id: 'traditional', label: 'Traditional Kemis' },
              { id: 'women', label: "Women's Couture" },
              { id: 'men', label: "Men's Habesha" },
              { id: 'kids', label: 'Kids Collection' },
            ].map((cat) => {
              const active = selectedCategory === cat.id && !modernOnly;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setModernOnly(false);
                    setSelectedCategory(cat.id as Category);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#2A0D08] text-[#FAF6F0] shadow-sm'
                      : 'text-[#2A0D08] hover:text-[#B68A4C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
            <button
              onClick={() => setModernOnly(!modernOnly)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                modernOnly
                  ? 'bg-[#B68A4C] text-[#FAF6F0]'
                  : 'text-[#2A0D08] hover:text-[#B68A4C]'
              }`}
            >
              Modern Cultural Wear
            </button>
          </div>
        </div>

        {/* Filter Controls Bar & Sorting */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2D5C3]">
          
          <div className="flex items-center gap-4">
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-[#FAF6F0] border border-[#E2D5C3] text-xs uppercase tracking-wider font-medium cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#B68A4C]" />
              <span>Filters ({filteredProducts.length})</span>
            </button>

            {/* Desktop Quick Size selector */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#5E413B] font-medium mr-1">
                Size:
              </span>
              <div className="flex items-center gap-1">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#2A0D08] text-[#FAF6F0]'
                        : 'bg-[#FAF6F0] border border-[#E2D5C3] text-[#2A0D08] hover:border-[#B68A4C]'
                    }`}
                  >
                    {size === 'all' ? 'All' : size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Count & Sorting Dropdown */}
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="text-xs uppercase tracking-widest text-[#5E413B] tabular-nums">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Garment' : 'Garments'}
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#B68A4C]" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-[#FAF6F0] border border-[#E2D5C3] px-3 py-1.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C] cursor-pointer"
              >
                <option value="newest">Sort: Newest Releases</option>
                <option value="popular">Sort: Most Popular</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout Grid: Sidebar Filters (Desktop) + Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Left Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1 space-y-8 pr-6 border-r border-[#E2D5C3]/70">
            
            {/* Filter Header with Reset */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E2D5C3]">
              <span className="text-xs uppercase tracking-widest text-[#2A0D08] font-bold">
                Refine Selection
              </span>
              <button
                onClick={resetFilters}
                className="text-[11px] uppercase tracking-wider text-[#B68A4C] hover:underline cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Price Filter Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="uppercase tracking-widest text-[#5E413B] font-medium">Max Price</span>
                <span className="font-semibold text-[#2A0D08] tabular-nums">
                  {formatPrice(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={600}
                step={20}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#B68A4C] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#5E413B] mt-1 tabular-nums">
                <span>{formatPrice(100)}</span>
                <span>{formatPrice(600)}</span>
              </div>
            </div>

            {/* Color Swatch Filter */}
            <div>
              <span className="block text-xs uppercase tracking-widest text-[#5E413B] font-medium mb-3">
                Color Palette
              </span>
              <div className="space-y-2">
                {availableColors.map((col) => {
                  const isSelected = selectedColor === col.name;
                  return (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      className={`w-full flex items-center justify-between p-1.5 text-xs text-left transition-colors cursor-pointer ${
                        isSelected ? 'bg-[#FAF6F0] font-semibold text-[#2A0D08]' : 'text-[#5E413B] hover:text-[#2A0D08]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-[#D8C7B0]"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span>{col.label}</span>
                      </div>
                      {isSelected && <span className="text-[#B68A4C] text-[10px]">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cultural Heritage Craft Guarantee */}
            <div className="p-4 bg-[#FAF6F0] border border-[#E2D5C3] text-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#B68A4C] font-semibold block mb-1">
                Atelier Guarantee
              </span>
              <p className="text-[#5E413B] font-light leading-relaxed">
                Every piece is tailored to order in our Addis Ababa workshop. Complimentary size adjustments are available upon request.
              </p>
            </div>

          </div>

          {/* Mobile Filter Drawer */}
          {isMobileFilterOpen && (
            <div className="lg:hidden col-span-1 p-6 bg-[#FAF6F0] border border-[#E2D5C3] mb-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2D5C3]">
                <span className="text-xs uppercase tracking-widest font-semibold">Filters</span>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-5 h-5 text-[#2A0D08]" />
                </button>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-widest font-medium mb-2">Sizes</span>
                <div className="flex flex-wrap gap-1.5">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-medium ${
                        selectedSize === size ? 'bg-[#2A0D08] text-white' : 'bg-white border border-[#E2D5C3]'
                      }`}
                    >
                      {size === 'all' ? 'All' : size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-widest font-medium mb-2">Max Price</span>
                <input
                  type="range"
                  min={100}
                  max={600}
                  step={20}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#B68A4C]"
                />
                <span className="text-xs font-semibold mt-1 block">{formatPrice(maxPrice)}</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={resetFilters}
                  className="flex-1 py-2 text-xs uppercase tracking-wider border border-[#2A0D08]"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-1 py-2 text-xs uppercase tracking-wider bg-[#2A0D08] text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          )}

          {/* Main Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-[#FAF6F0] border border-[#E2D5C3] p-8">
                <p className="font-serif text-2xl text-[#2A0D08]">No garments found in this selection.</p>
                <p className="mt-2 text-xs text-[#5E413B] uppercase tracking-wider">
                  Try adjusting your size, color, or price filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 px-6 py-2.5 bg-[#2A0D08] text-white text-xs uppercase tracking-widest hover:bg-[#B68A4C] transition-colors"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

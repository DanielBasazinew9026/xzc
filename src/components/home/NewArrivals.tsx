import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { ArrowRight } from 'lucide-react';

export const NewArrivals: React.FC = () => {
  const { setActiveTab, setSelectedCategory, closeProduct } = useShop();

  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival || p.isBestSeller).slice(0, 4);

  const handleViewAll = () => {
    closeProduct();
    setSelectedCategory('all');
    setActiveTab('shop');
  };

  return (
    <section className="py-20 bg-[#F8F3EB] text-[#2A0D08] border-y border-[#E2D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              The Latest Runway Releases
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-2 font-normal text-[#2A0D08]">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={handleViewAll}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#2A0D08] hover:text-[#B68A4C] transition-colors cursor-pointer group"
          >
            <span>View All Releases</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

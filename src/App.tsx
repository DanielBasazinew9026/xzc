import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Toast } from './components/common/Toast';

// Homepage Components
import { HeroSection } from './components/home/HeroSection';
import { FeaturedCollections } from './components/home/FeaturedCollections';
import { NewArrivals } from './components/home/NewArrivals';
import { BestSellers } from './components/home/BestSellers';
import { CraftSection } from './components/home/CraftSection';
import { CustomerTestimonials } from './components/home/CustomerTestimonials';
import { InstagramGallery } from './components/home/InstagramGallery';
import { FinalCTA } from './components/home/FinalCTA';

// Page Views
import { ShopView } from './components/shop/ShopView';
import { ProductDetailView } from './components/shop/ProductDetailView';
import { LookbookView } from './components/lookbook/LookbookView';
import { CustomDesignView } from './components/custom/CustomDesignView';
import { AboutView } from './components/about/AboutView';
import { ContactView } from './components/contact/ContactView';

// Drawers & Modals
import { SlideOverCart } from './components/cart/SlideOverCart';
import { WishlistDrawer } from './components/wishlist/WishlistDrawer';
import { QuickViewModal } from './components/shop/QuickViewModal';
import { SizeGuideModal } from './components/shop/SizeGuideModal';
import { SearchModal } from './components/search/SearchModal';
import { AccountModal } from './components/account/AccountModal';
import { CheckoutModal } from './components/checkout/CheckoutModal';

const AppContent: React.FC = () => {
  const { activeTab, selectedProduct } = useShop();

  const renderMainContent = () => {
    // If a product detail view is open
    if (selectedProduct) {
      return <ProductDetailView product={selectedProduct} />;
    }

    switch (activeTab) {
      case 'shop':
        return <ShopView />;
      case 'lookbook':
        return <LookbookView />;
      case 'custom':
        return <CustomDesignView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <FeaturedCollections />
            <NewArrivals />
            <CraftSection />
            <BestSellers />
            <CustomerTestimonials />
            <InstagramGallery />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFE5D6] text-[#2A0D08] selection:bg-[#B68A4C]/30 selection:text-[#2A0D08]">
      {/* Sticky Top Bar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {renderMainContent()}
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Overlays, Drawers & Modals */}
      <SlideOverCart />
      <WishlistDrawer />
      <QuickViewModal />
      <SizeGuideModal />
      <SearchModal />
      <AccountModal />
      <CheckoutModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

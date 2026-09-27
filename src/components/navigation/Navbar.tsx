import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { AhabLogo } from '../common/AhabLogo';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Globe
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    cart,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    currency,
    setCurrency,
    closeProduct
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleNavClick = (tab: string) => {
    closeProduct();
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-courtesy banner */}
      <div className="bg-[#2A0D08] text-[#EFE5D6] text-[11px] tracking-[0.2em] uppercase py-2 px-4 text-center font-medium border-b border-[#3E1A14]">
        <span>Complimentary Addis Ababa Delivery · Global Courier via DHL Express · Atelier in Bole</span>
      </div>

      {/* Main Sticky Luxury Top Bar */}
      <header className="sticky top-0 z-40 bg-[#EFE5D6]/95 backdrop-blur-md border-b border-[#E2D5C3] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 select-none"
            role="button"
            tabIndex={0}
            aria-label="AHAB Clothing Home"
          >
            <AhabLogo variant="horizontal" />
          </div>

          {/* Zone 2: Navigation Links (Clean text with subtle underline) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.16em] uppercase font-medium text-[#2A0D08]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'shop', label: 'Shop' },
              { id: 'lookbook', label: 'Lookbook' },
              { id: 'custom', label: 'Custom Designs' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-[#B68A4C] font-semibold' : 'text-[#2A0D08] hover:text-[#B68A4C]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B68A4C]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Currency, Search, Wishlist, Account, Cart) */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Currency Switcher */}
            <div className="hidden sm:flex items-center gap-1 text-[11px] tracking-wider text-[#2A0D08] font-medium border border-[#D8C7B0] px-2.5 py-1 hover:border-[#B68A4C] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#B68A4C]" />
              <button
                onClick={() => setCurrency(currency === 'USD' ? 'ETB' : 'USD')}
                className="hover:text-[#B68A4C] transition-colors cursor-pointer"
                title="Switch Currency (USD / ETB)"
              >
                {currency}
              </button>
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#2A0D08] hover:text-[#B68A4C] transition-colors cursor-pointer"
              aria-label="Search Collection"
            >
              <Search className="w-4 h-4 stroke-[1.8]" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-[#2A0D08] hover:text-[#B68A4C] transition-colors relative cursor-pointer"
              aria-label="View Wishlist"
            >
              <Heart className="w-4 h-4 stroke-[1.8]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#B68A4C] text-white text-[9px] font-semibold flex items-center justify-center rounded-full tabular-nums">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User Account */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-2 text-[#2A0D08] hover:text-[#B68A4C] transition-colors hidden sm:block cursor-pointer"
              aria-label="User Account"
            >
              <User className="w-4 h-4 stroke-[1.8]" />
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-[#2A0D08] text-[#FAF6F0] hover:bg-[#3E1A14] transition-colors cursor-pointer"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#B68A4C]" />
              <span className="text-xs tracking-wider uppercase font-medium hidden md:inline">Bag</span>
              <span className="text-xs font-semibold text-[#B68A4C] tabular-nums">
                ({cartItemCount})
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#2A0D08] lg:hidden hover:text-[#B68A4C] cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#EFE5D6] flex flex-col p-6 overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-between pb-6 border-b border-[#E2D5C3]">
            <AhabLogo variant="monogram" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer"
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="my-auto py-8 space-y-6 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-[#B68A4C]">እንኳን ደህና መጡ · Welcome</span>
            <div className="flex flex-col space-y-5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'shop', label: 'Shop Catalog' },
                { id: 'lookbook', label: 'Lookbook & Editorial' },
                { id: 'custom', label: 'Custom Designs Studio' },
                { id: 'about', label: 'About AHAB' },
                { id: 'contact', label: 'Contact & Atelier' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-serif text-2xl tracking-widest uppercase text-[#2A0D08] hover:text-[#B68A4C] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E2D5C3] flex items-center justify-center gap-6">
              <button
                onClick={() => {
                  setCurrency(currency === 'USD' ? 'ETB' : 'USD');
                }}
                className="text-xs tracking-widest uppercase py-2 px-4 border border-[#2A0D08] text-[#2A0D08]"
              >
                Currency: <span className="font-bold text-[#B68A4C]">{currency}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAccountOpen(true);
                }}
                className="text-xs tracking-widest uppercase py-2 px-4 bg-[#2A0D08] text-white"
              >
                My Account
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2D5C3] text-center text-xs tracking-widest text-[#5E413B] uppercase">
            <span>Addis Ababa, Ethiopia · Handcrafted With Love</span>
          </div>
        </div>
      )}
    </>
  );
};

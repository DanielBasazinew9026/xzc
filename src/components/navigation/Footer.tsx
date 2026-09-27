import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { AhabLogo } from '../common/AhabLogo';
import {
  Instagram,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    setActiveTab,
    setSelectedCategory,
    setIsSizeGuideOpen,
    setIsAccountOpen,
    showToast,
    closeProduct
  } = useShop();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    showToast('Welcome to the AHAB Atelier Circle');
  };

  const handleNav = (tab: string, cat?: string) => {
    closeProduct();
    if (cat) {
      setSelectedCategory(cat as any);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2A0D08] text-[#FAF6F0] pt-20 pb-12 border-t border-[#3E1A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand Statement & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF6F0]/15">
          
          <div className="lg:col-span-6 space-y-4">
            <AhabLogo variant="stacked" inverted className="items-start text-left" />
            <p className="mt-4 text-xs sm:text-sm text-[#FAF6F0]/75 font-light leading-relaxed max-w-md">
              AHAB is an independent Ethiopian luxury fashion atelier based in Addis Ababa. We create modern cultural couture celebrating ancient handloom artistry and contemporary silhouettes. Made with love.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold mb-2">
              The Atelier Circle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF6F0]">
              Receive Private Runway Invitations
            </h3>
            <p className="mt-2 text-xs text-[#FAF6F0]/70 font-light max-w-md">
              Subscribers receive early access to limited edition handloom drops, bespoke salon events, and lookbook monographs.
            </p>

            {subscribed ? (
              <div className="mt-6 flex items-center gap-2 text-xs text-[#B68A4C]">
                <Check className="w-4 h-4" />
                <span>You are subscribed with honor. Check your inbox for our welcome note.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#FAF6F0]/10 border border-[#FAF6F0]/25 px-4 py-3 text-xs text-[#FAF6F0] placeholder:text-[#FAF6F0]/40 focus:outline-none focus:border-[#B68A4C]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#B68A4C] hover:bg-[#A3773A] text-[#FAF6F0] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Second Tier: Quick Links & Customer Care */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-[#FAF6F0]/15 text-xs">
          
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B68A4C] font-semibold mb-4">
              Atelier Collections
            </h4>
            <ul className="space-y-2.5 font-light text-[#FAF6F0]/80">
              <li>
                <button onClick={() => handleNav('shop', 'traditional')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Traditional Royal Kemis
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'women')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Women's Modern Couture
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'men')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Men's Habesha Shirts & Suits
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'kids')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Kids Ceremonial Attire
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('custom')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Bespoke Bridal Commissions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B68A4C] font-semibold mb-4">
              Client Concierge
            </h4>
            <ul className="space-y-2.5 font-light text-[#FAF6F0]/80">
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Measurement & Sizing Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Book Addis Studio Fitting
                </button>
              </li>
              <li>
                <button onClick={() => setIsAccountOpen(true)} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Track Existing Order
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/251911234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B68A4C] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#B68A4C]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B68A4C] font-semibold mb-4">
              Our House
            </h4>
            <ul className="space-y-2.5 font-light text-[#FAF6F0]/80">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  The AHAB Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('lookbook')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Editorial Lookbooks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Pit-Loom Artisan Weavers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#B68A4C] transition-colors cursor-pointer">
                  Atelier in Bole Medhanialem
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B68A4C] font-semibold mb-4">
              Addis Ababa Atelier
            </h4>
            <p className="text-xs text-[#FAF6F0]/70 font-light leading-relaxed">
              Bole Medhanialem, Camise District<br />
              Addis Ababa, Ethiopia<br />
              Mon–Sat: 9:00 AM – 7:00 PM<br />
              +251 91 123 4567
            </p>
            <div className="flex gap-3 mt-4 text-[#FAF6F0]/80">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B68A4C]" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/251911234567" target="_blank" rel="noopener noreferrer" className="hover:text-[#B68A4C]" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Quiet Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF6F0]/50 font-light gap-4">
          <p>© {new Date().getFullYear()} AHAB Clothing. Handcrafted with Love in Addis Ababa, Ethiopia.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF6F0] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#FAF6F0] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#FAF6F0] cursor-pointer">Shipping & Returns</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

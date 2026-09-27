import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, User, Package, MapPin, Heart, Clock, CheckCircle2, LogOut } from 'lucide-react';

export const AccountModal: React.FC = () => {
  const {
    isAccountOpen,
    setIsAccountOpen,
    user,
    orders,
    wishlist,
    formatPrice,
    setIsWishlistOpen,
    showToast
  } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const [loginEmail, setLoginEmail] = useState('hermela@ahabclothing.com');
  const [loginPass, setLoginPass] = useState('••••••••');

  if (!isAccountOpen) return null;

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    showToast('Signed in successfully');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A0D08]/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2D5C3]">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#B68A4C]" />
            <h2 className="font-serif text-2xl text-[#2A0D08]">
              {isLoggedIn ? 'Patron Account' : authMode === 'login' ? 'Patron Sign In' : 'Join The Atelier'}
            </h2>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If Not Logged In: Form */}
        {!isLoggedIn ? (
          <form onSubmit={handleAuthSubmit} className="py-6 space-y-4 max-w-md mx-auto">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                required
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
            >
              {authMode === 'login' ? 'Sign In to Account' : 'Create Patron Account'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="text-xs text-[#B68A4C] hover:underline"
              >
                {authMode === 'login'
                  ? "Don't have an account? Create one"
                  : 'Already registered? Sign in here'}
              </button>
            </div>
          </form>
        ) : (
          /* If Logged In: Patron Dashboard */
          <div className="py-4">
            
            {/* User Greeting & Stats Banner */}
            <div className="bg-[#EFE5D6] p-4 border border-[#E2D5C3] flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B68A4C] font-semibold">
                  Verified Patron
                </span>
                <h4 className="font-serif text-xl text-[#2A0D08]">{user?.name}</h4>
                <span className="text-xs text-[#5E413B]">{user?.email}</span>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-[#5E413B] hover:text-[#2A0D08] flex items-center gap-1.5"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Dashboard Sub-Tabs */}
            <div className="flex border-b border-[#E2D5C3] gap-6 text-xs uppercase tracking-wider mb-6">
              {[
                { id: 'orders', label: `My Orders (${orders.length})` },
                { id: 'profile', label: 'Patron Profile' },
                { id: 'addresses', label: 'Saved Addresses' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-2.5 font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-b-2 border-[#B68A4C] text-[#2A0D08] font-bold'
                      : 'text-[#5E413B] hover:text-[#2A0D08]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Orders */}
            {activeTab === 'orders' && (
              <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {orders.length === 0 ? (
                  <p className="text-center py-8 text-xs text-[#5E413B]">No previous orders found.</p>
                ) : (
                  orders.map((ord) => (
                    <div key={ord.id} className="p-4 bg-[#FAF6F0] border border-[#E2D5C3] space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E2D5C3]">
                        <div>
                          <strong className="text-[#2A0D08]">{ord.orderNumber}</strong>
                          <span className="text-[#5E413B] ml-2">({ord.date})</span>
                        </div>
                        <span className="px-2 py-0.5 bg-[#B68A4C]/15 text-[#B68A4C] font-semibold text-[10px] uppercase tracking-wider">
                          {ord.status}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-2">
                        {ord.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-12 object-cover bg-[#E7DDD0]"
                              />
                              <div>
                                <span className="font-serif text-sm block">{item.name}</span>
                                <span className="text-[10px] text-[#5E413B]">
                                  Size {item.size} · {item.color} · Qty {item.quantity}
                                </span>
                              </div>
                            </div>
                            <span className="font-semibold tabular-nums">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-[#E2D5C3] flex justify-between text-xs font-semibold">
                        <span>Total Paid ({ord.paymentMethod})</span>
                        <span className="text-[#2A0D08] tabular-nums">{formatPrice(ord.total)}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Tab 2: Profile */}
            {activeTab === 'profile' && (
              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
                    <span className="text-[10px] uppercase text-[#5E413B] block">Full Name</span>
                    <strong className="text-sm text-[#2A0D08]">{user?.name}</strong>
                  </div>
                  <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
                    <span className="text-[10px] uppercase text-[#5E413B] block">Phone</span>
                    <strong className="text-sm text-[#2A0D08]">{user?.phone}</strong>
                  </div>
                  <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
                    <span className="text-[10px] uppercase text-[#5E413B] block">Location</span>
                    <strong className="text-sm text-[#2A0D08]">{user?.city}, {user?.country}</strong>
                  </div>
                  <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
                    <span className="text-[10px] uppercase text-[#5E413B] block">Patron Status</span>
                    <strong className="text-sm text-[#B68A4C]">Haute Atelier Member</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Addresses */}
            {activeTab === 'addresses' && (
              <div className="space-y-3 text-xs">
                <div className="p-4 bg-[#EFE5D6] border border-[#E2D5C3] flex items-start justify-between">
                  <div>
                    <span className="px-2 py-0.5 bg-[#2A0D08] text-white text-[9px] uppercase tracking-wider mb-2 inline-block">
                      Default Delivery
                    </span>
                    <strong className="block text-sm text-[#2A0D08]">{user?.name}</strong>
                    <span className="text-[#5E413B] block">Bole Medhanialem, Street 18, House 4B</span>
                    <span className="text-[#5E413B] block">Bole, Addis Ababa, Ethiopia</span>
                    <span className="text-[#5E413B] block mt-1">{user?.phone}</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

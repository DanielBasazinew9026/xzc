import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Truck,
  ArrowRight,
  Printer
} from 'lucide-react';
import { Order } from '../../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotalUSD,
    cartSubtotalETB,
    discountPercent,
    currency,
    formatPrice,
    placeOrder,
    setActiveTab
  } = useShop();

  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  const [shippingForm, setShippingForm] = useState({
    fullName: 'Hermela Aseffa',
    email: 'hermela@example.com',
    phone: '+251 91 123 4567',
    destinationType: 'addis', // 'addis' | 'ethiopia' | 'international'
    address: 'Bole Medhanialem, Street 18, House 4B',
    subCity: 'Bole',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    deliveryNotes: 'Please call on arrival. Deliver to reception if after 5 PM.',
    paymentMethod: 'Chapa (Telebirr / CBE Birr)'
  });

  if (!isCheckoutOpen) return null;

  const rawSubtotal = currency === 'USD' ? cartSubtotalUSD : cartSubtotalETB;
  const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
  const shippingFee = shippingForm.destinationType === 'addis' ? 0 : (currency === 'USD' ? 45 : 6075);
  const total = rawSubtotal - discountAmount + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.fullName.trim() || !shippingForm.phone.trim()) return;

    const order = placeOrder(
      {
        fullName: shippingForm.fullName,
        phone: shippingForm.phone,
        address: shippingForm.address,
        city: `${shippingForm.subCity ? shippingForm.subCity + ', ' : ''}${shippingForm.city}`,
        country: shippingForm.country
      },
      shippingForm.paymentMethod
    );

    setCompletedOrder(order);
    setStep('confirmation');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFinish = () => {
    setIsCheckoutOpen(false);
    setStep('details');
    setActiveTab('home');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A0D08]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xl overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="p-6 bg-[#EFE5D6] border-b border-[#E2D5C3] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B68A4C] font-semibold">
              AHAB Atelier Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2A0D08]">
              {step === 'details' ? 'Luxury Express Checkout' : 'Order Confirmation'}
            </h2>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer"
            aria-label="Close Checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Details & Payment */}
        {step === 'details' && (
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            
            {/* Delivery Destination Selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                Delivery Location
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'addis', label: 'Addis Ababa', fee: 'Complimentary' },
                  { id: 'ethiopia', label: 'Ethiopia Regional', fee: '+450 ETB' },
                  { id: 'international', label: 'Worldwide DHL', fee: '+$45 USD' },
                ].map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setShippingForm({ ...shippingForm, destinationType: dest.id })}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      shippingForm.destinationType === dest.id
                        ? 'bg-[#2A0D08] text-[#FAF6F0] border-[#2A0D08]'
                        : 'bg-[#FAF6F0] text-[#2A0D08] border-[#E2D5C3] hover:border-[#B68A4C]'
                    }`}
                  >
                    <span className="block text-xs font-semibold">{dest.label}</span>
                    <span className="block text-[10px] opacity-80 mt-0.5">{dest.fee}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient Information */}
            <div>
              <h3 className="font-serif text-xl text-[#2A0D08] mb-4 pb-2 border-b border-[#E2D5C3]">
                Recipient & Delivery Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingForm.fullName}
                    onChange={(e) => setShippingForm({ ...shippingForm, fullName: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                    Phone Number (for Courier Call) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={shippingForm.phone}
                    onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={shippingForm.email}
                    onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                  />
                </div>

                {shippingForm.destinationType === 'addis' ? (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                      Sub-City (ክፍለ ከተማ)
                    </label>
                    <select
                      value={shippingForm.subCity}
                      onChange={(e) => setShippingForm({ ...shippingForm, subCity: e.target.value })}
                      className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                    >
                      <option value="Bole">Bole (ቦሌ)</option>
                      <option value="Kirkos">Kirkos (ቂርቆስ)</option>
                      <option value="Yeka">Yeka (የካ)</option>
                      <option value="Arada">Arada (አራዳ)</option>
                      <option value="Nifas Silk">Nifas Silk Lafto (ንፋስ ስልክ)</option>
                      <option value="Lideta">Lideta (ልደታ)</option>
                      <option value="Kolfe">Kolfe Keranio (ኮልፌ)</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                      Country
                    </label>
                    <input
                      type="text"
                      value={shippingForm.country}
                      onChange={(e) => setShippingForm({ ...shippingForm, country: e.target.value })}
                      className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                    Specific Street, Building or Villa Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingForm.address}
                    onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                    Delivery Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={shippingForm.deliveryNotes}
                    onChange={(e) => setShippingForm({ ...shippingForm, deliveryNotes: e.target.value })}
                    placeholder="Specific landmarks or gate instructions..."
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Integration */}
            <div>
              <h3 className="font-serif text-xl text-[#2A0D08] mb-4 pb-2 border-b border-[#E2D5C3]">
                Payment Method
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: 'Chapa (Telebirr / CBE Birr)',
                    title: 'Chapa · Telebirr & CBE Birr (Ethiopia)',
                    desc: 'Instant mobile payment via Telebirr app or Commercial Bank of Ethiopia (CBE).'
                  },
                  {
                    id: 'Cash on Delivery (Addis Ababa)',
                    title: 'Cash on Delivery / POS Terminal',
                    desc: 'Pay when our personal courier delivers your garment in Addis Ababa.'
                  },
                  {
                    id: 'International Card (Visa / Mastercard)',
                    title: 'International Credit or Debit Card',
                    desc: 'Secure 256-bit encrypted global checkout via Stripe / Chapa Global.'
                  }
                ].map((pay) => (
                  <label
                    key={pay.id}
                    className={`block p-3.5 border cursor-pointer transition-colors ${
                      shippingForm.paymentMethod === pay.id
                        ? 'bg-[#EFE5D6] border-[#B68A4C]'
                        : 'bg-[#FAF6F0] border-[#E2D5C3] hover:border-[#D8C7B0]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={pay.id}
                        checked={shippingForm.paymentMethod === pay.id}
                        onChange={() => setShippingForm({ ...shippingForm, paymentMethod: pay.id })}
                        className="accent-[#B68A4C]"
                      />
                      <div>
                        <span className="text-xs font-semibold text-[#2A0D08] block">{pay.title}</span>
                        <span className="text-[11px] text-[#5E413B] font-light">{pay.desc}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Summary Recap */}
            <div className="p-4 bg-[#EFE5D6] border border-[#E2D5C3] space-y-2 text-xs">
              <div className="flex justify-between text-[#5E413B]">
                <span>Items Subtotal ({cart.length} unique items)</span>
                <span className="tabular-nums font-semibold text-[#2A0D08]">
                  {formatPrice(cartSubtotalUSD, cartSubtotalETB)}
                </span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#B68A4C] font-semibold">
                  <span>Atelier Courtesy Discount</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#5E413B]">
                <span>Courier / Shipping Fee</span>
                <span>{shippingFee === 0 ? 'Complimentary' : formatPrice(shippingFee)}</span>
              </div>
              <div className="pt-2 border-t border-[#E2D5C3] flex justify-between font-serif text-2xl text-[#2A0D08]">
                <span>Total Due</span>
                <span className="font-semibold tabular-nums">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            {/* Complete Order Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl cursor-pointer"
            >
              Complete Order & Authorize Atelier
            </button>

          </form>
        )}

        {/* Step 2: Confirmation Screen with Printable Receipt */}
        {step === 'confirmation' && completedOrder && (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#B68A4C]/15 text-[#B68A4C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[2]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
                Order Confirmed
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] mt-1">
                Thank You, {shippingForm.fullName}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5E413B] font-light max-w-md mx-auto">
                Your order <strong className="text-[#2A0D08]">{completedOrder.orderNumber}</strong> has been allocated to our master tailoring room in Addis Ababa.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#EFE5D6] p-6 border border-[#E2D5C3] text-left text-xs max-w-lg mx-auto space-y-3">
              <div className="flex justify-between pb-2 border-b border-[#E2D5C3]">
                <span className="text-[#5E413B] uppercase tracking-wider">Tracking Reference:</span>
                <span className="font-semibold text-[#2A0D08]">{completedOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#E2D5C3]">
                <span className="text-[#5E413B] uppercase tracking-wider">Estimated Delivery:</span>
                <span className="font-medium text-[#2A0D08]">
                  {shippingForm.destinationType === 'addis' ? '1–2 Days in Addis Ababa' : '3–5 Days Express'}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#E2D5C3]">
                <span className="text-[#5E413B] uppercase tracking-wider">Payment Method:</span>
                <span className="text-[#2A0D08]">{completedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between pt-1 font-serif text-lg text-[#2A0D08]">
                <span>Total Amount:</span>
                <span className="font-semibold">{formatPrice(completedOrder.total)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={handlePrint}
                className="px-6 py-3 border border-[#2A0D08] text-[#2A0D08] hover:bg-[#FAF6F0] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>
              <button
                onClick={handleFinish}
                className="px-8 py-3 bg-[#2A0D08] text-[#FAF6F0] hover:bg-[#B68A4C] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

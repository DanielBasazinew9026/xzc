import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Share2,
  CheckCircle2,
  Send,
  Calendar
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { showToast } = useShop();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Atelier Appointment & Private Fitting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setSubmitted(true);
    showToast('Your message has been sent to our Addis Ababa Atelier.');
  };

  return (
    <div className="py-16 bg-[#EFE5D6] min-h-screen text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
            Connect With The Atelier
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2A0D08] mt-2">
            Visit Our Addis Ababa Studio
          </h1>
          <p className="mt-3 text-sm text-[#5E413B] font-light leading-relaxed">
            We welcome clients for private fittings, custom bridal consultations, and wholesale inquiries.
          </p>
        </div>

        {/* 2-Column Grid: Atelier Details & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Channels & Atelier Visiting Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 bg-[#FAF6F0] border border-[#E2D5C3] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-[#2A0D08] pb-3 border-b border-[#E2D5C3]">
                Atelier Location
              </h3>

              <div className="space-y-4 text-xs text-[#5E413B]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#B68A4C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A0D08] text-sm font-medium">AHAB Flagship Atelier</strong>
                    <span>Bole Medhanialem, Camise District, Villa 14</span>
                    <span className="block text-[#5E413B]/80 mt-0.5">Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#B68A4C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A0D08] text-sm font-medium">Telephone & Concierge</strong>
                    <a href="tel:+251911234567" className="hover:text-[#B68A4C] transition-colors">
                      +251 91 123 4567 / +251 11 662 8901
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#B68A4C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A0D08] text-sm font-medium">Direct Inquiries</strong>
                    <a href="mailto:atelier@ahabclothing.com" className="hover:text-[#B68A4C] transition-colors">
                      atelier@ahabclothing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#B68A4C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A0D08] text-sm font-medium">Private Studio Hours</strong>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM (EAT)</span>
                    <span className="block text-[#5E413B]/80 mt-0.5">Sunday: By Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Concierge Button */}
              <div className="pt-4 border-t border-[#E2D5C3]">
                <a
                  href="https://wa.me/251911234567?text=Hello%20AHAB%20Atelier%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20fitting%20in%20Addis%20Ababa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#1F4E38] hover:bg-[#183F2D] text-[#FAF6F0] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="p-6 bg-[#FAF6F0] border border-[#E2D5C3]">
              <span className="block text-xs uppercase tracking-widest text-[#B68A4C] font-semibold mb-3">
                Social Profiles & Lookbooks
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#E2D5C3] hover:border-[#B68A4C] flex items-center gap-2 text-[#2A0D08]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#B68A4C]" />
                  <span>@ahabclothing</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#E2D5C3] hover:border-[#B68A4C] flex items-center gap-2 text-[#2A0D08]"
                >
                  <span>TikTok · @ahabclothing</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#E2D5C3] hover:border-[#B68A4C] flex items-center gap-2 text-[#2A0D08]"
                >
                  <span>Facebook · AHAB Official</span>
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#E2D5C3] hover:border-[#B68A4C] flex items-center gap-2 text-[#2A0D08]"
                >
                  <span>Telegram · @ahabatelier</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Styled Map & Contact Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive Stylized Addis Ababa Map */}
            <div className="bg-[#FAF6F0] border border-[#E2D5C3] p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#2A0D08]">
                  <MapPin className="w-4 h-4 text-[#B68A4C]" />
                  <span>Addis Ababa Atelier Map</span>
                </div>
                <span className="text-[11px] text-[#B68A4C] font-medium">Bole Medhanialem</span>
              </div>

              {/* Stylized SVG Map of Addis Ababa */}
              <div className="relative aspect-[16/9] w-full bg-[#EADCC8] overflow-hidden border border-[#D8C7B0] flex items-center justify-center">
                {/* SVG Visual Representation of Addis Ababa Road Network & Landmarks */}
                <svg viewBox="0 0 600 340" className="w-full h-full select-none" fill="none">
                  {/* Background plateau terrain lines */}
                  <path d="M0,80 Q200,60 400,90 T600,70" stroke="#DFCFBB" strokeWidth="20" strokeLinecap="round" opacity="0.6" />
                  <path d="M0,240 Q150,260 350,230 T600,250" stroke="#DFCFBB" strokeWidth="16" strokeLinecap="round" opacity="0.6" />

                  {/* Main Addis Arteries: Bole Road / Ring Road */}
                  <line x1="120" y1="20" x2="480" y2="320" stroke="#CBB9A0" strokeWidth="6" strokeLinecap="round" />
                  <line x1="50" y1="180" x2="550" y2="150" stroke="#CBB9A0" strokeWidth="5" strokeLinecap="round" />
                  <path d="M300,50 C380,120 420,200 450,300" stroke="#B8A48A" strokeWidth="4" strokeDasharray="6 4" />

                  {/* Landmark: Mount Entoto */}
                  <text x="260" y="45" fill="#5E413B" fontSize="11" fontFamily="sans-serif" letterSpacing="2">
                    ▲ MOUNT ENTOTO
                  </text>

                  {/* Landmark: Kazanchis & Meskel Square */}
                  <circle cx="280" cy="140" r="5" fill="#5E413B" />
                  <text x="230" y="130" fill="#5E413B" fontSize="10" fontFamily="sans-serif">
                    Meskel Square
                  </text>

                  {/* Landmark: Bole International Airport */}
                  <rect x="420" y="260" width="70" height="24" rx="2" fill="#DFCFBB" stroke="#CBB9A0" />
                  <text x="430" y="276" fill="#5E413B" fontSize="9" fontFamily="sans-serif">
                    ✈ BOLE INTL
                  </text>

                  {/* AHAB Flagship Atelier Pulse Pin */}
                  <g transform="translate(350, 190)">
                    <circle cx="0" cy="0" r="18" fill="#B68A4C" fillOpacity="0.25" className="animate-ping" />
                    <circle cx="0" cy="0" r="9" fill="#B68A4C" stroke="#FAF6F0" strokeWidth="2" />
                    <circle cx="0" cy="0" r="3" fill="#FAF6F0" />
                    <rect x="-65" y="-36" width="130" height="24" rx="2" fill="#2A0D08" />
                    <text x="0" y="-20" fill="#FAF6F0" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                      ✦ AHAB ATELIER
                    </text>
                  </g>
                </svg>

                <div className="absolute bottom-3 left-3 bg-[#FAF6F0]/95 backdrop-blur-sm px-2.5 py-1 text-[10px] text-[#5E413B] border border-[#E2D5C3]">
                  10 mins from Bole International Airport
                </div>
              </div>
            </div>

            {/* Message / Fitting Form */}
            <div className="bg-[#FAF6F0] p-8 border border-[#E2D5C3] shadow-sm">
              <h3 className="font-serif text-2xl text-[#2A0D08] mb-2">
                Send a Direct Note
              </h3>
              <p className="text-xs text-[#5E413B] font-light mb-6">
                Fill in the form below and our client concierge will respond within 4 hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#EFE5D6] border border-[#E2D5C3]">
                  <CheckCircle2 className="w-10 h-10 text-[#B68A4C] mx-auto mb-3" />
                  <h4 className="font-serif text-xl text-[#2A0D08]">Message Received with Gratitude</h4>
                  <p className="text-xs text-[#5E413B] mt-1">
                    We will reply to <span className="font-medium">{form.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-[#2A0D08] text-white text-xs uppercase tracking-wider"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Dawit Yohannes"
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
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. dawit@example.com"
                        className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +251 91 123 4567"
                        className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                        Topic of Inquiry
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                      >
                        <option value="Atelier Appointment & Private Fitting">Private Fitting Appointment</option>
                        <option value="Bridal & Melse Commission">Bridal & Melse Commission</option>
                        <option value="Order Tracking & Delivery">Order Status & Delivery</option>
                        <option value="International DHL Shipping">International Shipping Inquiry</option>
                        <option value="Press & Commercial Wholesale">Press & Wholesale</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please share any preferred dates, sizing requests, or event deadlines..."
                      className="w-full bg-[#FAF6F0] border border-[#E2D5C3] p-3 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Atelier</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

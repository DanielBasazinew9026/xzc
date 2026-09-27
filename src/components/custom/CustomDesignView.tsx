import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { HERO_IMAGE, TRADITIONAL_IMG, WOMENS_IMG, MENS_IMG } from '../../data/products';
import { Sparkles, CheckCircle2, MessageCircle, Ruler, FileText, ArrowRight, Upload } from 'lucide-react';

export const CustomDesignView: React.FC = () => {
  const { submitCustomDesign, currency, formatPrice } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Wedding & Melse Ceremony',
    clothingType: 'Bridal Saba Kemis',
    preferredColor: 'Pure Cream & Antique Gold',
    budgetRange: '$400 - $800 USD (54,000 - 108,000 ETB)',
    notes: '',
    measurements: {
      bustChest: '',
      waist: '',
      hips: '',
      height: '',
      shoulder: '',
      dressLength: ''
    }
  });

  const [selectedInspiration, setSelectedInspiration] = useState<string>('Classic Royal Tibeb');
  const [confirmedId, setConfirmedId] = useState<string | null>(null);

  const occasionOptions = [
    'Wedding & Melse Ceremony',
    'Timket / Meskel / Enkutatash Holiday',
    'Diplomatic Banquet & Gala',
    'Red Carpet & Runway Appearance',
    'Christening & Family Milestone',
    'Executive Modern Tailoring'
  ];

  const clothingTypes = [
    'Traditional Royal Kemis & Netela Set',
    'Contemporary Modern Cultural Gown',
    "Men's Tailored Habesha Mandarin Tunic",
    'Two-Piece Luxury Linen Safari Suit',
    'Matching Couple & Family Attire',
    'Children Ceremonial Custom Piece'
  ];

  const budgetRanges = [
    '$250 - $450 USD (33,750 - 60,750 ETB)',
    '$450 - $800 USD (60,750 - 108,000 ETB)',
    '$800 - $1,500 USD (108,000 - 202,500 ETB)',
    '$1,500+ USD Bespoke Haute Couture'
  ];

  const inspirations = [
    { name: 'Classic Royal Tibeb', image: TRADITIONAL_IMG, desc: 'Intricate woven border in gold & crimson.' },
    { name: 'Architectural Modern', image: WOMENS_IMG, desc: 'Sharp lapels, relaxed linen tailoring.' },
    { name: 'Imperial Abyssinian', image: MENS_IMG, desc: 'Crisp mandarin neck, hidden placket.' },
    { name: 'Fluid Silk & Weft', image: HERO_IMAGE, desc: 'Ethereal drape with metallic leaf touches.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const newId = submitCustomDesign({
      ...formData,
      inspirationImageName: selectedInspiration
    });

    setConfirmedId(newId);
  };

  const handleWhatsAppFollowUp = () => {
    const text = encodeURIComponent(
      `Hello AHAB Atelier, I just submitted Bespoke Commission Request ${confirmedId} for a "${formData.clothingType}" (${formData.occasion}). Name: ${formData.name}. Could we schedule a design consultation?`
    );
    window.open(`https://wa.me/251911234567?text=${text}`, '_blank');
  };

  if (confirmedId) {
    return (
      <div className="py-20 bg-[#EFE5D6] min-h-[80vh] flex items-center justify-center text-[#2A0D08]">
        <div className="max-w-2xl mx-auto px-6 text-center bg-[#FAF6F0] p-10 sm:p-14 border border-[#E2D5C3] shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#B68A4C]/15 text-[#B68A4C] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 stroke-[2]" />
          </div>
          
          <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
            Bespoke Commission Received
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] mt-2">
            Your Bespoke Story Has Begun.
          </h2>

          <p className="mt-4 text-sm text-[#5E413B] font-light leading-relaxed">
            Thank you, <strong className="text-[#2A0D08]">{formData.name}</strong>. Our senior head designer in Addis Ababa will review your measurements and fabric requirements within 24 hours.
          </p>

          <div className="my-8 p-6 bg-[#EFE5D6] border border-[#E2D5C3] text-left space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#5E413B] uppercase tracking-wider">Commission ID:</span>
              <span className="font-semibold text-[#2A0D08]">{confirmedId}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#5E413B] uppercase tracking-wider">Garment Silhouette:</span>
              <span className="text-[#2A0D08]">{formData.clothingType}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#5E413B] uppercase tracking-wider">Target Occasion:</span>
              <span className="text-[#2A0D08]">{formData.occasion}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#5E413B] uppercase tracking-wider">Preferred Palette:</span>
              <span className="text-[#2A0D08]">{formData.preferredColor}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppFollowUp}
              className="px-6 py-3.5 bg-[#1F4E38] hover:bg-[#183F2D] text-[#FAF6F0] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp Atelier</span>
            </button>
            <button
              onClick={() => setConfirmedId(null)}
              className="px-6 py-3.5 bg-[#2A0D08] text-[#FAF6F0] text-xs uppercase tracking-wider hover:bg-[#3E1A14] cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-[#EFE5D6] min-h-screen text-[#2A0D08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A4C]" />
            <span>Atelier Bespoke Commissions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#2A0D08]">
            Create Your Custom Masterpiece
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5E413B] font-light leading-relaxed">
            Commission a one-of-a-kind garment tailored to your exact proportions. Whether for an Ethiopian wedding, holiday celebration, or red-carpet event, our master weavers bring your vision to life.
          </p>
        </div>

        {/* The Bespoke Form */}
        <form onSubmit={handleSubmit} className="bg-[#FAF6F0] p-8 sm:p-12 border border-[#E2D5C3] shadow-lg space-y-10">
          
          {/* Section 1: Client Information */}
          <div>
            <h3 className="font-serif text-2xl text-[#2A0D08] pb-3 border-b border-[#E2D5C3] mb-6">
              1. Client Contact Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Liya Kebede"
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +251 91 123 4567"
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. liya@example.com"
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Garment Specifications */}
          <div>
            <h3 className="font-serif text-2xl text-[#2A0D08] pb-3 border-b border-[#E2D5C3] mb-6">
              2. Occasion & Design Intent
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Celebration / Occasion
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                >
                  {occasionOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Clothing Silhouette
                </label>
                <select
                  value={formData.clothingType}
                  onChange={(e) => setFormData({ ...formData, clothingType: e.target.value })}
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                >
                  {clothingTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Preferred Color & Palette
                </label>
                <input
                  type="text"
                  value={formData.preferredColor}
                  onChange={(e) => setFormData({ ...formData, preferredColor: e.target.value })}
                  placeholder="e.g. Champagne White with Deep Gold & Emerald accents"
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
                  Estimated Budget
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3.5 py-2.5 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Inspiration & Aesthetic Direction */}
          <div>
            <h3 className="font-serif text-2xl text-[#2A0D08] pb-3 border-b border-[#E2D5C3] mb-6">
              3. Visual Direction & Loom Style
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {inspirations.map((item) => {
                const isSelected = selectedInspiration === item.name;
                return (
                  <div
                    key={item.name}
                    onClick={() => setSelectedInspiration(item.name)}
                    className={`p-2 border transition-all cursor-pointer bg-[#FAF6F0] ${
                      isSelected
                        ? 'border-[#B68A4C] ring-2 ring-[#B68A4C]/50'
                        : 'border-[#E2D5C3] hover:border-[#B68A4C]'
                    }`}
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-[#E2D5C3] mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="block text-xs font-semibold text-[#2A0D08]">{item.name}</span>
                    <span className="block text-[10px] text-[#5E413B] mt-0.5 line-clamp-1">{item.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Body Measurements (Interactive Guide) */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E2D5C3] mb-6">
              <h3 className="font-serif text-2xl text-[#2A0D08]">
                4. Body Measurements (cm or inches)
              </h3>
              <span className="text-[11px] text-[#B68A4C] uppercase tracking-wider font-medium">
                (Optional – or send via WhatsApp later)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { key: 'bustChest', label: 'Bust / Chest' },
                { key: 'waist', label: 'Waist' },
                { key: 'hips', label: 'Hips' },
                { key: 'shoulder', label: 'Shoulder Width' },
                { key: 'dressLength', label: 'Desired Length' },
                { key: 'height', label: 'Total Height' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-[11px] uppercase tracking-wider text-[#5E413B] mb-1 font-medium">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={(formData.measurements as any)[field.key]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        measurements: {
                          ...formData.measurements,
                          [field.key]: e.target.value
                        }
                      })
                    }
                    placeholder="e.g. 92 cm or 36 in"
                    className="w-full bg-[#FAF6F0] border border-[#E2D5C3] px-3 py-2 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Additional Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#5E413B] mb-2 font-medium">
              Additional Details, Special Requests or Loom Preferences
            </label>
            <textarea
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about sleeve preferences, neckline depth, specific family cross motifs, or target completion date..."
              className="w-full bg-[#FAF6F0] border border-[#E2D5C3] p-3 text-xs text-[#2A0D08] focus:outline-none focus:border-[#B68A4C]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-[#E2D5C3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#5E413B] font-light">
              ✦ Hand-spun in Addis Ababa with ethical artisan wages.
            </span>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl cursor-pointer"
            >
              Submit Commission Request
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

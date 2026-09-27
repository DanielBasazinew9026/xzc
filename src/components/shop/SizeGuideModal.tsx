import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Ruler, Sparkles, Check } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isSizeGuideOpen) return null;

  const womenMeasurements = [
    { size: 'XS', bustCm: '82-85', waistCm: '62-65', hipsCm: '88-91', bustIn: '32-33', waistIn: '24-25', hipsIn: '34-36' },
    { size: 'S', bustCm: '86-89', waistCm: '66-69', hipsCm: '92-95', bustIn: '34-35', waistIn: '26-27', hipsIn: '36-37' },
    { size: 'M', bustCm: '90-93', waistCm: '70-73', hipsCm: '96-99', bustIn: '35-37', waistIn: '28-29', hipsIn: '38-39' },
    { size: 'L', bustCm: '94-98', waistCm: '74-78', hipsCm: '100-104', bustIn: '37-39', waistIn: '30-31', hipsIn: '40-41' },
    { size: 'XL', bustCm: '99-104', waistCm: '79-84', hipsCm: '105-110', bustIn: '39-41', waistIn: '32-33', hipsIn: '42-43' },
    { size: 'XXL', bustCm: '105-110', waistCm: '85-90', hipsCm: '111-116', bustIn: '41-43', waistIn: '34-35', hipsIn: '44-46' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A0D08]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#E2D5C3] shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2D5C3]">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#B68A4C]" />
            <h2 className="font-serif text-2xl text-[#2A0D08]">Atelier Size & Proportions Guide</h2>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-[#2A0D08] hover:text-[#B68A4C] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-[#5E413B] uppercase tracking-wider font-medium">
            Standard Ethiopian Kemis & Habesha Fit
          </span>
          <div className="flex items-center gap-1 bg-[#EFE5D6] p-1 border border-[#E2D5C3]">
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 text-xs font-semibold ${
                unit === 'cm' ? 'bg-[#2A0D08] text-white' : 'text-[#2A0D08]'
              }`}
            >
              Centimeters (CM)
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 text-xs font-semibold ${
                unit === 'in' ? 'bg-[#2A0D08] text-white' : 'text-[#2A0D08]'
              }`}
            >
              Inches (IN)
            </button>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="mt-4 overflow-x-auto border border-[#E2D5C3]">
          <table className="w-full text-xs text-left text-[#2A0D08]">
            <thead className="bg-[#EFE5D6] text-[#5E413B] uppercase tracking-wider border-b border-[#E2D5C3]">
              <tr>
                <th className="py-2.5 px-4">Size</th>
                <th className="py-2.5 px-4">Bust / Chest</th>
                <th className="py-2.5 px-4">Waist</th>
                <th className="py-2.5 px-4">Hips</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2D5C3] bg-[#FAF6F0]">
              {womenMeasurements.map((m) => (
                <tr key={m.size} className="hover:bg-[#EFE5D6]/50">
                  <td className="py-2.5 px-4 font-bold">{m.size}</td>
                  <td className="py-2.5 px-4 tabular-nums">
                    {unit === 'cm' ? `${m.bustCm} cm` : `${m.bustIn} in`}
                  </td>
                  <td className="py-2.5 px-4 tabular-nums">
                    {unit === 'cm' ? `${m.waistCm} cm` : `${m.waistIn} in`}
                  </td>
                  <td className="py-2.5 px-4 tabular-nums">
                    {unit === 'cm' ? `${m.hipsCm} cm` : `${m.hipsIn} in`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Measure Section */}
        <div className="mt-8 pt-6 border-t border-[#E2D5C3] space-y-4">
          <h4 className="font-serif text-lg text-[#2A0D08]">How to Take Your Measurements</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5E413B]">
            <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
              <strong className="block text-[#2A0D08] mb-1">1. Bust / Chest</strong>
              <span>Measure around the fullest part of your chest, keeping the tape parallel to the floor.</span>
            </div>
            <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
              <strong className="block text-[#2A0D08] mb-1">2. Natural Waist</strong>
              <span>Measure around the narrowest part of your waistline, usually above your belly button.</span>
            </div>
            <div className="p-3 bg-[#EFE5D6] border border-[#E2D5C3]">
              <strong className="block text-[#2A0D08] mb-1">3. Dress Length</strong>
              <span>Measure from the base of your neck straight down to your desired ankle or floor hem.</span>
            </div>
          </div>
        </div>

        {/* Custom Fit Note */}
        <div className="mt-6 p-4 bg-[#EADCC8] border border-[#B68A4C]/40 text-xs text-[#2A0D08] flex items-center justify-between">
          <span>Need custom tailoring for an upcoming wedding or gala?</span>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="font-bold underline hover:text-[#B68A4C]"
          >
            Request Custom Fit
          </button>
        </div>

      </div>
    </div>
  );
};

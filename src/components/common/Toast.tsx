import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Check, Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#2A0D08] text-[#FAF6F0] rounded-none shadow-2xl border-l-2 border-[#B68A4C] animate-fade-in transition-all duration-300"
    >
      <div className="w-5 h-5 rounded-full bg-[#B68A4C]/20 flex items-center justify-center text-[#B68A4C] shrink-0">
        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
      </div>
      <span className="text-xs tracking-wider uppercase font-medium">{toastMessage}</span>
    </aside>
  );
};

import React from 'react';
import { TESTIMONIALS } from '../../data/products';
import { Star, Quote } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#EFE5D6] text-[#2A0D08] border-t border-[#E2D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
            Client Words & Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-2 font-normal text-[#2A0D08]">
            Loved Across Addis & The Diaspora
          </h2>
          <p className="mt-4 text-sm text-[#5E413B] font-light leading-relaxed">
            From intimate Melse celebrations to global red carpets, our patrons share their AHAB journey.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF6F0] p-8 border border-[#E2D5C3] shadow-sm flex flex-col justify-between relative group hover:border-[#B68A4C]/60 transition-colors duration-300"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-6 text-[#B68A4C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B68A4C]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg sm:text-xl text-[#2A0D08] leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Garment Metadata */}
              <div className="mt-8 pt-6 border-t border-[#E2D5C3]/60 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#B68A4C]/40"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-medium text-sm text-[#2A0D08]">
                    {t.author}
                  </h4>
                  <div className="text-[11px] text-[#5E413B] flex items-center gap-1.5 mt-0.5">
                    <span>{t.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#B68A4C] font-medium">{t.garment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

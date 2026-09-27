import React from 'react';
import { useShop } from '../../context/ShopContext';
import { TRADITIONAL_IMG, WOMENS_IMG, MENS_IMG, HERO_IMAGE } from '../../data/products';
import { AhabLogo } from '../common/AhabLogo';
import { Sparkles, Heart, Award, Users, Compass } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setActiveTab } = useShop();

  return (
    <div className="py-16 bg-[#EFE5D6] min-h-screen text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Stamp & Hero Letter */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AhabLogo variant="stacked" className="mb-8" />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#2A0D08] leading-tight">
            Weaving Soul, Culture & Modernity Into Every Thread.
          </h1>
          <p className="mt-6 text-base text-[#5E413B] font-light leading-relaxed">
            AHAB was founded in Addis Ababa with a single uncompromising philosophy: that Ethiopian textile heritage is not an artifact of the past, but the vanguard of global luxury fashion.
          </p>
        </div>

        {/* Section 1: The Founder Story & Why AHAB Exists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden bg-[#2A0D08] shadow-2xl">
              <img
                src={WOMENS_IMG}
                alt="AHAB Creative Director & Founder"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FAF6F0] p-4 sm:p-6 border border-[#E2D5C3] shadow-lg max-w-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#B68A4C] font-semibold block">
                Creative Director
              </span>
              <span className="font-serif text-lg text-[#2A0D08]">
                Atelier AHAB Studios
              </span>
              <p className="text-[11px] text-[#5E413B] mt-1 font-light">
                "Fashion is our cultural language spoken without uttering a word."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] font-normal leading-tight">
              From the Looms of Shiro Meda to Global Runways
            </h2>
            <p className="text-sm text-[#5E413B] font-light leading-relaxed">
              Growing up in the energetic neighborhoods of Addis Ababa, our founder spent afternoons surrounded by the rhythmic clatter of wooden pit-looms in Shiro Meda. Women gathered with spindle drop-twisters, converting raw cotton clouds into delicate Shemma yarn.
            </p>
            <p className="text-sm text-[#5E413B] font-light leading-relaxed">
              Yet, in global luxury boutiques, African fashion was all too often reduced to synthetic wax prints or caricatures. AHAB was founded to reclaim our true architectural heritage: hand-spun raw cotton, genuine gold metallic filaments (Tibeb), and tailored silhouettes cut with the precision of haute couture.
            </p>
          </div>
        </div>

        {/* Section 2: The 4 Pillars of AHAB */}
        <div className="mb-28 pt-16 border-t border-[#E2D5C3]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              Our Foundations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] mt-2 font-normal">
              The Sacred Geometry of Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                num: '01',
                title: 'Made With Love',
                desc: 'Every stitch reflects devotion. We take no shortcuts with synthetic machines; every border is patiently counted and woven thread by thread.'
              },
              {
                icon: Compass,
                num: '02',
                title: 'Ethiopian Identity',
                desc: 'Inspired by the obelisks of Axum, rock churches of Lalibela, and the vibrant modern coffee culture of Bole.'
              },
              {
                icon: Users,
                num: '03',
                title: 'Artisan Sovereignty',
                desc: 'Over 65 weavers, seamstresses, and embroiderers in Addis Ababa receiving above-market living wages, healthcare, and safe ateliers.'
              },
              {
                icon: Award,
                num: '04',
                title: 'Timeless Longevity',
                desc: 'Garments designed not for fleeting seasons, but to be passed down as family heirlooms from generation to generation.'
              }
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-[#FAF6F0] p-8 border border-[#E2D5C3] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <pillar.icon className="w-5 h-5 text-[#B68A4C]" />
                    <span className="font-serif text-lg text-[#B68A4C] font-semibold">
                      {pillar.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#2A0D08] mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#5E413B] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: The Handmade Process */}
        <div className="bg-[#FAF6F0] p-8 sm:p-14 border border-[#E2D5C3] shadow-md mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              The Artisanal Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0D08] mt-2">
              From Raw Boll to Runway Kemis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B68A4C]">
                Step 1 · Drop-Spindle Spinning
              </span>
              <h4 className="font-serif text-xl text-[#2A0D08]">Hand-Carded Shemma</h4>
              <p className="text-xs text-[#5E413B] leading-relaxed font-light">
                Locally farmed Ethiopian cotton is combed and spun by elder artisan women using traditional wooden spindles, producing fine yarn with natural, organic breathability.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B68A4C]">
                Step 2 · Pit-Loom Weaving
              </span>
              <h4 className="font-serif text-xl text-[#2A0D08]">Intricate Tibeb Borders</h4>
              <p className="text-xs text-[#5E413B] leading-relaxed font-light">
                Master weavers sit at hand-hewn pit looms, calculating geometric cross and diamond passes by memory, weaving gold threads into the cotton fabric over dozens of days.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B68A4C]">
                Step 3 · Atelier Tailoring
              </span>
              <h4 className="font-serif text-xl text-[#2A0D08]">Modern Architectural Fit</h4>
              <p className="text-xs text-[#5E413B] leading-relaxed font-light">
                In our Bole atelier, patternmakers drape and tailor each piece to individual measurements, finishing hems with invisible hand-stitches and custom horn buttons.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Vision & CTA */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
            The Future of AHAB
          </span>
          <h3 className="font-serif text-3xl text-[#2A0D08] mt-2">
            A New Chapter in African Luxury
          </h3>
          <p className="mt-3 text-sm text-[#5E413B] font-light leading-relaxed">
            We invite you to wear a piece of our history and become part of our enduring story.
          </p>
          <button
            onClick={() => setActiveTab('shop')}
            className="mt-6 px-8 py-3.5 bg-[#2A0D08] hover:bg-[#B68A4C] text-[#FAF6F0] text-xs uppercase tracking-widest transition-colors cursor-pointer"
          >
            Explore The Collection
          </button>
        </div>

      </div>
    </div>
  );
};

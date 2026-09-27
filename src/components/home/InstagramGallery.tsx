import React from 'react';
import { HERO_IMAGE, TRADITIONAL_IMG, WOMENS_IMG, MENS_IMG } from '../../data/products';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramGallery: React.FC = () => {
  const posts = [
    { id: 'ig-1', img: HERO_IMAGE, caption: 'Runway moments in Addis Ababa. Modern Tibeb silk gown.' },
    { id: 'ig-2', img: TRADITIONAL_IMG, caption: 'Seven generations of loom heritage. The Royal Saba Kemis.' },
    { id: 'ig-3', img: WOMENS_IMG, caption: 'Desert linen tailored for the global nomad.' },
    { id: 'ig-4', img: MENS_IMG, caption: 'Quiet Abyssinian dignity in unbleached linen.' },
  ];

  return (
    <section className="py-20 bg-[#F8F3EB] text-[#2A0D08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E2D5C3]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B68A4C] font-semibold">
              Behind The Scenes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-1 text-[#2A0D08] font-normal">
              Follow Our Journey
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#2A0D08] hover:text-[#B68A4C] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#B68A4C]" />
            <span>@ahabclothing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden bg-[#E2D5C3] cursor-pointer"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#2A0D08]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#FAF6F0]">
                <Instagram className="w-5 h-5 text-[#B68A4C] mb-2" />
                <p className="text-xs font-light line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#B68A4C] mt-2">
                  #AHABClothing #AddisAbaba
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

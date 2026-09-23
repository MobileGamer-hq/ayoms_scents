import React, { useState } from 'react';
import { Clock, Wind, ChevronLeft, ChevronRight } from 'lucide-react';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';

export default function Spotlight({ spotlightPerfumes, onSelectPerfume }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!spotlightPerfumes || spotlightPerfumes.length === 0) return null;

  const perfume = spotlightPerfumes[activeIdx] || spotlightPerfumes[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? spotlightPerfumes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === spotlightPerfumes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="spotlight" className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 relative overflow-hidden snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header & Interactive Flacon Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#F0DDE2] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans-luxury tracking-[0.25em] text-[#C5A880] mb-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>Featured Bestseller</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#181512] font-normal tracking-tight">
              Featured Fragrance
            </h2>
          </div>

          {/* Flacon Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {spotlightPerfumes.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 py-1.5 rounded-[8px] text-xs uppercase tracking-wider font-sans-luxury transition-all cursor-pointer ${
                  activeIdx === idx
                    ? 'bg-[#181512] text-white'
                    : 'bg-white border border-[#F0DDE2] text-[#7A6B5B] hover:text-[#181512]'
                }`}
              >
                0{idx + 1} • {p.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Spotlight Showcase Card */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#F0DDE2] editorial-shadow transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Flacon Visual with soft editorial shadow */}
            <div className="lg:col-span-5 flex items-center justify-center relative group">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl bg-gradient-to-b from-white to-[#FDF2F5] p-6 flex items-center justify-center overflow-hidden border border-[#F0DDE2]">
                
                {/* Natural diffused flacon drop shadow */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/15 rounded-full blur-xl pointer-events-none" />

                <img
                  key={perfume.id}
                  src={perfume.image}
                  alt={perfume.name}
                  className="relative z-10 max-h-[85%] max-w-[85%] object-contain filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Badge Pill */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F0DDE2] text-[10px] uppercase font-sans-luxury tracking-[0.2em] text-[#8C6D46] font-medium shadow-xs">
                  {perfume.badge || 'Top Pick'}
                </div>

                {/* Concentration Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#181512] text-[#FAF7F2] text-[10px] uppercase font-sans-luxury tracking-wider font-light">
                  {perfume.concentration}
                </div>
              </div>
            </div>

            {/* Fragrance Dossier Information */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] font-sans-luxury text-[#9E8B75] font-semibold block">
                    {perfume.house}
                  </span>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#181512] font-normal tracking-tight mt-0.5 mb-2">
                    {perfume.name}
                  </h3>
                </div>

                {/* Flacon Next/Prev Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous signature scent"
                    className="p-1.5 text-[#7A6B5B] hover:text-[#181512] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-sans-luxury text-[#9E8B75]">
                    0{activeIdx + 1} / 0{spotlightPerfumes.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next signature scent"
                    className="p-1.5 text-[#7A6B5B] hover:text-[#181512] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="font-sans-luxury text-xs sm:text-sm text-[#5C5044] leading-relaxed font-light mb-5">
                {perfume.description}
              </p>

              {/* Fragrance Notes Breakdown */}
              <div className="bg-[#FDF2F5] rounded-xl p-4 border border-[#F0DDE2] mb-5 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-[10px] uppercase tracking-wider font-sans-luxury text-[#C5A880] w-14 pt-0.5 font-medium">
                    Top:
                  </span>
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {perfume.notes.top.map((note) => (
                      <span key={note} className="text-xs font-sans-luxury px-2 py-0.5 rounded-md bg-white border border-[#F0DDE2] text-[#4A4036]">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[10px] uppercase tracking-wider font-sans-luxury text-[#C5A880] w-14 pt-0.5 font-medium">
                    Heart:
                  </span>
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {perfume.notes.heart.map((note) => (
                      <span key={note} className="text-xs font-sans-luxury px-2 py-0.5 rounded-md bg-white border border-[#F0DDE2] text-[#4A4036]">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[10px] uppercase tracking-wider font-sans-luxury text-[#8C6D46] w-14 pt-0.5 font-medium">
                    Base:
                  </span>
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {perfume.notes.base.map((note) => (
                      <span key={note} className="text-xs font-sans-luxury px-2 py-0.5 rounded-md bg-white border border-[#F0DDE2] text-[#4A4036]">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Indicators & Volume */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#F0DDE2]">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <div>
                    <span className="text-[9px] uppercase font-sans-luxury text-[#9E8B75] block">How Long It Lasts</span>
                    <span className="text-xs font-medium text-[#181512]">{perfume.performance.longevity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#F0DDE2]">
                  <Wind className="w-4 h-4 text-[#C5A880]" />
                  <div>
                    <span className="text-[9px] uppercase font-sans-luxury text-[#9E8B75] block">Scent Trail</span>
                    <span className="text-xs font-medium text-[#181512]">{perfume.performance.sillage}</span>
                  </div>
                </div>
              </div>

              {/* Price & Direct Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#F0DDE2] gap-4">
                <div>
                  <span className="text-[9px] uppercase font-sans-luxury tracking-widest text-[#9E8B75] block">
                    Bottle Volume {perfume.volume}
                  </span>
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#181512]">
                    {perfume.price}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectPerfume(perfume)}
                    className="px-5 py-2.5 rounded-[8px] text-xs font-medium uppercase tracking-[0.18em] border border-[#181512] text-[#181512] hover:bg-[#181512] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    View Scent Details
                  </button>

                  <a
                    href={buildWhatsAppOrderUrl(perfume.name, perfume.house, perfume.volume)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-[8px] text-xs font-medium uppercase tracking-[0.18em] bg-[#181512] text-white hover:bg-black transition-all duration-300"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

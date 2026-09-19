import React from 'react';
import { ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/perfumesData';

export default function TrustPillars() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Truck: Truck,
    Sparkles: Sparkles,
  };

  return (
    <section id="trust" className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 border-y border-[#E8E1D5] bg-[#F5EFEB]/60 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] uppercase font-sans-luxury tracking-[0.25em] text-[#9E8B75] block mb-2">
            The Digital Boutique Standard
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#181512] font-normal">
            Pillars of Olfactory Trust
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRAND_CONFIG.trustPillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8E1D5] hover:border-[#D4AF37]/60 transition-all duration-300 editorial-shadow hover:editorial-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E1D5] flex items-center justify-center text-[#D4AF37] mb-6 shadow-xs">
                    <IconComponent className="w-6 h-6 text-[#8C6D46]" />
                  </div>

                  <span className="text-[10px] uppercase font-sans-luxury tracking-[0.2em] text-[#C5A880] block font-semibold mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-serif-luxury text-2xl text-[#181512] font-medium mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-sans-luxury text-xs sm:text-sm text-[#5C5044] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center gap-2 text-[11px] font-sans-luxury text-[#8C7A68]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ayom's Scents Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

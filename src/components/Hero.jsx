import React from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { buildWhatsAppAdvisoryUrl } from '../utils/whatsapp';
import { getProductImage, handleImageError } from '../utils/productImages';
import { BRAND_CONFIG } from '../data/perfumesData';
import { formatPerfumeTitle } from '../utils/formatters';

export default function Hero({ onSelectPerfume, featuredPerfumes }) {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center relative pt-24 pb-10 md:pt-24 md:pb-12 overflow-hidden transition-colors duration-500 snap-start"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-br from-[#8C6D46]/10 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#181512] leading-[1.08] mb-3">
            Ayom's Scents
            <span className="block font-serif-luxury italic text-2xl sm:text-3xl md:text-4xl font-light text-gradient bg-gradient-to-r from-[#8C6D46] via-[#C5A880] to-[#8C6D46] bg-clip-text text-transparent mt-1">
              Confidence In Every Spray
            </span>
          </h1>

          <p className="font-sans-luxury text-xs sm:text-sm text-[#5A5044] max-w-lg mx-auto leading-relaxed font-light mb-5">
            Curated niche and designer perfumes, delivered straight to your hall or room in CU (Covenant University).
          </p>

          {/* Minimal Editorial Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#catalog"
              className="px-7 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.2em] font-sans-luxury font-medium bg-[#181512] text-white hover:bg-black transition-all duration-300"
            >
              Browse All Perfumes
            </a>

            <a
              href={buildWhatsAppAdvisoryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.2em] font-sans-luxury font-medium border border-[#181512] text-[#181512] hover:bg-[#181512] hover:text-white transition-all duration-300"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>

        {/* Flat-Lay Editorial Fragrance Spread (Directly modeled on User Inspiration) */}
        <div className="mt-6 relative">
          
          {/* Subtle decorative background frame */}
          <div className="absolute inset-0 rounded-3xl border border-[#F0DDE2] bg-gradient-to-b from-white/60 to-[#FDF2F5]/60 pointer-events-none -z-10" />

          <div className="p-4 sm:p-6 lg:p-7">
            
            {/* Editorial Spread Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#F0DDE2] pb-5 mb-10 gap-2">
              <div>
                <span className="text-[10px] uppercase font-sans-luxury tracking-[0.25em] text-[#9E8B75] block">
                  Top Picks
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#181512] font-normal">
                  Featured Fragrances
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#7A6B5B] font-sans-luxury">
                <span className="w-2 h-2 rounded-full bg-[#8C6D46] animate-pulse"></span>
                <span>Verified Stock • Fast Delivery in CU</span>
              </div>
            </div>

            {/* Flat-Lay Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {featuredPerfumes && featuredPerfumes.slice(0, 3).map((perfume, idx) => (
                <div
                  key={perfume.id}
                  onClick={() => onSelectPerfume(perfume)}
                  className="group cursor-pointer relative bg-white/85 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-[#F0DDE2] hover:border-[#D4AF37] transition-all duration-500 editorial-shadow hover:editorial-shadow-hover hover:-translate-y-1 min-w-0 overflow-hidden"
                >
                  {/* Editorial Tag / Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] uppercase tracking-[0.22em] font-sans-luxury text-[#9E8B75] font-semibold">
                      {perfume.badge || `Curation No. 0${idx + 1}`}
                    </span>
                    <span className="text-[10px] tracking-wider px-2 py-0.5 rounded-full bg-[#FDF2F5] border border-[#F0DDE2] text-[#8C6D46]">
                      {perfume.family}
                    </span>
                  </div>

                  {/* Bottle Visual & Flat-Lay Vignette */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gradient-to-b from-white to-[#FDF2F5] flex items-center justify-center p-3.5 border border-[#F0DDE2]">
                    {/* Soft natural drop shadow beneath flacon */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-2/3 h-5 bg-black/10 rounded-full blur-md pointer-events-none" />
                    
                    <img
                      src={getProductImage(perfume)}
                      alt={perfume.name}
                      onError={handleImageError}
                      className="relative z-10 max-h-[82%] max-w-[82%] object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Olfactory ingredient indicator chip */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#F0DDE2] text-center shadow-xs pointer-events-none">
                      <span className="text-[9px] font-serif-luxury italic text-[#5C4F40] block truncate">
                        Key Notes: {perfume.signatureNote || perfume.notes.top.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Perfume Editorial Typography */}
                  <div className="text-center min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-sans-luxury text-[#8C7A68] mb-0.5 font-medium truncate">
                      {perfume.house}
                    </p>
                    {(() => {
                      const { title, subtitle } = formatPerfumeTitle(perfume.name);
                      return (
                        <div className="mb-1 min-w-0">
                          <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#181512] font-medium tracking-tight group-hover:text-[#8C6D46] transition-colors break-words [overflow-wrap:anywhere]">
                            {title}
                          </h4>
                          {subtitle && (
                            <p className="text-[10px] font-sans-luxury text-[#8C6D46] mt-0.5 mb-1 font-medium break-words">
                              {subtitle}
                            </p>
                          )}
                        </div>
                      );
                    })()}
                    <p className="text-xs text-[#6E6050] font-sans-luxury line-clamp-2 leading-relaxed mb-2 font-light">
                      {perfume.description}
                    </p>
                    
                    <div className="pt-2 border-t border-[#F0DDE2] flex items-center justify-between gap-2">
                      <a
                        href={BRAND_CONFIG.telegramChannel}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="View prices on Telegram"
                        className="inline-flex items-center gap-1 text-[11px] font-sans-luxury font-medium text-[#8C6D46] hover:text-[#181512] transition-colors"
                      >
                        <span className="underline decoration-[#D4AF37]/50 underline-offset-2">Prices available on our Telegram</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#C5A880] shrink-0" />
                      </a>
                      <span className="text-[10px] font-sans-luxury tracking-wider text-[#9E8B75] shrink-0">
                        {perfume.volume}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Flat-Lay Footer Note */}
            <div className="mt-4 text-center">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans-luxury text-[#7A6B5B] hover:text-[#8C6D46] transition-colors"
              >
                <span>Browse All Perfumes</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

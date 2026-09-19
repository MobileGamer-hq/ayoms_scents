import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Droplets } from 'lucide-react';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';

export default function ProductCard({ perfume, onSelectPerfume }) {
  return (
    <div
      onClick={() => onSelectPerfume(perfume)}
      className="group cursor-pointer flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-[#E8E1D5] hover:border-[#D4AF37] transition-all duration-400 editorial-shadow hover:editorial-shadow-hover hover:-translate-y-1 relative"
    >
      
      {/* Top Card Eyebrow */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-[0.18em] uppercase font-sans-luxury text-[#9E8B75] font-semibold truncate pr-2">
            {perfume.house}
          </span>
          <span className="shrink-0 text-[9px] uppercase font-sans-luxury px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#EAE3D6] text-[#7A6B5B]">
            {perfume.gender}
          </span>
        </div>

        {/* Flacon Visual Area with soft shadow */}
        <div className="relative w-full aspect-[4/5] rounded-xl bg-gradient-to-b from-[#FAF7F2] to-[#F2EDE4] p-4 flex items-center justify-center overflow-hidden mb-5">
          {/* Subtle natural shadow under flacon */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-2/3 h-5 bg-black/10 rounded-full blur-md group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
          
          <img
            src={perfume.image}
            alt={perfume.name}
            className="relative z-10 max-h-[85%] max-w-[85%] object-contain filter contrast-[1.02] group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Concentration Tag */}
          <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm border border-[#EAE3D6] text-[9px] font-sans-luxury uppercase text-[#5C4F40]">
            {perfume.concentration}
          </div>

          {/* Volume Tag */}
          <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm border border-[#EAE3D6] text-[9px] font-sans-luxury text-[#5C4F40]">
            {perfume.volume}
          </div>

          {/* Scent note preview sticker */}
          {perfume.signatureNote && (
            <div className="absolute bottom-2 left-2 right-2 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E8E1D5] text-center shadow-xs">
              <span className="text-[9px] font-serif-luxury italic text-[#5C4F40] truncate block">
                {perfume.signatureNote}
              </span>
            </div>
          )}
        </div>

        {/* Perfume Header & Notes Preview */}
        <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#181512] font-medium tracking-tight mb-2 group-hover:text-[#8C6D46] transition-colors leading-tight">
          {perfume.name}
        </h3>

        {/* Top Notes Chips */}
        <div className="flex flex-wrap gap-1 mb-4">
          {perfume.notes.top.slice(0, 3).map((note) => (
            <span
              key={note}
              className="text-[10px] font-sans-luxury px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EFE8DC] text-[#6E6050]"
            >
              {note}
            </span>
          ))}
          {perfume.notes.top.length > 3 && (
            <span className="text-[9px] font-sans-luxury text-[#9E8B75] self-center">
              +{perfume.notes.top.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Price & Scent Dossier Action */}
      <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between mt-2">
        <div>
          <span className="text-[9px] uppercase font-sans-luxury text-[#9E8B75] block">
            Nigerian Price
          </span>
          <span className="font-serif-luxury text-lg sm:text-xl font-semibold text-[#181512]">
            {perfume.price}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick WhatsApp Inquiry (Icon Only: no border, no container background) */}
          <a
            href={buildWhatsAppOrderUrl(perfume.name, perfume.house, perfume.volume)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="Order via WhatsApp"
            className="p-1.5 text-[#181512] hover:text-[#8C6D46] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Dossier Button (Container: rounded-[8px]) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectPerfume(perfume);
            }}
            className="px-3.5 py-1.5 rounded-[8px] text-[11px] font-sans-luxury uppercase tracking-wider bg-[#181512] text-white hover:bg-black transition-colors"
          >
            Inspect Scent
          </button>
        </div>
      </div>

    </div>
  );
}

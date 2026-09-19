import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Clock, Wind, Calendar, Wine, Check, Share2, Layers } from 'lucide-react';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';

export default function ScentDossier({ perfume, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !perfume) return null;

  const handleShare = () => {
    const textToShare = `${perfume.name} by ${perfume.house} (${perfume.concentration}) - ${perfume.price} at Ayom's Scents.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappUrl = buildWhatsAppOrderUrl(perfume.name, perfume.house, perfume.volume);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop blur overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0E0B12]/60 backdrop-blur-sm transition-opacity duration-500 ease-out"
        aria-hidden="true"
      />

      <div className="fixed inset-0 sm:inset-y-0 sm:left-auto sm:right-0 max-w-full flex sm:pl-10 w-full sm:w-auto">
        
        {/* Full-Screen on Mobile, Drawer Panel on Desktop */}
        <div className="w-full sm:w-screen sm:max-w-xl bg-[#FAF7F2] border-l-0 sm:border-l border-[#E8E1D5] shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-500 ease-out h-full">
          
          {/* Drawer Sticky Header */}
          <div className="sticky top-0 z-30 bg-[#FAF7F2] px-4 py-3.5 sm:px-6 sm:py-4 border-b border-[#E8E1D5] flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans-luxury text-[#9E8B75] font-semibold">
                Official Scent Dossier
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                title="Copy dossier summary"
                className="p-1.5 text-[#7A6B5B] hover:text-[#181512] transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#181512] hover:text-black transition-colors"
                aria-label="Close Dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dossier Body Content */}
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 flex-1">
            
            {/* 1. Hero Imagery, House Name & Fragrance Title */}
            <div>
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-white to-[#F2EDE4] p-6 flex items-center justify-center overflow-hidden border border-[#E8E1D5] mb-6 isolate">
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-black/15 rounded-full blur-lg pointer-events-none" />
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="relative z-10 max-h-[82%] max-w-[82%] object-contain filter contrast-[1.02]"
                />
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#E8E1D5] text-[9px] uppercase font-sans-luxury text-[#8C6D46] font-medium shadow-xs pointer-events-none">
                  {perfume.family}
                </div>
                <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-[#181512] text-white text-[9px] uppercase font-sans-luxury tracking-wider shadow-xs pointer-events-none">
                  {perfume.gender}
                </div>
              </div>

              <div className="border-b border-[#E8E1D5] pb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-sans-luxury text-[#9E8B75] font-semibold">
                    {perfume.house}
                  </span>
                  <span className="text-xs font-sans-luxury text-[#7A6B5B]">
                    Volume: {perfume.volume}
                  </span>
                </div>

                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#181512] font-normal tracking-tight mb-2">
                  {perfume.name}
                </h2>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-sans-luxury px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E8E1D5] text-[#5C5044]">
                      {perfume.concentration}
                    </span>
                  </div>
                  <span className="font-serif-luxury text-2xl font-semibold text-[#181512]">
                    {perfume.price}
                  </span>
                </div>

                <p className="font-sans-luxury text-xs sm:text-sm text-[#5C5044] leading-relaxed font-light mt-4">
                  {perfume.description}
                </p>
              </div>
            </div>

            {/* 2. Scent Pyramid Breakdown in Distinct Visual Tiers */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="font-serif-luxury text-xl text-[#181512] font-medium">
                  Olfactory Pyramid Breakdown
                </h3>
              </div>

              <div className="space-y-3">
                
                {/* Top Notes Tier */}
                <div className="bg-white rounded-xl p-4 border border-[#E8E1D5] shadow-xs relative overflow-hidden">
                  <div className="w-1 absolute left-0 top-0 bottom-0 bg-[#C5A880]" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-sans-luxury text-[#C5A880] font-bold">
                      Top Notes (Immediate Impression • 15 Mins)
                    </span>
                    <span className="text-[10px] font-sans-luxury text-[#9E8B75]">Stage 1</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.top.map((note) => (
                      <span key={note} className="text-xs font-sans-luxury px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#EFE8DC] text-[#4A4036] font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes Tier */}
                <div className="bg-white rounded-xl p-4 border border-[#E8E1D5] shadow-xs relative overflow-hidden">
                  <div className="w-1 absolute left-0 top-0 bottom-0 bg-[#C5A880]" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-sans-luxury text-[#8C6D46] font-bold">
                      Heart / Middle Notes (Core Personality • 2–4 Hours)
                    </span>
                    <span className="text-[10px] font-sans-luxury text-[#9E8B75]">Stage 2</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.heart.map((note) => (
                      <span key={note} className="text-xs font-sans-luxury px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#EFE8DC] text-[#4A4036] font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes Tier */}
                <div className="bg-white rounded-xl p-4 border border-[#E8E1D5] shadow-xs relative overflow-hidden">
                  <div className="w-1 absolute left-0 top-0 bottom-0 bg-[#8C6D46]" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-sans-luxury text-[#8C6D46] font-bold">
                      Base Notes (Drydown Trail • 8+ Hours)
                    </span>
                    <span className="text-[10px] font-sans-luxury text-[#9E8B75]">Stage 3</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.base.map((note) => (
                      <span key={note} className="text-xs font-sans-luxury px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#EFE8DC] text-[#4A4036] font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Performance Indicators: Longevity & Sillage */}
            <div>
              <h3 className="font-serif-luxury text-xl text-[#181512] font-medium mb-4">
                Performance Evaluation
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-[#E8E1D5]">
                  <div className="flex items-center gap-2 text-[#C5A880] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-sans-luxury font-semibold text-[#9E8B75]">
                      Longevity Rating
                    </span>
                  </div>
                  <span className="font-serif-luxury text-xl font-medium text-[#181512] block">
                    {perfume.performance.longevity}
                  </span>
                  <div className="w-full bg-[#FAF7F2] h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#8C6D46] h-full w-[90%]" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#E8E1D5]">
                  <div className="flex items-center gap-2 text-[#C5A880] mb-1">
                    <Wind className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-sans-luxury font-semibold text-[#9E8B75]">
                      Sillage Projection
                    </span>
                  </div>
                  <span className="font-serif-luxury text-xl font-medium text-[#181512] block">
                    {perfume.performance.sillage}
                  </span>
                  <div className="w-full bg-[#FAF7F2] h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#8C6D46] h-full w-[85%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Best Season and Occasion Recommendations */}
            <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8E1D5] space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-sans-luxury tracking-wider text-[#9E8B75] block font-semibold">
                    Ideal Season Affinity
                  </span>
                  <span className="text-xs font-sans-luxury text-[#181512] font-medium">
                    {perfume.season || 'All Seasons / Climate Controlled'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#EFE8DC]">
                <Wine className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-sans-luxury tracking-wider text-[#9E8B75] block font-semibold">
                    Recommended Occasion
                  </span>
                  <span className="text-xs font-sans-luxury text-[#181512] font-medium">
                    {perfume.occasion}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Drawer Sticky Footer with Dynamic WhatsApp Conversion Button */}
          <div className="sticky bottom-0 z-30 bg-[#FAF7F2] px-4 py-3 sm:px-6 sm:py-5 border-t border-[#E8E1D5] shadow-lg space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-[8px] text-xs uppercase tracking-[0.2em] font-sans-luxury font-medium text-center bg-[#181512] text-white hover:bg-black transition-all duration-300 block"
            >
              Order via WhatsApp • {perfume.price}
            </a>

            <div className="text-center pt-1">
              <span className="text-[10px] font-sans-luxury text-[#9E8B75]">
                Direct to 09055334786
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

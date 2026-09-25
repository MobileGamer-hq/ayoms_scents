import React from 'react';
import { Award, CheckCircle, MessageCircle, Send } from 'lucide-react';
import { BRAND_CONFIG } from '../data/perfumesData';
import { buildWhatsAppAdvisoryUrl } from '../utils/whatsapp';

export default function BrandEthos() {
  return (
    <section id="ethos" className="min-h-screen w-full flex flex-col justify-center py-20 md:py-28 relative overflow-hidden bg-white/70 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Brand Identity Artwork Visual (User Uploaded Banner) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FDF2F5] gold-glow group">
              <img
                src="/ayoms-banner.png"
                alt="Ayoms Scents - Confidence in Every Spray Brand Artwork"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs font-sans-luxury tracking-widest uppercase">
                  Official Ayom's Scents Visual Identity
                </span>
              </div>
            </div>

          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans-luxury tracking-[0.25em] text-[#C5A880] font-semibold">
              <Award className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Our Story</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#181512] font-normal tracking-tight leading-tight">
              A Great Scent Speaks Before You Do.
            </h2>

            <div className="space-y-4 font-sans-luxury text-sm sm:text-base text-[#5C5044] leading-relaxed font-light">
              <p>
                At <strong className="text-[#181512] font-medium">Ayom's Scents</strong>, we believe that a great fragrance is more than just a pleasant scent—it is an invisible signature that boosts your confidence, elevates your presence, and leaves an unforgettable impression.
              </p>
              <p>
                Based in <strong className="text-[#181512] font-medium">Covenant University (CU)</strong>, we make buying authentic designer and niche perfumes effortless. We deliver directly to your hall or room on campus with guaranteed original, long-lasting fragrances.
              </p>
              <p className="font-serif-luxury text-lg italic text-[#8C6D46] border-l-2 border-[#D4AF37] pl-4 my-6">
                "{BRAND_CONFIG.editorialQuote}"
              </p>
            </div>

            {/* Ethos Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0DDE2]">
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>100% Original, Undiluted Bottles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>Verifiable Batch Codes on Every Bottle</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>Fast Campus Delivery to Your Hall in CU</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-[#8C6D46] shrink-0" />
                <span>Friendly Advice & Orders on WhatsApp or Telegram</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppAdvisoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.16em] font-sans-luxury font-medium bg-[#181512] text-white hover:bg-black transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={BRAND_CONFIG.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.16em] font-sans-luxury font-medium border border-[#8C6D46] bg-[#FDF2F5] text-[#8C6D46] hover:bg-[#8C6D46] hover:text-white transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Order on Telegram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

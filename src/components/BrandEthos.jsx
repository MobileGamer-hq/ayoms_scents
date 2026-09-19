import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/perfumesData';
import { buildWhatsAppAdvisoryUrl } from '../utils/whatsapp';

export default function BrandEthos() {
  return (
    <section id="ethos" className="min-h-screen w-full flex flex-col justify-center py-20 md:py-28 relative overflow-hidden bg-white snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Brand Identity Artwork Visual (User Uploaded Banner) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] magenta-glow group">
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
              <span>Our Olfactory Philosophy</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#181512] font-normal tracking-tight leading-tight">
              A Signature Scent is Not an Accessory—It is an Unspoken Identity.
            </h2>

            <div className="space-y-4 font-sans-luxury text-sm sm:text-base text-[#5C5044] leading-relaxed font-light">
              <p>
                At <strong className="text-[#181512] font-medium">Ayom's Scents</strong>, we believe fragrance is the most intimate form of memory. Long before words are exchanged, your olfactory aura has already articulated your poise, your taste, and your distinct ambition.
              </p>
              <p>
                Operating exclusively as a private digital boutique, we eliminate retail markups and physical showroom clutter. Our entire focus is dedicated to the provenance of authentic French and global niche formulations—curating flacons whose projection, longevity, and balance evoke undeniable confidence.
              </p>
              <p className="font-serif-luxury text-lg italic text-[#8C6D46] border-l-2 border-[#D4AF37] pl-4 my-6">
                "{BRAND_CONFIG.editorialQuote}"
              </p>
            </div>

            {/* Ethos Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0EBE1]">
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Dilution, 100% Authentic Bottles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Batch-Code Traceability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thermal Cushion Doorstep Packaging</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-sans-luxury text-[#181512]">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated One-on-One Scent Advisory</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={buildWhatsAppAdvisoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[8px] text-xs uppercase tracking-[0.2em] font-sans-luxury font-medium bg-[#181512] text-white hover:bg-black transition-all"
              >
                <span>Consult with Scent Curator</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

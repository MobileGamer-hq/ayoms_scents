import React from 'react';
import { MessageCircle, ArrowUp, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/perfumesData';
import { buildWhatsAppAdvisoryUrl } from '../utils/whatsapp';

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21.5 2 2 9.5l7 3 3 7 2.5-4.5 4 4z" />
      <path d="m9 12.5 12.5-10.5" />
    </svg>
  );
}

function SnapchatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
      <path d="M12.002 2c-3.606 0-5.69 2.584-5.69 5.378 0 1.258.468 2.378.964 3.208-.432.18-.94.432-1.393.71-.468.288-.648.576-.648.864 0 .36.27.684.738.864.81.306 1.836.432 2.682.522.072.396.18.774.324 1.116-.864.216-1.782.504-2.61.936-.54.27-.882.63-.882 1.044 0 .54.54.99 1.404 1.224.63.162 1.458.216 2.304.216.324.45.684.81 1.08 1.08-.288.162-.648.27-1.044.324-.468.054-.792.234-.792.522 0 .324.396.576 1.062.684.774.126 1.764.126 2.466-.216.63-.306 1.08-.342 1.404-.342.324 0 .774.036 1.404.342.702.342 1.692.342 2.466.216.666-.108 1.062-.36 1.062-.684 0-.288-.324-.468-.792-.522-.396-.054-.756-.162-1.044-.324.396-.27.756-.63 1.08-1.08.846 0 1.674-.054 2.304-.216.864-.234 1.404-.684 1.404-1.224 0-.414-.342-.774-.882-1.044-.828-.432-1.746-.72-2.61-.936.144-.342.252-.72.324-1.116.846-.09 1.872-.216 2.682-.522.468-.18.738-.504.738-.864 0-.288-.18-.576-.648-.864-.45-.278-.96-.53-1.393-.71.496-.83.964-1.95.964-3.208C17.69 4.584 15.606 2 12.002 2z" />
    </svg>
  );
}


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="min-h-screen w-full flex flex-col justify-center bg-[#120F16] text-[#FAF7F2] py-20 border-t border-[#2A2333] snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#261E2E]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/ayoms-logo.png"
                alt="Ayom's Scents Official Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40 shadow-sm"
              />
              <div>
                <span className="font-serif-luxury text-2xl font-normal tracking-wide block text-white">
                  AYOM'S SCENTS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] block -mt-1 font-sans-luxury">
                  Confidence In Every Spray
                </span>
              </div>
            </div>

            <p className="font-sans-luxury text-xs text-[#A89E90] leading-relaxed font-light max-w-sm">
              Nigeria’s premier digital fragrance showcase and olfactory advisory. Curated authentic niche and designer perfumes delivered directly to your doorstep with white-glove climate care.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#C5A880] font-sans-luxury">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
              <span>Online Boutique • Doorstep Dispatch Nationwide</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-sans-luxury text-[#C5A880] font-semibold">
              Olfactory Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans-luxury text-[#A89E90]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Atelier & Spotlight
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Full Fragrance Catalog
                </a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-white transition-colors">
                  Remote Ordering Guide
                </a>
              </li>
              <li>
                <a href="#ethos" className="hover:text-white transition-colors">
                  Brand Philosophy & Ethos
                </a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-white transition-colors">
                  Delivery & Transit FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Concierge Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-sans-luxury text-[#C5A880] font-semibold">
              Boutique Touchpoints
            </h4>

            <div className="space-y-3 text-xs font-sans-luxury text-[#A89E90]">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  WhatsApp: <a href={buildWhatsAppAdvisoryUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A880] font-medium transition-colors">{BRAND_CONFIG.phoneDisplay}</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  Instagram: <a href={BRAND_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A880] font-medium transition-colors">{BRAND_CONFIG.instagramHandle}</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <TelegramIcon className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  Telegram: <a href={BRAND_CONFIG.telegramChannel} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A880] font-medium transition-colors">t.me/ayomsscentss</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <SnapchatIcon className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  Snapchat: <strong className="text-white">{BRAND_CONFIG.snapchatHandle}</strong>
                </span>
              </div>

              <p className="text-[11px] text-[#7E7465] pt-1">
                Hours: {BRAND_CONFIG.operatingHours}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppAdvisoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.2em] font-medium bg-white text-[#120F16] hover:bg-[#FAF7F2] transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-luxury text-[#7E7465]">
          <p>
            © {new Date().getFullYear()} Ayom's Scents. All rights reserved. Confidence in every spray.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Designed for Connoisseurs & Collectors</span>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { MessageCircle, ChevronDown, HelpCircle } from 'lucide-react';
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

export default function Concierge() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="concierge" className="min-h-screen w-full flex flex-col justify-center py-20 md:py-28 bg-[#FBF0F3]/60 border-t border-[#F0DDE2] snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-sans-luxury tracking-[0.25em] text-[#C5A880] block mb-2 font-semibold">
            Easy Ordering & Fast Delivery
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#181512] font-normal tracking-tight mb-4">
            How to Order & Support
          </h2>
          <p className="font-sans-luxury text-xs sm:text-sm text-[#5C5044] leading-relaxed font-light">
            Based in Covenant University (CU). We provide fast, direct delivery straight to your hall or room on campus. Reach out to us through any of our official channels.
          </p>
        </div>

        {/* 1. How Remote Ordering Works (3 Steps) */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-sans-luxury tracking-[0.2em] text-[#9E8B75] font-medium">
              Three Simple Steps to Order
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {BRAND_CONFIG.remoteSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white/90 rounded-2xl p-8 border border-[#F0DDE2] editorial-shadow hover:editorial-shadow-hover transition-all duration-300 relative group"
              >
                <div className="font-serif-luxury text-5xl font-light text-[#F0DDE2] group-hover:text-[#D4AF37] transition-colors mb-4">
                  {stepItem.step}
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#181512] font-medium mb-3">
                  {stepItem.title}
                </h3>

                <p className="font-sans-luxury text-xs sm:text-sm text-[#5C5044] leading-relaxed font-light">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Direct Communication Channels (4 Official Touchpoints) */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-sans-luxury tracking-[0.2em] text-[#9E8B75] font-medium">
              Official Contact Channels
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* WhatsApp Touchpoint */}
            <a
              href={buildWhatsAppAdvisoryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 rounded-2xl p-6 border border-[#F0DDE2] hover:border-[#D4AF37] transition-all duration-300 editorial-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FDF2F5] border border-[#F0DDE2] text-[#8C6D46] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-sans-luxury tracking-widest text-[#8C6D46] font-semibold block mb-1">
                  WhatsApp Direct
                </span>
                <h4 className="font-serif-luxury text-xl text-[#181512] font-medium mb-1">
                  {BRAND_CONFIG.phoneDisplay}
                </h4>
                <p className="text-xs text-[#5C5044] font-sans-luxury leading-relaxed font-light mb-4">
                  Fastest response for instant stock confirmation and dispatch details.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F0DDE2] flex items-center justify-between text-xs font-medium text-[#8C6D46]">
                <span>Message Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Instagram Touchpoint */}
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 rounded-2xl p-6 border border-[#F0DDE2] hover:border-[#D4AF37] transition-all duration-300 editorial-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FDF2F5] border border-[#F0DDE2] text-[#8C6D46] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-sans-luxury tracking-widest text-[#8C6D46] font-semibold block mb-1">
                  Instagram
                </span>
                <h4 className="font-serif-luxury text-xl text-[#181512] font-medium mb-1">
                  @{BRAND_CONFIG.instagramHandle}
                </h4>
                <p className="text-xs text-[#5C5044] font-sans-luxury leading-relaxed font-light mb-4">
                  Visual previews of newly unboxed perfumes and customer reviews.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F0DDE2] flex items-center justify-between text-xs font-medium text-[#8C6D46]">
                <span>Visit Profile</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Telegram Channel Touchpoint */}
            <a
              href={BRAND_CONFIG.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 rounded-2xl p-6 border border-[#F0DDE2] hover:border-[#D4AF37] transition-all duration-300 editorial-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FDF2F5] border border-[#F0DDE2] text-[#8C6D46] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-sans-luxury tracking-widest text-[#8C6D46] font-semibold block mb-1">
                  Telegram Channel
                </span>
                <h4 className="font-serif-luxury text-xl text-[#181512] font-medium mb-1">
                  Ayom's Scents
                </h4>
                <p className="text-xs text-[#5C5044] font-sans-luxury leading-relaxed font-light mb-4">
                  Broadcasts, newly landed bottles, special drops, and stock updates.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F0DDE2] flex items-center justify-between text-xs font-medium text-[#8C6D46]">
                <span>Join Channel</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Snapchat Touchpoint */}
            <div className="bg-white/90 rounded-2xl p-6 border border-[#F0DDE2] hover:border-[#D4AF37] transition-all duration-300 editorial-shadow flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FDF2F5] border border-[#F0DDE2] text-[#8C6D46] flex items-center justify-center mb-4">
                  <SnapchatIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-sans-luxury tracking-widest text-[#8C6D46] font-semibold block mb-1">
                  Snapchat
                </span>
                <h4 className="font-serif-luxury text-xl text-[#181512] font-medium mb-1">
                  {BRAND_CONFIG.snapchatHandle}
                </h4>
                <p className="text-xs text-[#5C5044] font-sans-luxury leading-relaxed font-light mb-4">
                  Behind the scenes, daily unboxing snaps, and packaging stories.
                </p>
              </div>
              <div className="pt-3 border-t border-[#F0DDE2] flex items-center justify-between text-xs font-medium text-[#8C6D46]">
                <span>Add on Snap: {BRAND_CONFIG.snapchatHandle}</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Ordering FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans-luxury tracking-[0.2em] text-[#9E8B75] font-medium mb-2">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#181512] font-normal">
              Common Questions & Delivery
            </h3>
          </div>

          <div className="space-y-4">
            {BRAND_CONFIG.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-white/90 rounded-2xl border border-[#F0DDE2] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FDF2F5] transition-colors"
                  >
                    <span className="font-serif-luxury text-lg sm:text-xl text-[#181512] font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8C6D46] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#181512]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm font-sans-luxury text-[#5C5044] leading-relaxed font-light border-t border-[#F0DDE2]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

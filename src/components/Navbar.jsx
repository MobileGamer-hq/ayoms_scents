import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Menu, X } from 'lucide-react';
import { BRAND_CONFIG } from '../data/perfumesData';
import { buildWhatsAppAdvisoryUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Featured Scent', href: '#spotlight' },
    { label: 'All Perfumes', href: '#catalog' },
    { label: 'How to Order', href: '#concierge' },
    { label: 'Our Story', href: '#ethos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF0F3]/95 backdrop-blur-md border-b border-[#F0DDE2] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Editorial Monogram */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/ayoms-logo.png"
              alt="Ayom's Scents Official Logo"
              className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <span className="block font-serif-luxury text-xl sm:text-2xl font-semibold tracking-wide tracking-tight text-[#181512]">
                AYOM'S SCENTS
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase font-sans-luxury text-[#9E8B75] -mt-1">
                Confidence In Every Spray
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links & Direct Order Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-sans-luxury tracking-wide">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#4A4036] hover:text-[#181512] transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 pl-3 border-l border-[#F0DDE2]">
              <a
                href={buildWhatsAppAdvisoryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Order on WhatsApp"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[7px] text-[11px] font-sans-luxury uppercase tracking-wider bg-[#181512] text-white hover:bg-black transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BRAND_CONFIG.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                title="Order on Telegram Channel"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[7px] text-[11px] font-sans-luxury uppercase tracking-wider bg-[#FDF2F5] text-[#8C6D46] border border-[#F0DDE2] hover:bg-[#F0DDE2] hover:text-[#181512] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle (Icon Only) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#181512] hover:text-[#8C6D46] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-[#F0DDE2] bg-[#FAF0F3]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif-luxury py-2 border-b border-[#F0DDE2] text-[#2C241B] hover:text-[#8C6D46] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href={buildWhatsAppAdvisoryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[8px] text-xs font-medium uppercase tracking-wider bg-[#181512] text-white"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  Order on WhatsApp ({BRAND_CONFIG.phoneDisplay})
                </a>

                <a
                  href={BRAND_CONFIG.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[8px] text-xs font-medium uppercase tracking-wider bg-[#FDF2F5] text-[#8C6D46] border border-[#F0DDE2]"
                >
                  <Send className="w-4 h-4" />
                  Order on Telegram ({BRAND_CONFIG.telegramHandle})
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

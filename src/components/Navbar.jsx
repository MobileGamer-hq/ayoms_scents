import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
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
    { label: 'Curator\'s Spotlight', href: '#spotlight' },
    { label: 'Fragrance Catalog', href: '#catalog' },
    { label: 'Remote Ordering', href: '#concierge' },
    { label: 'Brand Ethos', href: '#ethos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E1D5] py-3 shadow-xs'
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
              className="w-11 h-11 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300 border border-[#D4AF37]/30"
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans-luxury tracking-wide">
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
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-[#E8E1D5] bg-[#FAF7F2]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif-luxury py-2 border-b border-[#EAE3D6] text-[#2C241B] hover:text-[#8C6D46] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href={buildWhatsAppAdvisoryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[8px] text-xs font-medium uppercase tracking-wider bg-[#181512] text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Concierge ({BRAND_CONFIG.phoneDisplay})
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

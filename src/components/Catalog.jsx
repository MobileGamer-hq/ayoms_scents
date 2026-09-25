import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw, Send, ExternalLink, MessageCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { SCENT_FAMILIES, PROFILE_FILTERS, BRAND_CONFIG } from '../data/perfumesData';

export default function Catalog({ perfumes, onSelectPerfume }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('All');
  const [selectedProfile, setSelectedProfile] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort perfumes dynamically
  const filteredPerfumes = useMemo(() => {
    let list = perfumes.filter((item) => {
      // Search matching title, house, or notes
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === '' ||
        (item.name || '').toLowerCase().includes(query) ||
        (item.house || '').toLowerCase().includes(query) ||
        (item.family || '').toLowerCase().includes(query) ||
        (item.concentration || '').toLowerCase().includes(query) ||
        (item.description || '').toLowerCase().includes(query) ||
        (item.notes?.top || []).some((n) => n.toLowerCase().includes(query)) ||
        (item.notes?.heart || []).some((n) => n.toLowerCase().includes(query)) ||
        (item.notes?.base || []).some((n) => n.toLowerCase().includes(query));

      // Family matching
      const itemFam = (item.family || '').toLowerCase();
      const selFam = selectedFamily.toLowerCase();
      const matchFamily =
        selectedFamily === 'All' ||
        itemFam.includes(selFam) ||
        (selFam.includes('amber') && (itemFam.includes('amber') || itemFam.includes('oriental'))) ||
        (selFam.includes('fresh') && (itemFam.includes('fresh') || itemFam.includes('citrus') || itemFam.includes('aquatic') || itemFam.includes('clean'))) ||
        (selFam.includes('woody') && (itemFam.includes('wood') || itemFam.includes('oud') || itemFam.includes('aromatic') || itemFam.includes('fougere'))) ||
        (selFam.includes('floral') && itemFam.includes('flor')) ||
        (selFam.includes('gourmand') && (itemFam.includes('gourmand') || itemFam.includes('sweet') || itemFam.includes('candy')));

      // Profile matching
      const itemGen = (item.gender || '').toLowerCase();
      const selProf = selectedProfile.toLowerCase();
      const matchProfile =
        selectedProfile === 'All' ||
        itemGen === selProf ||
        (selectedProfile === 'Pour Femme' && (itemGen.includes('fem') || itemGen.includes('woman') || itemGen.includes('her'))) ||
        (selectedProfile === 'Pour Homme' && (itemGen.includes('masc') || itemGen.includes('homme') || itemGen.includes('him') || itemGen.includes('men'))) ||
        (selectedProfile === 'Unisex' && itemGen.includes('uni'));

      return matchSearch && matchFamily && matchProfile;
    });

    // Sorting
    if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'house') {
      list.sort((a, b) => (a.house || '').localeCompare(b.house || ''));
    }

    return list;
  }, [perfumes, searchQuery, selectedFamily, selectedProfile, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedFamily('All');
    setSelectedProfile('All');
    setSortBy('featured');
  };

  const isFiltered =
    searchQuery !== '' || selectedFamily !== 'All' || selectedProfile !== 'All' || sortBy !== 'featured';

  return (
    <section id="catalog" className="min-h-screen w-full flex flex-col justify-start py-20 md:py-28 relative snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Catalog Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#181512] font-normal tracking-tight mb-3">
            All Perfumes
          </h2>
          <p className="font-sans-luxury text-xs sm:text-sm text-[#5C5044] leading-relaxed font-light mb-4">
            Explore authentic niche and designer perfumes. Tap any perfume to view notes and details, or order directly via WhatsApp or our Telegram channel.
          </p>

          {/* Telegram Pricing & Direct Ordering Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#FDF2F5] border border-[#F0DDE2] text-[#6E5D4F] text-xs font-sans-luxury shadow-xs">
            <span className="flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span>Prices & Orders on Telegram:</span>
              <a
                href={BRAND_CONFIG.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#181512] hover:text-[#8C6D46] underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              >
                <span>{BRAND_CONFIG.telegramHandle}</span>
                <ExternalLink className="w-3 h-3 text-[#9E8B75]" />
              </a>
            </span>
            <span className="text-[#D4AF37] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
              <span>WhatsApp:</span>
              <span className="font-medium text-[#181512]">{BRAND_CONFIG.phoneDisplay}</span>
            </span>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-[#F0DDE2] editorial-shadow mb-12 space-y-6">
          
          {/* Top Search Input & Sort Dropdown */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Live Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 text-[#9E8B75] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by perfume name, fragrance house, or raw notes (e.g., Bergamot, Vanilla, Oud)..."
                className="w-full pl-11 pr-4 py-3 rounded-[8px] bg-[#FDF2F5] border border-[#F0DDE2] text-xs sm:text-sm text-[#181512] placeholder-[#9E8B75] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-sans-luxury"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#9E8B75] hover:text-[#181512]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3">
              <span className="text-[11px] uppercase tracking-wider font-sans-luxury text-[#9E8B75] whitespace-nowrap">
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 rounded-[8px] bg-[#FDF2F5] border border-[#F0DDE2] text-xs font-sans-luxury text-[#181512] focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="featured">Featured / Recommended</option>
                <option value="name">Fragrance Name (A–Z)</option>
                <option value="house">Brand / House (A–Z)</option>
              </select>
            </div>
          </div>

          {/* Scent Family Filter Pills */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-[10px] uppercase font-sans-luxury tracking-[0.2em] text-[#9E8B75] font-semibold">
                Filter by Scent Family
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SCENT_FAMILIES.map((family) => {
                const isActive = selectedFamily === family;
                return (
                  <button
                    key={family}
                    onClick={() => setSelectedFamily(family)}
                    className={`px-4 py-2 rounded-[8px] text-xs font-sans-luxury transition-all duration-300 ${
                      isActive
                        ? 'bg-[#181512] text-white font-medium shadow-xs'
                        : 'bg-[#FDF2F5] border border-[#F0DDE2] text-[#5C5044] hover:border-[#D4AF37] hover:text-[#181512]'
                    }`}
                  >
                    {family}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Profile / Gender Filter Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-[#F0DDE2] gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-sans-luxury tracking-[0.2em] text-[#9E8B75] font-semibold mr-2">
                Profile:
              </span>
              {PROFILE_FILTERS.map((profile) => {
                const isActive = selectedProfile === profile;
                return (
                  <button
                    key={profile}
                    onClick={() => setSelectedProfile(profile)}
                    className={`px-3 py-1.5 rounded-[8px] text-xs font-sans-luxury transition-all duration-300 ${
                      isActive
                        ? 'bg-[#D4AF37] text-[#181512] font-semibold'
                        : 'bg-white border border-[#F0DDE2] text-[#6E6050] hover:text-[#181512]'
                    }`}
                  >
                    {profile}
                  </button>
                );
              })}
            </div>

            {/* Active Results Counter & Reset Button */}
            <div className="flex items-center gap-4 text-xs font-sans-luxury text-[#7A6B5B] self-end sm:self-center">
              <span>
                Showing <strong className="text-[#181512]">{filteredPerfumes.length}</strong> of {perfumes.length} perfumes
              </span>
              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-[#8C6D46] hover:text-[#181512] hover:underline font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Product Card Grid */}
        {filteredPerfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                onSelectPerfume={onSelectPerfume}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#F0DDE2] max-w-md mx-auto">
            <h3 className="font-serif-luxury text-2xl text-[#181512] mb-2 font-normal">
              No Perfumes Found
            </h3>
            <p className="font-sans-luxury text-xs text-[#7A6B5B] leading-relaxed mb-6 font-light">
              No fragrances match your active search or filter criteria.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-[8px] text-xs uppercase tracking-[0.2em] font-medium bg-[#181512] text-white hover:bg-black transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

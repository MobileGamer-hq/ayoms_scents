import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustPillars from './components/TrustPillars';
import Spotlight from './components/Spotlight';
import Catalog from './components/Catalog';
import Concierge from './components/Concierge';
import BrandEthos from './components/BrandEthos';
import Footer from './components/Footer';
import ScentDossier from './components/ScentDossier';

import { PERFUMES_DATA } from './data/perfumesData';

export default function App() {
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  const handleOpenDossier = (perfume) => {
    setSelectedPerfume(perfume);
    setIsDossierOpen(true);
  };

  const handleCloseDossier = () => {
    setIsDossierOpen(false);
  };

  // Filter 3 spotlight perfumes for curator section
  const spotlightPerfumes = PERFUMES_DATA.filter((p) => p.isSpotlight).slice(0, 3);

  return (
    <div className="min-h-screen font-sans-luxury bg-[#FAF7F2] text-[#181512]">
      {/* Top Fixed Editorial Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* View 1: Hero Section with Flat-Lay Olfactory Spread */}
        <Hero
          featuredPerfumes={spotlightPerfumes}
          onSelectPerfume={handleOpenDossier}
        />

        {/* Online Boutique Trust Pillars */}
        <TrustPillars />

        {/* Curator's Spotlight Signature Flacons */}
        <Spotlight
          spotlightPerfumes={spotlightPerfumes}
          onSelectPerfume={handleOpenDossier}
        />

        {/* View 2: The Fragrance Catalog & Live Filtering */}
        <Catalog
          perfumes={PERFUMES_DATA}
          onSelectPerfume={handleOpenDossier}
        />

        {/* View 4: Digital Concierge, 3-Step Ordering Guide & FAQ */}
        <Concierge />

        {/* Brand Ethos & Narrative with Official Flyer */}
        <BrandEthos />
      </main>

      {/* Boutique Editorial Footer */}
      <Footer />

      {/* View 3: Slide-Out Product Scent Dossier (Drawer Modal) */}
      <ScentDossier
        perfume={selectedPerfume}
        isOpen={isDossierOpen}
        onClose={handleCloseDossier}
      />
    </div>
  );
}

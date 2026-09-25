// Product image helper: resolves Vite asset modules from src/assets/Products
// and provides graceful fallbacks for images.

// Vite eager glob import of all images in src/assets/Products
const assetImages = import.meta.glob('../assets/Products/*', { eager: true, import: 'default' });

// Default luxury fallback image
export const DEFAULT_FALLBACK_IMAGE = '/ayoms-logo.png';

// Mapping from product ID to asset filename in src/assets/Products
export const PRODUCT_IMAGE_MAP = {
  'P-001': 'Ashantee perfume series. 100ml Available in  other collections.jpg',
  'P-002': 'Ashantee perfume series. 100ml Available in  other collections.jpg',
  'P-003': 'Ashantee intense elixir. 100ml.jpg',
  'P-004': 'Ashantee perfume series. 100ml Available in  other collections.jpg',
  'P-005': 'Perfect line perfume. About 80ml.jpg',
  'P-006': 'Touch perfume oil series. 25ml.jpg',
  'P-007': 'Touch perfume oil series. 25ml.jpg',
  'P-008': 'Balila perfume. 120ml.jpg',
  'P-009': 'One love perfume. 100ml.jpg',
  'P-010': 'Nivea men roll on. 50ml.jpg',
  'P-011': 'Nivea body spray series..jpg',
  'P-012': 'Karis roll on. 50ml.jpg',
  'P-013': 'Karis all day all fresh body spray. 200ml.jpg',
  'P-014': 'Elixir’s Storm body spray. 200ml.jpg',
  'P-015': 'The CHAIRMAN(Zendas box). 100ml.jpg',
  'P-016': 'Riggs London patrol. 100ml.jpg',
  'P-017': 'Confetti body spray series. 250ml.jpg',
  'P-018': 'Confetti body mist series. 250ml.jpg',
  'P-019': 'Confetti body mist series. 250ml.jpg',
  'P-020': 'Confetti body spray series. About 250ml.jpg',
  'P-021': 'Creation lamis’ Pure black body spray.jpg',
  'P-022': 'Sugar candy perfume. 100ml.jpg',
  'P-023': 'Aventos Blue for him. 100ml.jpg',
  'P-024': 'GDK’s(Gets de Bourgois)Matador perfume. 100ml.jpg',
  'P-025': 'Explore body spray. 200ml.jpg',
  'P-026': 'Sugar candy perfume. 100ml.jpg',
  'P-027': 'Imperio way series. 25ml.jpg',
  'P-028': 'Imperio way series. 25ml.jpg',
  'P-029': 'Genie collection series. 25ml.jpg',
  'P-030': 'Genie collection series. 25ml.jpg',
  'P-031': 'Genie collection oil perfume. 8ml.jpg',
  'P-032': 'Kaydi body mist series. 100ml.jpg',
  'P-033': 'Kaly series. 100ml.jpg',
  'P-034': 'Kaly series. 100ml.jpg',
  'P-035': 'Emergency perfume..jpg',
  'P-036': 'Hanna’s secret Be trës perfume series. 100ml.jpg',
  'P-037': 'Swiss cologne body splash collection. 100ml.jpg',
  'P-038': 'Genie collection oil perfume. 8ml.jpg',
  'P-039': 'Nike woman ultra purple. 75ml.jpg',
  'P-040': 'Monogotas perfume series. 100ml.jpg',
  'P-041': '24 heures deluxe gold perfume. 100ml.jpg',
  'P-042': 'Big boss perfume. 100ml.jpg',
  'P-043': 'Berries Weekend (Pink Edition).jpg',
  'P-044': 'One love perfume. 100ml.jpg',
  'P-045': 'Ophylia body spray. 200ml.jpg',
  'P-046': 'Explore perfume(smart originals). 200ml.jpg',
  'P-047': 'Explore perfume(smart originals). 200ml.jpg',
  'P-048': 'Ginger Eclaire.jpg',
  'P-050': 'Challenge.jpg',
  'P-051': 'Sugar candy perfume. 100ml.jpg',
  'P-052': 'DooBai Original.jpg',
  'P-053': 'Confetti body mist series. 250ml.jpg',
  'P-054': 'Aventos Blue for him. 100ml.jpg',
  'P-055': 'Hanna’s secret Be trës perfume series. 100ml.jpg',
  'P-056': 'Cuba Caballero.jpg',
  'P-057': '24k rouge perfume. 100ml..jpg',
  'P-058': 'Sugar candy perfume. 100ml.jpg',
  'P-062': 'Red Diamond.jpg',
  'P-063': 'Mukhallat Roll-On.jpg',
  'P-064': 'Bozzs White and Blue Bozzs.jpg',
  'P-065': 'Sugar candy perfume. 100ml.jpg',
  'P-066': 'Sugar candy perfume. 100ml.jpg',
  'P-067': 'Sugar candy perfume. 100ml.jpg',
  'P-068': 'One love perfume. 100ml.jpg',
  'P-069': 'Blue Fragrance Collections Bacarral.jpg',
  'P-070': 'Hanna’s secret’s No 1 royal perfume. 100ml.jpg',
  'P-071': 'Confetti body mist series. 250ml.jpg',
  'P-072': 'Cotton Club (CC).jpg',
  'P-074': 'Cybele Caprece (Forever Yours).jpg',
  'P-075': 'Fantasy.jpg',
  'P-077': '24k rouge perfume. 100ml..jpg',
  'P-078': '24k rouge perfume. 100ml..jpg',
  'P-079': 'Boos (Lucas Parfum Violet  Perfume Selection).jpg',
  'P-080': 'Blu.jpg',
  'P-083': 'Elemental.jpg',
  'P-084': '136.jpg',
  'P-085': 'Hummer (Black and Blue editions).jpg',
  'P-086': 'Pink Dress.jpg',
  'P-087': 'The CHAIRMAN(Zendas box). 100ml.jpg',
  'P-089': 'Hanna’s secret Be trës perfume series. 100ml.jpg',
  'P-090': 'Imperio way series. 25ml.jpg',
  'P-091': 'One love perfume. 100ml.jpg',
  'P-092': 'One love perfume. 100ml.jpg',
  'P-093': 'One love perfume. 100ml.jpg'
};

/**
 * Returns the best image URL for a given perfume.
 * Checks asset module import first, then public product path, then fallback.
 */
export function getProductImage(perfume) {
  if (!perfume) return DEFAULT_FALLBACK_IMAGE;

  // 1. Check mapped asset filename
  const filename = PRODUCT_IMAGE_MAP[perfume.id];
  if (filename) {
    const key = `../assets/Products/${filename}`;
    if (assetImages[key]) {
      return assetImages[key];
    }
  }

  // 2. Check if perfume has an image property
  if (perfume.image) {
    const clean = perfume.image.replace(/^\/products\//, '').replace(/^\/assets\/Products\//, '');
    const key = `../assets/Products/${clean}`;
    if (assetImages[key]) {
      return assetImages[key];
    }
    return perfume.image;
  }

  // 3. Fallback to public ID or default
  return `/products/${perfume.id}.jpg`;
}

/**
 * Image error handler to swap broken image sources to default fallback seamlessly
 */
export function handleImageError(e) {
  if (e?.target && e.target.src !== DEFAULT_FALLBACK_IMAGE) {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = DEFAULT_FALLBACK_IMAGE;
  }
}

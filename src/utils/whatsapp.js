import { BRAND_CONFIG } from '../data/perfumesData';

/**
 * Builds the official pre-formatted WhatsApp direct order link.
 * @param {string} perfumeName
 * @param {string} house
 * @param {string} [volume]
 * @returns {string}
 */
export function buildWhatsAppOrderUrl(perfumeName, house, volume = '') {
  const phone = BRAND_CONFIG.whatsappNumber || '2349055334786';
  const volumeSnippet = volume ? ` (${volume})` : '';
  const message = `Hello Ayoms Scents, I am interested in ordering ${perfumeName}${volumeSnippet} by ${house}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a general inquiry WhatsApp link for bespoke scent advisory.
 * @returns {string}
 */
export function buildWhatsAppAdvisoryUrl() {
  const phone = BRAND_CONFIG.whatsappNumber || '2349055334786';
  const message = `Hello Ayom's Scents, I would like to get a personalized perfume recommendation.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

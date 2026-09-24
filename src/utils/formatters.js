/**
 * Formats perfume names so that parenthesized variant lists
 * (e.g., "Mousuf (Candy/Layali/Musk/Mango/Sexy/Ramadi)")
 * are cleanly separated into a main title and an elegant subtitle.
 */
export function formatPerfumeTitle(fullName) {
  if (!fullName) return { title: '', subtitle: null };

  const match = fullName.match(/^(.*?)\s*\((.*?)\)$/);
  if (!match) {
    return { title: fullName, subtitle: null };
  }

  const baseTitle = match[1].trim();
  const inner = match[2].trim();

  // If it's a short simple edition like "(Red)" or "(Floral)", keep it inline
  if (!inner.includes('/') && inner.length <= 15) {
    return { title: `${baseTitle} (${inner})`, subtitle: null };
  }

  // Parse editions list separated by slashes
  const editions = inner
    .split('/')
    .map((e) => e.trim())
    .filter(Boolean)
    .join(' • ');

  return {
    title: baseTitle,
    subtitle: `Editions: ${editions}`
  };
}

const TIER_ROMAN = ['I', 'II', 'III', 'IV', 'V'];

const toTitle = (value = '') => String(value)
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

const formatPlain = (value) => {
  const n = parseInt(value, 10);
  return Number.isNaN(n) ? '–' : String(n);
};

const formatSigned = (value) => {
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) return '–';
  return n >= 0 ? `+${n}` : `−${Math.abs(n)}`;
};

const toRoman = (tier) => TIER_ROMAN[parseInt(tier, 10) - 1] || '–';

const clamp = (value, min, max) => {
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
};

const slugify = (text = '') => String(text)
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '') || 'unit-card';

// "Name: rules text" lines render the name in bold on the card
const parseTraits = (traits = '') => traits
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line) => {
    const colon = line.indexOf(':');
    if (colon > 0 && colon < 40) {
      return { name: line.slice(0, colon).trim(), text: line.slice(colon + 1).trim() };
    }
    return { name: '', text: line };
  });

export { TIER_ROMAN, toTitle, formatPlain, formatSigned, toRoman, clamp, slugify, parseTraits };

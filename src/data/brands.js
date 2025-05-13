/**
 * Sample brands data for European and Polish outdoor gear companies
 */
const brands = [
  {
    id: 'fjallraven',
    name: 'Fjällräven',
    country: 'Sweden',
    website: 'https://www.fjallraven.com',
    logo: '/images/brands/Fjällräven_logo.svg',
    description: 'Swedish outdoor equipment supplier known for durable and functional clothing and equipment.',
    categories: ['backpacks', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tops', 'bottoms', 'outerwear'],
    featured: true
  },
  {
    id: 'alpkit',
    name: 'Alpkit',
    country: 'United Kingdom',
    website: 'https://alpkit.com',
    logo: '/images/brands/alpkit.png',
    description: 'UK-based manufacturer of outdoor gear specializing in lightweight equipment for activities like climbing, hiking, and camping.',
    categories: ['shelter', 'sleep', 'stoves', 'clothes'],
    subcategories: ['tents', 'tarps', 'bags', 'mats', 'gas', 'tops', 'bottoms'],
    featured: true
  },
  {
    id: 'cumulus',
    name: 'Cumulus',
    country: 'Poland',
    website: 'https://cumulus.equipment',
    logo: '/images/brands/cumulus.webp',
    description: 'Polish manufacturer of high-quality down sleeping bags, jackets, and quilts.',
    categories: ['sleep', 'clothes'],
    subcategories: ['bags', 'quilts', 'outerwear'],
    featured: true
  },
  {
    id: 'robens',
    name: 'Robens',
    country: 'Denmark',
    website: 'https://www.robens.de/en-gb',
    logo: '/images/brands/robens.png',
    description: 'Danish manufacturer of camping equipment including tents, sleeping bags, and mattresses.',
    categories: ['shelter', 'sleep'],
    subcategories: ['tents', 'hammocks', 'bags', 'mats'],
    featured: false
  },
  {
    id: 'lesovik',
    name: 'Lesovik',
    country: 'Poland',
    website: 'https://lesovik.pl',
    logo: '/images/brands/lesovik.jpg',
    description: 'Polish manufacturer specializing in hammocks and lightweight camping gear.',
    categories: ['shelter'],
    subcategories: ['hammocks', 'tarps'],
    featured: true
  },
  {
    id: 'primus',
    name: 'Primus',
    country: 'Sweden',
    website: 'https://primus.eu',
    logo: '/images/brands/primus.svg',
    description: 'Swedish manufacturer of camping stoves and cooking equipment.',
    categories: ['stoves'],
    subcategories: ['gas', 'liquid'],
    featured: false
  },
  {
    id: 'nordisk',
    name: 'Nordisk',
    country: 'Denmark',
    website: 'https://nordisk.eu',
    logo: '/images/brands/nordisk.png',
    description: 'Danish outdoor equipment manufacturer focused on lightweight tents, sleeping bags, and clothing.',
    categories: ['shelter', 'sleep', 'clothes'],
    subcategories: ['tents', 'bags', 'outerwear'],
    featured: false
  },
  {
    id: 'hilleberg',
    name: 'Hilleberg',
    country: 'Sweden',
    website: 'https://hilleberg.com',
    logo: '/images/brands/hilleberg.png',
    description: 'Swedish tent manufacturer renowned for high-quality, durable all-season tents.',
    categories: ['shelter'],
    subcategories: ['tents'],
    featured: true
  },
  {
    id: 'nortent',
    name: 'Nortent',
    country: 'Norway',
    website: 'https://nortent.com',
    logo: '/images/brands/nortent.png',
    description: 'Norwegian manufacturer of high-quality tents designed for Scandinavian conditions.',
    categories: ['shelter'],
    subcategories: ['tents'],
    featured: false
  },
  {
    id: 'haglofs',
    name: 'Haglöfs',
    country: 'Sweden',
    website: 'https://www.haglofs.com',
    logo: '/images/brands/haglofs.png',
    description: 'Swedish outdoor equipment supplier specializing in technical clothing, footwear, and hardware for outdoor enthusiasts.',
    categories: ['backpacks', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tops', 'bottoms', 'outerwear', 'footwear'],
    featured: false
  },
  {
    id: 'norrona',
    name: 'Norrøna',
    country: 'Norway',
    website: 'https://www.norrona.com',
    logo: '/images/brands/norrona.png',
    description: 'Norwegian high-end outdoor brand known for durable and functional clothing and equipment for hiking, skiing, and other outdoor activities.',
    categories: ['backpacks', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'helsport',
    name: 'Helsport',
    country: 'Norway',
    website: 'https://www.helsport.com',
    logo: '/images/brands/helsport.png',
    description: 'Norwegian manufacturer of high-quality tents, sleeping bags, and outdoor equipment designed for harsh Nordic conditions.',
    categories: ['shelter', 'sleep'],
    subcategories: ['tents', 'bags'],
    featured: false
  },
  {
    id: 'bergans',
    name: 'Bergans',
    country: 'Norway',
    website: 'https://www.bergans.com',
    logo: '/images/brands/bergans.png',
    description: 'Norwegian outdoor brand producing backpacks, tents, and technical clothing known for durability and functionality.',
    categories: ['backpacks', 'shelter', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tents', 'tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'exped',
    name: 'Exped',
    country: 'Switzerland',
    website: 'https://www.exped.com',
    logo: '/images/brands/exped.png',
    description: 'Swiss company focusing on high-quality sleeping mats, backpacks, and tents with innovative designs for outdoor adventures.',
    categories: ['backpacks', 'sleep', 'shelter'],
    subcategories: ['daypack', 'multiday', 'mats', 'bags', 'tents'],
    featured: false
  },
  {
    id: 'optimus',
    name: 'Optimus',
    country: 'Sweden',
    website: 'https://www.optimusstoves.com',
    logo: '/images/brands/optimus.png',
    description: 'Swedish manufacturer of outdoor cooking equipment, specializing in camping stoves and related accessories since 1899.',
    categories: ['stoves'],
    subcategories: ['gas', 'liquid'],
    featured: false
  },
  {
    id: 'mora',
    name: 'Morakniv',
    country: 'Sweden',
    website: 'https://morakniv.se',
    logo: '/images/brands/mora.png',
    description: 'Swedish knife manufacturer producing high-quality and affordable outdoor knives trusted by craftsmen and outdoor enthusiasts worldwide.',
    categories: ['knives'],
    subcategories: ['knives'],
    featured: false
  },
  {
    id: 'fallkniven',
    name: 'Fällkniven',
    country: 'Sweden',
    website: 'https://fallkniven.se',
    logo: '/images/brands/fallkniven.png',
    description: 'Swedish knife manufacturer specializing in high-end, premium quality survival and outdoor knives.',
    categories: ['knives'],
    subcategories: ['knives'],
    featured: false
  },
  {
    id: 'gransfors',
    name: 'Gränsfors Bruk',
    country: 'Sweden',
    website: 'https://www.gransforsbruk.com',
    logo: '/images/brands/gransfors.png',
    description: 'Swedish axe manufacturer crafting premium hand-forged axes for forestry, woodworking, and outdoor activities.',
    categories: ['knives'],
    subcategories: ['axes'],
    featured: false
  },
  {
    id: 'trangia',
    name: 'Trangia',
    country: 'Sweden',
    website: 'https://trangia.se',
    logo: '/images/brands/trangia.png',
    description: 'Swedish manufacturer of alcohol stove systems and outdoor cookware, known for their reliable and versatile cooking solutions.',
    categories: ['stoves'],
    subcategories: ['liquid'],
    featured: false
  },
  {
    id: 'hellyhansen',
    name: 'Helly Hansen',
    country: 'Norway',
    website: 'https://www.hellyhansen.com',
    logo: '/images/brands/hellyhansen.png',
    description: 'Norwegian manufacturer of technical sailing and skiing outerwear and clothing, popular for both professional and casual outdoor use.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: true
  },
  {
    id: 'silva',
    name: 'Silva',
    country: 'Sweden',
    website: 'https://silva.se',
    logo: '/images/brands/silva.png',
    description: 'Swedish manufacturer of compasses, headlamps, and other navigation equipment essential for outdoor exploration.',
    categories: ['lighting', 'trekking'],
    subcategories: ['headlamps', 'navigation'],
    featured: false
  },
  {
    id: 'leki',
    name: 'Leki',
    country: 'Germany',
    website: 'https://www.leki.com',
    logo: '/images/brands/leki.png',
    description: 'German manufacturer specializing in high-quality trekking poles, ski poles, and gloves for outdoor activities.',
    categories: ['trekking'],
    subcategories: ['poles'],
    featured: false
  }
];

export default brands;

/**
 * Get a brand by its ID
 */
export const getBrandById = (id) => {
  return brands.find(brand => brand.id === id) || null;
};

/**
 * Get all featured brands
 */
export const getFeaturedBrands = () => {
  return brands.filter(brand => brand.featured);
};

/**
 * Filter brands by category and subcategory
 */
export const filterBrands = (categoryId = null, subcategoryId = null) => {
  let filtered = [...brands];
  
  if (categoryId) {
    filtered = filtered.filter(brand => brand.categories.includes(categoryId));
  }
  
  if (subcategoryId) {
    filtered = filtered.filter(brand => brand.subcategories.includes(subcategoryId));
  }
  
  return filtered;
};

/**
 * Search brands by name, description, or country
 */
export const searchBrands = (query) => {
  if (!query) return brands;
  
  const searchTerm = query.toLowerCase();
  return brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm) ||
    brand.description.toLowerCase().includes(searchTerm) ||
    brand.country.toLowerCase().includes(searchTerm)
  );
};

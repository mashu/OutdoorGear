/**
 * Sample brands data for European and Polish outdoor gear companies
 */
const brands = [
  {
    id: 'fjallraven',
    name: 'Fjällräven',
    country: 'Sweden',
    website: 'https://www.fjallraven.com',
    logo: '/images/brands/fjallraven.png',
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
    logo: '/images/brands/cumulus.png',
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
    logo: '/images/brands/lesovik.png',
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
    logo: '/images/brands/primus.png',
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
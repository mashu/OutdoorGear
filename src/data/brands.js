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
    id: 'atompacks',
    name: 'Atom Packs',
    country: 'United Kingdom',
    website: 'https://atompacks.co.uk',
    logo: '/images/brands/atompacks.png',
    description: 'UK-based manufacturer specializing in lightweight, custom ultralight backpacks, including their versatile Prospector collection designed for hiking and backpacking.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
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
    id: 'deuter',
    name: 'Deuter',
    country: 'Germany',
    website: 'https://www.deuter.com',
    logo: '/images/brands/deuter.png',
    description: 'German backpack manufacturer with over 120 years of experience, known for innovative carrying systems and high-quality hiking, trekking and mountaineering packs.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: true
  },
  {
    id: 'vaude',
    name: 'Vaude',
    country: 'Germany',
    website: 'https://www.vaude.com',
    logo: '/images/brands/vaude.png',
    description: 'German manufacturer committed to sustainability, producing eco-friendly outdoor clothing, backpacks, and camping equipment.',
    categories: ['backpacks', 'shelter', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tents', 'tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'jackwolfskin',
    name: 'Jack Wolfskin',
    country: 'Germany',
    website: 'https://www.jack-wolfskin.com',
    logo: '/images/brands/jackwolfskin.png',
    description: 'German outdoor clothing and equipment brand known for functional and durable products for hiking and everyday outdoor activities.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['tops', 'bottoms', 'outerwear', 'daypack'],
    featured: false
  },
  {
    id: 'hanwag',
    name: 'Hanwag',
    country: 'Germany',
    website: 'https://www.hanwag.com',
    logo: '/images/brands/hanwag.png',
    description: 'Traditional German bootmaker specializing in high-quality hiking and mountaineering footwear crafted using traditional techniques.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'tatonka',
    name: 'Tatonka',
    country: 'Germany',
    website: 'https://www.tatonka.com',
    logo: '/images/brands/tatonka.png',
    description: 'German manufacturer of high-quality backpacks, travel equipment, and outdoor gear known for exceptional durability and functionality.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: false
  },
  {
    id: 'rab',
    name: 'Rab',
    country: 'United Kingdom',
    website: 'https://rab.equipment',
    logo: '/images/brands/rab.png',
    description: 'UK brand specializing in technical mountaineering clothing and sleeping bags, renowned for high-performance insulation and weather protection.',
    categories: ['clothes', 'sleep'],
    subcategories: ['outerwear', 'bags'],
    featured: true
  },
  {
    id: 'montane',
    name: 'Montane',
    country: 'United Kingdom',
    website: 'https://www.montane.com',
    logo: '/images/brands/montane.png',
    description: 'British manufacturer of lightweight, breathable clothing and equipment designed for extreme environments and mountain sports.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'mountainequipment',
    name: 'Mountain Equipment',
    country: 'United Kingdom',
    website: 'https://www.mountain-equipment.co.uk',
    logo: '/images/brands/mountainequipment.png',
    description: 'British company developing high-performance clothing and equipment for mountaineering, climbing and winter sports.',
    categories: ['clothes', 'sleep'],
    subcategories: ['outerwear', 'bags'],
    featured: false
  },
  {
    id: 'paramo',
    name: 'Páramo',
    country: 'United Kingdom',
    website: 'https://www.paramo-clothing.com',
    logo: '/images/brands/paramo.png',
    description: 'UK brand creating innovative, ethical outdoor clothing using Nikwax technology instead of traditional waterproof membranes for superior moisture management.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'salewa',
    name: 'Salewa',
    country: 'Italy',
    website: 'https://www.salewa.com',
    logo: '/images/brands/salewa.png',
    description: 'Italian alpine equipment manufacturer specializing in technical mountaineering gear, clothing and footwear for climbing and mountain sports.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'footwear', 'multiday'],
    featured: false
  },
  {
    id: 'lasportiva',
    name: 'La Sportiva',
    country: 'Italy',
    website: 'https://www.lasportiva.com',
    logo: '/images/brands/lasportiva.png',
    description: 'Italian manufacturer producing high-performance footwear for climbing, hiking, mountaineering and trail running with innovative designs and materials.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: true
  },
  {
    id: 'scarpa',
    name: 'Scarpa',
    country: 'Italy',
    website: 'https://www.scarpa.com',
    logo: '/images/brands/scarpa.png',
    description: 'Italian footwear company crafting premium boots for mountaineering, climbing, hiking and ski touring with a focus on performance and quality.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'ferrino',
    name: 'Ferrino',
    country: 'Italy',
    website: 'https://www.ferrino.it',
    logo: '/images/brands/ferrino.png',
    description: 'Historic Italian manufacturer designing tents, backpacks and outdoor equipment since 1870, combining tradition with innovation.',
    categories: ['shelter', 'backpacks'],
    subcategories: ['tents', 'daypack', 'multiday'],
    featured: false
  },
  {
    id: 'petzl',
    name: 'Petzl',
    country: 'France',
    website: 'https://www.petzl.com',
    logo: '/images/brands/petzl.png',
    description: 'French company pioneering climbing equipment and headlamps with a focus on safety, innovation and quality for vertical sports and rescue operations.',
    categories: ['lighting', 'trekking'],
    subcategories: ['headlamps', 'navigation'],
    featured: true
  },
  {
    id: 'millet',
    name: 'Millet',
    country: 'France',
    website: 'https://www.millet.fr',
    logo: '/images/brands/millet.png',
    description: 'French brand developing technical mountaineering clothing and equipment since 1921, with expertise in alpine packs and performance apparel.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'multiday'],
    featured: false
  },
  {
    id: 'simond',
    name: 'Simond',
    country: 'France',
    website: 'https://www.simond.com',
    logo: '/images/brands/simond.png',
    description: 'French climbing equipment manufacturer (now part of Decathlon) producing affordable, quality gear for mountaineering and ice climbing.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: false
  },
  {
    id: 'quechua',
    name: 'Quechua',
    country: 'France',
    website: 'https://www.quechua.com',
    logo: '/images/brands/quechua.png',
    description: 'Decathlon\'s hiking and camping brand offering affordable outdoor equipment and clothing for all levels of outdoor enthusiasts.',
    categories: ['shelter', 'backpacks', 'clothes'],
    subcategories: ['tents', 'daypack', 'outerwear'],
    featured: false
  },
  {
    id: 'mammut',
    name: 'Mammut',
    country: 'Switzerland',
    website: 'https://www.mammut.com',
    logo: '/images/brands/mammut.png',
    description: 'Swiss premium mountaineering and outdoor brand with over 160 years of history, creating high-quality equipment, clothing and safety gear for alpine activities.',
    categories: ['clothes', 'backpacks', 'trekking'],
    subcategories: ['outerwear', 'multiday', 'navigation'],
    featured: true
  },
  {
    id: 'wenger',
    name: 'Wenger',
    country: 'Switzerland',
    website: 'https://www.wenger.ch',
    logo: '/images/brands/wenger.png',
    description: 'Swiss company known for high-quality pocket knives, multi-tools and outdoor equipment with precision craftsmanship and functionality.',
    categories: ['knives'],
    subcategories: ['multitools'],
    featured: false
  },
  {
    id: 'dynafit',
    name: 'Dynafit',
    country: 'Austria',
    website: 'https://www.dynafit.com',
    logo: '/images/brands/dynafit.png',
    description: 'Austrian brand specializing in lightweight ski touring and mountain endurance sports equipment with innovative design and technology.',
    categories: ['clothes', 'trekking'],
    subcategories: ['outerwear', 'footwear', 'navigation'],
    featured: false
  },
  {
    id: 'klattermusen',
    name: 'Klättermusen',
    country: 'Sweden',
    website: 'https://www.klattermusen.com',
    logo: '/images/brands/klattermusen.png',
    description: 'Swedish brand creating sustainable, high-performance outdoor clothing and equipment with thoughtful design and environmental responsibility.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'multiday'],
    featured: false
  },
  {
    id: 'lundhags',
    name: 'Lundhags',
    country: 'Sweden',
    website: 'https://www.lundhags.com',
    logo: '/images/brands/lundhags.png',
    description: 'Traditional Swedish brand producing durable Nordic outdoor boots, clothing and equipment with timeless functionality for Nordic conditions.',
    categories: ['clothes'],
    subcategories: ['footwear', 'outerwear'],
    featured: false
  },
  {
    id: 'savotta',
    name: 'Savotta',
    country: 'Finland',
    website: 'https://finn-savotta.fi',
    logo: '/images/brands/savotta.png',
    description: 'Finnish manufacturer of military-grade backpacks, tents and shelters known for exceptional durability and functionality in extreme conditions.',
    categories: ['backpacks', 'shelter'],
    subcategories: ['multiday', 'tents'],
    featured: false
  },
  {
    id: 'suunto',
    name: 'Suunto',
    country: 'Finland',
    website: 'https://www.suunto.com',
    logo: '/images/brands/suunto.png',
    description: 'Finnish manufacturer of premium sports watches, dive computers and navigation instruments for outdoor adventures and training.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: true
  },
  {
    id: 'ternua',
    name: 'Ternua',
    country: 'Spain',
    website: 'https://www.ternua.com',
    logo: '/images/brands/ternua.png',
    description: 'Spanish sustainable outdoor clothing brand emphasizing environmental responsibility and performance in technical apparel for mountain sports.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
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
    id: 'katadyn',
    name: 'Katadyn',
    country: 'Switzerland',
    website: 'https://www.katadyn.com',
    logo: '/images/brands/katadyn.png',
    description: 'Swiss manufacturer specializing in portable water filtration systems and purification products for outdoor activities, emergency preparedness, and global travel.',
    categories: ['trekking'],
    subcategories: ['hydration'],
    featured: true
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

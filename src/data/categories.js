/**
 * Categories and subcategories structure for outdoor gear
 */
const categories = [
  {
    id: 'shelter',
    name: 'Shelter',
    subcategories: [
      { id: 'tents', name: 'Tents' },
      { id: 'hammocks', name: 'Hammocks' },
      { id: 'tarps', name: 'Tarps' }
    ],
    icon: 'FaHome'
  },
  {
    id: 'backpacks',
    name: 'Backpacks',
    subcategories: [
      { id: 'daypack', name: 'Day Pack' },
      { id: 'multiday', name: 'Multi-Day Pack' }
    ],
    icon: 'FaBackpack'
  },
  {
    id: 'sleep',
    name: 'Sleep',
    subcategories: [
      { id: 'mats', name: 'Sleeping Mats' },
      { id: 'quilts', name: 'Quilts' },
      { id: 'bags', name: 'Sleeping Bags' }
    ],
    icon: 'FaBed'
  },
  {
    id: 'stoves',
    name: 'Stoves',
    subcategories: [
      { id: 'liquid', name: 'Liquid Fuel' },
      { id: 'solid', name: 'Solid Fuel' },
      { id: 'gas', name: 'Gas' }
    ],
    icon: 'FaFire'
  },
  {
    id: 'clothes',
    name: 'Clothes',
    subcategories: [
      { id: 'tops', name: 'Tops' },
      { id: 'bottoms', name: 'Bottoms' },
      { id: 'outerwear', name: 'Outerwear' },
      { id: 'footwear', name: 'Footwear' }
    ],
    icon: 'FaTshirt'
  },
  {
    id: 'knives',
    name: 'Knives & Tools',
    subcategories: [
      { id: 'knives', name: 'Knives' },
      { id: 'axes', name: 'Axes' },
      { id: 'multitools', name: 'Multi-tools' }
    ],
    icon: 'FaCut'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    subcategories: [
      { id: 'headlamps', name: 'Headlamps' },
      { id: 'lanterns', name: 'Lanterns' },
      { id: 'flashlights', name: 'Flashlights' }
    ],
    icon: 'FaLightbulb'
  },
  {
    id: 'trekking',
    name: 'Trekking Equipment',
    subcategories: [
      { id: 'poles', name: 'Trekking Poles' },
      { id: 'navigation', name: 'Navigation' },
      { id: 'hydration', name: 'Hydration' }
    ],
    icon: 'FaHiking'
  },
  {
    id: 'ultralight',
    name: 'Ultralight',
    subcategories: [
      { id: 'ul-shelter', name: 'Ultralight Shelters' },
      { id: 'ul-packs', name: 'Ultralight Packs' },
      { id: 'down-products', name: 'Down Products' },
      { id: 'ul-sleep', name: 'Ultralight Sleep Systems' },
      { id: 'ul-accessories', name: 'Ultralight Accessories' }
    ],
    icon: 'FaFeather'
  }
];

export default categories;

/**
 * Get all available subcategories across all categories
 */
export const getAllSubcategories = () => {
  const allSubcategories = [];
  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      allSubcategories.push({
        ...subcategory,
        categoryId: category.id,
        categoryName: category.name
      });
    });
  });
  return allSubcategories;
};

/**
 * Get a specific category by ID
 */
export const getCategoryById = (categoryId) => {
  return categories.find(cat => cat.id === categoryId);
};

/**
 * Get a specific subcategory by category ID and subcategory ID
 */
export const getSubcategoryByCategoryAndId = (categoryId, subcategoryId) => {
  const category = getCategoryById(categoryId);
  if (category) {
    return category.subcategories.find(subcat => subcat.id === subcategoryId);
  }
  return null;
};

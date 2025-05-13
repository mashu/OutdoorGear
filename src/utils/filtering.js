/**
 * Utility functions for filtering and searching brands
 */

/**
 * Filter brands by multiple criteria
 * @param {Array} brands - Array of brand objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} - Filtered brands
 */
export function filterBrandsByMultipleCriteria(brands, filters = {}) {
  const { 
    categoryId, 
    subcategoryId, 
    country, 
    searchQuery,
    featured
  } = filters;
  
  return brands.filter(brand => {
    // Filter by category if specified
    if (categoryId && !brand.categories.includes(categoryId)) {
      return false;
    }
    
    // Filter by subcategory if specified
    if (subcategoryId && !brand.subcategories.includes(subcategoryId)) {
      return false;
    }
    
    // Filter by country if specified
    if (country && brand.country !== country) {
      return false;
    }
    
    // Filter by featured status if specified
    if (featured !== undefined && brand.featured !== featured) {
      return false;
    }
    
    // Filter by search query if specified
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        brand.name.toLowerCase().includes(query) ||
        brand.description.toLowerCase().includes(query) ||
        brand.country.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
}

/**
 * Group brands by category
 * @param {Array} brands - Array of brand objects
 * @returns {Object} - Object with category IDs as keys and arrays of brands as values
 */
export function groupBrandsByCategory(brands) {
  return brands.reduce((acc, brand) => {
    brand.categories.forEach(categoryId => {
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      if (!acc[categoryId].includes(brand)) {
        acc[categoryId].push(brand);
      }
    });
    return acc;
  }, {});
}

/**
 * Group brands by country
 * @param {Array} brands - Array of brand objects
 * @returns {Object} - Object with countries as keys and arrays of brands as values
 */
export function groupBrandsByCountry(brands) {
  return brands.reduce((acc, brand) => {
    const country = brand.country;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(brand);
    return acc;
  }, {});
}

/**
 * Get unique list of countries from brands with counts
 * @param {Array} brands - Array of brand objects
 * @returns {Array} - Array of country objects with name and count
 */
export function getCountriesWithCounts(brands) {
  const countryCounts = brands.reduce((acc, brand) => {
    const country = brand.country;
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(countryCounts).map(([name, count]) => ({
    name,
    count
  }));
}

/**
 * Get unique list of countries from brands
 * @param {Array} brands - Array of brand objects
 * @returns {Array} - Array of unique country names
 */
export function getUniqueCountries(brands) {
  return [...new Set(brands.map(brand => brand.country))].sort();
}

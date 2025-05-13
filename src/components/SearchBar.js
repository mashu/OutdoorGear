import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import brands from '../data/brands';
import categories from '../data/categories';

export default function SearchBar({ onSearch, initialValue = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  
  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      onSearch('');
    }
  };

  // Get unique countries for datalist options
  const uniqueCountries = [...new Set(brands.map(brand => brand.country))].sort();

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search brands, categories, or countries..."
          className="w-full px-4 py-2 pl-10 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          list="search-suggestions"
          autoComplete="off"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors"
        >
          Search
        </button>
        
        <datalist id="search-suggestions">
          {/* Brand options */}
          {brands.map(brand => (
            <option key={`brand-${brand.id}`} value={brand.name} />
          ))}
          
          {/* Country options */}
          {uniqueCountries.map(country => (
            <option key={`country-${country}`} value={country} />
          ))}
          
          {/* Category options */}
          {categories.map(category => (
            <option key={`category-${category.id}`} value={category.name} />
          ))}
          
          {/* Subcategory options */}
          {categories.flatMap(category => 
            category.subcategories.map(subcategory => (
              <option 
                key={`subcategory-${category.id}-${subcategory.id}`} 
                value={subcategory.name} 
              />
            ))
          )}
        </datalist>
      </div>
    </form>
  );
}

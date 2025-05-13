import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaFilter, FaSearch } from 'react-icons/fa';

import Layout from '../components/Layout';
import BrandCard from '../components/BrandCard';
import CategoryFilter from '../components/CategoryFilter';
import CountryFilter from '../components/CountryFilter';
import SearchBar from '../components/SearchBar';

import categories from '../data/categories';
import brands, { getFeaturedBrands, filterBrands, searchBrands } from '../data/brands';
import { getCountriesWithCounts } from '../utils/filtering';

export default function Home() {
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const countries = getCountriesWithCounts(brands);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    
    let results = brands;
    
    // Apply category filter
    if (categoryId) {
      results = filterBrands(categoryId);
    }
    
    // Apply country filter if set
    if (selectedCountry) {
      results = results.filter(brand => brand.country === selectedCountry);
    }
    
    // Apply search filter if set
    if (searchQuery) {
      results = results.filter(brand => 
        searchBrands(searchQuery).includes(brand)
      );
    }
    
    setFilteredBrands(results);
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    
    let results = brands;
    
    // Apply category and subcategory filters
    if (selectedCategory) {
      results = filterBrands(selectedCategory, subcategoryId);
    }
    
    // Apply country filter if set
    if (selectedCountry) {
      results = results.filter(brand => brand.country === selectedCountry);
    }
    
    // Apply search filter if set
    if (searchQuery) {
      results = results.filter(brand => 
        searchBrands(searchQuery).includes(brand)
      );
    }
    
    setFilteredBrands(results);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    
    let results = brands;
    
    // Apply category and subcategory filters
    if (selectedCategory) {
      results = filterBrands(selectedCategory, selectedSubcategory);
    }
    
    // Apply country filter
    if (country) {
      results = results.filter(brand => brand.country === country);
    }
    
    // Apply search filter if set
    if (searchQuery) {
      results = results.filter(brand => 
        searchBrands(searchQuery).includes(brand)
      );
    }
    
    setFilteredBrands(results);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    let results = brands;
    
    // Start with all brands if no query, otherwise filter by search
    if (query) {
      results = searchBrands(query);
    }
    
    // Apply category and subcategory filters if set
    if (selectedCategory) {
      results = results.filter(brand => brand.categories.includes(selectedCategory));
      
      if (selectedSubcategory) {
        results = results.filter(brand => brand.subcategories.includes(selectedSubcategory));
      }
    }
    
    // Apply country filter if set
    if (selectedCountry) {
      results = results.filter(brand => brand.country === selectedCountry);
    }
    
    setFilteredBrands(results);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedCountry(null);
    setSearchQuery('');
    setFilteredBrands(brands);
  };

  return (
    <Layout>
      <Head>
        <title>European Outdoor Gear Brands</title>
        <meta name="description" content="Discover European outdoor gear brands for camping, hiking and outdoor activities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={toggleFilters}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-700"
            >
              <FaFilter className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {(selectedCategory || selectedCountry || searchQuery) && (
              <button 
                onClick={resetFilters}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="mb-8 p-4 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onCategoryChange={handleCategoryChange}
                onSubcategoryChange={handleSubcategoryChange}
              />
              
              <CountryFilter
                countries={countries}
                selectedCountry={selectedCountry}
                onCountryChange={handleCountryChange}
              />
            </div>
          </div>
        )}

        <div className="mb-4 flex flex-wrap">
          {selectedCategory && (
            <span className="mr-2 mb-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Category: {categories.find(c => c.id === selectedCategory)?.name}
            </span>
          )}
          
          {selectedSubcategory && selectedCategory && (
            <span className="mr-2 mb-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Subcategory: {categories.find(c => c.id === selectedCategory)?.subcategories.find(s => s.id === selectedSubcategory)?.name}
            </span>
          )}
          
          {selectedCountry && (
            <span className="mr-2 mb-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Country: {selectedCountry}
            </span>
          )}
        </div>

        <div className="mb-4">
          <p className="text-gray-600">Showing {filteredBrands.length} brands</p>
        </div>

        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">No brands found</h3>
            <p>Try adjusting your filters or search criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

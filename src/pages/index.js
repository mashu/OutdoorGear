import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaFilter, FaSearch, FaCompass, FaGlobe, FaStar, FaArrowRight } from 'react-icons/fa';

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
  const featuredBrands = getFeaturedBrands();

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

  const hasActiveFilters = selectedCategory || selectedCountry || searchQuery;

  return (
    <Layout>
      <Head>
        <title>European Outdoor Gear Brands</title>
        <meta name="description" content="Discover European outdoor gear brands for camping, hiking and outdoor activities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <FaCompass className="mr-2 text-yellow-300" />
              <span className="font-medium">Discover European Outdoor Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">European</span>
              <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                Outdoor Gear
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Connect with premium outdoor equipment manufacturers from across Europe. 
              Quality gear for your next adventure awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/brands" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg">
                <FaGlobe className="mr-2" />
                Explore All Brands
                <FaArrowRight className="ml-2" />
              </Link>
              
              <div className="flex items-center text-white text-lg">
                <FaStar className="text-yellow-300 mr-2" />
                <span>{featuredBrands.length} Featured Brands</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-elegant p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
            <div className="w-full lg:w-1/2">
              <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleFilters}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md ${
                  showFilters 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                <FaFilter className="mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {hasActiveFilters && (
                <button 
                  onClick={resetFilters}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Filters Panel */}
          <div className={`transition-all duration-500 overflow-hidden ${
            showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-wrap gap-3">
              {selectedCategory && (
                <span className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                  Category: {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
              
              {selectedSubcategory && selectedCategory && (
                <span className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                  Subcategory: {categories.find(c => c.id === selectedCategory)?.subcategories.find(s => s.id === selectedSubcategory)?.name}
                </span>
              )}
              
              {selectedCountry && (
                <span className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                  Country: {selectedCountry}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-lg">
              <span className="font-semibold text-gray-800">{filteredBrands.length}</span> brands found
            </p>
          </div>
          
          {!hasActiveFilters && featuredBrands.length > 0 && (
            <div className="hidden md:flex items-center text-sm text-gray-500">
              <FaStar className="text-yellow-500 mr-1" />
              {featuredBrands.length} featured brands highlighted
            </div>
          )}
        </div>

        {/* Brands Grid */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-2xl shadow-elegant border border-gray-100">
            <div className="mb-4">
              <FaSearch className="text-6xl text-gray-300 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">No brands found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your filters or search criteria to discover more outdoor gear brands.
            </p>
            <button 
              onClick={resetFilters}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

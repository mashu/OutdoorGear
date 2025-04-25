import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaFilter, FaSearch } from 'react-icons/fa';

import Layout from '../components/Layout';
import BrandCard from '../components/BrandCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';

import categories from '../data/categories';
import brands, { getFeaturedBrands, filterBrands, searchBrands } from '../data/brands';

export default function Home() {
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    
    if (categoryId) {
      let results = filterBrands(categoryId);
      if (searchQuery) {
        results = searchBrands(searchQuery).filter(brand => 
          brand.categories.includes(categoryId)
        );
      }
      setFilteredBrands(results);
    } else {
      handleSearch(searchQuery);
    }
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    
    if (selectedCategory && subcategoryId) {
      let results = filterBrands(selectedCategory, subcategoryId);
      if (searchQuery) {
        results = results.filter(brand => 
          searchBrands(searchQuery).includes(brand)
        );
      }
      setFilteredBrands(results);
    } else {
      handleCategoryChange(selectedCategory);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query) {
      if (selectedCategory) {
        setFilteredBrands(filterBrands(selectedCategory, selectedSubcategory));
      } else {
        setFilteredBrands(brands);
      }
      return;
    }
    
    let results = searchBrands(query);
    
    if (selectedCategory) {
      results = results.filter(brand => brand.categories.includes(selectedCategory));
      
      if (selectedSubcategory) {
        results = results.filter(brand => brand.subcategories.includes(selectedSubcategory));
      }
    }
    
    setFilteredBrands(results);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchQuery('');
    setFilteredBrands(brands);
  };

  return (
    <Layout>
      <Head>
        <title>European & Polish Outdoor Gear Brands</title>
        <meta name="description" content="Discover European and Polish outdoor gear brands for camping, hiking and outdoor activities" />
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
            
            {(selectedCategory || searchQuery) && (
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
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategoryChange={handleCategoryChange}
              onSubcategoryChange={handleSubcategoryChange}
            />
          </div>
        )}

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

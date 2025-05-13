import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaFilter } from 'react-icons/fa';

import Layout from '../../components/Layout';
import BrandCard from '../../components/BrandCard';
import SearchBar from '../../components/SearchBar';
import CountryFilter from '../../components/CountryFilter';

import brands, { searchBrands } from '../../data/brands';
import { getCountriesWithCounts } from '../../utils/filtering';

export default function BrandsIndex() {
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const countries = getCountriesWithCounts(brands);

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, selectedCountry);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    applyFilters(searchQuery, country);
  };

  const applyFilters = (query, country) => {
    let results = brands;
    
    // Apply search filter if set
    if (query) {
      results = searchBrands(query);
    }
    
    // Apply country filter if set
    if (country) {
      results = results.filter(brand => brand.country === country);
    }
    
    setFilteredBrands(results);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCountry(null);
    setFilteredBrands(brands);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Layout>
      <Head>
        <title>All Brands | European Outdoor Gear Brands</title>
        <meta name="description" content="Browse all European outdoor gear brands for camping, hiking and outdoor activities" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Brands</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
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
            
            {(selectedCountry || searchQuery) && (
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
            <CountryFilter
              countries={countries}
              selectedCountry={selectedCountry}
              onCountryChange={handleCountryChange}
            />
          </div>
        )}

        <div className="mb-4 flex flex-wrap">
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
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaFilter } from 'react-icons/fa';

import Layout from '../../components/Layout';
import BrandCard from '../../components/BrandCard';
import SearchBar from '../../components/SearchBar';

import brands, { searchBrands } from '../../data/brands';

export default function BrandsIndex() {
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredBrands(brands);
      return;
    }
    setFilteredBrands(searchBrands(query));
  };

  const resetSearch = () => {
    setSearchQuery('');
    setFilteredBrands(brands);
  };

  const countryList = [...new Set(brands.map(brand => brand.country))].sort();

  const filterByCountry = (country) => {
    if (!country) {
      setFilteredBrands(searchQuery ? searchBrands(searchQuery) : brands);
      return;
    }
    
    const filtered = (searchQuery ? searchBrands(searchQuery) : brands)
      .filter(brand => brand.country === country);
    
    setFilteredBrands(filtered);
  };

  return (
    <Layout>
      <Head>
        <title>All Brands | European & Polish Outdoor Gear Brands</title>
        <meta name="description" content="Browse all European and Polish outdoor gear brands for camping, hiking and outdoor activities" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Brands</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <label htmlFor="country-filter" className="mr-2 text-gray-700">
                Filter by country:
              </label>
              <select
                id="country-filter"
                onChange={(e) => filterByCountry(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Countries</option>
                {countryList.map(country => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            
            {searchQuery && (
              <button 
                onClick={resetSearch}
                className="ml-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              >
                Reset Search
              </button>
            )}
          </div>
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

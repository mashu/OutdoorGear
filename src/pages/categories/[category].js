import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from '../../components/Layout';
import BrandCard from '../../components/BrandCard';
import SubcategoryFilter from '../../components/SubcategoryFilter';
import SearchBar from '../../components/SearchBar';

import categories, { getCategoryById } from '../../data/categories';
import { filterBrands, searchBrands } from '../../data/brands';

export default function CategoryDetail({ category }) {
  const router = useRouter();
  const [filteredBrands, setFilteredBrands] = useState(
    category ? filterBrands(category.id) : []
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  if (router.isFallback) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-6">Sorry, the category you are looking for does not exist.</p>
            <Link href="/" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <FaArrowLeft className="mr-2" /> Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    
    if (subcategoryId) {
      let results = filterBrands(category.id, subcategoryId);
      if (searchQuery) {
        results = results.filter(brand => 
          searchBrands(searchQuery).includes(brand)
        );
      }
      setFilteredBrands(results);
    } else {
      handleSearch(searchQuery);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query) {
      setFilteredBrands(filterBrands(category.id, selectedSubcategory));
      return;
    }
    
    const results = searchBrands(query).filter(brand => 
      brand.categories.includes(category.id) && 
      (!selectedSubcategory || brand.subcategories.includes(selectedSubcategory))
    );
    
    setFilteredBrands(results);
  };

  const resetFilters = () => {
    setSelectedSubcategory(null);
    setSearchQuery('');
    setFilteredBrands(filterBrands(category.id));
  };

  return (
    <Layout>
      <Head>
        <title>{category.name} | European & Polish Outdoor Gear Brands</title>
        <meta name="description" content={`Browse European and Polish outdoor brands selling ${category.name.toLowerCase()} products`} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
          <FaArrowLeft className="mr-2" /> Back to all categories
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">{category.name} Brands</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
          </div>
          
          <div className="flex items-center">
            {(selectedSubcategory || searchQuery) && (
              <button 
                onClick={resetFilters}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
        
        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
          <SubcategoryFilter 
            subcategories={category.subcategories}
            selectedSubcategory={selectedSubcategory}
            onSubcategoryChange={handleSubcategoryChange}
          />
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

export async function getStaticPaths() {
  const paths = categories.map(category => ({
    params: { category: category.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const category = getCategoryById(params.category);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
}

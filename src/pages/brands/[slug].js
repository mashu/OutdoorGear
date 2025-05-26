import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaGlobe, FaMapMarkerAlt, FaStar, FaTag } from 'react-icons/fa';

import Layout from '../../components/Layout';
import brands, { getBrandById } from '../../data/brands';
import categories, { getCategoryById } from '../../data/categories';

export default function BrandDetail({ brand }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!brand) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Brand Not Found</h1>
            <p className="mb-6 text-gray-600">Sorry, the brand you are looking for does not exist.</p>
            <Link href="/" className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <FaArrowLeft className="mr-2" /> Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{brand.name} | European Outdoor Gear Brands</title>
        <meta name="description" content={brand.description} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200 font-medium">
          <FaArrowLeft className="mr-2" /> Back to brands
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="relative p-8 md:p-12">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mr-4">{brand.name}</h1>
                    {brand.featured && (
                      <div className="flex items-center bg-yellow-400 text-yellow-900 text-sm px-3 py-1 rounded-full font-semibold">
                        <FaStar className="mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-white/90 text-lg">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="font-medium">{brand.country}</span>
                  </div>
                </div>
                
                <a 
                  href={brand.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  <FaGlobe className="mr-2" /> Visit Website
                </a>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            
            {/* About Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mr-3"></div>
                About {brand.name}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{brand.description}</p>
            </div>
            
            {/* Product Categories */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Product Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brand.categories.map(categoryId => {
                  const category = getCategoryById(categoryId);
                  if (!category) return null;
                  
                  return (
                    <div key={category.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <FaTag className="text-blue-600 mr-2" />
                        <h3 className="font-bold text-gray-800 text-lg">{category.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.subcategories
                          .filter(subcat => brand.subcategories.includes(subcat.id))
                          .map(subcategory => (
                            <li key={subcategory.id} className="text-gray-700 flex items-center">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                              {subcategory.name}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Interested in {brand.name}?</h3>
              <p className="text-gray-600 mb-6">Visit their official website to explore their full product range and make a purchase.</p>
              <a 
                href={brand.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
              >
                <FaGlobe className="mr-2" /> Visit {brand.name} Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = brands.map(brand => ({
    params: { slug: brand.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const brand = getBrandById(params.slug);

  if (!brand) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brand,
    }
  };
}

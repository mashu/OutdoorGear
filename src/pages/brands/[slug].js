import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

import Layout from '../../components/Layout';
import brands, { getBrandById } from '../../data/brands';
import categories, { getCategoryById } from '../../data/categories';

export default function BrandDetail({ brand }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!brand) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Brand Not Found</h1>
            <p className="mb-6">Sorry, the brand you are looking for does not exist.</p>
            <Link href="/" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
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
        <title>{brand.name} | European & Polish Outdoor Gear Brands</title>
        <meta name="description" content={brand.description} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <FaArrowLeft className="mr-2" /> Back to brands
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                {brand.logo ? (
                  <div className="w-24 h-24 mr-6 bg-white rounded-lg shadow flex items-center justify-center p-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : null}
                
                <div>
                  <h1 className="text-3xl font-bold">{brand.name}</h1>
                  <div className="flex items-center text-gray-600 mt-1">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{brand.country}</span>
                  </div>
                </div>
              </div>
              
              <a 
                href={brand.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <FaGlobe className="mr-2" /> Visit Website
              </a>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">About</h2>
              <p className="text-gray-700">{brand.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Product Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {brand.categories.map(categoryId => {
                  const category = getCategoryById(categoryId);
                  if (!category) return null;
                  
                  return (
                    <div key={category.id} className="bg-gray-100 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <ul className="space-y-1">
                        {category.subcategories
                          .filter(subcat => brand.subcategories.includes(subcat.id))
                          .map(subcategory => (
                            <li key={subcategory.id} className="text-sm text-gray-700">
                              • {subcategory.name}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Add more sections here if needed */}
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
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
}

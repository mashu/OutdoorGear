import Link from 'next/link';
import { FaGlobe, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

export default function BrandCard({ brand }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <Link href={`/brands/${brand.id}`} className="block">
        <div className="relative">
          {/* Hero Section with Gradient Background */}
          <div className="h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                  {brand.name}
                </h3>
                <div className="flex items-center justify-center text-white/90 text-sm">
                  <FaMapMarkerAlt className="mr-1" />
                  <span className="font-medium">{brand.country}</span>
                </div>
              </div>
            </div>
            
            {/* Featured Badge */}
            {brand.featured && (
              <div className="absolute top-3 right-3 flex items-center bg-yellow-400 text-yellow-900 text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                <FaStar className="mr-1" />
                Featured
              </div>
            )}
            
            {/* Decorative Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
              {brand.description}
            </p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {brand.categories.slice(0, 3).map(categoryId => (
                <span 
                  key={categoryId}
                  className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium border border-green-200"
                >
                  {categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace(/([A-Z])/g, ' $1')}
                </span>
              ))}
              {brand.categories.length > 3 && (
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                  +{brand.categories.length - 3} more
                </span>
              )}
            </div>
            
            {/* Action Section */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                <FaGlobe className="mr-2" />
                <span className="text-sm font-medium">Visit Website</span>
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200 font-medium">
                View details →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { FaGlobe, FaTag } from 'react-icons/fa';

export default function BrandCard({ brand }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/brands/${brand.id}`} className="block">
          <div className="h-48 relative bg-gray-100">
            {brand.logo ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-300">{brand.name}</span>
              </div>
            )}
            
            {brand.featured && (
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                Featured
              </div>
            )}
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{brand.name}</h3>
              <span className="text-sm bg-gray-100 rounded px-2 py-1">{brand.country}</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {brand.description}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {brand.categories.slice(0, 3).map(categoryId => (
                <span 
                  key={categoryId}
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                >
                  {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
                </span>
              ))}
              {brand.categories.length > 3 && (
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  +{brand.categories.length - 3} more
                </span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-blue-600">
                <FaGlobe className="mr-1" />
                <span className="text-sm">Visit Website</span>
              </div>
              <span className="text-sm text-gray-500">View details →</span>
            </div>
          </div>
      </Link>
    </div>
  );
}

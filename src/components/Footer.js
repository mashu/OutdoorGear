import Link from 'next/link';
import { FaGithub, FaDiscord, FaHeart, FaCompass } from 'react-icons/fa';
import categories from '../data/categories';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                  <FaCompass className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  OutdoorGearEU
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Discover European outdoor gear brands for your next adventure. 
                Connecting outdoor enthusiasts with quality equipment from across Europe.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/mashu/OutdoorGear" 
                  className="group p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={20} className="text-white group-hover:text-blue-200 transition-colors" />
                </a>
                <a 
                  href="https://discord.gg/XCPDm85tx7" 
                  className="group p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                  aria-label="Discord Community"
                >
                  <FaDiscord size={20} className="text-white group-hover:text-purple-200 transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Categories Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-3"></div>
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.slice(0, 6).map(category => (
                  <li key={category.id}>
                    <Link 
                      href={`/categories/${category.id}`} 
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{category.name}</span>
                    </Link>
                  </li>
                ))}
                {categories.length > 6 && (
                  <li>
                    <Link 
                      href="/" 
                      className="group flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">View all categories</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            
            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/brands" 
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">All Brands</span>
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/mashu/OutdoorGear" 
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">GitHub Repository</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://discord.gg/XCPDm85tx7" 
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Join Discord Community</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white border-opacity-20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-300 flex items-center justify-center md:justify-start">
                  &copy; {currentYear} OutdoorGearEU. Made with 
                  <FaHeart className="text-red-400 mx-2 animate-pulse" /> 
                  for outdoor enthusiasts.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Built with Next.js and hosted on GitHub Pages.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{categories.length}</div>
                  <div className="text-xs text-gray-400">Categories</div>
                </div>
                <div className="w-px h-8 bg-white bg-opacity-20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-gray-400">Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white opacity-5" fill="currentColor" viewBox="0 0 1000 120" preserveAspectRatio="none">
          <path d="M0,120 Q250,60 500,120 T1000,120 L1000,0 L0,0 Z"></path>
        </svg>
      </div>
    </footer>
  );
}

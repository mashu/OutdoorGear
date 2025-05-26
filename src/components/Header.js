import { useState } from 'react';
import Link from 'next/link';
import { FaCompass, FaList, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import categories from '../data/categories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategoryMenu = (e) => {
    e.preventDefault();
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsCategoryMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white shadow-professional sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold group" onClick={closeMobileMenu}>
            <div className="p-2 bg-white bg-opacity-20 rounded-lg mr-3 group-hover:bg-opacity-30 transition-all duration-300">
              <FaCompass className="text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="font-display gradient-text bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              OutdoorGearEU
            </span>
          </Link>          
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative group py-2">
              <span className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <div className="relative group">
              <button 
                onClick={toggleCategoryMenu}
                className="flex items-center text-white hover:text-blue-200 transition-colors duration-200 font-medium py-2"
              >
                Categories 
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Desktop Dropdown */}
              <div className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-professional py-2 z-20 transform transition-all duration-300 ${
                isCategoryMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}>
                <div className="max-h-80 overflow-y-auto">
                  {categories.map(category => (
                    <Link 
                      key={category.id} 
                      href={`/categories/${category.id}`}
                      className="block px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 font-medium"
                      onClick={() => setIsCategoryMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {category.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="/brands" className="relative group py-2">
              <span className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">All Brands</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white border-opacity-20 pt-4">
            <Link href="/" className="block py-3 hover:text-blue-200 transition-colors font-medium" onClick={closeMobileMenu}>
              Home
            </Link>
            
            <div className="py-3">
              <div 
                className="font-medium mb-2 flex items-center cursor-pointer hover:text-blue-200 transition-colors"
                onClick={toggleCategoryMenu}
              >
                Categories 
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                isCategoryMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 space-y-2 mt-2">
                  {categories.map(category => (
                    <Link 
                      key={category.id} 
                      href={`/categories/${category.id}`}
                      className="block py-2 hover:text-blue-200 transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-white bg-opacity-60 rounded-full mr-2"></div>
                        {category.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="/brands" className="block py-3 hover:text-blue-200 transition-colors font-medium" onClick={closeMobileMenu}>
              All Brands
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"></div>
    </header>
  );
}

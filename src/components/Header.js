import { useState } from 'react';
import Link from 'next/link';
import { FaCompass, FaList, FaBars, FaTimes } from 'react-icons/fa';
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

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
	<Link href="/" className="flex items-center text-2xl font-bold">
	  <FaCompass className="mr-2" />
	  <span>OutdoorGearEU</span>
	</Link>          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-200 transition-colors">Home
            </Link>
            <div className="relative">
              <button 
                onClick={toggleCategoryMenu}
                className="flex items-center hover:text-green-200 transition-colors"
              >
                Categories <FaList className="ml-1" />
              </button>
              {isCategoryMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {categories.map(category => (
                    <Link 
                      key={category.id} 
                      href={`/categories/${category.id}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-green-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/brands" className="hover:text-green-200 transition-colors">All Brands
            </Link>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-green-200 transition-colors">
                Home
            </Link>
            <div className="py-2">
              <div 
                className="font-medium mb-1 flex items-center cursor-pointer"
                onClick={toggleCategoryMenu}
              >
                Categories <FaList className="ml-1" />
              </div>
              {isCategoryMenuOpen && (
                <div className="pl-4 space-y-1">
                  {categories.map(category => (
                    <Link 
                      key={category.id} 
                      href={`/categories/${category.id}`}
                      className="block py-1 hover:text-green-200 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/brands" className="block py-2 hover:text-green-200 transition-colors">
                All Brands
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

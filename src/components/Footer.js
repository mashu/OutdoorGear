import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import categories from '../data/categories';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OutdoorGearEU</h3>
            <p className="text-gray-300 mb-4">
              Discover European outdoor gear brands for your next adventure.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/mashu/OutdoorGear" 
                className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://discord.gg/XCPDm85tx7" className="text-gray-300 hover:text-white transition-colors">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
		<Link href={`/categories/${category.id}`} className="text-gray-300 hover:text-white transition-colors">
		  {category.name}
		</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-300 hover:text-white transition-colors">
                    All Brands
                </Link>
              </li>
              <li>
                <a href="https://github.com/yourusername/outdoor-brands-website" 
                  className="text-gray-300 hover:text-white transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://discord.gg/XCPDm85tx7" 
                  className="text-gray-300 hover:text-white transition-colors">
                  Friendly Outdoor Community Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} OutdoorGearEU. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}

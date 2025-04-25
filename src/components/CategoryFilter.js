import React from 'react';
import { FaTags } from 'react-icons/fa';
import { getCategoryById } from '../data/categories';

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  selectedSubcategory,
  onCategoryChange, 
  onSubcategoryChange 
}) {
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      onCategoryChange(null);
    } else {
      onCategoryChange(categoryId);
    }
  };

  const handleSubcategoryClick = (subcategoryId) => {
    if (selectedSubcategory === subcategoryId) {
      onSubcategoryChange(null);
    } else {
      onSubcategoryChange(subcategoryId);
    }
  };

  const currentCategory = selectedCategory 
    ? getCategoryById(selectedCategory) 
    : null;

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaTags className="mr-2" /> Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {currentCategory && (
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {currentCategory.name} Subcategories
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentCategory.subcategories.map(subcategory => (
              <button
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedSubcategory === subcategory.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

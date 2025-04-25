import React from 'react';
import { FaTags } from 'react-icons/fa';

export default function SubcategoryFilter({ 
  subcategories,
  selectedSubcategory,
  onSubcategoryChange 
}) {
  const handleSubcategoryClick = (subcategoryId) => {
    if (selectedSubcategory === subcategoryId) {
      onSubcategoryChange(null);
    } else {
      onSubcategoryChange(subcategoryId);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <FaTags className="mr-2" /> Subcategories
      </h3>
      <div className="flex flex-wrap gap-2">
        {subcategories.map(subcategory => (
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
  );
}

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onSearch, initialValue = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  
  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      onSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search brands, categories, or countries..."
          className="w-full px-4 py-2 pl-10 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          autoComplete="off"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}

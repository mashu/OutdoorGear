import React from 'react';
import { FaGlobe } from 'react-icons/fa';

export default function CountryFilter({ 
  countries,
  selectedCountry,
  onCountryChange 
}) {
  // Sort countries alphabetically
  const sortedCountries = [...countries].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  
  const handleCountryClick = (countryName) => {
    if (selectedCountry === countryName) {
      onCountryChange(null);
    } else {
      onCountryChange(countryName);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <FaGlobe className="mr-2" /> Countries
      </h3>
      <div className="flex flex-wrap gap-2">
        {sortedCountries.map(country => (
          <button
            key={country.name}
            onClick={() => handleCountryClick(country.name)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCountry === country.name
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {country.name} <span className="font-semibold">({country.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
}

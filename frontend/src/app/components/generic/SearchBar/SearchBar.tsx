// src/app/components/SearchInput.tsx
import React from 'react';

const SearchInput: React.FC = () => {
  return (
    <input
      className="bg-gray-700 w-9/12 p-2 rounded-full"
      id="searchInput"
      type="text"
      placeholder="Search for a book..."
    />
  );
};

export default SearchInput;

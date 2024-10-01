import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm.toLowerCase());
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default SearchForm;
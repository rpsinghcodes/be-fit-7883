import { useState } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Trigger search logic here if needed
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

return (
    <div className="rounded-md border shadow-md md:min-w-[450px] mb-8 flex">
        <input
            type="text"
            placeholder="Type dish item name for search..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="w-full p-2 border-none outline-none rounded-l-md"
        />
        <button
            onClick={handleSearch}
            className="p-2 bg-[rgb(24,24,27)] text-white rounded-r-md hover:bg-gray-700 transition-colors"
        >
            Search
        </button>
    </div>
);
};

export default SearchBar;

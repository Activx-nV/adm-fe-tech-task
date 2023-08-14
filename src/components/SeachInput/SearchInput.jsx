import React from 'react';
import ZoomLogo from '../../assets/svg/zoom.svg';
import './SearchInput.styles.css';

function SearchInput({
  showSearchInput,
  handleInputChange,
  handleItemClick,
  searchResults,
  searchInputValue,
  setSearchResults,
}) {
  return (
    <div className={`search-input-container ${!showSearchInput && 'hidden'}`}>
      <img
        src={ZoomLogo}
        alt="Search input loupe icon"
        className="zoom-image"
      />
      <input
        className="search-input"
        placeholder="Search"
        value={searchInputValue}
        onChange={handleInputChange}
        onBlur={() => searchInputValue !== '' && setSearchResults([])}
      />
      {searchResults && searchInputValue !== '' && searchResults.length > 0 && (
        <ul className="dropdown">
          {searchResults.map((shipment, index) => (
            <li
              key={index}
              onMouseDown={(e) => {
                e.preventDefault();
                handleItemClick(shipment);
              }}
            >
              {shipment.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;

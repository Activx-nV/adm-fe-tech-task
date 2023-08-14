import './Header.styles.css';
import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import SearchInput from '../SeachInput/SearchInput';

function Header({
  isActiveBurgerMenu,
  handleButtonClick,
  showSearchInput,
  handleInputChange,
  handleItemClick,
  searchResults,
  searchInputValue,
  setSearchResults,
}) {
  const burgerMenuOpenClassName = isActiveBurgerMenu ? 'open' : '';

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-container">
          <a href="/">
            <img src={Logo} alt="SpaceX cargo planner logo" />
          </a>
        </div>

        <button
          onClick={handleButtonClick}
          id="burger-menu-btn"
          className={`burger-menu ${burgerMenuOpenClassName}`}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
      </div>

      <SearchInput
        showSearchInput={showSearchInput}
        handleInputChange={handleInputChange}
        handleItemClick={handleItemClick}
        searchResults={searchResults}
        searchInputValue={searchInputValue}
        setSearchResults={setSearchResults}
      />
    </header>
  );
}

export default Header;

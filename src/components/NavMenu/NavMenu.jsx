import React from 'react';
import Header from '../Header/Header';
import './NavMenu.styles.css';

function NavMenu({ handleButtonClick, isActiveBurgerMenu }) {
  return (
    <nav className={`shipment-list-container ${isActiveBurgerMenu ? 'burgerMenuActive' : ''}`}>
      <div className="mobile-header">
        <Header
          showSearchInput={false}
          isActiveBurgerMenu={isActiveBurgerMenu}
          handleButtonClick={handleButtonClick}
        />
      </div>
      <h4 className="shipment-list__title">Shipment list</h4>
      <ul className="shipment-list">
        <li className="shipment-list__item shipment-list__item_active">
          Amazon
        </li>
        <li className="shipment-list__item">American Express</li>
        <li className="shipment-list__item">Airbnb</li>
        <li className="shipment-list__item">Apple</li>
      </ul>
    </nav>
  );
}

export default NavMenu;

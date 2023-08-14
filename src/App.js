import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import ShipmentContent from './components/ShipmentContent/ShipmentContent';

function App() {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState({});
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleShallowRoute = () => {
    const newUrl = selectedShipment.id;
    navigate(newUrl);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInputValue(value);

    const res = shipments.filter((shipment) =>
      shipment.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(res);
  };

  const handleItemClick = (shipment) => {
    setSelectedShipment(shipment);
    setSearchInputValue('');
    setSearchResults([]);
    handleShallowRoute();
  };

  const handleButtonClick = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  const getInitRandomShipment = (shipments) => {
    const randomIndex = Math.floor(Math.random() * shipments.length);
    return shipments[randomIndex];
  };

  const fetchShipments = useCallback(async () => {
    try {
      const response = await fetch(
        'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json'
      );
      const shipments = await response.json();
      setShipments(shipments);
      setSelectedShipment(getInitRandomShipment(shipments));
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchShipments();
  }, []);

  return (
    <div className="app-container">
      {shipments.length === 0 ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <>
          <Header
            showSearchInput={true}
            isActiveBurgerMenu={isActiveBurgerMenu}
            handleButtonClick={handleButtonClick}
            handleInputChange={handleInputChange}
            handleItemClick={handleItemClick}
            searchResults={searchResults}
            searchInputValue={searchInputValue}
            setSearchResults={setSearchResults}
          />
          <div className="main-content-wrapper">
            <NavMenu
              isActiveBurgerMenu={isActiveBurgerMenu}
              handleButtonClick={handleButtonClick}
            />
            <ShipmentContent
              shipments={shipments}
              selectedShipment={selectedShipment}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

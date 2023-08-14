import React from 'react';
import './ShipmentContentDetails.styles.css';

function ShipmentContentDetails({ selectedShipment }) {
  const shipmentUnit =
    selectedShipment.boxes &&
    selectedShipment.boxes
      .split(',')
      .reduce((acc, nextVal) => acc + Number(nextVal), 0);
  const CARGO_BAY_CAPACITY = 10;

  const getRequiredCargoBays = (totalAmount, boxCapacity) => {
    return Math.ceil(totalAmount / boxCapacity);
  };

  return (
    <>
      <div className="shipment-details">
        <div className="shipment-details__title">Cargo boxes</div>
        <div className="shipment-details__input-container">
          <input
            className="shipment-details__input"
            type="text"
            readOnly
            value={selectedShipment.boxes || ''}
          />
        </div>

        <div className="shipment__quantity-container">
          <div className="shipment__quantity__title">
            Number of required cargo bays
          </div>
          <div className="shipment__quantity__cargobays">
            {getRequiredCargoBays(shipmentUnit, CARGO_BAY_CAPACITY) ||
              '0 (No boxes)'}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShipmentContentDetails;

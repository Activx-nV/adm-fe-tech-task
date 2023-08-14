import React from 'react';
import './ShipmentContentHeader.styles.css';

function ShipmentContentHeader({ selectedShipment }) {
  return (
    <>
      <div className="shipment-content__title">
        {selectedShipment.name || ''}
      </div>
      <div className="shipment-content__contact-email">
        {selectedShipment.email || ''}
      </div>
    </>
  );
}

export default ShipmentContentHeader;

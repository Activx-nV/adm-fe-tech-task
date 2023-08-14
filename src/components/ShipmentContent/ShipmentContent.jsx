import React from 'react';
import ShipmentContentHeader from './ShipmentContentHeader/ShipmentContentHeader';
import ShipmentContentDetails from './ShipmentContentDetails/ShipmentContentDetails';
import './ShipmentContent.styles.css';

function ShipmentContent({ shipments, selectedShipment }) {
  return (
    <main className="shipment-content-container">
      <ShipmentContentHeader
        shipments={shipments}
        selectedShipment={selectedShipment}
      />
      <ShipmentContentDetails
        shipments={shipments}
        selectedShipment={selectedShipment}
      />
    </main>
  );
}

export default ShipmentContent;

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './PmsEsolution.css';
import AccessController from './AccessController'
import PaymentStation from './PaymentStation';
import AccessGate from './AccessGates';
import SoftwarePackage from './SoftwarePackages';

const PgsEsolution = () => {
  const [activeComponent, setActiveComponent] = useState('AccessController');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'AccessController':
        return <AccessController />;
      case 'PaymentStation':
        return <PaymentStation />;
      case 'AccessGate':
        return <AccessGate />;
      case 'SoftwarePackage':
        return <SoftwarePackage />;
      default:
        return <AccessController />;
    }
  };

  return (
    <>
      {/* Buttons */}
      <div className="main-container">
        <div className="button-container">
          <button className="button-custom" onClick={() => setActiveComponent('AccessController')}>Access Terminal</button>
          <button className="button-custom" onClick={() => setActiveComponent('PaymentStation')}>Payment Stations</button>
          <button className="button-custom" onClick={() => setActiveComponent('AccessGate')}>Access Gates</button>
          <button className="button-custom" onClick={() => setActiveComponent('SoftwarePackage')}>Software Package</button>
        </div>
      </div>

      <Container className="container">
        {renderComponent()}
      </Container>
    </>
  );
};

export default PgsEsolution;

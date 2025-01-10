import React from 'react';
import './Management_Desk.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import Quotes from './Quotes.png';

function Management_Desk() {
  return (
    <div>
      <div className="Management-desk-container">
        <div><img src={image1} alt="" className="management-desk-image1 img-fluid" /></div>
        <div><img src={image2} alt="" className="management-desk-image2 img-fluid" /></div>
        <div><img src={image3} alt="" className="management-desk-image3 img-fluid" /></div>
        <div><img src={Quotes} alt="" className="management-desk-image4 img-fluid" /></div>
      </div>
    </div>
  );
}

export default Management_Desk;

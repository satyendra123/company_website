import React, { useEffect, useState } from "react";

import Baggage1 from "./BaggagescannerIMG/baggage_scanner1.png";
import Baggage2 from "./BaggagescannerIMG/baggage_scanner2.png";
import Baggage3 from "./BaggagescannerIMG/dfmd1.png";
import Baggage4 from "./BaggagescannerIMG/dfmd2.png";

import "./Boombarrierfeatures.css";
const imageList = [Baggage1, Baggage2, Baggage3, Baggage4];
const Baggagescannerfeatures = ({ onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 1400); // Change image every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div onClick={onClick} className="card boom-barrier-home-page-product-section">
      <div className="card-body d-flex flex-column flex-md-row align-items-stretch boom-content">
        <div className="card-content flex-grow-1 d-flex align-items-center">
          <div>
            <div className="boom-header">
              <h3 className="boom-title">Physical</h3>
              <p className="boom-subtitle">Security System</p>
            </div>
            <p className="boom-description">
              Our advanced security solutions provide seamless protection for mass transit and high-security areas, safeguarding assets with precision technology.
            </p>
          </div>
        </div>
        <div className="card-image flex-grow-1 d-flex justify-content-center align-items-center p-3">
          <img
            src={imageList[currentImageIndex]}
            alt="Boom Barrier providing advanced security and monitoring"
            className="img-fluid boom-barrier-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Baggagescannerfeatures;

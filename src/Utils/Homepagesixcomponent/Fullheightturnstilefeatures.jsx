import React, { useEffect, useState } from "react";

// import fullhturnstile1 from "./Fullheigtturnstile/Fullheight1.png";
import fullhturnstile2 from "./Fullheigtturnstile/anpr.png";
import fullhturnstile3 from "./Fullheigtturnstile/long_range_uhf.png";
import fullhturnstile4 from "./Fullheigtturnstile/pos.png";
import fullhturnstile5 from "./Fullheigtturnstile/uhf_reader.png";

import "./Boombarrierfeatures.css";

const imageList = [
  // fullhturnstile1,
  fullhturnstile2,
  fullhturnstile3,
  fullhturnstile4,
  fullhturnstile5
];

const Fullheightturnstilefeatures = ({ onClick }) => {
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
              <h3 className="boom-title">Smart Access</h3>
              <p className="boom-subtitle">Control System</p>
            </div>
            <p className="boom-description">
              Houston Systems provides access modules for efficient fare collection and revenue generation, integrated with vehicle and pedestrian access management systems.
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

export default Fullheightturnstilefeatures;

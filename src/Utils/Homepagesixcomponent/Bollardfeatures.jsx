import React, { useEffect, useState } from "react";
// import Bollard1 from "./BollardIMG/Bollard1.png";
import Bollard1 from "./BollardIMG/Bollard4.png";
import Bollard2 from "./BollardIMG/Highsecurity.png";
import Bollard3 from "./BollardIMG/Highsecurity1.png";
import Bollard4 from "./BollardIMG/crash_barrier.png";
import Bollard5 from "./BollardIMG/uvss.png";
// import Highsecurity2 from "./BollardIMG/Highsecurity3.png";

import "./Boombarrierfeatures.css";

const imageList = [Bollard1, Bollard2, Bollard3, Bollard4, Bollard5];

const Bollardfeatures = ({ onClick }) => {
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
              <h3 className="boom-title">Perimeter</h3>
              <p className="boom-subtitle">Security System</p>
            </div>
            <p className="boom-description">
              The Bollard Shield Series, road blockers, tire killers, and UVSS offer robust construction for reliable high-security zone protection.
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

export default Bollardfeatures;

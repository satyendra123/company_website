import React, { useEffect, useState } from "react";
// import door1 from "./Dfmde/swing_door_motor.svg";
import door2 from "./Dfmde/door1.png";
import door3 from "./Dfmde/sliding_gate.png";
import door4 from "./Dfmde/swing_gate.png";
import door5 from "./Dfmde/swing_glass_door2.png";
import door6 from "./Dfmde/sliding_glass_door3.png";

import "./Boombarrierfeatures.css";

const imageList = [door2, door3, door4, door5, door6];

const Dfmdefeatrures = ({ onClick }) => {
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
              <h3 className="boom-title">Automation</h3>
              <p className="boom-subtitle">Gate and Doors</p>
            </div>
            <p className="boom-description">
              Our Door and Gate series automates new and existing gates, ensuring smooth, efficient operation with a reliable drive mechanism.
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

export default Dfmdefeatrures;

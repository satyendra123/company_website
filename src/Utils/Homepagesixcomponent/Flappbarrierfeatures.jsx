import React, { useEffect, useState } from "react";
import Flapbarrier1 from "./FlappIMG/5.png";
import Flapbarrier2 from "./FlappIMG/Flapp2.png";
import Flapbarrier3 from "./FlappIMG/Fullheight1.png";
import Flapbarrier4 from "./FlappIMG/TURNER B150.png";
import Flapbarrier5 from "./FlappIMG/TURNER S100.png";
import Flapbarrier6 from "./FlappIMG/SWINGTILE SW1080.png";
// import Flapbarrier3 from "./FlappIMG/Flapp3.png";
import "./Boombarrierfeatures.css";

const imageList = [Flapbarrier1, Flapbarrier2, Flapbarrier3, Flapbarrier4, Flapbarrier5, Flapbarrier6];
const Flappbarrierfeatures = ({ onClick }) => {
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
          <div className="boom-barrier-main-section">
            <div className="boom-header">
              <h3 className="boom-title">Pedestrian</h3>
              <p className="boom-subtitle">Access Barrier</p>
            </div>
            <p className="boom-description">
              Houston Series Access Speed Gates feature elegant design and durable construction, ensuring smooth pedestrian flow and effective crowd control.
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

export default Flappbarrierfeatures;

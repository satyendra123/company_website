import React, { useEffect, useState } from "react";
import BoomBarrierImage1 from "./BoombarrierImg/boomBarrierImage.png";
import BoomBarrierImage2 from "./BoombarrierImg/Hurricane.png";
import BoomBarrierImage3 from "./BoombarrierImg/Tornado.png";
import BoomBarrierImage4 from "./BoombarrierImg/Parki.png";
import "./Boombarrierfeatures.css";

const imageList = [
  BoomBarrierImage1,
  BoomBarrierImage2,
  BoomBarrierImage3,
  BoomBarrierImage4,
];

const Boombarrierfeatures = ({ onClick }) => {
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
              <h3 className="boom-title">Automatic</h3>
              <p className="boom-subtitle">Boom Barrier</p>
            </div>
            <p className="boom-description">
              Houston Systems offers automatic boom barriers with advanced technology, ensuring seamless vehicle access control for secure premises.
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

export default Boombarrierfeatures;

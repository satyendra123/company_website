import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../productcss/Productfeatures.css";
import Sliderflapc100 from "./Sliderflapc100";
import Sliderflapc100discriptions from "./Sliderflapc100discriptions";
import Sliderflapc150 from "./Sliderflapc150";
import Sliderflapc150discriptions from "./Sliderflapc150discriptions";

const Sliderflap = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if screen width is mobile (less than 1230px)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1230);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleTileClick = (description) => {
    setActiveDescription((prevDescription) =>
      prevDescription === description ? null : description
    );
  };

  return (
    <div className="product-feature-container mt-4">
      <div className="row">
        {/* Slider Feature Tiles */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Sliderflapc100")}>
              <Sliderflapc100 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Sliderflapc150")}>
              <Sliderflapc150 isMobileView={isMobileView} />
            </div>
          </div>
        )}

        {/* Description Area */}
        {activeDescription && (
          <div className="description-container col-md-7">
            {/* Arrow Image for Mobile View */}
            {isMobileView && (
              <div
                className="arrow-img mb-2"
                onClick={() => setActiveDescription(null)}
                style={{ cursor: "pointer" }}
              >
                <img src="/aerrow.png" alt="Arrow" width="30" />
              </div>
            )}
            <div className="description-content">
              {activeDescription === "Sliderflapc100" &&<Sliderflapc100discriptions />}
              {activeDescription === "Sliderflapc150" && <Sliderflapc150discriptions />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sliderflap;

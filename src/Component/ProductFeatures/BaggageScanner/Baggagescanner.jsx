import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for grid layout
import "../productcss/Productfeatures.css";
import Baggagescanner1 from "./Baggagescanner1";
import Baggagescanner1description from "./Baggagescanner1description";
import Baggagescanner2 from "./Baggagescanner2";
import Baggagescanner2description from "./Baggagescanner2description";
import Baggagescanner3 from "./Baggagescanner3";
import Baggagescanner3description from "./Baggagescanner3description";
import Baggagescanner4 from "./Baggagescanner4";
import Baggagescanner4description from "./Baggagescanner4description";

const Baggagescanner = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if screen width is mobile
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
        {/* Subfeatures Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Baggagescanner1")}>
              <Baggagescanner1 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Baggagescanner2")}>
              <Baggagescanner2 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Baggagescanner3")}>
              <Baggagescanner3 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Baggagescanner4")}>
              <Baggagescanner4 isMobileView={isMobileView} />
            </div>
          </div>
        )}

        {/* Description Section */}
        {activeDescription && (
          <div className="description-container col-md-7">
            {/* Arrow for Mobile View */}
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
              {activeDescription === "Baggagescanner1" && (
                <Baggagescanner1description />
              )}
              {activeDescription === "Baggagescanner2" && (
                <Baggagescanner2description />
              )}
              {activeDescription === "Baggagescanner3" && (
                <Baggagescanner3description />
              )}
              {activeDescription === "Baggagescanner4" && (
                <Baggagescanner4description />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Baggagescanner;

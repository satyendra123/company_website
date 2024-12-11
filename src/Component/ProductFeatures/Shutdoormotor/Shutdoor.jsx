import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Shutdoor1 from "./Shutdoor1";
import Shutdoor1des from "./Shutdoor1des";
import Shutdoor2 from "./Shutdoor2";
import Shutdoor2des from "./Shutdoor2des";
import Shutdoor3 from "./Shutdoor3";
import Shutdoor3des from "./Shutdoor3des";

const Shutdoor = () => {
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
    if (activeDescription === description) {
      setActiveDescription(null); // Close the description and show all components
    } else {
      setActiveDescription(description); // Show only the clicked description
    }
  };

  return (
    <div className="product-feature-container mt-4">
      <div className="row">
        {/* Show tiles unless a description is active (mobile view) */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Shutdoor1")}>
              <Shutdoor1 />
            </div>
            <div onClick={() => handleTileClick("Shutdoor2")}>
              <Shutdoor2 />
            </div>
            <div onClick={() => handleTileClick("Shutdoor3")}>
              <Shutdoor3 />
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
              {activeDescription === "Shutdoor1" && <Shutdoor1des />}
              {activeDescription === "Shutdoor2" && <Shutdoor2des />}
              {activeDescription === "Shutdoor3" && <Shutdoor3des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shutdoor;

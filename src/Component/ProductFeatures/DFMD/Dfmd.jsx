import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Dfmd1 from "./Dfmd1";
import Dfmd1des from "./Dfmd1des";
import Dfmd2 from "./Dfmd2";
import Dfmd2des from "./Dfmd2des";
import Dfmd3 from "./Dfmd3";
import Dfmd3des from "./Dfmd3des";
import Dfmd4 from "./Dfmd4";
import Dfmd4des from "./Dfmd4des";

const Dfmd = () => {
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
            <div onClick={() => handleTileClick("Dfmd1")}>
              <Dfmd1 />
            </div>
            <div onClick={() => handleTileClick("Dfmd2")}>
              <Dfmd2 />
            </div>
            <div onClick={() => handleTileClick("Dfmd3")}>
              <Dfmd3 />
            </div>
            <div onClick={() => handleTileClick("Dfmd4")}>
              <Dfmd4 />
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
              {activeDescription === "Dfmd1" && <Dfmd1des />}
              {activeDescription === "Dfmd2" && <Dfmd2des />}
              {activeDescription === "Dfmd3" && <Dfmd3des />}
              {activeDescription === "Dfmd4" && <Dfmd4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dfmd;

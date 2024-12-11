import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Swing1 from "./Swing1";
import Swing1des from "./Swing1des";
import Swing2 from "./Swing2";
import Swing2des from "./Swing2des";
import Swing3 from "./Swing3";
import Swing3des from "./Swing3des";
import Swing4 from "./Swing4";
import Swing4des from "./Swing4des";

const Swing = () => {
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
            <div onClick={() => handleTileClick("Swing1")}>
              <Swing1 />
            </div>
            <div onClick={() => handleTileClick("Swing2")}>
              <Swing2 />
            </div>
            <div onClick={() => handleTileClick("Swing3")}>
              <Swing3 />
            </div>
            <div onClick={() => handleTileClick("Swing4")}>
              <Swing4 />
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
              {activeDescription === "Swing1" && <Swing1des />}
              {activeDescription === "Swing2" && <Swing2des />}
              {activeDescription === "Swing3" && <Swing3des />}
              {activeDescription === "Swing4" && <Swing4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swing;

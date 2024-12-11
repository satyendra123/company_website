import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Sliding1 from "./Sliding1";
import Sliding1des from "./Sliding1des";
import Sliding2 from "./Sliding2";
import Sliding2des from "./Sliding2des";
import Sliding3 from "./Sliding3";
import Sliding3des from "./Sliding3des";
import Sliding4 from "./Sliding4";
import Sliding4des from "./Sliding4des";

const Sliding = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if screen width is less than 1230px
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
    console.log("Clicked on:", description); // Debug log
    if (activeDescription === description) {
      console.log("Closing description");
      setActiveDescription(null);
    } else {
      console.log("Opening description:", description);
      setActiveDescription(description);
    }
  };

  return (
    <div className="product-feature-container mt-4 p-2">
      <div className="row">
        {/* Feature Tiles */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${activeDescription ? "col-md-5" : "col-12"}`}
          >
            <div onClick={() => handleTileClick("Sliding1")}>
              <Sliding1 />
            </div>
            <div onClick={() => handleTileClick("Sliding2")}>
              <Sliding2 />
            </div>
            <div onClick={() => handleTileClick("Sliding3")}>
              <Sliding3 />
            </div>
            <div onClick={() => handleTileClick("Sliding4")}>
              <Sliding4 />
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
              {activeDescription === "Sliding1" && <Sliding1des />}
              {activeDescription === "Sliding2" && <Sliding2des />}
              {activeDescription === "Sliding3" && <Sliding3des />}
              {activeDescription === "Sliding4" && <Sliding4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sliding;

import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Swingbarrierc100 from "./Swingflapc100";
import Swingbarrierc100discriptions from "./Swingflapc100discriptions";
import Swingbarrierc150 from "./Swingflapc150";
import Swingbarrierc150discriptions from "./Swingflapc150discriptions";

const Swingbarrier = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size and determine mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1230);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleTileClick = (description) => {
    setActiveDescription((prev) => (prev === description ? null : description));
  };

  return (
    <div className="product-feature-container mt-4">
      <div className="row">
        {/* Tile Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${activeDescription ? "col-md-5" : "col-12"}`}
          >
            <div onClick={() => handleTileClick("Swingbarrierc100")}>
              <Swingbarrierc100 />
            </div>
            <div onClick={() => handleTileClick("Swingbarrierc150")}>
              <Swingbarrierc150 />
            </div>
          </div>
        )}

        {/* Description Section */}
        {activeDescription && (
          <div className="description-container col-md-7">
            {/* Back Arrow for Mobile View */}
            {isMobileView && (
              <div
                className="arrow-img mb-2"
                onClick={() => setActiveDescription(null)}
                style={{ cursor: "pointer" }}
              >
                <img src="/aerrow.png" alt="Back" width="30" />
              </div>
            )}
            <div className="description-content">
              {activeDescription === "Swingbarrierc100" && (
                <Swingbarrierc100discriptions />
              )}
              {activeDescription === "Swingbarrierc150" && (
                <Swingbarrierc150discriptions />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swingbarrier;

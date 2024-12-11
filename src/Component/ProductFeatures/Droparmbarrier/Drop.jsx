import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Drop1 from "./Drop1";
import Drop1des from "./Drop1des";
import Drop2 from "./Drop2";
import Drop2des from "./Drop2des";
import Drop3 from "./Drop3";
import Drop3des from "./Drop3des";
import Drop4 from "./Drop4";
import Drop4des from "./Drop4des";

const Drop = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Monitor screen size for mobile responsiveness
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
        {/* Tiles Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${activeDescription ? "col-md-5" : "col-12"}`}
          >
            <div onClick={() => handleTileClick("Drop1")}>
              <Drop1 />
            </div>
            <div onClick={() => handleTileClick("Drop2")}>
              <Drop2 />
            </div>
            <div onClick={() => handleTileClick("Drop3")}>
              <Drop3 />
            </div>
            <div onClick={() => handleTileClick("Drop4")}>
              <Drop4 />
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
              {activeDescription === "Drop1" && <Drop1des />}
              {activeDescription === "Drop2" && <Drop2des />}
              {activeDescription === "Drop3" && <Drop3des />}
              {activeDescription === "Drop4" && <Drop4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drop;

import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Road1 from "./Road1";
import Road1des from "./Road1des";
import Road2 from "./Road2";
import Road2des from "./Road2des";
import Road3 from "./Road3";
import Road3des from "./Road3des";
import Road4 from "./Road4";
import Road4des from "./Road4des";

const Road = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Monitor screen size for mobile view
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
        {/* Tile Section: Hide tiles in mobile view when a description is active */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${activeDescription ? "col-md-5" : "col-12"}`}
          >
            <div onClick={() => handleTileClick("Road1")}>
              <Road1 />
            </div>
            <div onClick={() => handleTileClick("Road2")}>
              <Road2 />
            </div>
            <div onClick={() => handleTileClick("Road3")}>
              <Road3 />
            </div>
            <div onClick={() => handleTileClick("Road4")}>
              <Road4 />
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
              {activeDescription === "Road1" && <Road1des />}
              {activeDescription === "Road2" && <Road2des />}
              {activeDescription === "Road3" && <Road3des />}
              {activeDescription === "Road4" && <Road4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Road;

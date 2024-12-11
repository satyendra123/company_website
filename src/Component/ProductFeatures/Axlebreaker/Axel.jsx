import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Axel1 from "./Axel1";
import Axel1des from "./Axel1des";
import Axel2 from "./Axel2";
import Axel2des from "./Axel2des";
import Axel3 from "./Axel3";
import Axel3des from "./Axel3des";
import Axel4 from "./Axel4";
import Axel4des from "./Axel4des";

const Axel = () => {
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
        {/* Tile Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${activeDescription ? "col-md-5" : "col-12"}`}
          >
            <div onClick={() => handleTileClick("Axel1")}>
              <Axel1 />
            </div>
            <div onClick={() => handleTileClick("Axel2")}>
              <Axel2 />
            </div>
            <div onClick={() => handleTileClick("Axel3")}>
              <Axel3 />
            </div>
            <div onClick={() => handleTileClick("Axel4")}>
              <Axel4 />
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
              {activeDescription === "Axel1" && <Axel1des />}
              {activeDescription === "Axel2" && <Axel2des />}
              {activeDescription === "Axel3" && <Axel3des />}
              {activeDescription === "Axel4" && <Axel4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Axel;

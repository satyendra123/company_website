import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Anpr1 from "./Anpr1";
import Anpr1des from "./Anpr1des";
import Anpr2 from "./Anpr2";
import Anpr2des from "./Anpr2des";
import Anpr3 from "./Anpr3";
import Anpr3des from "./Anpr3des";

const Anpr = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Monitor screen size for mobile view detection
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
        {/* Tile View: Hide on mobile when a description is active */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${activeDescription ? "col-md-5" : "col-12"}`}
          >
            <div onClick={() => handleTileClick("Anpr1")}>
              <Anpr1 />
            </div>
            <div onClick={() => handleTileClick("Anpr2")}>
              <Anpr2 />
            </div>
            <div onClick={() => handleTileClick("Anpr3")}>
              <Anpr3 />
            </div>
          </div>
        )}

        {/* Description View */}
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
              {activeDescription === "Anpr1" && <Anpr1des />}
              {activeDescription === "Anpr2" && <Anpr2des />}
              {activeDescription === "Anpr3" && <Anpr3des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anpr;

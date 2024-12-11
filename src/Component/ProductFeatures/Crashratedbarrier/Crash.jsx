import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Crash1 from "./Crash1";
import Crash1des from "./Crash1des";
import Crash2 from "./Crash2";
import Crash2des from "./Crash2des";
import Crash3 from "./Crash3";
import Crash3des from "./Crash3des";
import Crash4 from "./Crash4";
import Crash4des from "./Crash4des";

const Crash = () => {
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
            <div onClick={() => handleTileClick("Crash1")}>
              <Crash1 />
            </div>
            <div onClick={() => handleTileClick("Crash2")}>
              <Crash2 />
            </div>
            <div onClick={() => handleTileClick("Crash3")}>
              <Crash3 />
            </div>
            <div onClick={() => handleTileClick("Crash4")}>
              <Crash4 />
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
              {activeDescription === "Crash1" && <Crash1des />}
              {activeDescription === "Crash2" && <Crash2des />}
              {activeDescription === "Crash3" && <Crash3des />}
              {activeDescription === "Crash4" && <Crash4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crash;

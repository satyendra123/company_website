import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Ptype1 from "./Ptype1";
import Ptype1des from "./Ptype1des";
import Ptype2 from "./Ptype2";
import Ptype2des from "./Ptype2des";
import Ptype3 from "./Ptype3";
import Ptype3des from "./Ptype3des";
import Ptype4 from "./Ptype4";
import Ptype4des from "./Ptype4des";

const Ptype = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Responsive screen size logic
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
            <div onClick={() => handleTileClick("Ptype1")}>
              <Ptype1 />
            </div>
            <div onClick={() => handleTileClick("Ptype2")}>
              <Ptype2 />
            </div>
            <div onClick={() => handleTileClick("Ptype3")}>
              <Ptype3 />
            </div>
            <div onClick={() => handleTileClick("Ptype4")}>
              <Ptype4 />
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
              {activeDescription === "Ptype1" && <Ptype1des />}
              {activeDescription === "Ptype2" && <Ptype2des />}
              {activeDescription === "Ptype3" && <Ptype3des />}
              {activeDescription === "Ptype4" && <Ptype4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ptype;

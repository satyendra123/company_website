import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Tyre1 from "./Tyre1";
import Tyre1des from "./Tyre1des";
import Tyre2 from "./Tyre2";
import Tyre2des from "./Tyre2des";
import Tyre3 from "./Tyre3";
import Tyre3des from "./Tyre3des";
import Tyre4 from "./Tyre4";
import Tyre4des from "./Tyre4des";

const Tyre = () => {
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
            <div onClick={() => handleTileClick("Tyre1")}>
              <Tyre1 />
            </div>
            <div onClick={() => handleTileClick("Tyre2")}>
              <Tyre2 />
            </div>
            <div onClick={() => handleTileClick("Tyre3")}>
              <Tyre3 />
            </div>
            <div onClick={() => handleTileClick("Tyre4")}>
              <Tyre4 />
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
              {activeDescription === "Tyre1" && <Tyre1des />}
              {activeDescription === "Tyre2" && <Tyre2des />}
              {activeDescription === "Tyre3" && <Tyre3des />}
              {activeDescription === "Tyre4" && <Tyre4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tyre;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for grid layout
import "../productcss/Productfeatures.css";
import Full1 from "./Full1";
import Full1des from "./Full1des";
import Full2 from "./Full2";
import Full2des from "./Full2des";
import Full3 from "./Full3";
import Full3des from "./Full3des";
import Full4 from "./Full4";
import Full4des from "./Full4des";

const Fullheightturnstile = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if screen width is mobile
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
    setActiveDescription((prevDescription) =>
      prevDescription === description ? null : description
    );
  };

  return (
    <div className="product-feature-container mt-4">
      <div className="row">
        {/* Subfeatures Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Full1")}>
              <Full1 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Full2")}>
              <Full2 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Full3")}>
              <Full3 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Full4")}>
              <Full4 isMobileView={isMobileView} />
            </div>
          </div>
        )}

        {/* Description Section */}
        {activeDescription && (
          <div className="description-container col-md-7">
            {/* Arrow for Mobile View */}
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
              {activeDescription === "Full1" && <Full1des />}
              {activeDescription === "Full2" && <Full2des />}
              {activeDescription === "Full3" && <Full3des />}
              {activeDescription === "Full4" && <Full4des />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fullheightturnstile;

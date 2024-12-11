import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Uvssc200 from "./Uvssc200";
import Uvssc100 from "./Uvssc100";
import Uvssc100discriptions from "./Uvssc100discriptions";
import Uvssc150 from "./Uvssc150";
import Uvssc150discriptions from "./Uvssc150discriptions";
import Uvssc200discriptions from "./Uvssc200discriptions";

const Uvss = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check screen width and update `isMobileView`
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
        {/* Tile View: Shown unless a description is active (in mobile view) */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Uvssc100")}>
              <Uvssc100 />
            </div>
            <div onClick={() => handleTileClick("Uvssc150")}>
              <Uvssc150 />
            </div>
            <div onClick={() => handleTileClick("Uvssc200")}>
              <Uvssc200 />
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
              {activeDescription === "Uvssc100" && <Uvssc100discriptions />}
              {activeDescription === "Uvssc150" && <Uvssc150discriptions />}
              {activeDescription === "Uvssc200" && <Uvssc200discriptions />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uvss;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import FlaptileR100 from "./FlaptileR100";
import FlaptileR100discriptions from "./FlaptileR100discriptions";
import FlaptileR150 from "./FlaptileR150";
import FlaptileR150discriptions from "./FlaptileR150discriptions";
import FlaptileR180 from "./FlaptileR180";
import FlaptileR80 from "./FlaptileR80";
import FlaptileR80discriptions from "./FlaptileR80discriptions";
import Fllapdiscriptions from "./Fllapdiscriptions";
import './Flappbarrier.css'

const Flappbarrier = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if screen width is mobile (less than 1230px)
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
    <div className="product-feature-container mt-4 p-2">
      <div className="row">
        {/* Subfeatures Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Fllapdiscriptions")}>
              <FlaptileR180 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("R150")}>
              <FlaptileR150 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("R100")}>
              <FlaptileR100 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("R80")}>
              <FlaptileR80 isMobileView={isMobileView} />
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
              {activeDescription === "Fllapdiscriptions" && <Fllapdiscriptions />}
              {activeDescription === "R150" && <FlaptileR150discriptions />}
              {activeDescription === "R100" && <FlaptileR100discriptions />}
              {activeDescription === "R80" && <FlaptileR80discriptions />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flappbarrier;

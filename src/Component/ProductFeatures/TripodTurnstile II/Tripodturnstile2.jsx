import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../productcss/Productfeatures.css";
import Turenerc200 from "./Turenerc200";
import Turnerc100 from "./Turnerc100";
import Turnerc100discriptions from "./Turnerc100discriptions";
import Turnerc150 from "./Turnerc150";
import Turnerc150discriptions from "./Turnerc150discriptions";
import Turnerc200discriptions from "./Turnerc200discriptions";
import Turnerc250 from "./Turnerc250";
import Turnerc250discriptions from "./Turnerc250discriptions";

const Tripodturnstile = () => {
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
            <div onClick={() => handleTileClick("Turnerc100")}>
              <Turnerc100 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Turnerc150")}>
              <Turnerc150 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Turenerc200")}>
              <Turenerc200 isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Turnerc250")}>
              <Turnerc250 isMobileView={isMobileView} />
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
              {activeDescription === "Turnerc100" && <Turnerc100discriptions />}
              {activeDescription === "Turnerc150" && <Turnerc150discriptions />}
              {activeDescription === "Turenerc200" &&<Turnerc200discriptions />}
              {activeDescription === "Turnerc250" && <Turnerc250discriptions />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tripodturnstile;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Vegasub from "./Productsubfeatures/Vegasub";
import Parkisub from "./Productsubfeatures/Parkisub";
import Tarnado from "./Productsubfeatures/Tarnado";
import Huricane from "./Productsubfeatures/Huricane";
import Vegadiscription from "./Productsubfeatures/Vegadiscription";
import Parkidiscription from "./Productsubfeatures/Parkidiscription";
import Tornadodiscription from "./Productsubfeatures/Tornadodiscription";
import Hurricanediscription from "./Productsubfeatures/Hurricanediscription";

const Productfeatures = () => {
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
    if (activeDescription === description) {
      setActiveDescription(null); // Close the description
    } else {
      setActiveDescription(description); // Show the clicked description
    }
  };

  return (
    <div className="product-feature-container mt-2 p-2">
      <div className="row">
        {/* Subfeatures Section */}
        {(!isMobileView || activeDescription === null) && (
          <div
            className={`subfeature ${
              activeDescription ? "col-md-5" : "col-12"
            }`}
          >
            <div onClick={() => handleTileClick("Vega")}>
            <Vegasub isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Parki")} >
            <Parkisub isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Tarnado")} >
            <Tarnado isMobileView={isMobileView} />
            </div>
            <div onClick={() => handleTileClick("Huricane")}>
            <Huricane isMobileView={isMobileView} />
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
              {activeDescription === "Vega" && <Vegadiscription />}
              {activeDescription === "Parki" && <Parkidiscription />}
              {activeDescription === "Tarnado" && <Tornadodiscription  />}
              {activeDescription === "Huricane" && <Hurricanediscription />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productfeatures;

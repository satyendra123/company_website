import React, { useState, useEffect } from "react";
import "../productcss/Productfeatures.css";
import Bollard1 from "./Bollard1";
import Bollard1des from "./Bollard1des";
import Bollard2 from "./Bollard2";
import Bollard2des from "./Bollard2des";
import Bollard3 from "./Bollard3";
import Bollard3des from "./Bollard3des";
import Bollard4 from "./Bollard4";
import Bollard4des from "./Bollard4des";

const Bollard = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

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
    console.log("Clicked:", description);
    if (activeDescription === description) {
      console.log("Closing description");
      setActiveDescription(null);
    } else {
      console.log("Opening description:", description);
      setActiveDescription(description);
    }
  };

  return (
    <div className="product-feature-container">
      <div className="subfeature">
        {(!isMobileView || activeDescription === null) && (
          <>
            <div onClick={() => handleTileClick("Bollard1")}>
              <Bollard1 />
            </div>
            <div onClick={() => handleTileClick("Bollard2")}>
              <Bollard2 />
            </div>
            <div onClick={() => handleTileClick("Bollard3")}>
              <Bollard3 />
            </div>
            <div onClick={() => handleTileClick("Bollard4")}>
              <Bollard4 />
            </div>
          </>
        )}
      </div>

      {activeDescription && (
        <div className="description-container">
          {isMobileView && (
            <div className="arrow-img" onClick={() => setActiveDescription(null)}>
              <img src="/aerrow.png" alt="Arrow" />
            </div>
          )}
          <div className="description-content">
            {activeDescription === "Bollard1" && <Bollard1des />}
            {activeDescription === "Bollard2" && <Bollard2des />}
            {activeDescription === "Bollard3" && <Bollard3des />}
            {activeDescription === "Bollard4" && <Bollard4des />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bollard;

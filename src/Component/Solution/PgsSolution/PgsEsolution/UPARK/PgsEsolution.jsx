import React, { useState, useEffect } from "react";
import "./PgsEsolution.css";
import Sensor from "./Sensors";
import Controller from "./Controller";
import Display from "./Display";
import SoftwarePackage from "./SoftwarePackages";

const PgsEsolution = () => {
  const [activeComponent, setActiveComponent] = useState("Sensor");
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

  // Update the screen size state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Sensors":
        return <Sensor />;
      case "Controller":
        return <Controller />;
      case "Display":
        return <Display />;
      case "SoftwarePackage":
        return <SoftwarePackage />;
      default:
        return <Sensor />;
    }
  };

  return (
    <>
      <div className="button-wrapper">
        <div className={`button-container clickable ${isMobileScreen ? "top-button" : ""}`} onClick={() => setActiveComponent("Sensors")}>
          <p className="mt-2">Sensor</p>
        </div>
        <div
          className={`button-container clickable ${isMobileScreen ? "top-button" : ""}`}
          onClick={() => setActiveComponent("Controller")}
        >
          <p className="mt-2">Controller</p>
        </div>
        <div
          className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""}`}
          onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">Display</p>
        </div>
        <div
          className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""}`}
          onClick={() => setActiveComponent("SoftwarePackage")}
        >
          <p className="mt-2">Software</p>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="content-container">{renderComponent()}</div>
    </>
  );
};

export default PgsEsolution;

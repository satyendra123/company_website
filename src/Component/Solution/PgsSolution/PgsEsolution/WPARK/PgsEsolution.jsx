import React, { useState, useEffect } from "react";
import "./PgsEsolution.css";
import Sensor from "./Sensors";
import Controller from "./Controller";
import Display from "./Display";
import SoftwarePackage from "./SoftwarePackages";

const PgsEsolution = () => {
  const [activeComponent, setActiveComponent] = useState("Sensors");
   const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);
 
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
      case "Controllers":
        return <Controller />;
      case "displays":
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
        <div   className={`button-container clickable ${isMobileScreen ? "top-button" : ""} ${activeComponent === "Sensors" ? "active-button" : ""}`}
          onClick={() => setActiveComponent("Sensors")}>
          <p className="mt-2">Sensor</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("Controllers")}
        >
          <p className="mt-2">Controller</p>
        </div>
        <div
          className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""} ${activeComponent === "Display" ? "active-button" : ""}`}
          onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">Display</p>
        </div>
        <div
          className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""} ${activeComponent === "SoftwarePackage" ? "active-button" : ""}`}
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

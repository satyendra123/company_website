import React, { useState, useEffect } from "react";
import "./PmsEsolution.css";
import Sensor from "./Paymentstations";
import Controller from "./Accesscontroller";
import Display from "./Acesscamera";
import SoftwarePackage from "./SoftwarePackages";


const PmsEsolution = () => {

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
        <div   className={`button-container clickable ${isMobileScreen ? "top-button" : ""} ${activeComponent === "Sensors" ? "active-button" : ""}`}
          onClick={() => setActiveComponent("Sensors")}>
          <p className="mt-2">Access Terminal</p>
        </div>
        <div
          className={`button-container clickable ${isMobileScreen ? "top-button" : ""} ${activeComponent === "Controller" ? "active-button" : ""}`}
          onClick={() => setActiveComponent("Controller")}
        >
          <p className="mt-2">Access Gates</p>
        </div>
        <div
       className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""} ${activeComponent === "Display" ? "active-button" : ""}`}
       onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">Payment Stations</p>
        </div>
        <div
         className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""} ${activeComponent === "SoftwarePackage" ? "active-button" : ""}`}
         onClick={() => setActiveComponent("SoftwarePackage")}
        >
          <p className="mt-2">CMS and Server</p>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="content-container">{renderComponent()}</div>
    </>
  );
};

export default PmsEsolution;

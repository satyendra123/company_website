import React, { useState } from "react";
import "./QESolution.css";
import Sensor from "./Sensors";
import Controller from "./Controller";
import Display from "./Display";
import SoftwarePackage from "./SoftwarePackages";

const PgsEsolution = () => {
  const [activeComponent, setActiveComponent] = useState("Sensor");

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
        <div
          className={`button-container clickable ${
            activeComponent === "Sensors" ? "active-button" : ""
          }`}
          onClick={() => setActiveComponent("Sensors")}
        >
          <p className="mt-2">Self Token Kiosk</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "Controller" ? "active-button" : ""
          }`}
          onClick={() => setActiveComponent("Controller")}
        >
          <p className="mt-2">Manned Stations</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "Display" ? "active-button" : ""
          }`}
          onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">Display</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "SoftwarePackage" ? "active-button" : ""
          }`}
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

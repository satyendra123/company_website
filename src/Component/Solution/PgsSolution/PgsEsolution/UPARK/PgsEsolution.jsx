import React, { useState, useEffect } from "react";
import "./PgsEsolution.css";
import Sensor from "./Sensors";
import Controller from "./Controller";
import Display from "./Display";
import SoftwarePackage from "./SoftwarePackages";

const PgsEsolution = () => {
  const [activeComponent, setActiveComponent] = useState("Sensors");

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
      <div className="container mt-4">
        <div className="row gy-3">
          <div className="col-6 col-md-3">
            <div
              className={`button-container clickable ${activeComponent === "Sensors" ? "active-button" : ""}`}
              onClick={() => setActiveComponent("Sensors")}
            >
              <p className="mt-2 text-center">Sensors & LED Indicators</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div
              className={`button-container clickable ${activeComponent === "Controller" ? "active-button" : ""}`}
              onClick={() => setActiveComponent("Controller")}
            >
              <p className="mt-2 text-center">Controller</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div
              className={`button-container clickable ${activeComponent === "Display" ? "active-button" : ""}`}
              onClick={() => setActiveComponent("Display")}
            >
              <p className="mt-2 text-center">Display</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div
              className={`button-container clickable ${activeComponent === "SoftwarePackage" ? "active-button" : ""}`}
              onClick={() => setActiveComponent("SoftwarePackage")}
            >
              <p className="mt-2 text-center">Software</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="container mt-4 content-container">{renderComponent()}</div>
    </>
  );
};

export default PgsEsolution;

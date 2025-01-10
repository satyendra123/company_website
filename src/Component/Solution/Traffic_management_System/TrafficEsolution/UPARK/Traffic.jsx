import React, { useState } from "react";
import "./Masstrangist.css";
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

  const isActive = (componentName) => activeComponent === componentName;

  return (
    <>
      <div className="button-wrapper">
        <div
          className={`button-container clickable ${isActive("Sensors") ? "active" : ""}`}
          onClick={() => setActiveComponent("Sensors")}
        >
          <p className="mt-2">Traffic Signal</p>
        </div>
        <div
          className={`button-container clickable ${isActive("Controller") ? "active" : ""}`}
          onClick={() => setActiveComponent("Controller")}
        >
          <p className="mt-2">Pedestrian Signal</p>
        </div>
        <div
          className={`button-container clickable ${isActive("Display") ? "active" : ""}`}
          onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">ITMS Controllers</p>
        </div>
        <div
          className={`button-container clickable ${isActive("SoftwarePackage") ? "active" : ""}`}
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

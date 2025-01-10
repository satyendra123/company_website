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

  return (
    <>
      <div className="button-wrapper">
        <div
          className={`button-container clickable ${activeComponent === "Sensors" ? "active" : ""}`}
          onClick={() => setActiveComponent("Sensors")}
        >
          <p className="mt-2">Access Gates</p>
        </div>
        <div
          className={`button-container clickable ${activeComponent === "Controller" ? "active" : ""}`}
          onClick={() => setActiveComponent("Controller")}
        >
          <p className="mt-2">Payment Terminals</p>
        </div>
        <div
          className={`button-container clickable ${activeComponent === "Display" ? "active" : ""}`}
          onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">Access Control</p>
        </div>
        <div
          className={`button-container clickable ${activeComponent === "SoftwarePackage" ? "active" : ""}`}
          onClick={() => setActiveComponent("SoftwarePackage")}
        >
          <p className="mt-2">Server & CMS</p>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="content-container">{renderComponent()}</div>
    </>
  );
};

export default PgsEsolution;

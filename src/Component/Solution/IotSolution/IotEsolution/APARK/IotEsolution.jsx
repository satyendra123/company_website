import React, { useState } from "react";
import "./IotEsolution.css";
import Sensor from "./Paymentstations";
import Controller from "./Accesscontroller";
import Display from "./Acesscamera";
import SoftwarePackage from "./SoftwarePackages";

const PmsEsolution = () => {
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
            activeComponent === "Sensors" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Sensors")}
        >
          <p className="mt-2">Access Gate</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "Controller" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Controller")}
        >
          <p className="mt-2">Visitor Kiosk</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "Display" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Display")}
        >
          <p className="mt-2">
            Manned Visitor Desk
          </p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "SoftwarePackage" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("SoftwarePackage")}
        >
          <p className="mt-2">Software Packages</p>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="content-container">{renderComponent()}</div>
    </>
  );
};

export default PmsEsolution;

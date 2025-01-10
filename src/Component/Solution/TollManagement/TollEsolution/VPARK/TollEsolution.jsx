import React, { useState } from "react";
import "./TollEsolution.css";
import Sensor from "./Etclane";
import Controller from "./Hybridlane";
import Display from "./Plazasystem";
import SoftwarePackage from "./SoftwarePackages";

const PgsEsolution = () => {
  const [activeComponent, setActiveComponent] = useState("Sensor");

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
        <div
          className={`button-container clickable ${
            activeComponent === "Sensors" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Sensors")}
        >
          <p className="mt-2">ETC Lane</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "Controllers" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Controllers")}
        >
          <p className="mt-2">Hybrid Lane</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "displays" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("displays")}
        >
          <p className="mt-2">Plaza System</p>
        </div>
        <div
          className={`button-container clickable ${
            activeComponent === "SoftwarePackage" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("SoftwarePackage")}
        >
          <p className="mt-2">CMS & Server </p>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="content-container">{renderComponent()}</div>
    </>
  );
};

export default PgsEsolution;

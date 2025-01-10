import React, { useState } from "react";
import "./IotEsolution.css";
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
        <div className="button-container clickable" onClick={() => setActiveComponent("Sensors")}>
          <p className="mt-2">Access Controllers</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("Controllers")}
        >
          <p className="mt-2">Access Camera</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("displays")}
        >
          <p className="mt-2">Payment Stations</p>
        </div>
        <div
          className="button-container clickable"
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

export default PgsEsolution;

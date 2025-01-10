import React, { useState } from "react";
import "./IotEsolution.css";
import Sensor from "./Sensors";
import Controller from "./Controller";
import Display from "./Display";
import SoftwarePackage from "./SoftwarePackages";

const PmsEsolution = () => {
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
        <div className="button-container clickable" onClick={() => setActiveComponent("Sensors")}>
          <p className="mt-2">Access Contoller</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("Controllers")}
        >
          <p className="mt-2">Acess Camera</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("displays")}
        >
          <p className="mt-2">Paytment Stations</p>
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

export default PmsEsolution;

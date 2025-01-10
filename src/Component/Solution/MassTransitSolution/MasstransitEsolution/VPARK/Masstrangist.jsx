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
          <p className="mt-2">Sensor</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("Controllers")}
        >
          <p className="mt-2">Controller</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("displays")}
        >
          <p className="mt-2">Display</p>
        </div>
        <div
          className="button-container clickable"
          onClick={() => setActiveComponent("SoftwarePackage")}
        >
          <p className="mt-2">Software </p>
        </div>
      </div>

      {/* Content Rendered Here */}
      <div className="content-container">{renderComponent()}</div>
    </>
  );
};

export default PgsEsolution;

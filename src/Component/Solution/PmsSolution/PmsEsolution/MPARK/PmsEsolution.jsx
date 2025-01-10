import React, { useState,useEffect} from "react";
import "./PmsEsolution.css";
import PaymentStations from "./PaymentStations";
import AcessReader from "./AcessReader";
import AcessCamera from "./AcessCamera";
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
        return <PaymentStations />;
      case "Controllers":
        return <AcessReader />;
      case "PaymentStations":
        return <AcessCamera />;
      case "SoftwarePackage":
        return <SoftwarePackage />;
      default:
        return <PaymentStations />;
    }
  };
  

  return (
    <>
      <div className="button-wrapper">
  <div
    className={`button-container clickable ${isMobileScreen ? "top-button" : ""} ${activeComponent === "Sensors" ? "active-button" : ""}`}
    onClick={() => setActiveComponent("Sensors")}
  >
    <p className="mt-2">Access Terminals</p>
  </div>
  <div
    className={`button-container clickable ${isMobileScreen ? "top-button" : ""} ${activeComponent === "Controllers" ? "active-button" : ""}`}
    onClick={() => setActiveComponent("Controllers")}
  >
    <p className="mt-2">Access Gates</p>
  </div>
  <div
    className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""} ${activeComponent === "PaymentStations" ? "active-button" : ""}`}
    onClick={() => setActiveComponent("PaymentStations")}
  >
    <p className="mt-2">Payment Stations</p>
  </div>
  <div
    className={`button-container clickable ${isMobileScreen ? "bottom-button" : ""} ${activeComponent === "SoftwarePackage" ? "active-button" : ""}`}
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

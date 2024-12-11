import React from "react";
import Car from "./ArchitectureImages/car.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  return (
      <SolutionArchitecture
        title="Architecture Diagram Of Toll Management System"
        description="The Toll Management System uses ANPR cameras for license plate capture, WIM systems for weight measurement, and RFID readers for payments. Data is processed in a central cloud system for analytics, with automatic toll gates opening upon payment."
        imageSrc={Car}
        imageAlt="Architecture Diagram"
      />
  );
};
export default Architecture;

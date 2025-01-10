import React from "react";
import Car from "../Architecture/ArchitectureImages/Architecture PGS1 1.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">PARKSURE System Architecture</h3>
      <p className="text-justify">PARKSURE Parking Guidance System wide range of parking vacancy information solution for On-Street and Off-Street parking areas. Different type of sensors in integration with  controllers provide parking status with the help of integrated displays  in parking area.</p>
    </div>
  );
  return (
    <SolutionArchitecture
      description={description}  // Pass the description as JSX
      imageSrc={Car}
      imageAlt="Architecture Diagram"
    />
  );
};

export default Architecture;

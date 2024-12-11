import React from "react";
import Car from "./ArchitectureImages/car.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <p>Park Sure is a smart parking Guidance solution that optimizes parking by guiding drivers to available spaces. The architecture consists of the following components:</p>
      <ul>
        <li>Sensors: Installed at parking spots to detect vehicle occupancy.</li>
        <li>Data Processing Unit: Collects real-time data from sensors and processes availability information.</li>
        <li>Central Control System: Aggregates data and controls the overall system, including signage and software.</li>
        <li>Display Units: Signage at key locations guides drivers to free spaces.</li>
        <li>Mobile App/Integration: Allows users to view real-time availability and reserve spots.</li>
      </ul>
    </div>
  );

  return (
    <SolutionArchitecture
      title="Architecture Diagram Of Parking Guidance System"
      description={description}  // Pass the description as JSX
      imageSrc={Car}
      imageAlt="Architecture Diagram"
    />
  );
};

export default Architecture;

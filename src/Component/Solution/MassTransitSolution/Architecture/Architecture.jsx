import React from "react";
import Car from "./ArchitectureImages/car.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  return (
      <SolutionArchitecture
        title="Dummy Architecture Diagram Of On-Street PMS"
        description="Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients."
        imageSrc={Car}
        imageAlt="Architecture Diagram"
      />
  );
};
export default Architecture;

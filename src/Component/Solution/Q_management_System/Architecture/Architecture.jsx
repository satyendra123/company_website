import React from "react";
import Car from "../Architecture/ArchitectureImages/Q management System 1.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">Queue management System Architecture</h3>
      <p className="text-justify">Queue management system provides flexible and configurable integrated mechanism which consist of token dispensors, counter displays, user information display integrated with SmartQ management software to facilitated smooth crowd management, monitoring and controll. </p>
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

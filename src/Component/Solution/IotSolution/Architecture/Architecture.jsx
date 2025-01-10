import React from "react";
import Car from "../Architecture/ArchitectureImages/architecture AFC 1.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">Visitor Management System Architecture</h3>
      <p>Visitor Management system follows similar system architecture for different application.
         Registration system integrated with pedestrian and door access system through central system software to provide smooth and better management control mechanism.</p>
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

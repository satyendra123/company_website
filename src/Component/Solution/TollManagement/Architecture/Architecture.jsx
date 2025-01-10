import React from "react";
import Car from "../Architecture/ArchitectureImages/architecture 1.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">System Architecture Toll Management System</h3> 
      <p className="text-justify">Toll Management System architecture includes integration of ETC lane,
         hybrid lane vehicle classification system, Weigh in motion, points of sale at central management server. User interfaces,
          data collection, processing communication control, and integration layers for efficient toll collection and traffic management. </p>
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

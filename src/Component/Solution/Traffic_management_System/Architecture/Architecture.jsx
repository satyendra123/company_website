import React from "react";
import Car from "../Architecture/ArchitectureImages/Traffic_Arc.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">ITMS System architecture</h3>
      <p className="text-justify">ITMS is a integrated architecture consist of AI vision camera technology, solar integrated System, inteligent adaptive controller with smart traffic and pedestrian signal lights. User friendly web based software intigrated with city traffic signals ensure smooth traffic mechanism in any smart city.</p>
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

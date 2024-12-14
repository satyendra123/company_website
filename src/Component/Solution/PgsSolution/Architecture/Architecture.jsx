import React from "react";
import Car from "../PGSSOLUTIONIMG/Architecturepgs.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">PARKSIM Parking System Architecture</h3>
      <p>PARKSIM refers to the Parking System Integrated Model which integrates ticketing systems access readers 
        manned and unmanned payment stations on one single platform. Integrated cameras provides 
        security and web based features provides remote monitoring control and management. </p>
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

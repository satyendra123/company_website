import React from "react";
import Car from "../Architecture/ArchitectureImages/Architecture PMS2 1.png"; // Update with the correct path to your image
import Car2 from "../Architecture/ArchitectureImages/car.png";
import Car3 from "../Architecture/ArchitectureImages/car1.png";
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = ({ selectedType }) => {
  
  console.log("SelectedType is clicked")
  console.log(selectedType)
  let imageSrc = Car;
  if (selectedType === "F") imageSrc = Car3;
  if (selectedType === "M") imageSrc = Car2;

  const description = (
    <div>
      <h3 className="text-center">PARKSIM Parking System Architecture</h3>
      <p className="text-justify">PARKSIM refers to the Parking System Integrated Model which integrates ticketing systems access readers 
        manned and unmanned payment stations on one single platform. Integrated cameras provides 
        security and web based features provides remote monitoring control and management. </p>
    </div>
  );

  return (
    <SolutionArchitecture
      description={description}  // Pass the description as JSX
      imageSrc={imageSrc}
      imageAlt="Architecture Diagram"
      // imageStyle={{ height: "200px", marginBottom: "30px" }}
    />
  );
};

export default Architecture;

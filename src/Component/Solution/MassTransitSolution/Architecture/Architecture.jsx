import React from "react";
import Car from "../Architecture/ArchitectureImages/Pay_arc.png"; // Update with the correct path to your image
import SolutionArchitecture from "../../../../Utils/SolutionLayOut/SolutionArchitecture/SolutionArchitecture";

const Architecture = () => {
  // Create the description as a JSX element instead of a plain string
  const description = (
    <div>
      <h3 className="text-center">PAY & ACCESS System Architecture</h3>
      <p className="text-justify">Pay & Access architecture integrates advanced technology for seamless transactions, featuring simplified purchases, open payments, virtual smart cards, and API-based integration.integrated model consist of access gates barcode and smart card reader with scalable user friendly management software.  </p>
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

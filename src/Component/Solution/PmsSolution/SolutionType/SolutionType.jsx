import React from "react";
import SolutionLayOutType from '../../../../Utils/SolutionLayOut/SolutionLayOutType/SolutionLayOutType';

const SolutionType = () => {
  const solutionTypes = [
    {
      className: "On-Street",
      title: "Automatic PMS",
      description: "APMS covers three key areas: traffic management, security, and revenue. Acting as an integrated business model, it boosts revenue while ensuring customer satisfaction. Ideal for large multi-level indoor facilities, APMS is a complete solution for secure, efficient, and managed parking operations.",
      dots: [1, 2, 3]
    },
    {
      className: "Access-Readers",
      title: "Booth PMS",
      description: "An economical solution for small spaces, Booth Parking System features manned booths with integrated barriers for secure access via barcode tickets and cards. It ensures smooth entry and exit with a focus on efficient, budget-friendly security management.",
      dots: [1, 2, 3]
    },
    {
      className: "Off-Street",
      title: "Contact Less PMS",
      description: "Designed for secure, unmanned access, our RFID and smart card-enabled system ensures seamless entry and exit for authorized users. Perfect for corporate and office parking.",
      dots: [1, 2, 3]
    },
    {
      className: "ParkSIM",
      title: "ParkSIM",
      description: "Experience seamless control and accessibility with our web-based solution.",
      dots: [1, 2, 3]
    }
  ];
  return (
    <SolutionLayOutType solutionTypes={solutionTypes} />
  );
};

export default SolutionType;
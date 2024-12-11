import React from "react";
import SolutionLayOutType from '../../../../Utils/SolutionLayOut/SolutionLayOutType/SolutionLayOutType';

const SolutionType = () => {
  const solutionTypes = [
    {
      className: "On-Street",
      title: "U Park",
      description: "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients.",
      dots: [1, 2, 3]
    },
    {
      className: "Off-Street",
      title: "V Park",
      description: "Single Space Sensors ceiling-mounted, ultrasonic sensors deliver precise vehicle detection",
      dots: [1, 2, 3]
    },
    {
      className: "Single Space",
      title: "Access Readers",
      description: "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients.",
      dots: [1, 2, 3]
    },
    {
      className: "Multi",
      title: "ParkSIM",
      description: "Experience seamless control and accessibility with our web-based solution.",
      dots: [1, 2, 3]
    },
    {
      className: "Multi",
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
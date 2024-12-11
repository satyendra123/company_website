import React from "react";
import SolutionLayOutType from '../../../../Utils/SolutionLayOut/SolutionLayOutType/SolutionLayOutType';

const SolutionType = () => {
  const solutionTypes = [
    {
      className: "On-Street",
      title: "On-Street PMS",
      description: "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients.",
      dots: [1, 2, 3]
    },
    {
      className: "Access-Readers",
      title: "Access Readers",
      description: "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients.",
      dots: [1, 2, 3]
    },
    {
      className: "Off-Street",
      title: "Off-Street PMS",
      description: "Houston Systems is a leading provider in access automation.",
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
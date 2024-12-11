import React from "react";
import SolutionLayOutType from '../../../../Utils/SolutionLayOut/SolutionLayOutType/SolutionLayOutType';

const SolutionType = () => {
  const solutionTypes = [
    {
      className: "On-Street",
      title: "Electronic Toll Collection System",
      description: "Electronic Toll Collection (ETC) is a system that allows toll payments to be made electronically, enabling smooth and almost nonstop toll collection while monitoring traffic. It works through vehicles with transponders (electronic tags) and uses wireless communication, sensors on the road or roadside, and a computerized system to identify each vehicle, collect tolls, and monitor traffic.",
      dots: [1, 2, 3]
    },
    {
      className: "Access-Readers",
      title: "Weigh in Motion",
      description: "Weigh in Motion (WIM) is a fixed-scale system that weighs vehicles in motion. It is unmanned, non-intrusive, and automatically collects and sends real-time data to a central system.",
      dots: [1, 2, 3]
    },
    {
      className: "Off-Street",
      title: "Automatic Vehicle Classification",
      description: "Housys' AVC uses infrared sensor technology for high accuracy, low maintenance, and cost efficiency. It's designed to handle increasing traffic flow without extra costs.",
      dots: [1, 2, 3]
    },
    {
      className: "ParkSIM",
      title: "ANPR based toll management system",
      description: "Houston Systems Pvt. Ltd. presents a machine learning-based Automatic Number Plate Recognition (ANPR) system designed for efficient toll tax collection.",
      dots: [1, 2, 3]
    }
  ];
  return (
    <SolutionLayOutType solutionTypes={solutionTypes} />
  );
};

export default SolutionType;
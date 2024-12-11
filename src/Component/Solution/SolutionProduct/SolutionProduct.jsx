import React from "react";
import Boom1 from './SolutionProductImages/Boom1.png';
import SolutionLayOutProduct from '../../../Utils/SolutionLayOut/SolutionLayOutProduct/SolutionLayOutProduct';

const SolutionProduct = () => {
  const products = [
    {
      image: Boom1,
      title: "Boom Barrier",
      description: "Housys",
      rating: 4,
    },
    {
      image: Boom1,
      title: "Parking Sensor",
      description: "Housys",
      rating: 5,
    },
    {
      image: Boom1,
      title: "Access Control",
      description: "Housys",
      rating: 3,
    },
  ];
  return (
    <SolutionLayOutProduct products={products} />
  );
};

export default SolutionProduct;
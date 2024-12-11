import React from "react";
import CaseStudies from "../../../Component/Solution/MassTransitSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/MassTransitSolution/Banner/Banner";
import Architecture from "../../../Component/Solution/MassTransitSolution/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/MassTransitSolution/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/MassTransitSolution/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/MassTransitSolution/SolutionType/SolutionType";
import SolutionContactUs from "../../../Component/Solution/MassTransitSolution/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/MassTransitSolution/FeaturedPostAndTrending/FeaturedPostAndTrending";

const MassTransitSolutionPageLayOut = () => {
  return (
    <>
      <Banner />
      <YoutubeAd />
      <SolutionType />

      <Architecture />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
    </>
  );
};

export default MassTransitSolutionPageLayOut;

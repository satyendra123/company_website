import React from "react";
import CaseStudies from "../../../Component/Solution/IotSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/IotSolution/Banner/Banner";
import Architecture from "../../../Component/Solution/IotSolution/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/IotSolution/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/IotSolution/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/IotSolution/SolutionType/SolutionType";
import IotEsolution from "../../../Component/Solution/IotSolution/IotEsolution/IotEsolution";
import SolutionContactUs from "../../../Component/Solution/IotSolution/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/IotSolution/FeaturedPostAndTrending/FeaturedPostAndTrending";

const IotSolutionPageLayOut = () => {
  return (
    <>
      <Banner />
      <YoutubeAd />
      <SolutionType />
      <IotEsolution/>
      <Architecture />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
    </>
  );
};

export default IotSolutionPageLayOut;

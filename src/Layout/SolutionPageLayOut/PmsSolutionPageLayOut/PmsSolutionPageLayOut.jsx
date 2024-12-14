import React from "react";
import CaseStudies from "../../../Component/Solution/PmsSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/PmsSolution/Banner/Banner";
import Architecture from "../../../Component/Solution/PmsSolution/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/PmsSolution/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/PmsSolution/SolutionType/SolutionType";
import PmsEsolution from "../../../Component/Solution/PmsSolution/PmsEsolution/PmsEsolution";
import SolutionContactUs from "../../../Component/Solution/PmsSolution/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/PmsSolution/FeaturedPostAndTrending/FeaturedPostAndTrending";
const PmsSolutionPageLayOut = () => {
  return (
    <>
      <Banner />
      <YoutubeAd />
      <SolutionType />
      <PmsEsolution />
      <Architecture />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
    </>
  );
};

export default PmsSolutionPageLayOut;

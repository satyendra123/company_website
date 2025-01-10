import React from "react";
import CaseStudies from "../../../Component/Solution/MassTransitSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/Traffic_management_System/Banner/Banner";
import Architecture from "../../../Component/Solution/Traffic_management_System/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/Traffic_management_System/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/Traffic_management_System/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/Traffic_management_System/SolutionType/SolutionType2";
// import MasstransitEsolution from "../../../Component/Solution/MassTransitSolution/MasstransitEsolution/MasstransitEsolution";
import SolutionContactUs from "../../../Component/Solution/Traffic_management_System/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/Traffic_management_System/FeaturedPostAndTrending/FeaturedPostAndTrending";

const MassTransitSolutionPageLayOut = () => {
  return (
    <>
      <Banner />
      <YoutubeAd />
      <SolutionType />
      {/* <MasstransitEsolution/> */}
      <Architecture />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
    </>
  );
};

export default MassTransitSolutionPageLayOut;

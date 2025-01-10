import React from "react";
import CaseStudies from "../../../Component/Solution/Q_management_System/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/Q_management_System/Banner/Banner";
import Architecture from "../../../Component/Solution/Q_management_System/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/Q_management_System/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/Q_management_System/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/Q_management_System/SolutionType/SolutionType2";
// import MasstransitEsolution from "../../../Component/Solution/MassTransitSolution/MasstransitEsolution/MasstransitEsolution";
import SolutionContactUs from "../../../Component/Solution/Q_management_System/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/Q_management_System/FeaturedPostAndTrending/FeaturedPostAndTrending";

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

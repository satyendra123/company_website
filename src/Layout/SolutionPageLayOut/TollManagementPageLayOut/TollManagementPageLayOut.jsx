import React from "react";
import CaseStudies from "../../../Component/Solution/TollManagement/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/TollManagement/Banner/Banner";
import Architecture from "../../../Component/Solution/TollManagement/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/TollManagement/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/TollManagement/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/TollManagement/SolutionType/SolutionType";
import SolutionContactUs from "../../../Component/Solution/TollManagement/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/TollManagement/FeaturedPostAndTrending/FeaturedPostAndTrending";
const TollManagementPageLayOut = () => {
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

export default TollManagementPageLayOut;

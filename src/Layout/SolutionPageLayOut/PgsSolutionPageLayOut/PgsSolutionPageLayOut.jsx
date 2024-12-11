import React from "react";
import CaseStudies from "../../../Component/Solution/PgsSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/PgsSolution/Banner/Banner";
import Architecture from "../../../Component/Solution/PgsSolution/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/PgsSolution/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/PgsSolution/SolutionType/SolutionType2";
import PgsEsolution from "../../../Component/Solution/PgsSolution/PgsEsolution/PgsEsolution";
import SolutionContactUs from "../../../Component/Solution/PgsSolution/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/PgsSolution/FeaturedPostAndTrending/FeaturedPostAndTrending";

const SolutionPageLayOut = () => {
  return (
    <>
      <Banner />
      <YoutubeAd />
      <SolutionType />

      <PgsEsolution/>
      
      <Architecture />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
    </>
  );
};

export default SolutionPageLayOut;

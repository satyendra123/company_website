import React from "react";
import CaseStudies from "../../Component/Solution/CaseStudy/CaseStudy";
// import Banner from "../../Component/Banner/Banner";
import Banner from '../../Component/Solution/Banner/Banner';
import Architecture from '../../Component/Solution/Architecture/Architecture';
import SolutionProduct from '../../Component/Solution/SolutionProduct/SolutionProduct';
import YoutubeAd from '../../Component/Solution/YoutubeAd/YoutubeAd';
import SolutionType from '../../Component/Solution/SolutionType/SolutionType';
import SolutionContactUs from '../../Component/Solution/SolutionContactUs/SolutionContactUs';
import FeaturedPostAndTrending from '../../Component/Solution/FeaturedPostAndTrending/FeaturedPostAndTrending';

const SolutionPageLayOut = () => {
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

export default SolutionPageLayOut;

import React from "react";
import CaseStudies from "../../../Component/Solution/PmsSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/PmsSolution/Banner/Banner";
import SolutionProduct from "../../../Component/Solution/PmsSolution/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/PmsSolution/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/PmsSolution/SolutionType/SolutionType2";
import SolutionContactUs from "../../../Component/Solution/PmsSolution/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/PmsSolution/FeaturedPostAndTrending/FeaturedPostAndTrending";

import { SolutionProvider } from "../../.././Context/PMSContext/Context";
import { ProductProvider } from "../../.././Context/PMSContext/ProContext";

const PmsSolutionPageLayOut = () => {
  return (
    <>
  <SolutionProvider>
    <ProductProvider>
      <Banner />
      <YoutubeAd />
      <SolutionType />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
    </ProductProvider>
  </SolutionProvider>
    </>
  );
};

export default PmsSolutionPageLayOut;

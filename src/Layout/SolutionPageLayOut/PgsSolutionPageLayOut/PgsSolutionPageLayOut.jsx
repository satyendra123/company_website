import React from "react";
import CaseStudies from "../../../Component/Solution/PgsSolution/CaseStudy/CaseStudy";
import Banner from "../../../Component/Solution/PgsSolution/Banner/Banner";
import Architecture from "../../../Component/Solution/PgsSolution/Architecture/Architecture";
import SolutionProduct from "../../../Component/Solution/PgsSolution/SolutionProduct/SolutionProduct";
import YoutubeAd from "../../../Component/Solution/PgsSolution/YoutubeAd/YoutubeAd";
import SolutionType from "../../../Component/Solution/PgsSolution/SolutionType/SolutionType2";
import SolutionContactUs from "../../../Component/Solution/PgsSolution/SolutionContactUs/SolutionContactUs";
import FeaturedPostAndTrending from "../../../Component/Solution/PgsSolution/FeaturedPostAndTrending/FeaturedPostAndTrending";

import { SolutionProvider } from "../../.././Context/PGSContext/Context";
import { ProductProvider } from "../../.././Context/PGSContext/ProContext";
const SolutionPageLayOut = () => {
  return (
    <>
    <SolutionProvider>
     <ProductProvider>
      <Banner />
      <YoutubeAd />
      <SolutionType />     
      <Architecture />
      <SolutionProduct />
      <CaseStudies />
      <SolutionContactUs />
      <FeaturedPostAndTrending />
     </ProductProvider>
    </SolutionProvider>
    </>
  );
};

export default SolutionPageLayOut;

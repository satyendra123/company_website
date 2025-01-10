import React from "react";
import Banner from "../../../Component/ItServices/AIvision/Banner/Banner";
import SeamlessIntegration from "../../../Component/ItServices/AIvision/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../../Component/ItServices/AIvision/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../../Component/ItServices/AIvision/WhyUs/WhyUs";
import TechnologyStack from "../../../Component/ItServices/AIvision/TechnologyStack/TechnologyStack";
import FAQ from "../../../Component/ItServices/AIvision/FAQ/FAQ";
const AIvisionPageLayout = () => { 
  return (
    <>
      <Banner />
      <SeamlessIntegration/>
      <SoftwareSolution/>
      <WhyUs/>
      <TechnologyStack/>
      <FAQ/>
    </>
  );
};

export default AIvisionPageLayout;

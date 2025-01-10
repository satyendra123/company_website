import React from "react";
import Banner from "../../../Component/ItServices/Development/Banner/Banner";
import SeamlessIntegration from "../../../Component/ItServices/Development/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../../Component/ItServices/Development/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../../Component/ItServices/Development/WhyUs/WhyUs";
import TechnologyStack from "../../../Component/ItServices/Development/TechnologyStack/TechnologyStack";
import FAQ from "../../../Component/ItServices/Development/FAQ/FAQ";
const DevelopmentPageLayout = () => { 
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

export default DevelopmentPageLayout;

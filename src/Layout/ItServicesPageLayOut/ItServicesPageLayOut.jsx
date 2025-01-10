import React from "react";
import Banner from "../../Component/ItServices/Softwaredevelopment/Banner/Banner";
import SeamlessIntegration from "../../Component/ItServices/Softwaredevelopment/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../Component/ItServices/Softwaredevelopment/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../Component/ItServices/Softwaredevelopment/WhyUs/WhyUs";
import TechnologyStack from "../../Component/ItServices/Softwaredevelopment/TechnologyStack/TechnologyStack";
import FAQ from "../../Component/ItServices/Softwaredevelopment/FAQ/FAQ";
const SoftwaredevelopmentPageLayOut = () => { 
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

export default SoftwaredevelopmentPageLayOut;

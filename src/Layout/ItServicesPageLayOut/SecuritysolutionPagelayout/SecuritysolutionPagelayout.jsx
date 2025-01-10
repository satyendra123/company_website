import React from "react";
import Banner from "../../../Component/ItServices/Securitysolution/Banner/Banner";
import SeamlessIntegration from "../../../Component/ItServices/Securitysolution/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../../Component/ItServices/Securitysolution/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../../Component/ItServices/Securitysolution/WhyUs/WhyUs";
import TechnologyStack from "../../../Component/ItServices/Securitysolution/TechnologyStack/TechnologyStack";
import FAQ from "../../../Component/ItServices/Securitysolution/FAQ/FAQ";
const SecuritysolutionPagelayout = () => { 
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

export default SecuritysolutionPagelayout;

import React from "react";
import Banner from "../../../Component/ItServices/CloudServices/Banner/Banner";
import SeamlessIntegration from "../../../Component/ItServices/CloudServices/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../../Component/ItServices/CloudServices/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../../Component/ItServices/CloudServices/WhyUs/WhyUs";
import TechnologyStack from "../../../Component/ItServices/CloudServices/TechnologyStack/TechnologyStack";
import FAQ from "../../../Component/ItServices/CloudServices/FAQ/FAQ";
const CloudServicesPageLayOut = () => { 
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

export default CloudServicesPageLayOut;

import React from "react";
import Banner from "../../../Component/ItServices/Automation/Banner/Banner";
import SeamlessIntegration from "../../../Component/ItServices/Automation/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../../Component/ItServices/Automation/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../../Component/ItServices/Automation/WhyUs/WhyUs";
import TechnologyStack from "../../../Component/ItServices/Automation/TechnologyStack/TechnologyStack";
import FAQ from "../../../Component/ItServices/Automation/FAQ/FAQ";
const AutomationPageLayOut = () => { 
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

export default AutomationPageLayOut;

import React from "react";
import Banner from "../../../Component/ItServices/ConsultingandServices/Banner/Banner";
import SeamlessIntegration from "../../../Component/ItServices/ConsultingandServices/SeamlessIntegration/SeamlessIntegration";
import SoftwareSolution from "../../../Component/ItServices/ConsultingandServices/SoftwareSolution/SoftwareSolution";
import WhyUs from "../../../Component/ItServices/ConsultingandServices/WhyUs/WhyUs";
import TechnologyStack from "../../../Component/ItServices/ConsultingandServices/TechnologyStack/TechnologyStack";
import FAQ from "../../../Component/ItServices/ConsultingandServices/FAQ/FAQ";
const ConsultingandServicesPageLayOut = () => { 
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

export default ConsultingandServicesPageLayOut;

import React from "react";
import Banner from "../../Component/Banner/Banner";
import Quote from "../../Component/Quote/Quote";
import HomeProduct from "../../Component/HomeProduct/HomeProduct";
// import OurStory from "../../Component/OurStory/OurStory";
import Slider from "../../Utils/Slider/Slider";
import CaseStudy from "../../Component/CaseStudy/CaseStudy";
import Testimonials from "../../Component/Testimonials/Testimonials";
import OurClients from "../../Component/OurClients/OurClients";
import ContactUs from "../../Component/ContactUs/ContactUs";
import Gallry from "../../Component/Gallery/Gallry";
// import Reasontocountonus from "../../Component/Reasontocount/Reasontocountonus";

const HomePageLayOut = () => {
  return (
    <>
      <Banner />
      <Quote />
      <HomeProduct />
      {/* <OurStory /> */}
      <Slider />
      <Gallry />
      <CaseStudy />
      {/* <Reasontocountonus /> */}
      <Testimonials />
      <OurClients />
      <ContactUs />
    </>
  );
};

export default HomePageLayOut;

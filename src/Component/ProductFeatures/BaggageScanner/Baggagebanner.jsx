import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import BaggageBannerImg1 from "./BaggageScannerIMG/Baggagescannerbanner.png";
import BaggageBannerImg2 from "./BaggageScannerIMG/Baggagescannerbanner.png";
import BaggageBannerImg3 from "./BaggageScannerIMG/Baggagescannerbanner.png";

const Baggagebanner = () => {
  const bannerData = [
    {
      image: BaggageBannerImg1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: BaggageBannerImg2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: BaggageBannerImg3,
      // subheading: "Subheading 3",
      // heading: "Heading 3",
      // description: "Description for banner 3",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
  ];

  return (
    <div>
      <Banner banners={bannerData} />
    </div>
  );
};

export default Baggagebanner;

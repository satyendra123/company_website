import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import DfmdImg1 from "./DFMDIMG/Dfmdbanner.png";
import DfmdImg2 from "./DFMDIMG/Dfmdbanner2.png";
import DfmdImg3 from "./DFMDIMG/Dfmdbanner3.png";

const BollardBanner = () => {
  const bannerData = [
    {
      image: DfmdImg1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: DfmdImg2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: DfmdImg3,
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

export default BollardBanner;

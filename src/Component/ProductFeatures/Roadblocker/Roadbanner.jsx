import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import RoadImg1 from "./ROADIMG/Roadbanner.png";
import RoadImg2 from "./ROADIMG/Roadbanner.png";
import RoadImg3 from "./ROADIMG/Roadbanner.png";

const BollardBanner = () => {
  const bannerData = [
    {
      image: RoadImg1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: RoadImg2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: RoadImg3,
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

import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import Crahbanner1 from "./CRASHIMG/Crahbanner1.png";
import Crahbanner2 from "./CRASHIMG/Crashbanner2.png";
// import RoadImg2 from "./ROADIMG/Roadbanner.png";
// import RoadImg3 from "./ROADIMG/Roadbanner.png";

const CrashBanner = () => {
  const bannerData = [
    {
      image: Crahbanner1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Crahbanner2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      // image: RoadImg3,
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

export default CrashBanner;

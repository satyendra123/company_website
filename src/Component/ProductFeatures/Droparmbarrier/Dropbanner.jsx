import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import Ptypebanner1 from "./DROPARMIMG/Ptypebanner.png";
import Ptypebanner2 from "./DROPARMIMG/Ptypebanner.png";
// import RoadImg2 from "./ROADIMG/Roadbanner.png";
// import RoadImg3 from "./ROADIMG/Roadbanner.png";

const DropBanner = () => {
  const bannerData = [
    {
      image: Ptypebanner1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Ptypebanner2,
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

export default DropBanner;

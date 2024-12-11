import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import Swingbarrierbanner1 from "./SWINGFLAPIMG/Tripodebanner_.png";
import Swingbarrierbanner2 from "./SWINGFLAPIMG/Tripodebanner_.png";
import Swingbarrierbanner3 from "./SWINGFLAPIMG/Tripodebanner_.png";

const Swingbarrierbanner_ = () => {
  const bannerData = [
    {
      image: Swingbarrierbanner1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Swingbarrierbanner2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Swingbarrierbanner3,
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

export default Swingbarrierbanner_;

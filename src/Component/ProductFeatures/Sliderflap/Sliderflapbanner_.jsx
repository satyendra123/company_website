import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import Sliderflapbanner1 from "./SliderflapIMG/Sliderflapbanner_.png";
import Sliderflapbanner2 from "./SliderflapIMG/Sliderflapbanner_.png";
import Sliderflapbanner3 from "./SliderflapIMG/Sliderflapbanner_.png";

const Sliderflapbanner_ = () => {
  const bannerData = [
    {
      image: Sliderflapbanner1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Sliderflapbanner2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Sliderflapbanner3,
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

export default Sliderflapbanner_;

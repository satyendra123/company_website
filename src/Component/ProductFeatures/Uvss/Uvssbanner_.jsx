import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import Uvssbanner1 from "./UVSSIMG/Uvssbanner_.png";
import Uvssbanner2 from "./UVSSIMG/Uvssbanner_.png";
import Uvssbanner3 from "./UVSSIMG/Uvssbanner_.png";

const Uvssbanner_ = () => {
  const bannerData = [
    {
      image: Uvssbanner1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Uvssbanner2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Uvssbanner3,
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

export default Uvssbanner_;

import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import Tripodbanner1 from "./Tripodimg/Tripodbanner.png";
import Tripodbanner2 from "./Tripodimg/Tripodbanner.png";
import Tripodbanner3 from "./Tripodimg/Tripodbanner.png";

const Tripodbanner = () => {
  const bannerData = [
    {
      image: Tripodbanner1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Tripodbanner2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: Tripodbanner3,
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

export default Tripodbanner;

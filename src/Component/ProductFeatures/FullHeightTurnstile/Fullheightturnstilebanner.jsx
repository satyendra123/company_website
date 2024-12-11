import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import FullheightImg1 from "./FullheigtturnstileImg/Fullheightbanner.png";
import FullheigtImg2 from "./FullheigtturnstileImg/Fullheightbanner.png";
import FullheightImg3 from "./FullheigtturnstileImg/Fullheightbanner.png";

const Fullheightturnstilebanner = () => {
  const bannerData = [
    {
      image: FullheightImg1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: FullheigtImg2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: FullheightImg3,
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

export default Fullheightturnstilebanner;

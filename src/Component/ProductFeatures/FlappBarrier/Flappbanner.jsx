import React from "react";
import Banner from "../../../Utils/Banner/Banner";
import FlappBannerImg1 from "./FlappbarrierIMG/Flappbanner.png";
import FlappBannerImg2 from "./FlappbarrierIMG/Flappbanner.png";
import FlappBannerImg3 from "./FlappbarrierIMG/Flappbanner.png";
const Flappbanner = () => {
  const bannerData = [
    {
      image: FlappBannerImg1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: FlappBannerImg2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: FlappBannerImg3,
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

export default Flappbanner;

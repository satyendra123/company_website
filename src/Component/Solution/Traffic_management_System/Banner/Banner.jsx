import React from "react";
import Banner from "../../../../Utils/Banner/Banner";
import BannerImg1 from './BannerImg/Traffic Management System 1.png';

const SolutionBanner = () => {
  const bannerData = [
    {
      image: BannerImg1,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
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

export default SolutionBanner;

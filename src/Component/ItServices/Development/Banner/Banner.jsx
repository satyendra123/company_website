import React from "react";
import Banner from "../../../../Utils/Banner/Banner";
import BannerImg1 from '../Banner/BannerImages/Banner_1.png';

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
    {
      image: BannerImg1,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: BannerImg1,
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

export default SolutionBanner;

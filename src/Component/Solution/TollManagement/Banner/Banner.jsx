import React from "react";
import Banner from "../../../../Utils/Banner/Banner";
import BannerImg1 from '../SolutionImages/toll management.jpg';
import BannerImg2 from '../SolutionImages/toll management banner 2.jpg';
import BannerImg3 from '../SolutionImages/toll managet 3.jpg';

const SolutionBanner = () => {
  const bannerData = [
    {
      image: BannerImg2,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: BannerImg2,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: BannerImg2,
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

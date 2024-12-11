import React from "react";
import Banner from "../../Utils/Banner/Banner";
// import VegaBannerImg1 from "./VegaBannerImg/vega_banner1.png";
import VegaBannerImg2 from "./VegaBannerImg/PARKI BANNER.png";
import VegaBannerImg3 from "./VegaBannerImg/HURRICANE BANNER.png";
import VegaBannerImg4 from "./VegaBannerImg/TORNADO BANNER.png";

const VegaBaanner = () => {
  const bannerData = [
    {
      image: VegaBannerImg2,
      // subheading: "Subheading 1",
      // heading: "Heading 1",
      // description: "Description for banner 1",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: VegaBannerImg3,
      // subheading: "Subheading 2",
      // heading: "Heading 2",
      // description: "Description for banner 2",
      // primaryLink: "#",
      // primaryButton: "Learn More",
      // secondaryLink: "#",
      // secondaryButton: "Contact Us",
    },
    {
      image: VegaBannerImg4,
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

export default VegaBaanner;

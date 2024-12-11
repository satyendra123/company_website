import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Parking Management System";
  const descriptions = [
    "The PARK SIM series is a cutting-edge parking management solution developed by our expert R&D and IT teams. Designed for optimal performance, it enhances the parking experience in metro cities.",
    "Parking Management System ensures secure, efficient, and revenue-driven operations. PARK SIM is a flexible, cost-effective solution that reduces operational costs, increases profitability, and enhances security, all while providing superior user comfort.",
  ];
  const videoUrl = "https://www.youtube.com/embed/5jL0aM7lrHY?autoplay=1&mute=1&controls=1&loop=1&playlist=5jL0aM7lrHY";

  return (
    <div>
      <SolutionYoutubeAd 
        headerText={headerText} 
        descriptions={descriptions} 
        videoUrl={videoUrl} 
        DottedBackground={DottedBackground}
      />
    </div>
  );
};

export default YoutubeAd;

import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Parking Guidance system";
  const descriptions = [
    "Houston Systems Pvt. Ltd. is your comprehensive source for cutting-edge, technology-driven parking guidance solutions. We specialize in delivering tailored systems optimized for each unique parking environment. Leveraging advanced tech, we design, implement, and maintain solutions that ensure a seamless and efficient parking experience.",
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

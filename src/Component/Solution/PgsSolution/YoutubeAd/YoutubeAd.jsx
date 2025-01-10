import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Parking Guidance system";
  const descriptions = [
    "Parking Guidance system is designed to assist users to find their parking space easily within the indoor and outdoor parking facility. This is user friendly system not only help you to find your car in parking also but also guide you through the driveways for entering and exiting from the parking facility.",
  ];
  const videoUrl = "https://1&mute=1&controls=1&loop=1&playlist=5jL0aM7lrHY";

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

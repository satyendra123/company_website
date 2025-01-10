import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Visitor Management System";
  const descriptions = [
    "Globalization has increased daily visitors to organizations, making manual visitor management prone to errors and inefficiencies. Houston's Visitor Management System offers an automated, secure solution for streamlined registration, pass printing, and data capture, ensuring safety and professionalism."
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

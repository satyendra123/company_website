import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "IOT Solution";
  const descriptions = [
    "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients.",
    "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients."
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

import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Toll Management Solution";
  const descriptions = [
    "Housys provides an advanced tolling system that combines various technologies and methods to help you efficiently manage toll operations from a single platform, while also improving road safety for a smoother expressway experience.",
    "Technological advancements have transformed toll management. In India, the introduction of the Electronic Toll Collection (ETC) system  revolutionized operations, reducing long queues and saving time for users."
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

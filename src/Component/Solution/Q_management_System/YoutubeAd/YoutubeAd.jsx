import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from "../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd";

const YoutubeAd = () => {
  const headerText = "Queue Management System";
  const descriptions = [
    "A Queue Management System (QMS) optimizes customer flow, minimizing wait times and reducing congestion in lobbies and waiting areas, even during peak hours. Its intelligent design ensures a seamless and efficient service process Improves customer satisfaction by providing transparency on wait times."
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

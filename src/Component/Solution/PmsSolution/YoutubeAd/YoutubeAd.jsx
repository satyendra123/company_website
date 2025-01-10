import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Parking Management System";
  const descriptions = [
    "PMS delivers exceptional performance using latest technology. Designed for metro cities, it offers a secure, revenue-oriented, and cost-effective solution to enhance parking efficiency, reduce costs, boost profitability, and improve security and user comfort"
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

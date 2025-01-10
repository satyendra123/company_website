import React from "react";
import DottedBackground from "./YoutubeAdHeaderImages/dotted_background.svg";
import SolutionYoutubeAd from '../../../../Utils/SolutionLayOut/SolutionYoutubeAd/SolutionYoutubeAd';

const YoutubeAd = () => {
  const headerText = "Mass Transit Solution";
  const descriptions = [
    "Our fare collection solutions deliver convenience, cost efficiency, and advanced technology to exceed expectations. With simplified fare purchases, open payments, virtual smart cards, and seamless integration via APIs, it streamlines operations while boosting ridership and optimizing costs. Ideal for theme parks, museums, stadiums, transit, and exhibitions, our system ensures a future-ready, seamless ticketing experience."
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

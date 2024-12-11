import React from "react";
import "./SolutionYoutubeAd.css"; // Import a CSS file for custom styling

const SolutionYoutubeAd = ({ headerText, descriptions, videoUrl, DottedBackground }) => {
  return (
    <div className="px-3 container">
      <div className="case-study-header-main" style={{ maxWidth: "100%" }}>
        <div className="case-study-header mt-5">
          <h2 className="case-study-sub-header-text">
            {headerText}
          </h2>
        </div>
      </div>
      <div className="youtube-ad-container row align-items-center mt-5">
        <div className="col-lg-6 col-md-12">
          {descriptions.map((desc, index) => (
            <p key={index} className="pms-youtube-ad-left">
              {desc}
            </p>
          ))}
        </div>
        <div className="col-lg-6 col-md-12 position-relative pms-youtube-ad-right">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <img
            src={DottedBackground}
            alt="Dotted Background"
            className="dotted-background"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionYoutubeAd;

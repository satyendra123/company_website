import React from "react";
import line from "./Know_MoreImages/Line 1.png";
import image1 from "./Know_MoreImages/image.png";
import "./Know_More.css";
import goaimg from "./Goa_Images/Goa.png";
import airportimages from "./AirportImages/Airport.png"; // Assuming the path for airport images

const KnowMain = ({
  caseStudyTitle,
  caseStudyLocation,
  caseStudyImage,
  caseStudyDetails,
  airportDetails,
}) => {
  const { heading, leftContent, rightContent, image, products } = caseStudyDetails;
  const {
    airportHeading,
    airportLocation,
    airportSolution,
    airportProducts,
    airportImage,
  } = airportDetails;

  return (
    <div className="know-more-container mt-5">
      {/* Case Study Section */}
      <div className="know-more-section">
        <div className="know-more-left">
          <h6 className="know-more-title blue">{caseStudyTitle}</h6>
          <h6 className="know-more-left-title">
            {caseStudyLocation}
            <img className="line" src={caseStudyImage.divider} alt="Divider" />
          </h6>
        </div>
        <div className="know-more-right">
          <div className="know-more-row">
            <div className="know-more-item">
              <div className="know-more-image">
                <img src={caseStudyImage.primary} alt="Case Study" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Details */}
      <div className="goa-heading-container">
        <img src={caseStudyImage.divider} alt="Line" className="goa-line-img" />
        <h6 className="goa-heading">{heading}</h6>
      </div>

      <div className="International-container d-flex gap-4">
        <div className="content-container d-flex gap-4">
          {/* Left Content */}
          <div className="goa-left-content">
            {leftContent.map((content, index) => (
              <div key={index}>
                <h1 className="goa-title">{content.title}</h1>
                {Array.isArray(content.text) ? (
                  <ul>
                    {content.text.map((item, i) => (
                      <li key={i} className="goa-description">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="goa-description">{content.text}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="goa-right-content">
            {rightContent.map((content, index) => (
              <div key={index}>
                <h1 className="goa-title">{content.title}</h1>
                <p className="goa-description">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Image */}
        <div className="goa-image-container">
          <img src={image} alt={heading} className="img-fluid" />
        </div>
      </div>

      {/* Airport Section */}
      <div className="airport-heading-container">
        <img src={line} alt="Line" className="airport-line-img" />
        <h6 className="airport-heading">{airportHeading}</h6>
      </div>

      <div className="International-container d-flex gap-4">
        <div className="airport-image-container">
          <img src={airportImage} alt={airportHeading} className="img-fluid" />
        </div>
        <div className="content-container d-flex gap-4">
          {/* Left Content */}
          <div className="airport-left-content">
            <h1 className="airport-title">{airportLocation.title}</h1>
            <p className="airport-description">{airportLocation.text}</p>
          </div>

          {/* Right Content */}
          <div className="airport-right-content">
            {airportSolution.map((content, index) => (
              <div key={index} className="airport-solution">
                <h1 className="airport-title">{content.name}</h1>
                <p className="airport-description">{content.text}</p>
              </div>
            ))}

            <h1 className="airport-title">Installed Products</h1>
            <ul>
              {airportProducts.map((product, index) => (
                <li key={index} className="airport-description">{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMain;

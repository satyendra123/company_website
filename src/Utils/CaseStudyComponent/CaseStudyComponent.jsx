import React, {useState} from "react";
import "./CaseStudyComponent.css";
import Slider from "react-slick";

const CaseStudyComponent = ({
  // title,
  description,
  footerItems,
  image,
  placeholder,
}) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 3 descriptions at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };


  // Function to handle "Read More" text
  const truncateDescription = (desc) => {
    const maxLength = 150; // Maximum character limit before truncation
    if (desc.length > maxLength) {
      return `${desc.slice(0, maxLength)}...`;
    }
    return desc;
  };
   // The state to track expanded descriptions
   const [expandedIndex, setExpandedIndex] = useState(-1);

   const handleReadMoreClick = (index) => {
     // Toggle the clicked description's visibility
     if (expandedIndex === index) {
       setExpandedIndex(-1); // Collapse if clicked again
     } else {
       setExpandedIndex(index); // Expand the selected one
     }
   };
  return (
    <div className="case-study-component-card mt-4">
      <div className="case-study-component-left">
        <input
          className="case-study-component-card-input"
          type="text"
          placeholder={placeholder}
        />
        <div>
          {/* <h3>{title}</h3> */}
          {/* <p>{description}</p> */}
          {/* Description slider */}
          <Slider {...settings}>
            {description.map((desc, index) => (
              <div key={index}>
                <p>
                  {/* Show full description if expanded, else truncate */}
                  {expandedIndex === index ? desc : truncateDescription(desc)}
                </p>
                {desc.length > 150 && (
                  <p
                    className="case-study-read-more-btn"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More..."}
                  </p>
                )}
              </div>
            ))}
          </Slider>
        </div>

        <div className="case-study-component-card-footer">
          {footerItems.map((item, index) => (
            <div className="case-study-component-card-footer-item" key={index}>
              <div
                className={`case-study-component-card-button${
                  item.middle ? "-middle" : ""
                }`}
              >
                <h3>{item.value}</h3>
              </div>
              <p className="mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="case-study-component-right">
        <img src={image} alt={placeholder} />
      </div>
    </div>
  );
};

export default CaseStudyComponent;

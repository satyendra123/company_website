import React from "react";
import "./SolutionArchitecture.css";

const SolutionArchitecture = ({
  description,
  imageSrc,
  imageAlt = "",
}) => {
  return (
    <div className='container custom-container'>
      <div className='row solution-pms-row custom-row justify-content-center'>
        <div className='col-md-5 solution-pms-first_column custom-column'>
          <div className='solution-pms-description custom-description'>
            <p className="solution-pms-description-content">{description}</p>
          </div>
        </div>
        <div className="col-md-7 solutioncar">
          <img
            src={imageSrc}
            alt={imageAlt}
            className='solution-pms-img-fluid custom-image'
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionArchitecture;

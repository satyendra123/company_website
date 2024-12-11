import React from "react";
import "./SolutionArchitecture.css";

const SolutionArchitecture = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
}) => {
  return (
    <div className='container-fluid custom-container'>
      <div className='row solution-pms-row custom-row justify-content-center'>
        <div className='col-md-6 solution-pms-first_column custom-column'>
          <h3 className='solution-pms-header custom-header'>{title}</h3>
          <div className='solution-pms-description custom-description'>
            <h3 className="solution-pms-description-content">{description}</h3>
          </div>
        </div>
        <div className="col-md-6 solutioncar">
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

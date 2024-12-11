import React from "react";
import "./SolutionLayOutType.css";

const SolutionLayOutType = ({ solutionTypes }) => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-4 solution-pms-first-column">
          <div className={`p-4 ${solutionTypes[0].className}`}>
            <h4 className="solution-pms-card-title text-center">
              {solutionTypes[0].title}
            </h4>
            <h4 className="solution-pms-card-text">
              {solutionTypes[0].description}
            </h4>
            <div className="solution-pms-d-flex justify-content-center mt-5">
              {solutionTypes[0].dots.map((_, index) => (
                <div key={index} className="solution-pms-circle mx-1"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-8 solution-pms-second-column">
          <div className="row g-4">
            {solutionTypes.slice(1).map((solution, index) => (
              <div
                className={`col-md-${index===0 ? 12:6} ${solution.className}`}
                key={index}
              >
                <div className="solution-pms-card p-4 h-100">
                  <h5 className="solution-pms-card-title text-center">
                    {solution.title}
                  </h5>
                  <h4 className={`solution-pms-card-text${index + 1}`}>
                    {solution.description}
                  </h4>
                  <div className="solution-pms-d-flex justify-content-center">
                    {solution.dots.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className="solution-pms-circle mx-1"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionLayOutType;

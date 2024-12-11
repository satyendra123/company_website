import React from "react";
import "./SolutionCaseStudy.css";

const SolutionCaseStudy = ({
  caseStudyHeaderText,
  caseStudySubHeaderText1,
  caseStudySubHeaderText2,
  caseStudyLeftImg,
  caseStudyLeftImgAlt,
  caseStudyLeftImgTitle,
  caseStudyLeftImgDescription,
  caseStudyRightTopImg,
  caseStudyRightTopImgAlt,
  caseStudyRightTopImgTitle,
  caseStudyRightTopImgDescription,
  caseStudyRightBottomImg,
  caseStudyRightBottomImgAlt,
  caseStudyRightBottomImgTitle,
  caseStudyRightBottomImgDescription,
}) => {
  return (
    <div className="container">
      <div className="case-study-header-main" style={{ maxWidth: "100%" }}>
        <div className="case-study-header mt-5">
          <h2 className="case-study-header-text">{caseStudyHeaderText}</h2>

          <h2 className="case-study-sub-header-text">
            {caseStudySubHeaderText1} <span> {caseStudySubHeaderText2} </span>
          </h2>
        </div>

        <div></div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="solution-case-study-left">
            <img
              src={caseStudyLeftImg}
              className="img-fluid"
              alt={caseStudyLeftImgAlt}
            />
            <div className="overlay-content">
              <h5 className="solution-case-study-heading">
                {caseStudyLeftImgTitle}
              </h5>
              <p className="solution-case-study-para">
                {caseStudyLeftImgDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="mb-4">
            <div className="">
              <div className="row no-gutters align-items-stretch">
                <div className="col-md-4">
                  <img
                    src={caseStudyRightTopImg}
                    className="card-img"
                    alt={caseStudyRightBottomImgAlt}
                  />
                </div>
                <div className="col-md-8">
                  <div className="container">
                    <h5 className="solution-case-study-heading">
                      {caseStudyRightTopImgTitle}
                    </h5>
                    <p className="solution-case-study-para">
                      {caseStudyRightTopImgDescription}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={caseStudyRightBottomImg}
                    className="card-img"
                    alt="case study"
                  />
                </div>
                <div className="col-md-8">
                  <div className="container">
                    <h5 className="solution-case-study-heading">
                      {caseStudyRightBottomImgTitle}
                    </h5>
                    <p className="solution-case-study-para">
                      {caseStudyRightBottomImgDescription}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCaseStudy;

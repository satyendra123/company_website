import React from "react";
import ourstory2 from "../../Container/images/ourstory2.png";
import ourstoryimg1 from "../../Container/images/ourstoryimg1.png";
import story_1 from "../../Container/images/story_1.png";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="container-fluid about py-5">
      <div className="product-header mt-1">
        <h2 className="product-header-text">OUR STORY</h2>
        <h2
          className="product-subheader-text mt-3 mb-5"
          style={{ fontSize: "30px" }}
        >
          Next Gen Solutions For Today’s Challenge
        </h2>
      </div>
      <div className="container">
        <div className="row g-5 align-items-center mt-4">
          <div style={{ marginRight: "20px" }} className="col-lg-5">
            <div className="video">
              <img src={ourstory2} className="img-fluid rounded" alt="gfsfdg" />
              <div className="overlay-image">
                <img
                  src={ourstoryimg1}
                  className="overlay-image1"
                  alt="fgjdg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
            <p
              className="mb-4 mt-3 text-center text-lg-start"
              style={{ fontSize: "20px", color: "black" }}
            >
              Since 2015, Houston Systems has been on a relentless journey,
              pioneering safety and security automation solutions with unmatched
              innovation and quality. Picture this: a world where safety isn't
              just a concept but a reality, where businesses thrive without the
              constant fear of security breaches. That's the vision driving us
              forward.
            </p>

            <div className="row justify-content-center mt-3 mb-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="col-4 col-md-2 mb-2 mb-md-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={story_1} alt="" className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

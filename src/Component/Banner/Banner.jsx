import React from "react";
import "./Banner.css";
import Banner_1 from "../../Container/images/banner_1.png";
import pgs_homepage from "../../Container/images/padestrian banner 1.png";
import Loop_Sensor1 from "../../Container/images/allinone_.png";
import Loop_Sensor from "../../Container/images/Parking_banner.png";
import Homepage_Pms from "../../Container/images/Homepage_Pms.png"; // Ensure the path and file format are correct

const Banner = () => {
  return (
    <div className="container-fluid carousel-header px-0">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="4"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src={Banner_1}
              className="img-fluid d-block w-100"
              alt="Banner 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src={pgs_homepage}
              className="img-fluid d-block w-100"
              alt="Padestrian Banner"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Loop_Sensor1}
              className="img-fluid d-block w-100"
              alt="All-in-One Barrier"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Loop_Sensor}
              className="img-fluid d-block w-100"
              alt="Parking Banner"
            />
          </div>

          <div className="carousel-item">
            <img
              src={Homepage_Pms}
              className="img-fluid d-block w-100"
              alt="Homepage PMS"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;

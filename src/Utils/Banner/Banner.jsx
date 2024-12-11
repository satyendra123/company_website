import React from "react";

const Banner = ({ banners }) => {
  return (
    <div className="container-fluid carousel-header px-0">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        {/*
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        */}
        <div className="carousel-inner" role="listbox">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={banner.image} className="img-fluid" alt="Banner" />
              {/* <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-primary text-uppercase mb-3">{banner.subheading}</h4>
                  <h1 className="display-1 text-capitalize text-dark mb-3">{banner.heading}</h1>
                  <p className="mx-md-5 fs-4 px-4 mb-5 text-dark">{banner.description}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href={banner.primaryLink}>
                      {banner.primaryButton}
                    </a>
                    <a className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href={banner.secondaryLink}>
                      {banner.secondaryButton}
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
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

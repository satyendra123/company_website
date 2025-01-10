import React, { useContext } from "react";
import { SolutionContext } from '../../../../Context/PGSContext/Context'
import "./SolutionBanner.css";

const SolutionBanner = () => {
  const { bannerImageUrl } = useContext(SolutionContext); // Get the banner image URL from context

  return (
    <div className="container-fluid carousel-header px-0">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src={bannerImageUrl}
              className="img-fluid d-block w-100"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionBanner;





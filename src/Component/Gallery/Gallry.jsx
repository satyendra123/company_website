import React from "react";
import "./GalleryImagesmodules.css";

function Gallry() {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <h2
          className="Solutions_"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Solutions
        </h2>
        <h2
          className="solutions-sub-header-text"
          style={{ textAlign: "center", fontWeight: 800 }}
        >
          We Are <span>Dedicated</span> To Serve You All Time
        </h2>
        <h3 style={{ textAlign: "center", fontWeight: 700 }}>
          Empower your business with our dynamic suite of innovative solutions
        </h3>
      </div>
      <div className="container-gallery">
        <div className="image-container">
          <img src="/IOT.png" alt="Sample photo" />
          <div className="overlay">IOT Solution</div>
        </div>

        <div className="image-container">
          <img src="/E-TICKETING.png" alt="Sample photo" />
          <div className="overlay">E-TICKETING</div>
        </div>
        <div className="image-container">
          <img src="/TOLL1.png" alt="Sample photo" />
          <div className="overlay">TOLL</div>
        </div>
        <div className="image-container">
          <img src="/PGS.png" alt="Sample photo" />
          <div className="overlay">Parking Guidance</div>
        </div>

        <div className="image-container">
          <img src="/PARKING-MANAGEMENT2.png" alt="Sample photo" />
          <div className="overlay">Parking Management</div>
        </div>
      </div>
    </>
  );
}

export default Gallry;

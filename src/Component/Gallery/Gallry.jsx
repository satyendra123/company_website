import React, { useState, useEffect } from "react";
import "./GalleryImagesmodules.css";

function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      {isMobile ? (
        /* Mobile Layout */
        <div className="mobile-container-gallery">
          <div className="mobile-image-container mobile-clip-path-5">
            <img src="/IOT.png" alt="Sample photo" className="img-fluid"/>
            <div className="mobile-overlay">IOT Solution</div>
          </div>
          <div className="mobile-image-container mobile-clip-path-5">
            <img src="/E-TICKETING.png" alt="Sample photo" className="img-fluid" />
            <div className="mobile-overlay">E-TICKETING</div>
          </div>
          <div className="mobile-image-container mobile-clip-path-5">
            <img src="/TOLL1.png" alt="Sample photo" className="img-fluid"/>
            <div className="mobile-overlay">TOLL</div>
          </div>
          <div className="mobile-image-container mobile-clip-path-5">
            <img src="/PGS.png" alt="Sample photo" className="img-fluid"/>
            <div className="mobile-overlay">Parking Guidance</div>
          </div>
          <div className="mobile-image-container mobile-clip-path-5">
            <img src="/PARKING-MANAGEMENT2.png" alt="Sample photo" className="img-fluid"/>
            <div className="mobile-overlay">Parking Management</div>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="container-gallery">
          <div className="image-container default-clip-path-5">
            <img src="/IOT.png" alt="Sample photo" />
            <div className="overlay">IOT Solution</div>
          </div>
          <div className="image-container default-clip-path-5">
            <img src="/E-TICKETING.png" alt="Sample photo" />
            <div className="overlay">E-TICKETING</div>
          </div>
          <div className="image-container default-clip-path-5">
            <img src="/TOLL1.png" alt="Sample photo" />
            <div className="overlay">TOLL</div>
          </div>
          <div className="image-container default-clip-path-5">
            <img src="/PGS.png" alt="Sample photo" />
            <div className="overlay">Parking Guidance</div>
          </div>
          <div className="image-container default-clip-path-5">
            <img src="/PARKING-MANAGEMENT2.png" alt="Sample photo" />
            <div className="overlay">Parking Management</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;

import React, { useState, useEffect } from "react";
import fliptiler80 from "./FlappbarrierIMG/Fliptiler80.png";
import "../Productsubfeatures/Vegasub.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./FlappbarrierIMG/Flapbarriericons/2ywarranty.png";
import icon2 from "./FlappbarrierIMG/Flapbarriericons/10ywarranty.png";
import icon3 from "./FlappbarrierIMG/Flapbarriericons/Automatic.png";

const FlaptileR80 = ({ isMobileView }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">FLAPTILE R80</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                High-Traffic Efficiency with Precision Control
              </h6>
            </Col>
          </Row>

          {isMobileView ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p className="text-justify">
                    Designed for heavy footfall, the FlapTile R80 is equipped with five pairs of infrared sensors for precise detection, enabling efficient management of busy access points. Its versatile lane configuration makes it suitable for diverse applications.
                  </p>
                </div>
              </div>

              {/* Mobile Layout: Image and Icons in a single row with Col */}
              <Row className="mb-3">
                {/* Image in first Col */}
                <Col xs={9} className="mb-3">
                  <Image
                    src={fliptiler80}
                    alt="fliptiler80"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                {/* Icons in second Col */}
                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="MCBF" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="Automatic Version" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Automatic Version</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            // Desktop Layout
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Designed for heavy footfall, the FlapTile R80 is equipped with five pairs of infrared sensors for precise detection, enabling efficient management of busy access points. Its versatile lane configuration makes it suitable for diverse applications.
                </p>
              </Col>
              <Col md={1}></Col>

              {/* Image */}
              <Col md={3} className="text-center">
                <Image
                  src={fliptiler80}
                  alt="fliptiler80"
                  style={{ height: '150px', width: "100%" }}
                />
              </Col>

              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="MCBF" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="Automatic Version" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Automatic Version</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FlaptileR80;

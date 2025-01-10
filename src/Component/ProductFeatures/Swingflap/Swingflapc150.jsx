import React, { useState, useEffect } from "react";
import Turner150 from "./SWINGFLAPIMG/turnerc150.png";
import "./Swingflapc100.css";
import icon1 from "./SWINGFLAPIMG/swingflapicons/2ywarranty.png";
import icon2 from "./SWINGFLAPIMG/swingflapicons/6ywarranty.png";
import icon3 from "./SWINGFLAPIMG/swingflapicons/Automatic.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Swingbarrierc150 = () => {
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
              <h4 className="fw-bold">FLAPTILE SW1180</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Elegance Meets Efficiency for Prestigious Spaces
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    A true blend of refinement and functionality, the SwingTile SW 1180 is crafted for luxury entrances such as banks, corporate offices, and high-end establishments. Its seamless integration with access systems and premium design make it a statement of sophistication and reliability.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={Turner150}
                    alt="SwingTile SW1180"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
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
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  A true blend of refinement and functionality, the SwingTile SW 1180 is crafted for luxury entrances such as banks, corporate offices, and high-end establishments. Its seamless integration with access systems and premium design make it a statement of sophistication and reliability.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={Turner150}
                  alt="SwingTile SW1180"
                  style={{ height: '150px', width: "100%" }}
                />
              </Col>
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
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

export default Swingbarrierc150;

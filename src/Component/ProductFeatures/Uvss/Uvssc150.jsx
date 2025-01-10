import React, { useState, useEffect } from "react";
import Turner150 from "./UVSSIMG/portableuvss.png";
import "./Uvssc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./UVSSIMG/Uvssicons/2ywarranty.png";
import icon2 from "./UVSSIMG/Uvssicons/67iprating.png";
import icon3 from "./UVSSIMG/Uvssicons/manualscanningspeed.png";

const Uvssc150 = () => {
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
              <h4 className="fw-bold">SS2130P PORTABLE UVSS</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Real-Time Undercarriage Scanning
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Real-time scanning and display of vehicle undercarriages to detect hidden threats, ensuring safe facility access.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={Turner150}
                    alt="SS2130P Portable UVSS"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="IP Rating" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>IP Rating</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="Scanning Speed" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Scanning Speed</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Real-time scanning and display of vehicle undercarriages to detect hidden threats, ensuring safe facility access.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={Turner150}
                  alt="SS2130P Portable UVSS"
                  style={{ height: '150px', width: "100%" }}
                />
              </Col>
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="IP Rating" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>IP Rating</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="Scanning Speed" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Scanning Speed</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Uvssc150;

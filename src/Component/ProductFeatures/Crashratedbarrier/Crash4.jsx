import React, { useState, useEffect } from "react";
import crash4 from "./CRASHIMG/Roacker B380.png";
import "./Crash.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./CRASHIMG/Crashratingicons/2ywarranty.png";
import icon2 from "./CRASHIMG/Crashratingicons/10ywarranty.png";
import icon3 from "./CRASHIMG/Crashratingicons/k4crashrating.png";

const Crash4 = () => {
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
              <h4 className="fw-bold">CERA 350</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Reliable Strength, Unmatched Security—Your First Line of Defense
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Precision-crafted to provide unmatched anti-terrorist protection, the CRB350 delivers robust defense, ensuring the highest level of security for critical assets and environments. Its advanced design offers peace of mind and dependable performance in high-risk zones.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={crash4}
                    alt="CERA 350"
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
                    <Image src={icon3} alt="K4 Crash Rating" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>K4 Crash Rating</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Precision-crafted to provide unmatched anti-terrorist protection, the CRB350 delivers robust defense, ensuring the highest level of security for critical assets and environments. Its advanced design offers peace of mind and dependable performance in high-risk zones.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={crash4}
                  alt="CERA 350"
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
                  <Image src={icon3} alt="K4 Crash Rating" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>K4 Crash Rating</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Crash4;

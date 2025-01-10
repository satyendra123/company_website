import React, { useState, useEffect } from "react";
import road1 from "./ROADIMG/ROCKER B380.png";
import "./Road.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ROADIMG/Roadblockicons/2ywarranty.png";
import icon2 from "./ROADIMG/Roadblockicons/10ywarranty.png";
import icon3 from "./ROADIMG/Roadblockicons/k4crashrating.png";

const Road1 = () => {
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
              <h4 className="fw-bold">RADO B380</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Fortify Access, Neutralize Threats—Unyielding Defense for High-Security Zones
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Engineered to withstand extreme Vehicle-Borne Improvised Explosive Device (VBIED) threats,
                    the K-10 Wedge Barrier provides unparalleled protection for critical infrastructure and high-security facilities.
                    Its robust design ensures ultimate reliability for safeguarding entry points.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={road1}
                    alt="RADO B380"
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
                  Engineered to withstand extreme Vehicle-Borne Improvised Explosive Device (VBIED) threats,
                  the K-10 Wedge Barrier provides unparalleled protection for critical infrastructure and high-security facilities.
                  Its robust design ensures ultimate reliability for safeguarding entry points.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={road1}
                  alt="RADO B380"
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

export default Road1;

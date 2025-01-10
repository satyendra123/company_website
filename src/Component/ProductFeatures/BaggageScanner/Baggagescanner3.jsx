import React, { useState, useEffect } from "react";
import baggage2 from "./BaggageScannerIMG/Baggage2.png";
import "./Baggage.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BaggageScannerIMG/baggagescannericons/2ywarranty.png";
import icon2 from "./BaggageScannerIMG/baggagescannericons/dualview.png";
import icon3 from "./BaggageScannerIMG/baggagescannericons/aerb.png";

const Baggagescanner3 = () => {
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
              <h4 className="fw-bold">HS6040</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Your Frontline Defense Against Modern Threats
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Specially crafted for airports and high-security facilities, the HS6040 offers unparalleled automatic detection of both solid and liquid items. With its advanced imaging capabilities, it ensures top-tier security while optimizing operational efficiency.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={baggage2}
                    alt="Baggage Scanner"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="Dual View" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Dual View</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="AERB Certified" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>AERB Certified</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Specially crafted for airports and high-security facilities, the HS6040 offers unparalleled automatic detection of both solid and liquid items. With its advanced imaging capabilities, it ensures top-tier security while optimizing operational efficiency.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={baggage2}
                  alt="Baggage Scanner"
                  style={{ height: "150px", width: "100%" }}
                />
              </Col>
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="Dual View" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Dual View</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="AERB Certified" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>AERB Certified</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Baggagescanner3;

import React, { useState, useEffect } from "react";
import baggage1 from "./BaggageScannerIMG/Baggage1.png";
import "./Baggage.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BaggageScannerIMG/baggagescannericons/2ywarranty.png";
import icon2 from "./BaggageScannerIMG/baggagescannericons/dualview.png";
import icon3 from "./BaggageScannerIMG/baggagescannericons/aerb.png";

const Baggagescanner1 = () => {
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
              <h4 className="fw-bold text-uppercase">HS100100</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Elevate Efficiency with Unmatched Versatility
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    The HS100100 x-ray detection equipment offers a blend of innovative technology and intuitive design, delivering
                    exceptional performance for secure inspection. With the ability to display both pseudo color and black and white images,
                    this system ensures precise identification and analysis. Built with a user-centric approach, it combines efficiency and simplicity,
                    making it an indispensable tool for high-security operations.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={baggage1}
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
                  The HS100100 x-ray detection equipment offers a blend of innovative technology and intuitive design, delivering
                  exceptional performance for secure inspection. With the ability to display both pseudo color and black and white images,
                  this system ensures precise identification and analysis. Built with a user-centric approach, it combines efficiency and simplicity,
                  making it an indispensable tool for high-security operations.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={baggage1}
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

export default Baggagescanner1;

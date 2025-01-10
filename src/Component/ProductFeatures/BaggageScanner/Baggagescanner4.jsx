import React, { useState, useEffect } from "react";
import baggage4 from "./BaggageScannerIMG/Baggage2.png";
import "./Baggage.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BaggageScannerIMG/baggagescannericons/2ywarranty.png";
import icon2 from "./BaggageScannerIMG/baggagescannericons/dualview.png";
import icon3 from "./BaggageScannerIMG/baggagescannericons/aerb.png";

const Baggagescanner4 = () => {
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
              <h4 className="fw-bold">HS5030</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Streamlined Security for Mid-Size Packages and Parcels
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    The HS5030 is purpose-built to deliver precise and efficient screening for mid-size packages and parcels. Combining advanced technology with energy-efficient performance, it ensures thorough security checks while offering a user-friendly experience. Ideal for facilities seeking cost-effective and reliable scanning solutions.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={baggage4}
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
                  The HS5030 is purpose-built to deliver precise and efficient screening for mid-size packages and parcels. Combining advanced technology with energy-efficient performance, it ensures thorough security checks while offering a user-friendly experience. Ideal for facilities seeking cost-effective and reliable scanning solutions.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={baggage4}
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

export default Baggagescanner4;

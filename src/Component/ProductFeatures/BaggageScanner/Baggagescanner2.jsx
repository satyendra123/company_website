import React from "react";
import baggage2 from "./BaggageScannerIMG/Baggage2.png";
import "./Baggage.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BaggageScannerIMG/baggagescannericons/2ywarranty.png";
import icon2 from "./BaggageScannerIMG/baggagescannericons/dualview.png";
import icon3 from "./BaggageScannerIMG/baggagescannericons/aerb.png";

const Baggagescanner2 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">HS6550</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Redefining Security Scanning Standards
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            The HS6550 is engineered to deliver exceptional results with its solid build and expansive scanning tunnel, seamlessly accommodating diverse baggage sizes. Its advanced X-ray imaging technology guarantees crystal-clear, high-resolution visuals for accurate threat detection in critical scenarios.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={baggage2}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>warranty</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon2} alt="Icon 2" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>Dual View</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    AERB Certified
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Baggagescanner2



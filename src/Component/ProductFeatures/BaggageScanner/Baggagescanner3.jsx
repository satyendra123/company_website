import React from "react";
import baggage3 from "./BaggageScannerIMG/Baggage3.png";
import "./Baggage.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BaggageScannerIMG/baggagescannericons/2ywarranty.png";
import icon2 from "./BaggageScannerIMG/baggagescannericons/dualview.png";
import icon3 from "./BaggageScannerIMG/baggagescannericons/aerb.png";

const Baggagescanner3 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">HS6040</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Your Frontline Defense Against Modern Threats
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Specially crafted for airports and high-security facilities, the HS6040 offers unparalleled automatic detection of both solid and liquid explosives. With its advanced imaging capabilities, it ensures top-tier security while optimizing operational efficiency.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={baggage3}
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

export default Baggagescanner3


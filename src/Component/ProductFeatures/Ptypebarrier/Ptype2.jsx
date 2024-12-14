import React from "react";
import ptype2 from "./PTYPEIMG/P-TYPE P100.png";
import "./Ptype.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./PTYPEIMG/Ptypeicons/2ywarranty.png";
import icon2 from "./PTYPEIMG/Ptypeicons/10ywarranty.png";
import icon3 from "./PTYPEIMG/Ptypeicons/k4crashrating.png";
const Ptype2 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold"> P-TYPE P100</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Built to Endure, Designed to Perform.

              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              Engineered with premium-grade materials, the Swing Tile P100 guarantees exceptional longevity, ensuring uninterrupted performance during the busiest hours. Its superior build quality delivers reliability and peace of mind for high-traffic applications.


              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={ptype2}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>Year Warranty</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon2} alt="Icon 2" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    Duty Cycle
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Ptype2
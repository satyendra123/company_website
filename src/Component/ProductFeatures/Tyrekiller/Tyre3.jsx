import React from "react";
import road1 from "./TYREIMG/AXER B200.png";
import "./Tyre.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./TYREIMG/Tyreicons/2ywarranty.png";
import icon2 from "./TYREIMG/Tyreicons/10ywarranty.png";
import icon3 from "./TYREIMG/Tyreicons/50ywarranty.png";


const Tyre3 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">TITAN B200</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Heavy-Duty Protection, Instant Immobilization—Safety at Every Entrance.
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              The Axer B200 combines heavy-duty steel construction with a streamlined design to swiftly immobilize intruding vehicles by disabling their axles, suspension, 
              and wheels. An ideal solution for advanced security needs.


              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={road1}
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
    Axle Load
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Tyre3
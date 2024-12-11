import React from "react";
import road3 from "./ROADIMG/AXER B200.png";
import "./Road.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ROADIMG/Roadblockicons/2ywarranty.png";
import icon2 from "./ROADIMG/Roadblockicons/10ywarranty.png";
import icon3 from "./ROADIMG/Roadblockicons/50ywarranty.png";

const Road3 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">AXER B200</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Welcome to the Doorways to the Convenience</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              Crafted from robust, heavy-duty blades to swiftly immobilize
              intruding vehicles by targeting their suspension, axle, and wheels
              on the spot.
              </p>
            </Col>

            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={road3}
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

export default Road3
import React from "react";
import drop1 from "./DROPARMIMG/P-TYPE P200.png";
import "./Drop.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./DROPARMIMG/Droparmicons/2ywarranty.png";
import icon2 from "./DROPARMIMG/Droparmicons/10ywarranty.png";
import icon3 from "./DROPARMIMG/Droparmicons/100percentage.png";
const Drop1 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">P-TYPE P200</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Empowering Access with Every Swing.
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              Crafted with unwavering attention to quality, the Swing Tile P200 exemplifies durability and dedication to inclusivity. Designed specifically to cater to individuals with special needs, it delivers steadfast service without Compromise.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={drop1}
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

export default Drop1
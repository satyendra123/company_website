import React from "react";
import road4 from "./PTYPEIMG/DROPARM D80.png";
import "./Ptype.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./PTYPEIMG/Ptypeicons/2ywarranty.png";
import icon2 from "./PTYPEIMG/Ptypeicons/10ywarranty.png";
import icon3 from "./PTYPEIMG/Ptypeicons/k4crashrating.png";
const Ptype4 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">DROPARM D80</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>A Fusion of Design and Security.

              </h6>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              The Drop Arm Barrier blends sleek design with unparalleled durability. It ensures secure, efficient access control in diverse environments, safeguarding entrances and exits with ease.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={road4}
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

export default Ptype4
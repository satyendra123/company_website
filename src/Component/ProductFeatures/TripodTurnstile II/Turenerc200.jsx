import React from "react";
import turnerc200 from "./TRIPODEIMG/Turnerc200.png";
import "./Turnerc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./TRIPODEIMG/Tripodtwoicons/2ywarranty.png";
import icon2 from "./TRIPODEIMG/Tripodtwoicons/10ywarranty.png";
import icon3 from "./TRIPODEIMG/Tripodtwoicons/Automatic.png";

const Turenerc200 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold text-uppercase">Turner c200</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Compact Design with Superior Control Capabilities
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            The Turner c200 is a space-efficient solution equipped with multi-format card readers and an integrated card-capture system. 
            Its modern design enhances communication and access control, making it a preferred choice for sleek, high-tech environments.
              </p>
            </Col>

            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={turnerc200}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon2} alt="Icon 2" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    Automatic Version
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Turenerc200
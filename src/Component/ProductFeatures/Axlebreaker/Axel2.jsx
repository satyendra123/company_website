import React from "react";
import road2 from "./AXELIMG/TYRE K1100.png";
import "./Axel.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./AXELIMG/Axleicons/2ywarranty.png";
import icon2 from "./AXELIMG/Axleicons/10ywarranty.png";
import icon3 from "./AXELIMG/Axleicons/50ywarranty.png";

const Axel2 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">KETO K1100</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Unstoppable Security, Seamless Control—The Power to Halt with Precision</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              Experience superior perimeter security with the Tyre Killer K1100, designed to stop unauthorized vehicles in their tracks with precision. Its high-durability structure ensures efficient wheel and rim immobilization, even during power outages.
              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={road2}
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

export default Axel2
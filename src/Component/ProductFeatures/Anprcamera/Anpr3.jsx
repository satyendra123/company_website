import React from "react";
import anpr3 from "./AnprcameraIMG/EE2070M.png";
import "./Anpr.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./AnprcameraIMG/Anpricons/2ywarranty.png";
import icon2 from "./AnprcameraIMG/Anpricons/98percentage.png";
import icon3 from "./AnprcameraIMG/Anpricons/85percentage.png";

const Anpr3 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">EE2070S</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Revolutionizing Tolling with Precision and Durability
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            The EE2070S is your ultimate solution for high-performance ANPR in free-flow tolling systems.
             Built for durability and precision, 
             this robust camera seamlessly adapts to pole and gantry installations, delivering exceptional accuracy and reliability to streamline toll operations.
              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={anpr3}
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
    <span className="text-center" style={{ fontSize: "8.5px" }}>Accuracy</span>
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

export default Anpr3
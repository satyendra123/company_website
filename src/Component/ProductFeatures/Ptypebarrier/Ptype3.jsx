import React from "react";
import road3 from "./PTYPEIMG/DROPARM D50.png";
import "./Ptype.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./PTYPEIMG/Ptypeicons/2ywarranty.png";
import icon2 from "./PTYPEIMG/Ptypeicons/10ywarranty.png";
import icon3 from "./PTYPEIMG/Ptypeicons/k4crashrating.png";
const Ptype3 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">DROPARM D50</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Where Strength Meets Convenience.

              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              Perfect for high-traffic areas, the Drop Tile's robust single-arm design ensures unmatched durability and safety. It facilitates seamless access for authorized personnel while standing the test of time.
              </p>
            </Col>
            <Col md={1}>
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

export default Ptype3
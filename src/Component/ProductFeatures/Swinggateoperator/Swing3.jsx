import React from "react";
import swing3 from "./swinggateoperatorIMG/viper.png";
import "./Swing.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./swinggateoperatorIMG/Swinggateicons/2ywarranty.png";
import icon2 from "./swinggateoperatorIMG/Swinggateicons/Esunkitwarranty.png";
import icon3 from "./swinggateoperatorIMG/Swinggateicons/100percentage.png";

const Swing3 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">VIPER</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Undeniable Strength for Underground Gate Systems
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Take your gate automation to the next level with VIPER's cutting-edge technology. 
            Tailored for residential swing gates,
             this motor features an underground installation and a standard 110° opening angle.
             
              VIPER’s robust mechanism ensures stable and secure operation, blending sophistication with functionality.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={swing3}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon2} alt="Icon 2" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>E-Sun Kit</span>
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

export default Swing3
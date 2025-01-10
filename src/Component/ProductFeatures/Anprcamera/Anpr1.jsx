import React,{useState, useEffect} from "react";
import anpr1 from "./AnprcameraIMG/EE2010M.png";
import "./Anpr.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./AnprcameraIMG/Anpricons/2ywarranty.png";
import icon2 from "./AnprcameraIMG/Anpricons/92percentage.png";
import icon3 from "./AnprcameraIMG/Anpricons/85percentage.png";

const Anpr1 = ({ isMobileView }) => {

   const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      checkScreenWidth();
      window.addEventListener("resize", checkScreenWidth);
      return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">EE2010M</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Redefine Surveillance with Precision and Mobility
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              {/* Mobile Layout */}
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p className="text-justify">
                    Offering mobile mounting capabilities, this camera excels in security applications and on-street parking management, ensuring comprehensive surveillance.
                  </p>
                </div>
              </div>

              {/* Image and Icons in a single row with Col */}
              <Row className="mb-3">
                {/* Image in first Col */}
                <Col xs={9} className="mb-3">
                  <Image
                    src={anpr1}
                    alt="anpr1"
                    style={{ maxWidth: "50%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                {/* Icons in second Col */}
                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Year Warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="Accuracy" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Accuracy</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="Duty Cycle" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Duty Cycle</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            // Desktop Layout
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Offering mobile mounting capabilities, this camera excels in security applications and on-street parking management, ensuring comprehensive surveillance.
                </p>
              </Col>
              <Col md={1}></Col>

              {/* Image */}
              <Col md={3} className="text-center">
                <Image
                  src={anpr1}
                  alt="anpr1"
                  style={{ height: '150px', width: "100%" }}
                />
              </Col>

              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Year Warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="Accuracy" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Accuracy</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="Duty Cycle" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Duty Cycle</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Anpr1;

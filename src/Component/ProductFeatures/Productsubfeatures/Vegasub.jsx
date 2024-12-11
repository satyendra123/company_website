import React from "react";
import Tarnedo_vega from "./ProductsubfeauresIMG/Tarnedo_vega.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ProductsubfeauresIMG/Productfeaturesicons/2ywarranty.png";
import icon2 from "./ProductsubfeauresIMG/Productfeaturesicons/5ywarranty.png";
import icon3 from "./ProductsubfeauresIMG/Productfeaturesicons/Esunkitwarranty.png";



{/*
const Vegasub = ({ isActive }) => {
  return (
    <div className="vega">
      <div
        style={{ marginLeft: "8px", marginTop: "5px" }}
        className="leftsidecard"
      >

        <div className="d-flex justify-content-center">
          <h3
            className="vega-header"
          >
            VEGA
          </h3>
        </div>
        <div className="d-flex justify-content-center">
          <h4>
            Swift Access, Secure Living
          </h4>
        </div>

        <div className="row">
          <div className="col-md-6 productpagetext-section">

            <div className="card-logo">
              <p>
                The Vega boom barrier in our series is designed for quick and
                efficient access control, ideal for rapid transit and residential
                projects. It ensures smooth entry, enhancing security
                and peace of mind.
              </p>
            </div>
          </div>
          <div style={{}} className="col-md-6 productpageimage-section">
            <div>
              <img
                style={{
                  marginTop: "85px",
                  marginLeft: isActive ? "18px" : "50px",
                  marginTop: isActive ? "95%" : "40%",
                  width: isActive ? "100px" : "150px",
                  height: isActive ? "100px" : "150px",
                }}
                src={Tarnedo_vega}
                alt="Tarnedo"
                className={`vega-image ${isActive ? "enlarged" : ""}`}
              />
            </div>
            <div
              style={{ marginLeft: isActive ? "30px" : "65px" }}
              className="vertical-images d-flex flex-column"
            >
              <div className="image-with-text">
                <img
                  style={{ width: isActive ? "38px" : "" }}
                  src={icon1}
                  alt="Year Warranty"
                  className="img-fluid"
                />
                <span style={{ fontSize: isActive ? "10px" : "" }}>
                  Year Warranty
                </span>
              </div>
              <div className="image-with-text">
                <img
                  style={{ width: isActive ? "38px" : "" }}
                  src={icon2}
                  alt="MCBF"
                  className="img-fluid"
                />
                <span style={{ fontSize: isActive ? "10px" : "" }}>MCBF</span>
              </div>
              <div className="image-with-text">
                <img
                  style={{ width: isActive ? "38px" : "" }}
                  src={icon3}
                  alt="Duty Cycle"
                  className="img-fluid"
                />
                <span style={{ fontSize: isActive ? "8.5px" : "" }}>
                  E-Sun Kit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegasub;
*/}

const Vegasub = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">VEGA</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Swift Access, Secure Living</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              The Vega boom barrier in our series is designed for quick and efficient access control, 
              ideal for rapid transit and residential projects. It ensures smooth and quick access, enhancing security 
              and peace of mind.
              </p>
            </Col>
          
          <Col md={1}>
          </Col>

            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={Tarnedo_vega}
                alt="Vega Sub"
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
    <span className="text-center" style={{ fontSize: "8.5px" }}>Million cycle</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
  E-Sun Kit
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vegasub;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import relation from "./Company_Ethics_Imajes/relationimage.png";
import laptop from "./Company_Ethics_Imajes/laptop.png";
import workplace from "./Company_Ethics_Imajes/workplace_morality.png";

const CompanyEthics = () => {
  return (
    <Container className="my-5">
      <h2
        style={{
          color: "#000000",
          fontFamily: "Poppins, sans-serif",
          fontSize: "48px",
          lineHeight: "72px",
          fontWeight: "600",
        }}
        className="text-center mb-4"
      >
        Company Ethics
      </h2>
      <Row className="flex-column flex-md-row">
        {/* Left Section: Images */}
        <Col md={6} className="mb-4 d-flex flex-column align-items-center position-relative">
          <Row className="mb-3 position-relative">
            <Col xs={6} className="mb-3 position-relative d-flex justify-content-center">
              <img
                src={workplace}
                alt="Workplace Morality"
                className="img-fluid rounded overlap-image"
              />
            </Col>
            <Col xs={6} className="mb-3 position-relative d-flex justify-content-center">
              <img
                src={relation}
                alt="Relation"
                className="img-fluid rounded overlap-image"
              />
            </Col>
          </Row>
          <Col xs={12} className="position-relative d-flex justify-content-center">
            <img
              src={laptop}
              alt="Laptop"
              className="img-fluid rounded overlap-image"
            />
          </Col>
        </Col>

        {/* Right Section: Text */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center align-items-md-start text-md-left text-center"
        >
          <h4
            style={{
              color: "#058AFB",
              fontFamily: "Poppins, sans-serif",
              fontSize: "32px",
              lineHeight: "48.28px",
              fontWeight: "600",
            }}
            className="mb-3"
          >
            At Houston Systems Pvt. Ltd.,
          </h4>
          <p
            className="text-justify"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              lineHeight: "30.17px",
              fontWeight: "400",
            }}
          >
            Our foundation is built on integrity, transparency, and commitment to
            ethical business practices. We firmly believe that ethical conduct
            fosters trust, which is the cornerstone of our relationships with
            clients, employees, and partners. Upholding fairness, accountability,
            and respect in every interaction is a non-negotiable part of our
            culture.
          </p>
          <a
            href="#"
            style={{
              color: "#058AFB",
              textDecoration: "none",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "700",
            }}
          >
            Join Us &gt;
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyEthics;

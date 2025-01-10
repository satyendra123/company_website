import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  return (
    <Container>
      <Row>

        <h1 className="text-center mb-5">Frequently Ask Questions</h1>
        {/* First Column */}
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-3 shadow-sm">
              <Accordion.Header style={{fontWeight:"1200"}}>How do you ensure scalability and performance in software development?</Accordion.Header>
              <Accordion.Body>
              We offer end-to-end solutions including custom software development, API development, SDK integration, and system integration.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 shadow-sm">
              <Accordion.Header>What industries do you serve with software development services?</Accordion.Header>
              <Accordion.Body>
                This is the second accordion body.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 shadow-sm">
              <Accordion.Header>What industries do you serve with software development services?</Accordion.Header>
              <Accordion.Body>
              What industries do you serve with software development services?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Second Column */}
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-3 shadow-sm">
              <Accordion.Header>How do you ensure scalability and performance in software development?</Accordion.Header>
              <Accordion.Body>
                This is the fourth accordion body.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3 shadow-sm">
              <Accordion.Header>What is API development, and why is it important?</Accordion.Header>
              <Accordion.Body>
                This is the fifth accordion body.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3 shadow-sm">
              <Accordion.Header>How do you approach system integration challenges?</Accordion.Header>
              <Accordion.Body>
                This is the sixth accordion body.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;

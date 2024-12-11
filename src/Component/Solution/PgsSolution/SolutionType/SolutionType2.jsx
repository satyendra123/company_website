import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SolutionType2() {
  return (
    <Container className="my-4">
      <Row className="gx-4 mb-4">
        <Col md={5} className="d-flex align-items-stretch">
          <Card className="shadow" style={{ height: '324px' }}>
            <Card.Body>
              <Card.Title className="fw-bold text-center mt-5">A-Park</Card.Title>
              <Card.Text className="m-auto p-5">
              A-Park is an integrated system ideal for large parking areas, featuring entry and exit terminals with Manned and Automated Pay Stations for a seamless and convenient user experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Row className="gx-4 mb-4">
            <Col md={12}>
              <Card className="border shadow" style={{ height: '150px' }}>
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">M-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                  M-Park is a versatile parking system tailored to custom needs, offering flexible solutions for both revenue-based and free parking with manned or unmanned options.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Second Nested Row */}
          <Row className="gx-4 gy-4">
            {/* Off-Street PMS */}
            <Col md={12}>
              <Card className="shadow" style={{ height: '150px' }}>
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">F-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                  F-Park is designed for on-street parking in urban areas, featuring flap lock models for improved management, secure revenue, and energy efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;

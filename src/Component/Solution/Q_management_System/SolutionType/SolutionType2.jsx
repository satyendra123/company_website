import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upark from '../Q_Esolution/UPARK/Qesolution';
import updated_icon1 from '../SolutionProduct/SolutionProductImages/Updated_Icon/updated_icon1.png';
import updated_icon2 from '../SolutionProduct/SolutionProductImages/Updated_Icon/updated_icon2.png';
import updated_icon3 from '../SolutionProduct/SolutionProductImages/Updated_Icon/updated_icon3.png';
import updated_icon4 from '../SolutionProduct/SolutionProductImages/Updated_Icon/updated_icon4.png';

function SolutionType2() {
  return (
    <Container className="my-5">
      <Row className="shadow">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5"style={{marginTop:"-5%"}}src={updated_icon1} alt="Enhanced Staff Productivity" />
            <h5 className="ml-5"style={{marginTop:"-15px"}}>Enhanced Staff <br /> <span className='mr-4'>Productivity</span></h5>
            <p>
              QMS delivers real-time insights to enhance efficiency,staff
              performance, and customer focus.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon2} alt="Mitigated Customer Uncertainty" />
            <h5>Mitigated Customer Uncertainty</h5>
            <p>
              QMS uses real-time updates to keep customers informed, engaged,
              and reassured during their wait.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon3} alt="Reduced Waiting Times" />
            <h5 style={{marginTop:"4%"}}>Reduced Waiting <br /> Times</h5>
            <p>
              QMS optimizes customer flow, reducing wait times and congestion
              while ensuring seamless service, even at peak hours.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5"src={updated_icon4} alt="Elevated Customer Experience" />
            <h5>Elevated Customer Experience</h5>
            <p>
              QMS improves customer experience with digital signage displaying
              real-time ticket updates, boosting transparency and satisfaction.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Upark />
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;

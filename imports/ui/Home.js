import React from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Row
} from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center my-5">
        <Container fluid>
          <Row>
            <Col sm={{ size: 10, offset: 1}}>
              <h1 className="display-4">Chainama </h1>
              <p className="lead my-3">
                Welcome To Chainama Adventist Church Dashboard
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <p className='text-center'>
              Download and Install our mobile app for real time updates
            </p>
            <hr/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home

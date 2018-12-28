import React from 'react';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Button,
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
              <h1 className="display-4">Chai Updates</h1>
              <p className="lead my-3">
                An example reactstrap component built, 
                documented & published with 
                <a href="https://github.com/reactstrap/component-template">Component Template</a>
              </p>
              <p>
                 <Button tag={Link} color="danger" to="/documentation">Documentation</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Getting Started</h2>
            <hr/>
            <p>
              Install and save the component to your project
            </p>
            <p>
              ES6 - import the component you need
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home

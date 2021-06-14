import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { Account, Overview } from '../../Components';

const Dashboard = () => {
  console.log('App Ready');
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <Overview />
        </Col>
        <Col xs={9}>
          <Account />
        </Col>
      </Row>
    </Container>
  );
};

export {
  Dashboard
};
import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { Account, Overview } from '../../Components';

const Dashboard = () => (
  <Container fluid>
    <Row>
      <Col xs={8}>
        <Account />
      </Col>
      <Col xs={4}>
        <Overview />
      </Col>
    </Row>
  </Container>
);

export {
  Dashboard
};

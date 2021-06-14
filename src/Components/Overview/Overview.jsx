import React from 'react';
import {
  Card,
  Col,
  ListGroup,
  ProgressBar,
  Row
} from 'react-bootstrap';
import StyledOverview from './Overview.style';

const Overview = () => {
  console.log('Overview Ready');
  return (
    <StyledOverview>
      <Card>
        <Card.Body>
          <Card.Subtitle className="text-muted">Saldo disponível</Card.Subtitle>
          <Card.Title>R$ 8.745,96</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Subtitle className="text-muted">Crédito disponível</Card.Subtitle>
              <Card.Title>R$ 2.300,00</Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Subtitle className="text-muted mb-3">Cartão</Card.Subtitle>
              <ProgressBar now={45} label={`R$ 450,00`} />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  **** **** **** 3182 <span> Visa</span>
                </ListGroup.Item>
                <ListGroup.Item>Status <span className="active">Ativo</span></ListGroup.Item>
                <ListGroup.Item>Moeda <span>BRL</span></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </StyledOverview>
  );
};

export {
  Overview
};
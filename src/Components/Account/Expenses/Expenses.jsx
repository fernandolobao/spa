import React from 'react';
import {
  Col,
  Row
} from 'react-bootstrap';
import { History } from './History';
import StyledExpenses from './Expenses.style';

const Expenses = ({
  transactions
}) => (
  <StyledExpenses>
    <Row>
      <Col xs={12} className="columns">
        <History transactions={transactions} inValue outValue />
      </Col>
    </Row>
  </StyledExpenses>
);

export {
  Expenses
};

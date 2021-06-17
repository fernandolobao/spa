import React from 'react';
import {
  Col,
  Row
} from 'react-bootstrap';
import { Chart } from 'react-google-charts';
import { History } from './History';
import StyledExpenses from './Expenses.style';

const Expenses = ({
  transactions
}) => {
  console.log('Expenses Ready');

  return (
    <StyledExpenses>
      <Row>
        <Col xs={6}>
          <h4>Extrato</h4>
          <History transactions={transactions} />
        </Col>
        <Col xs={6}>
          <Row>
            <h4>Entrada</h4>
            <Chart
              // width={'500px'}
              chartLanguage="pt-BR"
              height={'300px'}
              chartType="BarChart"
              loader={<div>Carregando</div>}
              data={[
                ['Dia', 'R$'],
                ['Seg', 15000],
                ['Ter', 37900],
                ['Qua', 26900],
                ['Qui', 20900],
                ['Sex', 15200],
              ]}
              options={{
                // chartArea: { left: '0' },
                legend: { position: 'none' },
                hAxis: {
                  minValue: 0,
                  format: 'currency'
                },
              }}
              // For tests
              rootProps={{ 'data-testid': '1' }}
            />
          </Row>
          <Row>Saída</Row>
        </Col>
      </Row>
    </StyledExpenses>
  );
}

export {
  Expenses
};
import React from 'react';
import { render, screen } from '@testing-library/react';
import { History } from './History';

test('History is rendered properly', () => {
  render(
    <History
      transactions={[
        {
          id: 1,
          category: 'home',
          corp: 'Aluguel',
          value: 2470.84,
          date: new Date(2021, 5, 12),
          type: 'in'
        },
        {
          id: 2,
          category: 'zap',
          corp: 'Companhia Estadual de Energia Elétrica',
          value: 125.45,
          date: new Date(2021, 5, 13),
          type: 'in'
        }
      ]}
      inValue
    />
  );
  const historyNode = screen.getByTestId('history');
  const childNode = historyNode.getElementsByClassName('transaction');

  expect(historyNode).toBeInTheDocument();
  expect(historyNode).toHaveClass('history');
  expect(historyNode).toHaveClass('in');
  expect(childNode).toHaveLength(2);
});


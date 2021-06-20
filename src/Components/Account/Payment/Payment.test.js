import React from 'react';
import { render, screen } from '@testing-library/react';
import { Payment } from './Payment';

test('Payment is rendered properly', () => {
  render(
    <Payment />
  );
  const historyNode = screen.getByTestId('payment');
  const inputsNode = historyNode.getElementsByClassName('form-control');

  expect(historyNode).toBeInTheDocument();
  expect(historyNode).toHaveClass('payment');
  expect(inputsNode).toHaveLength(3);
});


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Payment } from './Payment';

test('Payment is rendered properly', () => {
  render(
    <Payment />
  );
  const paymentNode = screen.getByTestId('payment');
  const inputsNode = paymentNode.getElementsByClassName('form-control');

  expect(paymentNode).toBeInTheDocument();
  expect(paymentNode).toHaveClass('payment');
  expect(inputsNode).toHaveLength(3);
});

test('Payment changes value correctly', () => {
  render(
    <Payment />
  );
  const paymentNode = screen.getByTestId('payment');
  const inputsNode = paymentNode.getElementsByClassName('form-control');

  fireEvent.change(inputsNode[0], { target: { value: '9999-9' } });
  fireEvent.change(inputsNode[1], { target: { value: '99999-9' } });
  fireEvent.change(inputsNode[2], { target: { value: '19,90' } });
  expect(inputsNode[0].value).toBe('9999-9');
  expect(inputsNode[1].value).toBe('99999-9');
  expect(inputsNode[2].value).toBe('19,90');
});

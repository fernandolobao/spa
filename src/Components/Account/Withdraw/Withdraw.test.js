import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Withdraw } from './Withdraw';

test('Withdraw is rendered properly', () => {
  render(
    <Withdraw />
  );
  const withdrawNode = screen.getByTestId('withdraw');
  const inputsNode = withdrawNode.getElementsByClassName('form-control');

  expect(withdrawNode).toBeInTheDocument();
  expect(withdrawNode).toHaveClass('withdraw');
  expect(inputsNode).toHaveLength(1);
});

test('Withdraw changes value correctly', () => {
  render(
    <Withdraw />
  );
  const withdrawNode = screen.getByTestId('withdraw');
  const inputNode = withdrawNode.getElementsByClassName('form-control');

  fireEvent.change(inputNode[0], { target: { value: '19,90' } });
  expect(inputNode[0].value).toBe('19,90');
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Deposit } from './Deposit';

test('Deposit is rendered properly', () => {
  render(
    <Deposit />
  );
  const depositNode = screen.getByTestId('deposit');
  const inputsNode = depositNode.getElementsByClassName('form-control');

  expect(depositNode).toBeInTheDocument();
  expect(depositNode).toHaveClass('deposit');
  expect(inputsNode).toHaveLength(1);
});

test('Deposit changes value correctly', () => {
  render(
    <Deposit />
  );
  const depositNode = screen.getByTestId('deposit');
  const inputNode = depositNode.getElementsByClassName('form-control');

  fireEvent.change(inputNode[0], { target: { value: '19,90' } });
  expect(inputNode[0].value).toBe('19,90');
});


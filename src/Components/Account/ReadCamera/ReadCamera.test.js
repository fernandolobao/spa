import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReadCamera } from './ReadCamera';

test('ReadCamera is rendered properly', () => {
  render(
    <ReadCamera open onToggle={() => {}} />
  );
  const modalnNode = screen.getByTestId('read-camera');

  expect(modalnNode).toBeInTheDocument();
  expect(modalnNode).toHaveClass('modal-lg');
  expect(modalnNode).toHaveClass('modal-dialog');
});


import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

test('Icon is rendered properly', () => {
  render(
    <Icon icon="dollar-sign" className="test" />
  );
  const wrapperNode = screen.getByTestId('icon');
  const iconNode = wrapperNode.getElementsByClassName('feather');

  expect(wrapperNode).toBeInTheDocument();
  expect(wrapperNode).toHaveClass('test');
  expect(iconNode).toHaveLength(1);
});


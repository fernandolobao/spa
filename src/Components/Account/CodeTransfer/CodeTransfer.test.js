import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeTransfer } from './CodeTransfer';

test('CodeTransfer is rendered properly', () => {
  render(
    <CodeTransfer
      open
      onToggle={() => {}}
      isDeposit={false}
      isWithdraw={false}
      setBalance={() => {}}
      setHistory={() => {}}
      seconds={10}
      codeValue={{
        name: 'Fernando Camilotti',
        agency: '9999-9',
        account: '99999-9',
        value: '19,90'
      }}
    />
  );
  const modalnNode = screen.getByTestId('code-transfer');

  expect(modalnNode).toBeInTheDocument();
  expect(modalnNode).toHaveClass('modal-dialog');
});


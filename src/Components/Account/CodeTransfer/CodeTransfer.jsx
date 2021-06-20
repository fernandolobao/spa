import React, { useEffect } from 'react';
import {
  Button, Modal
} from 'react-bootstrap';
import QRCode from 'react-qr-code';

const CodeTransfer = ({
  open,
  onToggle,
  codeValue,
  setBalance,
  setHistory,
  isDeposit = false,
  isWithdraw = false,
  seconds = 5
}) => {
  useEffect(() => {
    const type = () => {
      if (!isDeposit && !isWithdraw) {
        return {
          alias: 'payment',
          name: 'Pagamento'
        };
      }
      if (isDeposit && isWithdraw) {
        return false;
      }
      if (isDeposit && !isWithdraw) {
        return {
          alias: 'in',
          name: 'Depósito'
        };
      }
      if (!isDeposit && isWithdraw) {
        return {
          alias: 'out',
          name: 'Resgate'
        };
      }
      return {
        alias: 'payment',
        name: 'Pagamento'
      };
    };
    const parsedValue = parseFloat(codeValue.value.replace(',', '.'));
    const timer = setTimeout(() => {
      onToggle(false);
      setBalance((isDeposit ? 1 : -1) * parsedValue);
      setHistory({
        id: Math.random().toString(36).substring(7),
        category: 'dollar-sign',
        corp: type().name,
        value: parsedValue,
        date: new Date(),
        type: type().alias,
      });
    }, seconds * 1000);
    return () => clearTimeout(timer);
  }, [codeValue.value, setHistory, setBalance, onToggle, isWithdraw, isDeposit, seconds]);

  return (
    <Modal data-testid="code-transfer" show={open} onHide={() => onToggle(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isDeposit ? `Depósito de R$ ${codeValue.value}` : `Resgate de R$ ${codeValue.value}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
          <QRCode value={JSON.stringify(codeValue)} />
          <p style={{ marginTop: '16px' }}>
            [A modal fechará automaticamente em
            {' '}
            {seconds}
            {' '}
            segundos para simular a confirmação de leitura do QRCode]
          </p>
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => onToggle(false)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export {
  CodeTransfer
};


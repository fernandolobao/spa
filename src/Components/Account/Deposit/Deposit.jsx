import React, { useState } from 'react';
import {
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import StyledDeposit from './Deposit.style';
import StyledExpenses from '../Expenses/Expenses.style';
import { Icon } from '../../Icon';
import { History } from '../Expenses/History';
import { CodeTransfer } from '../CodeTransfer';
import { ReadCamera } from '../ReadCamera';

const Deposit = ({
  context
}) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [show, setShow] = useState(false);
  const [camera, setCamera] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    setValid(e.target.value.match(/[0-9]+[,.][0-9]{2}/gi));
  };
  const payloadBuilder = (agency, account, name) => {
    const temp = {
      name,
      agency,
      account,
      value
    };
    return temp;
  };

  return (
    <StyledDeposit data-testid="deposit">
      <div className="input">
        <Form>
          <Button variant="link" onClick={() => setCamera(true)}>
            <Icon
              icon="camera"
              size={24}
            />
          </Button>
          <div>
            <Form.Label>
              Use a câmera para ler o QRCode ou digite o valor para gerar um código.
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>R$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                required
                isInvalid={!valid && value !== ''}
                onChange={handleChange}
              />
              <InputGroup.Append>
                <InputGroup.Text>
                  <Button
                    variant="link"
                    disabled={!valid && value !== ''}
                    onClick={!valid && value !== '' ? () => {} : () => setShow(true)}
                  >
                    <Icon
                      icon="download"
                      size={16}
                    />
                  </Button>
                </InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                Digite apenas o valor (ex.: XX,XX)
              </Form.Control.Feedback>
            </InputGroup>
          </div>
        </Form>
      </div>
      {context && (
        <>
          <StyledExpenses>
            <History transactions={context.history} inValue />
          </StyledExpenses>
          {show && (
            <CodeTransfer
              open={show}
              onToggle={setShow}
              isDeposit
              isWithdraw={false}
              setBalance={context.setBalance}
              setHistory={context.setHistory}
              codeValue={payloadBuilder(
                context.agency,
                context.account,
                context.name
              )}
            />
          )}
          {camera && (
            <ReadCamera
              open={camera}
              onToggle={setCamera}
            />
          )}
        </>
      )}
    </StyledDeposit>
  );
};

export {
  Deposit
};

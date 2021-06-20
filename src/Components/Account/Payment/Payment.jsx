import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import StyledPayment from './Payment.style';
import StyledExpenses from '../Expenses/Expenses.style';
import { Icon } from '../../Icon';
import { History } from '../Expenses/History';
import { CodeTransfer } from '../CodeTransfer';
import { ReadCamera } from '../ReadCamera';

const Payment = ({
  context
}) => {
  const [value, setValue] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [valid, setValid] = useState(false);
  const [validAg, setValidAg] = useState(false);
  const [validCc, setValidCc] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const [show, setShow] = useState(false);
  const [camera, setCamera] = useState(false);

  useEffect(() => {
    if (valid
      && validAg
      && validCc
      && value !== ''
      && agency !== ''
      && account !== '') {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  }, [value, agency, account, valid, validAg, validCc]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setValid(e.target.value.match(/[0-9]+[,.][0-9]{2}/gi));
  };
  const handleAgency = (e) => {
    setAgency(e.target.value);
    setValidAg(e.target.value.match(/[0-9]{4}[-][0-9]{1}/gi));
  };
  const handleAccount = (e) => {
    setAccount(e.target.value);
    setValidCc(e.target.value.match(/[0-9]{5}[-][0-9]{1}/gi));
  };
  const payloadBuilder = (ag, cc, n) => {
    const temp = {
      name: n,
      agency: ag,
      account: cc,
      value
    };
    return temp;
  };

  return (
    <StyledPayment data-testid="payment">
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
              Use a câmera para ler o QRCode ou digite os dados para gerar um código.
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Agência</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                required
                isInvalid={!validAg && agency !== ''}
                onChange={handleAgency}
              />
              <Form.Control.Feedback type="invalid">
                Digite o valor no formato XXXX-X
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Conta</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                required
                isInvalid={!validCc && account !== ''}
                onChange={handleAccount}
              />
              <Form.Control.Feedback type="invalid">
                Digite o valor no formato XXXXX-X
              </Form.Control.Feedback>
            </InputGroup>
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
                    disabled={!allValid}
                    onClick={!allValid ? () => {} : () => setShow(true)}
                  >
                    <Icon
                      icon="credit-card"
                      size={16}
                    />
                  </Button>
                </InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                Digite o valor no formato XX,XX
              </Form.Control.Feedback>
            </InputGroup>
          </div>
        </Form>
      </div>
      {context && (
        <>
          <StyledExpenses>
            <History transactions={context.history} paymentValue />
          </StyledExpenses>
          {show && (
            <CodeTransfer
              open={show}
              onToggle={setShow}
              isDeposit={false}
              isWithdraw={false}
              setBalance={context.setBalance}
              setHistory={context.setHistory}
              seconds={10}
              codeValue={payloadBuilder(
                context.agency,
                context.account,
                context.name,
                context.value
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
    </StyledPayment>
  );
};

export {
  Payment
};

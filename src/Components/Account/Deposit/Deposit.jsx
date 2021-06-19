import React, { useState } from 'react';
import {
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import StyledDeposit from './Deposit.style';
import StyledExpenses from '../Expenses/Expenses.style';
import { Icon } from '../../Icon';
import { Context } from '../../../Context/Context';
import { History } from '../Expenses/History';

const Deposit = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    setValid(e.target.value.match(/[0-9]+[,.][0-9]{2}/gi));
  }
 return (
   <StyledDeposit>
    <div className="input">
      <Form>
        <Button variant="link">
          <Icon
            icon="camera"
            size={24}
          />
        </Button>
        <div>
          <Form.Label>Use a câmera para ler o QRCode ou digite o valor para gerar um código.</Form.Label>
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
                <Button variant="link">
                  <Icon
                    icon="send"
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
    <Context.Consumer>
      {context => (
        <StyledExpenses>
          <History transactions={context.history} inValue />
        </StyledExpenses>
      )}
    </Context.Consumer>
  </StyledDeposit>
 );
}

export {
  Deposit
};

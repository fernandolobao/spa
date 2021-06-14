import React, { useState } from 'react';
import {
  Tab,
  Tabs
} from 'react-bootstrap';
import { Expenses } from './Expenses'
import StyledAccount from './Account.style';

const Account = () => {
  const [key, setKey] = useState('resumo');
  return (
    <StyledAccount>
      <Tabs
        activeKey={key}
        onSelect={(x) => setKey(x)}
      >
        <Tab eventKey="resumo" title="Resumo">
          <Expenses />
        </Tab>
        <Tab eventKey="deposito" title="Depósito">
          Depósito
        </Tab>
        <Tab eventKey="resgate" title="Resgate">
          Resgate
        </Tab>
        <Tab eventKey="pagamento" title="Pagamento">
          Pagamento
        </Tab>
      </Tabs>
    </StyledAccount>
  );
}

export {
  Account
};

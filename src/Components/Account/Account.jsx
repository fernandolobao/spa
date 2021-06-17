import React, { useState } from 'react';
import {
  Tab,
  Nav
} from 'react-bootstrap';
import { Context } from '../../Context/Context';
import { Expenses } from './Expenses'
import StyledAccount from './Account.style';
import { Profile } from '../Profile';
import { Icon } from '../Icon';

const Account = () => {
  const [key, setKey] = useState('resumo');
  return (
    <Context.Consumer>
      {context => (
        <StyledAccount>
          <Profile />
          <Tab.Container
            activeKey={key}
            defaultActiveKey="resumo"
            onSelect={(x) => setKey(x)}
          >
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link eventKey="resumo">
                  <Icon
                    icon="zap"
                    size={24}
                  />
                  <span>Resumo</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="deposito">
                <Icon
                    icon="zap"
                    size={24}
                  />
                  <span>Depósito</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="resgate">
                <Icon
                    icon="zap"
                    size={24}
                  />
                  <span>Resgate</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="pagamento">
                <Icon
                    icon="zap"
                    size={24}
                  />
                  <span>Pagamento</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
          <Tab.Content>
            <Tab.Pane eventKey="resumo" active={key === 'resumo'}>
              <Expenses transactions={context.history} />
            </Tab.Pane>
            <Tab.Pane eventKey="deposito" active={key === 'deposito'}>
              Depósito
            </Tab.Pane>
            <Tab.Pane eventKey="resgate" active={key === 'resgate'}>
              Resgate
            </Tab.Pane>
            <Tab.Pane eventKey="pagamento" active={key === 'pagamento'}>
              Pagamento
            </Tab.Pane>
          </Tab.Content>
        </StyledAccount>
      )}
    </Context.Consumer>
  );
}

export {
  Account
};

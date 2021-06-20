import React, { useState } from 'react';
import {
  Tab,
  Nav
} from 'react-bootstrap';
import { Context } from '../../Context/Context';
import { Expenses } from './Expenses';
import { Deposit } from './Deposit';
import { Withdraw } from './Withdraw';
import { Payment } from './Payment';
import StyledAccount from './Account.style';
import { Profile } from '../Profile';
import { Icon } from '../Icon';
import { actions } from './actions';

const Account = () => {
  const [key, setKey] = useState('extrato');
  return (
    <Context.Consumer>
      {(context) => (
        <StyledAccount>
          <Profile user={{
              name: context.name,
              photo: context.photo,
              agency: context.agency,
              account: context.account,
              balance: context.balance,
              approvedCredit: context.approvedCredit,
              usedCredit: context.usedCredit
            }}
          />
          <Tab.Container
            activeKey={key}
            defaultActiveKey="extrato"
            onSelect={(x) => setKey(x)}
          >
            <Nav variant="pills" className="flex-row">
              {actions.map((action) => (
                <Nav.Item
                  key={action.alias}
                  className={action.status
                  ? 'action-item'
                  : 'action-disabled'}
                >
                  <Nav.Link disabled={!action.status} eventKey={action.alias}>
                    <Icon
                      icon={action.icon}
                      size={24}
                    />
                    <span>{action.name}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Tab.Container>
          <Tab.Content>
            <Tab.Pane eventKey="extrato" active={key === 'extrato'}>
              <Expenses transactions={context.history} />
            </Tab.Pane>
            <Tab.Pane eventKey="deposito" active={key === 'deposito'}>
              <Deposit setBalance={context.setBalance} setHistory={context.setHistory} />
            </Tab.Pane>
            <Tab.Pane eventKey="resgate" active={key === 'resgate'}>
              <Withdraw setBalance={context.setBalance} setHistory={context.setHistory} />
            </Tab.Pane>
            <Tab.Pane eventKey="pagamento" active={key === 'pagamento'}>
              <Payment />
            </Tab.Pane>
          </Tab.Content>
        </StyledAccount>
      )}
    </Context.Consumer>
  );
};

export {
  Account
};

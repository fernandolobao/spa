import React from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import { StyledProfile } from './Profile.style';

export const Profile = ({
  user
}) => (
  <StyledProfile>
    <div className="greetings">
      <div className="avatar">
        <img src={user.photo} alt={user.name} />
      </div>
      <span className="hi">
        <div>Olá, <h5>{user.name}</h5></div>
        <div>
          <span>Agência: <h5>{user.agency}</h5></span>
          <span>Conta: <h5>{user.account}</h5></span>
        </div>
      </span>
      <span>
        <div>Saldo em conta: <h5>R$ {user.balance}</h5></div>
        <div>Crédito disponível: <h5>R$ {user.approvedCredit - user.usedCredit}</h5></div>
      </span>
    </div>
  </StyledProfile>
);

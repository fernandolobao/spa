import React from 'react';
import {
  Col,
  Row
} from 'react-bootstrap';
import { Icon } from '../../Icon';

const History = () => (
  <div className="history">
    <ul>
      <li>
        <div className="icon-wrapper down">
          <Icon icon="zap" size={16} />
        </div>
        <div>
          <strong>Companhia Estadual de Energia Elétrica</strong>
          <small className="text-muted">25 de Maio de 2021</small>
        </div>
        <span className="value"> -R$ 125,00</span>
      </li>
      <li>
        <div className="icon-wrapper up">
          <Icon icon="dollar-sign" size={16} />
        </div>
        <div>
          <strong>Participação dos Lucros Corp S.A.</strong>
          <small className="text-muted">22 de Maio de 2021</small>
        </div>
        <span className="value"> R$ 2050,00</span>
      </li>
      <li>
        <div className="icon-wrapper up">
          <Icon icon="gift" size={16} />
        </div>
        <div>
          <strong>TED</strong>
          <small className="text-muted">18 de Maio de 2021</small>
        </div>
        <span className="value"> R$ 250,00</span>
      </li>
      <li>
        <div className="icon-wrapper down">
          <Icon icon="home" size={16} />
        </div>
        <div>
          <strong>Aluguel</strong>
          <small className="text-muted">14 de Maio de 2021</small>
        </div>
        <span className="value"> -R$ 1450,00</span>
      </li>
      <li>
        <div className="icon-wrapper down">
          <Icon icon="gift" size={16} />
        </div>
        <div>
          <strong>Padaria Nossa Senhora dos Pães</strong>
          <small className="text-muted">13 de Maio de 2021</small>
        </div>
        <span className="value"> -R$ 38,00</span>
      </li>
      <li>
        <div className="icon-wrapper down">
          <Icon icon="gift" size={16} />
        </div>
        <div>
          <strong>TED</strong>
          <small className="text-muted">12 de Maio de 2021</small>
        </div>
        <span className="value"> -R$ 75,00</span>
      </li>
    </ul>
  </div>
);

export {
  History
};

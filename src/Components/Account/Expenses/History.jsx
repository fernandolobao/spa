import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Icon } from '../../Icon';

const formatDate = (date) => {
  if (!date) return false;
  return format(date, 'PPP', { locale: ptBR });
};

const History = ({
  transactions,
  inValue = false,
  outValue = false,
  paymentValue = false
}) => (
  <>
    {inValue && (
      <div data-testid="history" className="history in">
        <h5>Entrada</h5>
        <ul>
          {transactions.filter((transaction) => transaction.type === 'in').reverse().map((transaction) => (
            <li key={transaction.id}>
              <div className={`icon-wrapper ${transaction.type}`}>
                <Icon icon="zap" size={24} />
              </div>
              <div className="transaction">
                <strong>{transaction.corp}</strong>
                <small className="text-muted">{formatDate(transaction.date)}</small>
              </div>
              <span className="value">
                {`+ R$ ${transaction.value.toFixed(2).replace('.', ',')}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
    {outValue && (
      <div data-testid="history" className="history out">
        <h5>Saída</h5>
        <ul>
          {transactions.filter((transaction) => {
            if (transaction.type === 'out' || transaction.type === 'payment') return transaction;
            return false;
          }).filter(Boolean).reverse().map((transaction) => (
            <li key={transaction.id}>
              <div className={`icon-wrapper ${transaction.type}`}>
                <Icon icon={transaction.category} size={24} />
              </div>
              <div className="transaction">
                <strong>{transaction.corp}</strong>
                <small className="text-muted">{formatDate(transaction.date)}</small>
              </div>
              <span className="value">
                {`- R$ ${transaction.value.toFixed(2).replace('.', ',')}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
    {paymentValue && (
      <div data-testid="history" className="history out">
        <h5>Recentes</h5>
        <ul>
          {transactions.filter((transaction) => {
            if (transaction.type === 'payment') return transaction;
            return false;
          }).filter(Boolean).reverse().map((transaction) => (
            <li key={transaction.id}>
              <div className={`icon-wrapper ${transaction.type}`}>
                <Icon icon={transaction.category} size={24} />
              </div>
              <div className="transaction">
                <strong>{transaction.corp}</strong>
                <small className="text-muted">{formatDate(transaction.date)}</small>
              </div>
              <span className="value">
                {`- R$ ${transaction.value.toFixed(2).replace('.', ',')}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

export {
  History
};

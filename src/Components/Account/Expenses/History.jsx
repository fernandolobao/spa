import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { Icon } from '../../Icon';

const formatDate = (date) => {
  if (!date) return false;
  return format(date, 'PPP', { locale: ptBR})
};

const History = ({
  transactions,
  inValue = false,
  outValue = false
}) => (
  <>
    {inValue && (
      <div className="history in">
        <h5>Entrada</h5>
        <ul>
          {transactions.filter((transaction) => transaction.type === 'in').map((transaction) => (
            <li key={transaction.id}>
              <div className={`icon-wrapper ${transaction.type}`}>
                <Icon icon="zap" size={24} />
              </div>
              <div className="transaction">
                <strong>{transaction.corp}</strong>
                <small className="text-muted">{formatDate(transaction.date)}</small>
              </div>
              <span className="value">
                {transaction.type === 'in'
                  ? `+ R$ ${transaction.value}`
                  : `- R$ ${transaction.value}`
                }
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
    {outValue && (
      <div className="history out">
        <h5>Saída</h5>
        <ul>
          {transactions.filter((transaction) => transaction.type === 'out').map((transaction) => (
            <li key={transaction.id}>
              <div className={`icon-wrapper ${transaction.type}`}>
                <Icon icon="zap" size={24} />
              </div>
              <div className="transaction">
                <strong>{transaction.corp}</strong>
                <small className="text-muted">{formatDate(transaction.date)}</small>
              </div>
              <span className="value">
                {transaction.type === 'in'
                  ? `+ R$ ${transaction.value}`
                  : `- R$ ${transaction.value}`
                }
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

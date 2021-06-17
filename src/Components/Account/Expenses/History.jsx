import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { Icon } from '../../Icon';

const formatDate = (date) => {
  if (!date) return false;
  return format(date, 'PPP', { locale: ptBR})
};

const History = ({
  transactions
}) => {
  console.log(transactions);
  return(
    <div className="history">
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div className={`icon-wrapper ${transaction.type}`}>
              <Icon icon="zap" size={24} />
            </div>
            <div>
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
  );
};

export {
  History
};

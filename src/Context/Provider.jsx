import React, { useState } from 'react';
import { Context } from './Context';
import {
  transactions,
  creditCards
} from './data_dummy';

export const Provider = ({
  children
}) => {
  const [balance, setBalance] = useState(8465.93);
  const [usedCredit, setUsedCredit] = useState(2458.32);
  const [history, setHistory] = useState(transactions);
  const initialData = {
    name: 'Fernando Camilotti Monteiro',
    photo: 'https://i.pravatar.cc/150?u=fernandocamilotti',
    agency: 1766-9,
    account: 44520-6,
    balance,
    setBalance: (value) => {
      setBalance(balance + value);
    },
    approvedCredit: 8000.00,
    usedCredit,
    setUsedCredit: (value) => {
      setUsedCredit(usedCredit + value)
    },
    history,
    setHistory: (transaction) => {
      setHistory([transaction, ...transactions])
    },
    creditCards
  };
  return (
    <Context.Provider value={initialData}>
      {children}
    </Context.Provider>
  );
};
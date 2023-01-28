import './App.css';
import { useState, useEffect } from 'react';
import useFetchTransactions from './hooks/useFetchTransactions';

import Transaction from './components/Transaction';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense');
  const [transactions, setTransactions] = useState([]);

  const { data } = useFetchTransactions();

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  let income = 0;
  let expenses = 0;
  for (const transaction of transactions) {
    if (transaction.type === 'expense') {
      expenses += transaction.price;
    } else if (transaction.type === 'income') {
      income += transaction.price;
    }
  }

  const addNewTransaction = async (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, datetime, price, type }),
      });
      const json = await response.json();
      console.log('result', json);
      setName('');
      setPrice('');
      setDatetime('');
      setDescription('');
      setTransactions((prev) => [...prev, json]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1>
        Total Gross ${income - expenses}
        <p>{transactions.length} total transactions</p>
        <p>Total Income: {'$' + income}</p>
        <p>Total Expenses: {'$' + expenses}</p>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={'New Transaction'}
          />
          <input
            type='datetime-local'
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>
        <div className='description'>
          <input
            type='text'
            placeholder={'Description'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='basic'>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={'Amount'}
          />
          Type:
          <select onChange={(e) => setType(e.target.value)}>
            <option value='expense'>Expense</option>
            <option value='income'>Income</option>
          </select>
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>
      <div className='transactions'>
        {transactions.length ? (
          transactions
            .map((transaction) => (
              <Transaction
                key={transaction._id}
                name={transaction.name}
                price={transaction.price}
                description={transaction.description}
                datetime={transaction.datetime}
                type={transaction.type}
              />
            ))
            .reverse()
        ) : (
          <p className='NoTransactions'>No Transactions Yet</p>
        )}
      </div>
    </main>
  );
}

export default App;

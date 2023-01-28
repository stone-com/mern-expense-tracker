import './App.css';
import { useState } from 'react';
import useFetchTransactions from './hooks/useFetchTransactions';
import Transaction from './components/Transaction';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('expense');

  const { data } = useFetchTransactions();

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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1>
        $400<span>.00</span>
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
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>It was time for a new TV</div>
          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2022-12-18 13:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Got Paid</div>
            <div className='description'>It was time for a new TV</div>
          </div>
          <div className='right'>
            <div className='price green'>+$1000</div>
            <div className='datetime'>2022-12-18 13:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Iphone</div>
            <div className='description'>It was time for a new TV</div>
          </div>
          <div className='right'>
            <div className='price red'>-$700</div>
            <div className='datetime'>2022-12-18 13:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

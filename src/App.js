import './App.css';

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className='basic'>
          <input type='text' placeholder={'New Transaction'} />
          <input type='datetime-local' />
        </div>
        <div className='description'>
          <input type='text' placeholder={'Description'} />
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 13:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Got Paid</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price green">+$1000</div>
            <div className="datetime">2022-12-18 13:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Iphone</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$700</div>
            <div className="datetime">2022-12-18 13:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

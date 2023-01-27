import './App.css';

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <input type='text' placeholder={'New Purchase'} />
        <input type='datetime-local' />
        <input type='text' placeholder={'Description'} />
      </form>
    </main>
  );
}

export default App;

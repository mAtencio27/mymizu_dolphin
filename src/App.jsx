import './App.css';
import Carousels from './components/Carousels';
import Refill from './components/Refill';

function App() {
  return (
    <div>
      <header>
        <h1>my mizu</h1>
      </header>
      <main className="App-main">
        <Carousels />
        <Refill />
      </main>
    </div>
  );
}

export default App;

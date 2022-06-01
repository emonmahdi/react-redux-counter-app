import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1 style={{background: '#000', color: '#fff', margin: '0px', padding: '20px'}}>Welcome to React Redux</h1>
      <Counter />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Card } from '@sharing-component/component-collection.ui.card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card text="Card" optionalMessage="message" /> 
    </div>
  );
}

export default App;

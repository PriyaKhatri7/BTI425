import logo from './logo.svg';
import './App.css';
import React, { App } from 'react';
import { App } from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>My name is Priya Khatri!</p>
        </p>
        <a
          className="Priya"
          href="https://priyak.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}
class App extends Component {
  constructor() {
    this.state = {
      currentDateTime: Date().toLocaleString()
    }
  }
  render() {
    return (
      <div>
        <p> { this.state.currentDateTime }</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Code from './Code';
            
class App extends Component {
  render() {
    return (
      <div className="App">
      <Greeting greeting={{ text: 'Welcome to React' }} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <Code plus="*">src/App.js</Code> and save to reload.
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
      </div>
    );
  }
}
const Greeting = ({ greeting }) => <h1>{greeting.text}</h1>;

export default App;
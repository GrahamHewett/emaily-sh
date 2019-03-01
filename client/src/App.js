import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Google-Oauth"
            href="/auth/google/" //proxy settings in client package.json handle this
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in with Google!
          </a>
        </header>
      </div>
    );
  }
}

export default App;

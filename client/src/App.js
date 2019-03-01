import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <a
            className="Google-Oauth"
            href="/auth/google/" //proxy settings in client package.json handle this
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in with Google!
          </a>
      </div>
    );
  }
}

export default App;

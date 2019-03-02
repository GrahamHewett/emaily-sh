import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>New Survey</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <a
              className="Google-Oauth"
              href="/auth/google/" //proxy settings in client package.json handle this
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in with Google!
            </a>
          </>
        </Router>
      </div>
    );
  }
}

export default App;

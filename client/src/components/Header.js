import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left">
            Emaily
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="Google-Oauth btn"
                href="/auth/google/" //proxy settings in client package.json handle this
                target="_blank"
                rel="noopener noreferrer"
              >
                Login with Google
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

import React, { useEffect } from "react";
import "./App.css";
import mailgo from "mailgo";

function App() {
  useEffect(() => mailgo());

  return (
    <div className="App">
      <header className="App-header">
        <h1>ALEXANDER LEE</h1>
        <div className="button-group">
          <a
            href="https://github.com/alexsurelee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="#mailgo"
            data-address="alex"
            data-domain="surelee.dev"
            className="dark"
          >
            EMAIL
          </a>
          <a
            href="https://linkedin.com/in/alexsurelee"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
        <div className="button-group"></div>
      </header>
    </div>
  );
}

export default App;

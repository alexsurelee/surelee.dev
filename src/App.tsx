import React from "react";
import "./App.css";
import "mailgo/dist/mailgo.min.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ALEXANDER LEE</p>
        <p className="subtext">@alexsurelee</p>
        <div className="button-group">
          <button onClick={() => window.open("https://github.com/alexsurelee")}>
            GitHub
          </button>
          <a
            href="#mailgo"
            data-address="alex"
            data-domain="surelee.dev"
            className="dark"
          >
            Email
          </a>
          <button
            onClick={() => window.open("https://linkedin.com/in/alexsurelee")}
          >
            LinkedIn
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import logo from "./assets/surelee256.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="surelee logo" />
        <p className="subtext">@alexsurelee</p>
        <ButtonGroup variant="text">
          <Button onClick={() => window.open("https://github.com/alexsurelee")}>
            GitHub
          </Button>
          <Button onClick={() => window.open("mailto:alex@surelee.dev")}>
            Email
          </Button>
          <Button
            onClick={() => window.open("https://linkedin.com/in/alexsurelee")}
          >
            LinkedIn
          </Button>
          <Button>Portfolio</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;

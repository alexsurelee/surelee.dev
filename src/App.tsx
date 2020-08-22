import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./assets/surelee256.png";
import "./App.css";
import { Toolbar, IconButton, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography className="navBar" variant="h6">
            Alexander Lee
          </Typography>
        </Toolbar>
      </AppBar>
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

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import beep from "./Assets/beepboop.gif";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>There's Nothing Here Yet!</h1>
          <img src={beep} alt="Landing" />
        </header>
      </div>
    );
  }
}

export default App;

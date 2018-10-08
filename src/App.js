import React, { Component } from "react";
import "./App.css";
import logo from "./Assets/logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>swapi-box</h1>
          <div className="marquee-block">
            <p>
              The FIRST ORDER reigns. Having decimated the peaceful Republic,
              Supreme Leader Snoke now deploys his merciless legions to seize
              military control of the galaxy. Only General Leia Organa's band of
              RESISTANCE fighters stand against the rising tyranny, certain that
              Jedi Master Luke Skywalker will return and restore a spark of hope
              to the fight. But the Resistance has been exposed. As the First
              Order speeds toward the rebel base, the brave heroes mount a
              desperate escape....
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu/Menu";

class App extends Component {
  constructor() {
    super();

    this.state = {
      homeState: "active-main home-main"
    };
  }
  render() {
    const menuContents = [
      {
        service: "facebook",
        link: "https://www.facebook.com/kevin.simpson.547"
      },
      {
        service: "twitter",
        link: "https://twitter.com/relasine"
      },
      {
        service: "linkedin",
        link: "https://www.linkedin.com/in/kevinjohnsimpson"
      },
      {
        service: "instagram",
        link: "https://www.instagram.com/kevinjohnsimpson/"
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h1>swapi-box</h1>
          <div className="marquee-block">
            <p>
              The FIRST ORDER reigns. Having decimated the peaceful Republic,
              Supreme Leader Snoke now deploys his merciless legions to seize
              military control of the galaxy. Only General Leia Organas band of
              RESISTANCE fighters stand against the rising tyranny, certain that
              Jedi Master Luke Skywalker will return and restore a spark of hope
              to the fight. But the Resistance has been exposed. As the First
              Order speeds toward the rebel base, the brave heroes mount a
              desperate escape....
            </p>
          </div>
        </header>
        <Menu data={menuContents} />
      </div>
    );
  }
}

export default App;

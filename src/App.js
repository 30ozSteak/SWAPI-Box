import React, { Component } from "react";
import "./App.css";
import Marquee from "./Marquee/Marquee";
import Menu from "./Menu/Menu";
import fetchFilm from "./Fetch/Fetch"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      homeState: "active-main home-main"
    };
  }

  async componentDidMount () {
    const filmData =  await fetchFilm();
    this.setState({
       films: filmData
    })
  }

  render() {
    const menuContents = [
      {
        swLink: "People",
        link: "#"
      },
      {
        swLink: "Planets",
        link: "#"
      },
      {
        swLink: "Vehicles",
        link: "#"
      },
      {
        swLink: "Favorites",
        link: "#"
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h1>swapi-box</h1>
        </header>

        <div className="marquee-container">
          <Marquee films={this.state.films} />
        </div>
        <Menu data={menuContents} />
      </div>
    );
  }
}

export default App;

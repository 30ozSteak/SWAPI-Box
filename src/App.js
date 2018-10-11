import React, { Component } from "react";
import "./App.css";
import Marquee from "./Marquee/Marquee";
import Menu from "./Menu/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      homeState: "active-main home-main"
    };
  }

  componentDidMount() {
    this.fetchFilm();
  }

  fetchFilm = async () => {
    const url = "https://swapi.co/api/films/";
    const data = await fetch(url);
    const filmData = await data.json();
    this.setState({
      films: filmData
    });
  };

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

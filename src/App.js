import React, { Component } from "react";
import "./App.css";
import Marquee from "./Marquee/Marquee";
import Menu from "./Menu/Menu";
import People from "./People/People"

import fetchFilm, {
  fetchPeople,
  // fetchEverything,
  fetchVehicles,
  fetchPlanets
} from "./Fetch/Fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: [],
      vehicles: [],
      planets: [],
      homeState: "active-main home-main"
    };
  }

  async componentDidMount() {
    const filmData = await fetchFilm();
    const peopleData = await fetchPeople();
    const vehicleData = await fetchVehicles();
    const planetData = await fetchPlanets();
    this.setState({
      films: filmData,
      people: peopleData,
      vehicles: vehicleData,
      planets: planetData
    });
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

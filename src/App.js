import React, { Component } from "react";
import "./App.css";
import Marquee from "./Marquee/Marquee";
import Menu from "./Menu/Menu";
import People from "./People/People";
import fetchData from "./Fetch/Fetch";
import filmData from "./Fetch/fetchFilm";
import getPeopleData from "./Fetch/fetchPeople";
import fetchPlanets from "./Fetch/fetchPlanets";
import vehicleData from "./Fetch/fetchVehicles";
import getSpeciesData from "./Fetch/fetchSpecies";
import getResidentData from "./Fetch/fetchResidents";
import Header from "./Header/Header";
import Loading from "./Loading/Loading";
import Planet from "./Planets/Planets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: [],
      residents: [],
      vehicles: [],
      planets: [],
      species: [],
      homeState: "active-main home-main"
    };
  }


  async fetchAllData () {
    const peopleData = await getPeopleData();

    const planetData = await fetchPlanets();

    const residentData = await getResidentData();

    const speciesData = await getSpeciesData();

    const filmData = await fetchData("https://swapi.co/api/films/");
    const vehicleData = await fetchData("https://swapi.co/api/vehicles");

    return Promise.all([peopleData, planetData, residentData, speciesData, filmData, vehicleData]).then( 
      this.setState({
      films: filmData,
      people: peopleData,
      vehicles: vehicleData,
      planets: planetData,
      species: speciesData,
      residents: residentData,
    }))
  }

  async componentDidMount() {
    await this.fetchAllData();
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
        <div className="header-block">
          <Header />
        </div>
        <div className="twinkle" />
        <div className="marquee-container">
          {/* <Marquee films={this.state.films} />
          <People
            people={this.state.people}
            planets={this.state.planets}
            species={this.state.species}
          /> */}

          { <Planet
            planets={this.state.planets}
            residents={this.state.residents}
          /> }
        </div>
        <Menu data={menuContents} />
      </div>
    );
  }
}

export default App;

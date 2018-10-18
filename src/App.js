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
import Planets from "./Planets/Planets";
import Vehicles from "./Vehicles/Vehicles";
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: [],
      residents: [],
      loading: true,
      vehicles: [],
      planets: [],
      species: [],
      homeState: "active-main home-main"
    };
  }

  showFilmCrawl = async () => {
    // let storedLocation = JSON.parse(localStorage.getItem('fetchedData', this.state.films));
    //   if(storedLocation){
    //     this.getLocalStorage(storedLocation);
    //   } else {
    const films = await fetchData("https://swapi.co/api/films/");
    return Promise.all([films]).then(
      this.setState({
        films: films
      })
    );
    // };
  };

  handlePlanetLink = async () => {
    const planets = await fetchPlanets();
    const residents = await getResidentData();
    return Promise.all([planets, residents]).then(
      this.setState({
        planets: planets,
        residents: residents,
        loading: false
      })
    );
  };

  handlePeopleLink = async () => {
    const people = await getPeopleData();
    const planets = await fetchPlanets();
    const species = await getSpeciesData();
    return Promise.all([people, planets, species]).then(
      this.setState({
        people: people,
        planets: planets,
        species: species,
        loading: false
      })
    );
  };

  handleVehicleLink = async () => {
    const vehicles = await fetchData("https://swapi.co/api/vehicles");
    return Promise.all([vehicles]).then(
      this.setState({
        vehicles: vehicles,
        loading: false
      })
    );
  };

  updateLocalStorage = data => {
    localStorage.setItem("fetchedData", JSON.stringify(data));
  };

  getLocalStorage = data => {
    this.updateLocalStorage(data);
  };

  async componentDidMount() {
    this.showFilmCrawl();
    // let storedLocation = JSON.parse(localStorage.getItem('fetchedData', this.state.films));
    //   if(storedLocation){
    //   this.getLocalStorage(storedLocation);
    //   } else {
    return;
  }

  render() {
    return (
      <div className="App">
        <div className="header-block">
          <Header />
        </div>
        <div className="twinkle" />
        <div className="marquee-container">
          <Route
            exact
            path="/"
            render={() => (
              <Marquee
                films={this.state.films}
                getLocalStorage={this.getLocalStorage}
              />
            )}
          />
          <Route
            exact
            path="/people"
            render={() => (
              <People
                people={this.state.people}
                planets={this.state.planets}
                species={this.state.species}
              />
            )}
          />
          <Route
            exact
            path="/planets"
            render={() => (
              <Planets
                planets={this.state.planets}
                residents={this.state.residents}
              />
            )}
          />
          <Route
            exact
            path="/vehicles"
            render={() => <Vehicles vehicles={this.state.vehicles} />}
          />
        </div>
        <Menu
          handlePlanetLink={this.handlePlanetLink}
          handlePeopleLink={this.handlePeopleLink}
          handleVehicleLink={this.handleVehicleLink}
        />
      </div>
    );
  }
}

export default App;

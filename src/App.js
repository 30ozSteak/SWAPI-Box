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
import Favorites from "./Favorites/Favorites";
import Error from "./Error/Error";
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: [],
      residents: [],
      vehicles: [],
      planets: [],
      homeWorld: [],
      species: [],
      homeState: "active-main home-main",
      favorites: []
    };
  }

  updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  showFilmCrawl = async () => {
    if (localStorage.getItem("fetchedFilm") === null) {
      const films = await fetchData("https://swapi.co/api/films/");
      return Promise.all([films]).then(
        this.setState({
          films: films
        })
      );
    } else {
      let films = JSON.parse(localStorage.getItem("fetchedFilm"));
      this.setState({ films: films });
    }
}



  handlePeopleLink = async () => {
    if (localStorage.getItem("fetchedPeople") === null) {
      const people = await getPeopleData();
      const planets = await fetchPlanets();
      const species = await getSpeciesData();
      let peoplePromise = Promise.all([people, planets, species]).then(
        this.setState({
          people: people,
          planets: planets,
          species: species
        })
      );
      this.updateLocalStorage("fetchedPeople", this.state.people);
      this.updateLocalStorage("fetchedPlanet", this.state.planets);
      this.updateLocalStorage("fetchedSpecies", this.state.species);
      return peoplePromise;
    } else {
      let peopleData = JSON.parse(localStorage.getItem("fetchedPeople"));
      let planetsData = JSON.parse(localStorage.getItem("fetchedPlanet"));
      let speciesData = JSON.parse(localStorage.getItem("fetchedSpecies"));
      this.setState({
        people: peopleData,
        planets: planetsData,
        species: speciesData
      });
    }
  };

  handleVehicleLink = async () => {
    if (localStorage.getItem("fetchedVehicles") === null) {
      const vehicles = await fetchData("https://swapi.co/api/vehicles");
      let promiseVehicles = Promise.all([vehicles]).then(
        this.setState({
          vehicles: vehicles
        })
      );
      this.updateLocalStorage("fetchedVehicles", this.state.vehicles);
      return promiseVehicles;
    } else {
      let vehicleData = localStorage.getItem("fetchedVehicles");
      let vehicles = JSON.parse(vehicleData);
      this.setState({
        vehicles: vehicles
      });
    }
  };

 handlePlanetLink = async () => {
    if (localStorage.getItem("fetchedResidents") === null) {
      console.log("if statement");
      const homeWorld = await fetchPlanets();
      const residents = await getResidentData();
      let promisedData = Promise.all([homeWorld, residents]).then(
        this.setState({
          homeWorld: homeWorld,
          residents: residents
        })
      );
      this.updateLocalStorage("fetchedHomeWorld", this.state.homeWorld);
      this.updateLocalStorage("fetchedResidents", this.state.residents);


    return promisedData
  } else {
    let homeWorldData = JSON.parse(localStorage.getItem('fetchedHomeWorld'))
    let residentsData = JSON.parse(localStorage.getItem('fetchedResidents'))
      this.setState({
        residents: residentsData,
        homeWorld: homeWorldData
      });
    }
  };

  checkPathName = async () => {
    if (window.location.pathname === "/") {
      await this.showFilmCrawl();
    } else if (window.location.pathname === "/people") {
      await this.handlePeopleLink();
    } else if (window.location.pathname === "/planets") {
      await this.handlePlanetLink();
    } else if (window.location.pathname === "/vehicles") {
      await this.handleVehicleLink();
    }
  };

  async componentDidMount() {
    await this.checkPathName();
    await this.showFilmCrawl();
    if (localStorage.getItem("fetchedFilm") === null) {
      this.updateLocalStorage("fetchedFilm", this.state.films);
    } else {
      return;
    }
  }

  handleFavorites = favorite => {
    this.setState({ favorites: [favorite, ...this.state.favorites] });
  };

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
            render={() => <Marquee films={this.state.films} />}
          />
          <Route
            exact
            path="/people"
            render={() => (
              <People
                handleFavorites={this.handleFavorites}
                handlePeopleLink={this.handlePeopleLink}
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
                handleFavorites={this.handleFavorites}
                planets={this.state.homeWorld}
                residents={this.state.residents}
              />
            )}
          />
          <Route
            exact
            path="/vehicles"
            render={() => <Vehicles vehicles={this.state.vehicles} />}
          />
          <Route
            exact
            path="/favorites"
            render={() => <Favorites favorites={this.state.favorites} />}
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

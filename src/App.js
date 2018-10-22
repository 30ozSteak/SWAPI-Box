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
import getHomeWorldData from "./Fetch/fetchHomeWorld"
import { Route, NavLink } from "react-router-dom";

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
      favorites: [],
      error: ''
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
      console.log('if statement', this.state.planets)
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
      console.log('else statement', this.state.planets)
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
      const homeWorld = await getHomeWorldData();
      const residents = await getResidentData();
      let promisedData = Promise.all([homeWorld, residents]).then(
        this.setState({
          homeWorld: homeWorld,
          residents: residents
        })
      );
      this.updateLocalStorage("fetchedHomeWorld", this.state.homeWorld);
      this.updateLocalStorage("fetchedResidents", this.state.residents);
      console.log('if statement', this.state.homeWorld)
      return promisedData
    } else {
      let homeWorldData = JSON.parse(localStorage.getItem('fetchedHomeWorld'))
      let residentsData = JSON.parse(localStorage.getItem('fetchedResidents'))
      this.setState({
        residents: residentsData,
        homeWorld: homeWorldData
      });
      console.log('else statement', this.state.homeWorld)
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

  handleFavorites = async (favorite) => {
    const newFavorite = { ...favorite, id: favorite.name }
    await this.setState({ favorites: [newFavorite, ...this.state.favorites] });
    await this.updateLocalStorage("Favorites", this.state.favorites)
    let favoritesData = JSON.parse(localStorage.getItem('Favorites'))
    await this.setState({ favorites: favoritesData })
  };

  removeFavorites = async (id) => {
    const favorites = this.state.favorites.filter(fav => fav.id !== id)
    await this.setState({ favorites })
    await this.updateLocalStorage("Favorites", this.state.favorites)
  }

  checkPathName = async () => {
    if (window.location.pathname === "/") {
      await this.showFilmCrawl();
    } else if (window.location.pathname === "/people") {
      await this.handlePeopleLink();
    } else if (window.location.pathname === "/planets") {
      await this.handlePlanetLink();
    } else if (window.location.pathname === "/vehicles") {
      await this.handleVehicleLink();
    } else if (window.location.pathname === "/favorites") {
      let favoritesData = JSON.parse(localStorage.getItem('Favorites'))
      await this.setState({ favorites: favoritesData })
    }
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
                removeFavorites={this.removeFavorites}
                handleFavorites={this.handleFavorites}
                handlePeopleLink={this.handlePeopleLink}
                people={this.state.people}
                planets={this.state.planets}
                species={this.state.species}
                error={this.state.error}
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
                error={this.state.error}
              />
            )}
          />
          <Route
            exact
            path="/vehicles"
            render={() => <Vehicles vehicles={this.state.vehicles}
              error={this.state.error}
              handleFavorites={this.handleFavorites}
            />}
          />
          <Route
            exact
            path="/favorites"
            render={() => <Favorites
              removeFavorites={this.removeFavorites}
              favorites={this.state.favorites}
              error={this.state.error}
            />}
          />
        </div>
        <Menu
          handlePlanetLink={this.handlePlanetLink}
          handlePeopleLink={this.handlePeopleLink}
          handleVehicleLink={this.handleVehicleLink}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;

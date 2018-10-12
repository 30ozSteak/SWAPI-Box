import React, { Component } from "react";
import "./App.css";
import Marquee from "./Marquee/Marquee";
import Menu from "./Menu/Menu";
import People from "./People/People"
import fetchData from "./Fetch/Fetch";
import filmData from './Fetch/fetchFilm'
import getPeopleData from './Fetch/fetchPeople'
import fetchPlanets from './Fetch/fetchPlanets'
import vehicleData from './Fetch/fetchVehicles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: filmData,
      people: [],
      vehicles: [],
      planets: [],
      homeState: "active-main home-main"
    };
  }

  async componentDidMount() {
    const peopleData = await getPeopleData()
    // console.log('People Data', peopleData)
  
    const planetData = await fetchPlanets ()
    // console.log('planets', planetData)

    const filmData = await fetchData('https://swapi.co/api/films/')
    const vehicleData = await fetchData('https://swapi.co/api/vehicles')
    this.setState({
      films: filmData,
      people: peopleData,
      vehicles: vehicleData,
      planets: planetData
    });
  }

  // static async getDerivedStateFromProps() {
  //   const peopleData =  await fetchData('https://swapi.co/api/people');
  //     this.setState({
  //     people: peopleData
  //   })
  // }

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
          <People people={this.state.people} planets={this.state.planets}/>
        </div>
        <Menu data={menuContents} />
      </div>
    );
  }
}

export default App;

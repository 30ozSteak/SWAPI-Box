import React, { Component } from "react";
import "./App.css";
import logo from "./Assets/logo.png";
import Marquee from "./Marquee/Marquee"
import Menu from "./Menu/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    this.fetchFilm()
  }

  fetchFilm = async () => {
    const url = 'https://swapi.co/api/films/'
    const data = await fetch(url)
    const filmData = await data.json()
    this.setState({
      films: filmData
    })
  }


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
        service: "People",
        link: "#"
      },
      {
        service: "Planets",
        link: "#"
      },
      {
        service: "Vehicles",
        link: "#"
      },
      {
        service: "Favorites",
        link: "#"
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h1>swapi-box</h1>
        </header>
        <Menu data={menuContents} />
      </div>
    );
  }
}

export default App;

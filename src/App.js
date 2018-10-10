import React, { Component } from "react";
import "./App.css";
import logo from "./Assets/logo.png";
import Marquee from "./Marquee/Marquee"

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>swapi-box</h1>
          <Marquee films={this.state.films}/>
        </header>
      </div>
    );
  }
}

export default App;

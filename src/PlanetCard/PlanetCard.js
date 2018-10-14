import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";

const PlanetCard = ({ planets }) => {
  let planetArray = [];

  let answer = planets[0].map(planet => {
    let planetName = planet.name;
    let planetWeather = planet.climate;
    let planetTerrain = planet.terrain;
    let planetPop = planet.population;
    // let residents - this is where our nested api call for planets will go. right?

    let planetObject = {
      name: planetName,
      climate: planetWeather,
      terrain: planetTerrain,
      population: planetPop
    };
    planetArray.push(planetObject);
  });

  const planetStats = planetArray.map(data => {
    return (
      <div className="card-literal">
        <h2>{data.name}</h2>
        <h4> Climate: {data.climate}</h4>
        <h4> Terrain: {data.terrain}</h4>
        <h4> Population: {data.population}</h4>
      </div>
    );
  });
  return <div>{planetStats}</div>;
};
export default PlanetCard;

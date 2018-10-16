import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";

const PlanetCard = ({ planets, residents, toggleFaves }) => {
  let planetArray = [];

  let homeworldUrl = residents.map(resident => {
    return { url: resident.homeworld, name: resident.name };
  });

  const AllPlanets = planets[0];
  console.log(AllPlanets);
  for (let planet in AllPlanets) {
    let planetInfo = AllPlanets[planet];
    for (let url in homeworldUrl) {
      let individualURLs = homeworldUrl[url].url;
      if (planetInfo.url === individualURLs) {
        let planetObj = {
          residents: homeworldUrl[url].name || "none",
          name: planetInfo.name,
          climate: planetInfo.climate,
          terrain: planetInfo.terrain,
          population: planetInfo.population
        };
        planetArray.push(planetObj);
      }
    }
  }

  const planetStats = planetArray.map(data => {
    return (
      <div className="card-literal">
        <h2>{data.name}</h2>
        <div className="fave" />
        <h4> Climate: {data.climate}</h4>
        <h4> Terrain: {data.terrain}</h4>
        <h4> Population: {data.population}</h4>
        <h4> Residents: {data.residents} </h4>
      </div>
    );
  });
  return <div>{planetStats}</div>;
};
export default PlanetCard;

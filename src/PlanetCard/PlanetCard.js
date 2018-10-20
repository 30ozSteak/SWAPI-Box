import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";
import Images from "../Images.json";

const PlanetCard = ({ planets, residents, toggleFaves, handleFavorites }) => {
    const planetData = planets[0].map(planet => {
      return {
        type: 'planets',
        name: planet['name'],
        climate: planet['climate'], 
        terrain: planet['terrain'],
        population: planet['population'],
        residents: [...planet['residents']]
      }
    })

  let homeworldUrl = residents.map(resident => {
    return { url: resident.homeworld, name: resident.name };
  });

  const getResidentInfo = residentsUrls => {
    const foundResidents = residentsUrls.map(url => {
      const foundResident = residents.find(resident => resident.url === url);
      return foundResident ? foundResident.name : "";
    });
    return foundResidents;
  };

  let randomizedKey =() => {
    return Math.floor(Math.random() * (10000 - 1 + 1)) + 1 + Date.now() + Math.random()
  } 

  const planetStats = planetData.map(data => {
    return (
    <div key={Math.floor(Math.random() * (100 - 1 + 1)) + 1 + Date.now()} className="card-literal">
        <h2 key={Math.floor(Math.random() * (30 - 1 + 1)) + 1 + Date.now()}>{data.name}</h2>
        <div className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
        </div>
        <div className="fave" onClick={() => handleFavorites(data)}/>
        <h4 key={randomizedKey()}> Climate: {data.climate}</h4>
        <h4 key={randomizedKey()}> Terrain: {data.terrain}</h4>
        <h4 key={randomizedKey()}> Population: {data.population}</h4>
        <h4 key={randomizedKey()}> Residents: {getResidentInfo(data.residents)} </h4>
      </div>
  )
  });

  return <div>{planetStats}</div>;
};
export default PlanetCard;

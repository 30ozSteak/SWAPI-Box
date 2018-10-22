import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";
import Images from "../Images.json";
import PropTypes from "prop-types";

const PlanetCard = ({ planets, residents, toggleFaves, handleFavorites }) => {
  const planetData = planets.results.map(planet => {
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


  const planetStats = planetData.map(data => {
    return (
      <div key={data.name} className="card-literal">
        <section className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
        </section>
        <div className="fave" onClick={() => handleFavorites(data)} />
        <section className="text-field">
          <h2>{data.name}</h2>
          <h4> Climate: {data.climate}</h4>
          <h4> Terrain: {data.terrain}</h4>
          <div className="caret" />
          <h4> Population: {data.population} </h4>
          <h4> Residents: {getResidentInfo(data.residents).join('/ ')} </h4>
        </section>
      </div>
    )
  });

  return <div>{planetStats}</div>;
};

PlanetCard.propTypes = {
  residents: PropTypes.array,
  planets: PropTypes.array,
  species: PropTypes.array,
  handleFavorites: PropTypes.func,
  toggleFaves: PropTypes.func
};
export default PlanetCard;

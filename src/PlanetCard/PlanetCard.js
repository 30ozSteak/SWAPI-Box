import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";

const PlanetCard = ({ planets, residents, toggleFaves }) => {
  let planetArray = [];

  let homeworldUrl = residents.map(resident => {
    return { url: resident.homeworld, name: resident.name };
  });
  console.log(homeworldUrl)

  const getResidentInfo = residentsUrls => {
    const foundResidents = residentsUrls.map(url => {
      const foundResident = residents.find(resident => resident.url === url);
      return foundResident ? foundResident.name : "";
    });
    return foundResidents;
  };

  const planetStats = planets[0].map(data => {
    return (
      <div className="card-literal">
        <h2>{data.name}</h2>
        <div className="fave" />
        <h4> Climate: {data.climate}</h4>
        <h4> Terrain: {data.terrain}</h4>
        <h4> Population: {data.population}</h4>
        <h4> Residents: {getResidentInfo(data.residents)} </h4>
      </div>
    );
  });

  return <div>{planetStats}</div>;
};
export default PlanetCard;

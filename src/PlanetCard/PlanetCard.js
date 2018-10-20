import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";
import Images from "../Images.json";

const PlanetCard = ({ planets, residents, toggleFaves }) => {
  let planetArray = [];

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

  const planetStats = planets[0].map(data => {
    return (
      <div key={Math.floor(Math.random() * (100 - 1 + 1)) + 1 + Date.now()} className="card-literal">
        <h2 key={Math.floor(Math.random() * (30 - 1 + 1)) + 1 + Date.now()}>{data.name}</h2>

      <div className="card-literal">
        <div className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
        </div>
        <h2>{data.name}</h2>

        <div className="fave" />
        <h4 key={Math.floor(Math.random() * (10000 - 1 + 1)) + 1 + Date.now()}> Climate: {data.climate}</h4>
        <h4 key={Math.floor(Math.random() * (300 - 1 + 1)) + 1 + Date.now()}> Terrain: {data.terrain}</h4>
        <h4 key={Math.floor(Math.random() * (1080 - 1 + 1)) + 1 + Date.now()}> Population: {data.population}</h4>
        <h4 key={Math.floor(Math.random() * (4300 - 1 + 1)) + 1 + Date.now()}> Residents: {getResidentInfo(data.residents)} </h4>
      </div>
    );
  });

  return <div>{planetStats}</div>;
};
export default PlanetCard;

import React, { Component } from "react";
import "./PeopleCard.css";

const PeopleCard = ({ people, planets, species }) => {
  let mapOver = people.results.map(person => {
    let personName = person.name;
    let personWorld = person.homeworld;
    for (let planet in planets) {
      let planetPage = planets[planet];
      for (let aPlanet in planetPage) {
        let planetName = planetPage[aPlanet].name;
        if (personWorld === planetPage[aPlanet].url) {
          for (let i in species) {
            if (species[i].people.includes(person.url)) {
              return {
                name: personName,
                location: planetName,
                species: species[i].name,
                population: planetPage[aPlanet].population
              };
            }
          }
        }
      }
    }
  });

  const peopleStats = mapOver.map(data => {
    return (
      <div className="people-card-literal">
        <h2>{data.name}</h2>
        <h4>HomeWorld: {data.location}</h4>
        <h4>Species: {data.species}</h4>
        <h4>Population: {data.population}</h4>
      </div>
    );
  });

  return <div>{peopleStats}</div>;
};
export default PeopleCard;

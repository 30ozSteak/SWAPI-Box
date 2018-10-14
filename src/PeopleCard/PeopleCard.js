import React, { Component } from "react";
import "./PeopleCard.css";

const PeopleCard = ({ people, planets, species }) => {
let characterArray = [];

let answer = people.results.map(person => {
  let personName = person.name;
  let personWorld = person.homeworld;
  for (let planet in planets) {
      let planetPage = planets[planet];
      planetPage.map(index => {
        let indexNum = planetPage.indexOf(index)
        let planetName = planetPage[indexNum].name
        if (personWorld === planetPage[indexNum].url) {
          for (let i in species) {
            if (species[i].people.includes(person.url)) {
                let peopleObject = {
                name: personName,
                location: planetName,
                species: species[i].name,
                population: planetPage[indexNum].population
              }
              characterArray.push(peopleObject)
            }
          }
        }
      })
  }
})

  const peopleStats = characterArray.map(data => {
    return (
      <div className="people-card-literal">
        <h2>{data.name}</h2>
        <h4>HomeWorld: {data.location} | </h4>
        <h4> Species: {data.species}</h4>
        <h4>Population: {data.population}</h4>
      </div>
    );
  });

  return <div>{peopleStats}</div>;
};
export default PeopleCard;

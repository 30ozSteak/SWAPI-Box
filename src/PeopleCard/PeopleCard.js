import React, { Component } from "react";
import "./PeopleCard.css";

const PeopleCard = ({ people, planets, species }) => {
  let characterArray = [];
  
  let answer = people.results.map(person => {
    let personName = person.name;
    let personWorld = person.homeworld;
    planets.map(planet => {
      planet.map(index => {
        let indexPosition = planet.indexOf(index)
        if(personWorld === planet[indexPosition].url){
            for (let i in species) {
            if (species[i].people.includes(person.url)) {
              let peopleObject = {
                name: personName,
                location: planet[indexPosition].name,
                species: species[i].name,
                population: planet[indexPosition].population
              };
              characterArray.push(peopleObject);
            }
          }
        }
      })
    })
  })

const peopleStats = characterArray.map(data => {
    return (
      <div className="card-literal">
        <h2>{data.name}</h2>
        <div className="fave" />
        <h4>Species: {data.species} | </h4>
        <h4>HomeWorld: {data.location}</h4>
        <h4>Population: {data.population}</h4>
      </div>
    );
  });

  return <div>{peopleStats}</div>;
}

export default PeopleCard;

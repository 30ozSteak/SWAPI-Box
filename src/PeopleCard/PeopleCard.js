  import React, { Component } from "react";
import "./PeopleCard.css";
import Images from "../Images.json";

const PeopleCard = ({ people, planets, species }) => {
  let characterArray = [];

  let answer = people.results.map(person => {
    let personName = person.name;
    let personWorld = person.homeworld;
    planets.map(planet => {
      planet.map(index => {
        let indexPosition = planet.indexOf(index);
        if (personWorld === planet[indexPosition].url) {
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
      });
    });
  });

  let randomizedKey =() => {
    return Math.floor(Math.random() * (10000 - 1 + 1)) + 1 + Date.now() + Math.random()
  } 

  const peopleStats = characterArray.map(data => {
    return (
      <div className="card-literal">
        <section className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
          <section className="text-field">
            <h2 key={randomizedKey()}>{data.name}</h2>
            <div className="fave" />
            <h4 key={randomizedKey()}>Species: {data.species}</h4>
            <div key={randomizedKey()} className="caret" />
            <h4 key={randomizedKey()}>HomeWorld: {data.location}</h4>
            <h4 key={randomizedKey()}>Population: {data.population}</h4>

          </section>
        </section>
      </div>
    );
  });

  return <div>{peopleStats}</div>;
};

export default PeopleCard;

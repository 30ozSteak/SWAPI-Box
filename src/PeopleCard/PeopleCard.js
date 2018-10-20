import React, { Component } from "react";
import "./PeopleCard.css";
import Images from "../Images.json";

const PeopleCard = ({ people, planets, species, handleFavorites }) => {
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

console.log(characterArray)
  const peopleStats = characterArray.map(data => {
    return (
      <div key={data.name} className="card-literal">
        <section className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
          <div className="fave" onClick={() => handleFavorites(data)} />
          <section className="text-field">
            <h2>
              {data.name}
            </h2>
            <h4>
              Species: {data.species}
            </h4>
            <div
              className="caret"
            />
            <h4>
              HomeWorld: {data.location}
            </h4>
            <h4>
              Population: {data.population}
            </h4>
          </section>
        </section>
      </div>
    );
  });

  return <div>{peopleStats}</div>;
};

export default PeopleCard;


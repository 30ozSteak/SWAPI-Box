import React, { Component } from "react";
import PeopleCard from "../PeopleCard/PeopleCard";
import Loading from "../Loading/Loading";
import "../PeopleCard/PeopleCard.css";
import Error from "../Error/Error";

const People = ({ people, planets, species, handlePeopleLink, handleFavorites, removeFavorites, faveClassName }) => {
  try {
    const characters = people.results.map(person => (
      <PeopleCard handleFavorites={handleFavorites} removeFavorites={removeFavorites} people={people} species={species} planets={planets} faveClassName={faveClassName} />
    ))
    let charactersToRender = characters.slice(0, 1)
    return (
      <div className="container-header">
        <h5>The Characters of Star Wars </h5>
        <h5>Hover to Learn More</h5>
        <div className="people-container">{charactersToRender}</div>
      </div>
    );
  } catch {
    return (
      <div>
        <h1>
          <Loading />
        </h1>
      </div>
    );
  }
};
export default People;

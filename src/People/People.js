import React, { Component } from "react";
import PeopleCard from "../PeopleCard/PeopleCard";
import Loading from "../Loading/Loading";
import "../PeopleCard/PeopleCard.css";

const People = ({ people, planets, species, handlePeopleLink }) => {
  try {
    const characters = people.results.map(person => (
      <PeopleCard people={people} species={species} planets={planets} />
    ));
    let charactersToRender = characters.slice(0, 1);
    return (
      <div className="container-header">
        <h5>Hover Over a Character to Learn More</h5>
        <div className="people-container">{charactersToRender}</div>;
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
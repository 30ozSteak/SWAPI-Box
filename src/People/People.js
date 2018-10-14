import React, { Component } from "react";
import PeopleCard from "../PeopleCard/PeopleCard";
import Loading from "../Loading/Loading";
import "./People.css";

const People = ({ people, planets, species }) => {
  try {
    const characters = people.results.map(person => (
      <PeopleCard people={people} species={species} planets={planets} />
    ));
    let charactersToRender = characters.slice(0, 1);
    return <div className="people-container">{charactersToRender}</div>;
  } catch {
    return (
      <div>
        <Loading />
      </div>
    );
  }
};
export default People;

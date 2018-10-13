import React, { Component } from "react";
import PeopleCard from "../PeopleCard/PeopleCard"


const People = ({people, planets, species}) => {
  try {
  const characters = people.results.map(person => <PeopleCard people={people} species={species} planets={planets}/>);
  return (
    <div className="people-container">
      { characters }
    </div>
  );

} catch {
  return (
    <div>
      <h1>Loading People</h1>
    </div>
  )
}
}
export default People;
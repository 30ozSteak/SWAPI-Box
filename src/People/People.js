import React, { Component } from "react";
import PeopleCard from "../PeopleCard/PeopleCard"


const People = ({people, planets}) => {
  try {
console.log('this is in the try block', {people})
  const characters = people.results.map(person => <PeopleCard people={people} planets={planets}/>);
  return (
    <div className="people-container">
      { characters }
    </div>
  );

} catch {
  console.log('this is in the catch block', {people})
  return (
    <div>
      <h1>Loading People</h1>
    </div>
  )
}
}
export default People;
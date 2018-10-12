import React, { Component } from "react";

const PeopleCard = ({people, planets}) => {
let mapOver = people.results.map(person => {

 let personName = person.name
 let personWorld = person.homeworld
 for(let planet in planets){
  let planetPage = planets[planet]
  for(let aPlanet in planetPage){
    let planetName = planetPage[aPlanet].name
    if(personWorld === planetPage[aPlanet].url){
      return {name: personName, location: planetName}
    }
  }
  
 }
})

 const peopleStats = mapOver.map(data => {
  return ( 
    <div>
      <h3>Name: {data.name}</h3> 
      <h3>HomeWorld: {data.location}</h3>
    </div>
    )
})

return (
  <div>
    {peopleStats}
  </div>
  )
}
export default PeopleCard
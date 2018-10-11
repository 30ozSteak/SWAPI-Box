import React, { Component } from "react";

const PeopleCard = ({people}) => {
  try {
return (
  <div>
    <p> {people.results[0].name}</p>
  </div>
  )
} catch {
  console.log('not loading people')
  return <div> Loading </div>
}
}
export default PeopleCard
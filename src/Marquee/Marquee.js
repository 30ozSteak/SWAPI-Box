import React, { Component } from "react";

const Marquee = ({films}) => {
  try {
    let randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    return (
    <div className="marquee-block">
      <h1>{films.results[randomnumber].title}</h1>
      <p>{films.results[randomnumber].opening_crawl}</p>
    </div>
  )
  }
  catch {
    return (<div>Loading...</div>)
  }  
}

export default Marquee;

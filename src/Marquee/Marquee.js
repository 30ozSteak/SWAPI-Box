import React, { Component } from "react";
import "./Marquee.css";

const Marquee = ({ films }) => {
  try {
    let randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return (
      <div className="marquee-block">
        <div className="marquee-literal">
          <h2 className="film-title">{films.results[randomnumber].title}</h2>
          <h2 clasSName="film-number">
            {films.results[randomnumber].episode_id}
          </h2>
          <p className="film-crawl">
            {films.results[randomnumber].opening_crawl}
          </p>
        </div>
      </div>
    );
  } catch {
    console.log("failed");
    return <div>Loading...</div>;
  }
};

export default Marquee;

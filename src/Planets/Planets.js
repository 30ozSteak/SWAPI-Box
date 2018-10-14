import React, { Component } from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import Loading from "../Loading/Loading";
import "./Planet.css";

const Planet = ({planets}) => {
  try {
    const planetData = planets[0].map(planet => (
      <PlanetCard
        planets={planets}
      />
    ));
    let planetsToRender = planetData.slice(0, 1);
    return <div className="people-container">{planetsToRender}</div>;
  } catch {
    return (
      <div>
        <Loading />
      </div>
    );
  }
};
export default Planet;

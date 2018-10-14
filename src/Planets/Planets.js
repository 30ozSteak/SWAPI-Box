import React, { Component } from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import Loading from "../Loading/Loading";
import "./Planet.css";

const Planet = ({ planets, terrain, population, climate }) => {
  try {
    const planets = planets.results.map(planet => (
      <PlanetCard
        planet={planet}
        terrain={terrain}
        population={population}
        climate={climate}
        // residents={residents}
      />
    ));
    let planetsToRender = planets.slice(0, 1);
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

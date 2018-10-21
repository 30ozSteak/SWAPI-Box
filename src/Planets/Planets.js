import React, { Component } from "react";
import PlanetCard from "../PlanetCard/PlanetCard";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";


const Planets = ({ planets, residents, handleFavorites }) => {
  try {
    const planetData = planets[0].map(planet => (
      <PlanetCard handleFavorites={handleFavorites} planets={planets} residents={residents} />
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
export default Planets;

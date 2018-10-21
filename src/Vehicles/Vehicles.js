import React, { Component } from "react";
import VehicleCard from "../VehicleCard/VehicleCard";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";


const Vehicles = ({ vehicles, handleFavorites }) => {
  try {
    const vroomVrooms = vehicles.results.map(vehicle => (
      <VehicleCard handleFavorites={handleFavorites} vehicle={vehicles} />
    ));
    let vehiclesToRender = vroomVrooms.slice(0, 1);
    return <div className="people-container">{vehiclesToRender}</div>;
  } catch {
    return (
      <div>
        <h1>
          <Loading />
        </h1>
      </div>
    );
  }
};

export default Vehicles;

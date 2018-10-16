import React, { Component } from "react";
import VehicleCard from "../VehicleCard/VehicleCard";
import Loading from "../Loading/Loading";

const Vehicles = ({ vehicles }) => {
  try {
    const vroomVrooms = vehicles.results.map(vehicle => (
      <VehicleCard vehicle={vehicles} />
    ));
    let vehiclesToRender = vroomVrooms;
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

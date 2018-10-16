import React, { Component } from "react";
import VehicleCard from "../VehicleCard/VehicleCard";
import Loading from "../Loading/Loading";

const Vehicles = ({ vehicles }) => {
  try {
    const vroomVrooms = vehicles.results.map(vehicle => (
      <VehicleCard
        vehicle={vehicle}
        model={model}
        class={vehicle_class}
        passengers={passengers}
      />
    ));
    let vehiclesToRender = vehicles.slice(0, 1);
    return <div className="vehicle-container">{vehiclesToRender}</div>;
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

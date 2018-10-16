import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";

const VehicleCard = ({ vehicle }) => {
  let vehicleArray = vehicle.results 

  const vehicleStats = vehicleArray.map(data => {
    return (
      <div className="card-literal">
        <h2> {data.name}</h2>
        <div className="fave" />
        <h4> Model: {data.model}</h4>
        <h4> Class: {data.vehicle_class}</h4>
        <h4> Capacity: {data.passengers}</h4>
      </div>
    );
  });

  return <div>{vehicleStats}</div>;
};

export default VehicleCard;

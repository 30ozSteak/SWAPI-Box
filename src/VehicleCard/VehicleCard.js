import React, { Component } from "react";
import "../PeopleCard/PeopleCard.css";
import Images from "../Images.json";

const VehicleCard = ({ vehicle }) => {
  let vehicleArray = vehicle.results;

  const vehicleStats = vehicleArray.map(data => {
    return (
      <div className="card-literal">
        <section className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
        </section>
        <div className="fave" />
        <section className="text-field">
          <h2 key={Math.floor(Math.random() * (200 - 1 + 1)) + 1 + Date.now()}>
            {" "}
            {data.name}
          </h2>

          <h4 key={Math.floor(Math.random() * (500 - 1 + 1)) + 1 + Date.now()}>
            {" "}
            Model: {data.model}
          </h4>
          <h4 key={Math.floor(Math.random() * (120 - 1 + 1)) + 1 + Date.now()}>
            {" "}
            Class: {data.vehicle_class}
          </h4>
          <h4 key={Math.floor(Math.random() * (700 - 1 + 1)) + 1 + Date.now()}>
            {" "}
            Capacity: {data.passengers}
          </h4>
        </section>
      </div>
    );
  });

  return <div>{vehicleStats}</div>;
};

export default VehicleCard;

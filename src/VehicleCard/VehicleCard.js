import React from 'react';
import "../PeopleCard/PeopleCard.css";
import PropTypes from "prop-types";
import Images from "../Images.json";

const VehicleCard = ({ vehicle, handleFavorites }) => {
  let vehicleArray = vehicle.results;

  const vehicleStats = vehicleArray.map(data => {
    return (
      <div key={data.name} className="card-literal">
        <section className="image">
          <img
            className="image-literal"
            src={Images[data.name]}
            alt={data.name}
          />
        </section>
        <div className="fave" onClick={() => handleFavorites(data)} />
        <section className="text-field">
          <h2>
            {" "}
            {data.name}
          </h2>

          <h4>
            {" "}
            Model: {data.model}
          </h4>
          <h4>
            {" "}
            Class: {data.vehicle_class}
          </h4>
          <h4>
            {" "}
            Capacity: {data.passengers}
          </h4>
        </section>
      </div>
    );
  });

  return <div>{vehicleStats}</div>;
};

VehicleCard.propTypes = {
  vehicle: PropTypes.array,
  handleFavorites: PropTypes.func
};

export default VehicleCard;

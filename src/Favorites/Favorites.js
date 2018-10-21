import React, { Component } from "react";
import './Favorites.css'
import Images from "../Images.json";

const Favorites = ({ favorites, handleFavorites }) => {

  const planetFavorites = favorites.map(favorite => {
    return (
      <div key={favorite.name} className="card-literal">
        <section className="image">
          <div className="image">
            <img
              className="image-literal"
              src={Images[favorite.name]}
              alt={favorite.name}
            />
            <div className="fave" onClick={() => handleFavorites(favorites)} />
          </div>
          <section className="text-field">
            <h2>name: {favorite.name}</h2>
            <h4>climate: {favorite.climate}</h4>
            <div className="caret" />
            <h4>population: {favorite.population}</h4>
            <h4>terrain: {favorite.terrain}</h4>
          </section>
        </section>
      </div>
    )
  })

  return (
    <div>
      {planetFavorites}
    </div>
  )
}

export default Favorites;
import React, { Component } from "react";
import './Favorites.css'
import Images from "../Images.json";

const Favorites = ({favorites}) => {

  const planetFavorites = favorites.map(favorite => {
    return (
      <div>
        <h2>name: {favorite.name}</h2>
         <div className="image">
          <img
            className="image-literal"
            src={Images[favorite.name]}
            alt={favorite.name}
          />
        </div>
        <h4>climate: {favorite.climate}</h4>
        <h4>population: {favorite.population}</h4>
        <h4>terrain: {favorite.terrain}</h4>
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
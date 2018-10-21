import React, { Component } from "react";
import './Favorites.css'
import Images from "../Images.json";

const Favorites = ({ favorites, removeFavorites, id }) => {

  const FavoritesCards = favorites.map(favorite => {
    return (
      <div onClick={() => removeFavorites(favorite.name)} key={favorite.name} className="card-literal">
        <section className="image">
          <div className="image">
            <img
              className="image-literal"
              src={Images[favorite.name]}
              alt={favorite.name}
            />
            <div className="fave"/>
          </div>
          <section className="text-field">
            <h2>{favorite.name}</h2>
            <h4>{favorite.climate}</h4>
            <div className="caret" />
            <h4>{favorite.population}</h4>
            <h4>{favorite.terrain}</h4>
            <h4>{favorite.location}</h4>
            <h4>{favorite.species}</h4>
            <h4>{favorite.vehicle_class}</h4>
            <h4>{favorite.model}</h4>
            <h4>{favorite.passengers}</h4>
            <h4>{favorite.capacity}</h4>
          </section>
        </section>
      </div>
    )
  })

  return (
    <div>
      {FavoritesCards}
    </div>
  )
}

export default Favorites;
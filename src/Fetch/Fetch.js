import React, { Component } from "react";

  export const fetchFilm = async () => {
    const url = "https://swapi.co/api/films/";
    const data = await fetch(url);
    const filmData = await data.json();
    return filmData
};

export default fetchFilm;
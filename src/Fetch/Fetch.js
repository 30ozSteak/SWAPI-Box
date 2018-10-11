
import React, { Component } from "react";

export const fetchFilm = async () => {
  const url = "https://swapi.co/api/films/";
  const data = await fetch(url);
  const filmData = await data.json();
  return filmData;
};

export const fetchPeople = async () => {
  const url = "https://swapi.co/api/people";
  const data = await fetch(url);
  const peopleData = await data.json();
  return peopleData;
};

export const fetchPlanets = async () => {
  const url = "https://swapi.co/api/planets";
  const data = await fetch(url);
  const planetData = await data.json();
  return planetData;
};

export const fetchVehicles = async () => {
  const url = "https://swapi.co/api/vehicles";
  const data = await fetch(url);
  const vehicleData = await data.json();
  return vehicleData;
};

export default fetchFilm;


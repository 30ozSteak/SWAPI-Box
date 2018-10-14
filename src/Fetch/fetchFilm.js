import React, { Component } from "react";
import fetchData from "./Fetch";

const filmData = fetchData("https://swapi.co/api/films/");

export default filmData;

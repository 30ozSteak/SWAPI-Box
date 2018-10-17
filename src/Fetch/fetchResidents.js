import React, { Component } from "react";
import fetchData from "./Fetch";

let pageNumbers = [
  "5/",
  "68/",
  "81/",
  "26/",
  "30/",
  "3/",
  "21/",
  "36/",
  "31/",
  "38/",
  "39/",
  "42/",
  "60/",
  "61/",
  "66/",
  "35/",
  "34/",
  "55/",
  "74/",
  "22/",
  "72/",
  "73/",
  "63/"
];
let dataResults = [];
let url = "https://swapi.co/api/people/";

const getResidentData = async () => {
  for (let page in pageNumbers) {
    let value = await fetchData(url + pageNumbers[page]);
    dataResults.push(value);
  }
  return dataResults;
};

export default getResidentData;

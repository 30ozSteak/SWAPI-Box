import React, { Component } from "react";
import fetchData from "./Fetch";

let getPeopleData = () => {
  return fetchData("https://swapi.co/api/people");
};

export default getPeopleData;

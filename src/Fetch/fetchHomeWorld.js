import React from 'react';
import fetchData from "./Fetch";

let getHomeWorldData = () => {
  return fetchData("https://swapi.co/api/planets");
};

export default getHomeWorldData;

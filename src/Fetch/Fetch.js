import React, { Component } from "react";

const fetchData = async url => {
  const data = await fetch(url);
  const response = await data.json();
  return response;
};

export default fetchData;

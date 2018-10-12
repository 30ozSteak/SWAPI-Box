import React, { Component } from "react";
import fetchData from './Fetch'


const vehicleData = fetchData('https://swapi.co/api/vehicles')

export default vehicleData
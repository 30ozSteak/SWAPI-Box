import React, { Component } from "react";
import fetchData from './Fetch'

let url = 'https://swapi.co/api/planets'

  let fetchPlanets = async () => {
    let condition = true 
    let results = []
    while (condition) {
     let newData = await fetchData(url)
      if(newData.next !== null){
        results.push(newData.results)
        url = newData.next
      } else { 
        condition = false
        return results
      }
    }
    return results
  }






export default fetchPlanets
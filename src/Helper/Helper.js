export const parseFilm = film => {
  const modifiedObj = {
    title: film.title,
    openingCrawl: film.openingCrawl,
    episode: film.episode,
    date: film.release_date
  };
  return modifiedObj;
};

// parsePeople

export const parsePeople = (result, species, homeworld) => {
  const modifiedObj = {
    name: result.name,
    homeworld: result.homeworld,
    species: result.species,
    population: homeworld.population
  };
  return modifiedObj;
};

export const parsePlanets = (result, planet) => {
  const modifiedObj = {
    name: result.name,
    terrain: result.terrain,
    population: result.population,
    climate: result.climate,
    residents: residents.join("")
  };
  return modifiedObj;
};

export const parseVehicles = (result, vehicle) => {
  const modifiedObj = {
    name: result.name,
    model: result.model,
    class: result.vehicle_class,
    numberOfPassengers: result.passengers
  };
  return modifiedObj;
};

// parseVehicles

import fetchData from "./Fetch";

let getSpeciesData = async () => {
  const species1 = await fetchData("https://swapi.co/api/species/1");
  const species2 = await fetchData("https://swapi.co/api/species/2");
  return [species1, species2];
};

export default getSpeciesData;

import React from "react";
import PlanetCard from "./PlanetCard";
import { shallow } from "enzyme";

describe("PlanetCard", () => {

  it.skip('should exist', () => {
    const planet = [{ results: [{ name: "Endor" }, { name: 'Hoth' }] }]
    const mockClimate = [{ climate: "hot af" }]
    const mockTerrain = [{ terrain: "its a giant ball of fire" }]
    const mockPopulation = [{ population: "zero, probably" }]
    const mockResidents = [{ residents: 'fire-man' }]
    const wrapper = shallow(<PlanetCard planet={planet} climate={mockClimate} terrain={mockTerrain} population={mockPopulation} residents={mockResidents} />);
    expect(wrapper).toBeDefined();
  })

  it.skip("should match the snapshot", () => {
    const planet = [{ results: [{ name: "Hoth" }, { name: 'Not Hoth' }] }]

    const mockClimate = [{ climate: "hot af" }]
    const mockTerrain = [{ terrain: "its a giant ball of fire" }]
    const mockPopulation = [{ population: "zero, probably" }]
    const mockResidents = [{ residents: 'fire-man' }]
    const wrapper = shallow(<PlanetCard planet={planet} climate={mockClimate} terrain={mockTerrain} population={mockPopulation} residents={mockResidents} />);

    expect(wrapper).toMatchSnapshot();
  });
})

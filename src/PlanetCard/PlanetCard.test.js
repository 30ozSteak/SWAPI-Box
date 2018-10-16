import React from "react";
import PlanetCard from "./PlanetCard";
import { shallow } from "enzyme";

describe.skip("PeopleCard", () => {

  it("should match the screenshot", () => {
    const people = [{results: [{name: "Luke"}, {name: 'Darth Vador'}]}]

    const mockPlanets = [{homeworld: "Moon"}]
    const mockSpecies = [{species: "driod"}]
    const characterArray = [people, mockPlanets, mockSpecies] 

    const wrapper = shallow(<PeopleCard people={people} planets={mockPlanets} species={mockSpecies} />);

    expect(wrapper).toMatchSnapshot();
  });
})

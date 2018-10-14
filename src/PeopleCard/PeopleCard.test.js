import React from "react";
import PeopleCard from "./PeopleCard";
import { shallow } from "enzyme";

describe.skip("PeopleCard", () => {

  it('should exist', () => {
    const people = [{results: [{name: "Luke"}, {name: 'Darth Vador'}]}]
    const mockPlanets = [{homeworld: "Moon"}]
    const mockSpecies = [{species: "driod"}]
    const wrapper = shallow(<PeopleCard people={people} planets={mockPlanets} species={mockSpecies} />);
    expect(wrapper).toBeDefined();
  });


  it("should match the screenshot", () => {
    const people = [{results: [{name: "Luke"}, {name: 'Darth Vador'}]}]

  console.log(people.results)

    const mockPlanets = [{homeworld: "Moon"}]
    const mockSpecies = [{species: "driod"}]
    const characterArray = [people, mockPlanets, mockSpecies] 

    const wrapper = shallow(<PeopleCard people={people} planets={mockPlanets} species={mockSpecies} />);

    expect(wrapper).toMatchSnapshot();
  });
})

import React from "react";
import People from "./People";
import { shallow } from "enzyme";

describe("People", () => {

  it("should match the screenshot", () => {
    const mockPeople = ['results': [{people: "Luke"}, {people: 'Darth Vador'}]]

    const mockPlanets = [{homeworld: "Moon"}]
    const mockSpecies = [{species: "driod"}]
    
    const wrapper = shallow(<People people={mockPeople} planets={mockPlanets} species={mockSpecies} />);

    expect(wrapper).toMatchSnapshot();
  });
})

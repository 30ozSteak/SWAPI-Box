import React from "react";
import PeopleCard from "./PeopleCard";
import { shallow } from "enzyme";
import {people} from './mockData';
import {planets} from './mockData'

describe.skip("PeopleCard", () => {

  it('should exist', () => {
    const mockSpecies = [{species: "driod"}]
    const wrapper = shallow(<PeopleCard people={people} planets={planets} species={mockSpecies} />);
    expect(wrapper).toBeDefined();
  });

  it("should match the screenshot", () => {
    const mockSpecies = [{species: "driod"}]
    const characterArray = [people, planets, mockSpecies] 

    const wrapper = shallow(<PeopleCard people={people} planets={planets} species={mockSpecies} />)

    expect(wrapper).toMatchSnapshot();
  });
})

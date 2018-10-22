import React from "react";
import PlanetCard from "./PlanetCard";
import { shallow } from "enzyme";
import {people} from './mockDataPlanet';
import {planets} from './mockDataPlanet'
import {species} from './mockDataPlanet'


describe.skip("PlanetCard", () => {

  it("should match the screenshot", () => {

    const wrapper = shallow(<PlanetCard residents={people} planets={planets} species={species} />);

    expect(wrapper).toMatchSnapshot();
  });
})

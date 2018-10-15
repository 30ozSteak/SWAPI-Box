import React from "react";
import Planets from "./Planets";
import { shallow } from "enzyme";

describe("Planets", () => {

  it("should match the screenshot", () => {
    const mockPlanets = ['results': [{homeworld: "Moon"}, {homeworld: 'Saturn'}]]

    const mockResidents = [{name: "Luke Skywalker"}]
    
    const wrapper = shallow(<Planets planets={mockPlanets} residents={mockResidents} />);

    expect(wrapper).toMatchSnapshot();
  });
})

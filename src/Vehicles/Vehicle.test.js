import React from "react";
import Vehicles from "./Vehicles";
import { shallow } from "enzyme";

describe("Vehicles", () => {

  it("should match the screenshot", () => {
    const mockVehicles = ['results': [{type: "car"}, {type: 'bus'}]]
    
    const wrapper = shallow(<Vehicles vehicles={mockVehicles} />);

    expect(wrapper).toMatchSnapshot();
  });
})

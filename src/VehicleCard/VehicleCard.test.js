import React from "react";
import VehicleCard from "./VehicleCard";
import { shallow } from "enzyme";

describe("VehicleCard", () => {

  it.skip("should match the screenshot", () => {
    const mockVehicles = ['results': [{type: "car"}, {type: 'bus'}]]
    
    const wrapper = shallow(<VehicleCard vehicle={mockVehicles} />);

    expect(wrapper).toMatchSnapshot();
  });
})

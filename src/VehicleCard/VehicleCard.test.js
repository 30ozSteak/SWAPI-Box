import React from "react";
import VehicleCard from "./VehicleCard";
import { vehicles } from './mockData'
import { shallow } from "enzyme";

describe("VehicleCard", () => {

  it("should match the screenshot", () => {

    const wrapper = shallow(<VehicleCard vehicle={vehicles} />);

    expect(wrapper).toMatchSnapshot();
  });
})

import React from "react";
import VehicleCard from "./VehicleCard";
import { shallow } from "enzyme";

describe("VehicleCard", () => {
  it.skip('should exist', () => {
    const vehicle = [{ results: [{ name: "beep boop" }, { name: 't-16 whateverhopper' }] }]
    const mockModel = [{ model: "vroomer" }]
    const mockVehicleClass = [{ class: "fast" }]
    const mockCapacity = [{ capacity: 'like, a lot' }]
    const wrapper = shallow(<VehicleCard vehicle={vehicle} model={mockModel} class={mockVehicleClass} capacity={mockCapacity} />);
    expect(wrapper).toBeDefined();
  });

  it.skip("should match snapshot", () => {
    const vehicle = [{ results: [{ name: "beep boop" }, { name: 't-16 whateverhopper' }] }]
    const mockModel = [{ model: "vroomer" }]
    const mockVehicleClass = [{ class: "fast" }]
    const mockCapacity = [{ capacity: 'like, a lot' }]
    const wrapper = shallow(<VehicleCard vehicle={vehicle} model={mockModel} class={mockVehicleClass} capacity={mockCapacity} />);

    expect(wrapper).toMatchSnapshot();
  });
})

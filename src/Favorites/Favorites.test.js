import React from "react";
import Favorites from "./Favorites";
import { shallow } from "enzyme";

describe("Favorites", () => {

  it('should exist', () => {
    const favorites = [{name: 'Luke'}, {name: 'Laura'}, {name: 'Nick'}]
    const wrapper = shallow(<Favorites favorites={favorites} />);
    expect(wrapper).toBeDefined();
  });

  it("should match the screenshot", () => {
    const favorites = [{name: 'Luke'}, {name: 'Laura'}, {name: 'Nick'}]
    const wrapper = shallow(<Favorites favorites={favorites} />);
    expect(wrapper).toMatchSnapshot();
  });
})

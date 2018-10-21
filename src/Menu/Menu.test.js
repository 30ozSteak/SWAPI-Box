import React from "react";
import Menu from "./Menu";
import { shallow } from "enzyme";

describe("Menu", () => {
  it("should match the screenshot", () => {
    const mockProps = [
      {
        service: "people"
      },
      {
        service: "planets"
      }
    ];

    const favorites = [{name: 'Luke'}, {name: 'Aldeern'}]
    const wrapper = shallow(<Menu data={mockProps} favorites={favorites} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    const mockProps = [
      {
        service: "people"
      },
      {
        service: "planets"
      }
    ];
    const favorites = [{name: 'Luke'}, {name: 'Aldeern'}]
    const wrapper = shallow(<Menu data={mockProps} favorites={favorites} />);
    const expected = {
      buttonState: "", "favorites": []
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it("should have a class of inactive as default", () => {
    const mockProps = [
      {
        service: "people"
      },
      {
        service: "planets"
      }
    ];
    const favorites = [{name: 'Luke'}, {name: 'Aldeern'}]
    const mockToggle = jest.fn();
    const wrapper = shallow(
      <Menu mockToggle={mockToggle} favorites={favorites} data={mockProps} inactive={true} />
    );
    expect(wrapper.is(".active")).toBe(false);
  });

  it('state change after click', async () => {
    const mockProps = [{service: "people"}, {service: "planets"}];
    const favorites = [{name: 'Luke'}, {name: 'Aldeern'}]
    const wrapper = shallow(<Menu data={mockProps} favorites={favorites}/>);
      const expected = 'active'
      wrapper.setState({ buttonState: '' })
      await wrapper.instance().toggleActive()
      expect(wrapper.state('buttonState')).toEqual(expected)
    })
});

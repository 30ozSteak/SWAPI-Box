import React from 'react'
import Menu from './Menu'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

describe('Menu', () => {

  it('should match the screenshot', () => {
    const mockProps = [{service: 'people'}, {service: 'planets'}]
    const wrapper = shallow(<Menu data={mockProps} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const mockProps = [{service: 'people'}, {service: 'planets'}]
    const wrapper = shallow( <Menu data={mockProps} />)
    const expected = { buttonState: '' }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should have a class of inactive as default', () => {
    const mockProps = [{service: 'people'}, {service: 'planets'}]
    const mockToggle = jest.fn()
    const wrapper = shallow( <Menu mockToggle={mockToggle} data={mockProps} inactive={true} />)
    expect(wrapper.is('.active')).toBe(false)
  })

  it.skip('should toggle the class on click', () => {
    const mockToggle = jest.fn()
    const mockProps = [{service: 'people'}, {service: 'planets'}]

    const wrapper = shallow(<Menu data={mockProps}
                              mockToggle={mockToggle}
                            />)
    
    wrapper.find('.menu-button').simulate('click');
    expect(mockToggle).toHaveBeenCalled();
  })

})
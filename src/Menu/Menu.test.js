import React from 'react'
import Menu from './Menu'
// import App from 'src/App.js'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

describe('Menu', () => {
  it('should have a class of inactive as default', () => {
    const mockProps = [{service: 'people'}, {service: 'planets'}]
    const mockToggle = jest.fn()
    const wrapper = shallow(<Menu mockToggle={mockToggle} data={mockProps} inactive={true} />)
    expect(wrapper.is('.active')).toBe(false)
  })
})
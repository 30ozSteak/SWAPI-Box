import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import fetchData from './Fetch/Fetch'

describe('App', () => {

it('should match the screenshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

it('should have a default state', async () => {
    const wrapper = shallow(<App />)
    const expected = { films: [], homeState: 'active-main home-main', people: [], vehicles: [], planets: [], homeWorld: [], favorites: [], error: '', residents: [], species: [] }
    expect(wrapper.state()).toEqual(expected)
  })

 it('should retreive data from API for scrolling film information', async () => {

  let expected = [{ name: 'Luke Skywalker', homeworld: 'Tatooine' }]

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true, json: () => Promise.resolve(expected)}))

  const URL = 'https://swapi.co/api/people';
  const result = await fetchData(URL)
  const filmData = result
  expect(filmData).toEqual(expected) 
 })

  it.skip('should retrieve data from local storage on mount', () =>{

    const wrapper = shallow(<App />)
    const mockfilmData = {
            "title": "A New Hope", 
        }
  
    wrapper.instance().updateLocalStorage(mockfilmData);

    expect(localStorage).toEqual({ "title": "A New Hope"});
  });

    it.skip('removeFavorites removes favorite from state', async () => {

    const wrapper = shallow(<App />) 
    const initialState = [{type: 'person', name: 'Luke', location: 'Mars'}, {type: 'person', name: 'Lea', location: 'Mars'}]
    console.log(initialState[0].name)
    const expected = [{type: 'person', name: 'Luke', location: 'Mars'}]

    wrapper.setState({ favorites: initialState })
    await wrapper.instance().removeFavorites(initialState[0].name)

    expect(wrapper.state('Favorites')).toEqual(expected)
  })

})  
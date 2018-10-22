import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import fetchData from './Fetch/Fetch'

describe('App', () => {

  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.instance().fetchCall = jest.fn()
    let localStorage = new LocalStorage
    window.localStorage = localStorage
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should match the screenshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', async () => {
    const expected = { films: [], homeState: 'active-main home-main', people: [], vehicles: [], planets: [], homeWorld: [], favorites: [], error: '', residents: [], species: [] }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should retreive data from API for scrolling film information', async () => {

    let expected = [{ name: 'Luke Skywalker', homeworld: 'Tatooine' }]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true, json: () => Promise.resolve(expected)
    }))

    const URL = 'https://swapi.co/api/people';
    const result = await fetchData(URL)
    const filmData = result
    expect(filmData).toEqual(expected)
  })

  it.skip('should retrieve data from local storage on mount', () => {

    const mockfilmData = {
      "title": "A New Hope",
    }

    wrapper.instance().updateLocalStorage(mockfilmData);

    expect(localStorage).toEqual({ "title": "A New Hope" });
  });

  it.skip('removeFavorites removes favorite from state', async () => {

    const initialState = [{ type: 'person', name: 'Luke', location: 'Mars' }, { type: 'person', name: 'Lea', location: 'Mars' }]
    console.log(initialState[0].name)
    const expected = [{ type: 'person', name: 'Luke', location: 'Mars' }]

    wrapper.setState({ favorites: initialState })
    await wrapper.instance().removeFavorites(initialState[0].name)

    expect(wrapper.state('Favorites')).toEqual(expected)
  })

  describe('handlePeopleLink' = () => {
    it('should set state once its called', async () => {
      const mockFetchCall = jest.fn(() => {
        return Promise.resolve([{ hero: 'Luke' }, { hero: 'r2d2' }]);
      });
      const mockPeople = { handlePeople: mockFetchCall };
      wrapper.state().handlePeopleLink = mockPeople;

      await wrapper.instance().handlePeopleLink();
      expect(wrapper.state().people).toEqual([{ hero: 'Luke' }, { hero: 'r2d2' }])
    })
  });

  describe('componentDidMount', () => {
    it('should call showFilmCrawl() on componentDidMount', () => {
      wrapper.instance().showFilmCrawl = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().showFilmCrawl).toHaveBeenCalled();
    })

    it('should call checkPathName() on componentDidMount', () => {
      wrapper.instance().checkPathName = jest.fn();
      wrapper.instance().checkPathName();
      expect(wrapper.instance().checkPathName).toHaveBeenCalled();
    })
  })

})  
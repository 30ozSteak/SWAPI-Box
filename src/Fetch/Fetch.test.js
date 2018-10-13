import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './Fetch'
import { shallow } from 'enzyme'

describe('FetchCall', () => {

 it('should call fetch with the correct parameters', async () => {
  let mockPeople = [{ name: 'Luke Skywalker', homeworld: 'Tatooine' }]

  
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true, json: () => Promise.resolve(mockPeople)}))

  const expected = 'https://swapi.co/api/people';

  await fetchData(expected)

  expect(window.fetch).toHaveBeenCalledWith(expected)
})

})

   
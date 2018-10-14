import React from "react";
import ReactDOM from "react-dom";
import fetchData from "./Fetch";
import { shallow } from "enzyme";

describe("FetchCall", () => {
  it("should call fetch with the correct parameters", async () => {
    let mockPeople = [{ name: "Luke Skywalker", homeworld: "Tatooine" }];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPeople)
      })
    );

    const expected = "https://swapi.co/api/people";


  const expected = 'https://swapi.co/api/people';
  await fetchData(expected)
  expect(window.fetch).toHaveBeenCalledWith(expected)
})


    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected)
      })
    );

    const URL = "https://swapi.co/api/people";

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true, json: () => Promise.resolve(expected)}))

  const URL = 'https://swapi.co/api/people';
  const result = await fetchData(URL)
  expect(result).toEqual(expected) 
 })

})

    expect(result).toEqual(expected);
  });
});

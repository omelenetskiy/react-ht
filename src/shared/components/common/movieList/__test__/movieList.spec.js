import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-enzyme";
import "jest-styled-components";

import MovieList from "../MovieList";

const props = {
  parsedDate: "parsedDate",
  movies: [
    {
      id: "id",
      title: "title",
      poster_path: "poster_path",
      release_date: "release_date",
      genres: ["genre-1", "genre-2"]
    }
  ]
};

describe("MovieList", () => {
  it("should render correctly", () => {
    const wrapper = (
      <Router>
        <MovieList {...props} />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-enzyme";
import "jest-styled-components";

import MovieCard from "../MovieCard";

const props = {
  parsedDate: "parsedDate",
  movie: {
    id: "id",
    title: "title",
    poster_path: "poster_path",
    genres: ["genre-1", "genre-2"]
  }
};

describe("MovieCard", () => {
  it("should render correctly", () => {
    const wrapper = (
      <Router>
        <MovieCard {...props} />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

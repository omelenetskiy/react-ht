import {
  getMoviesState,
  getMovieState,
  getMovies,
  getMovie
} from "../../selectors";

const state = {
  movies: "movies",
  movie: "movie"
};

jest.mock("reselect", () => ({ createSelector: () => "selector" }));

describe("Selectors", () => {
  it("Should create selector", () => {
    expect(getMovies(state)).toBe("movies");
    expect(getMovie(state)).toBe("movie");
  });
});

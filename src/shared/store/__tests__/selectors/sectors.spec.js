import {
  getMoviesState,
  getMovieState,
  getMovies,
  getMovie
} from "../../selectors";

const state = {
  movies: [],
  movie: {}
};

const mockGetMovies = jest.fn();
const mockGetMovie = jest.fn();

jest.mock("reselect", () => ({ createSelector: () => "selector" }));

jest.mock("../../selectors", () => ({
  getMovies: mockGetMovies,
  getMovie: mockGetMovie,
  getMoviesState: jest.fn(),
  getMovieState: jest.fn()
}));

describe("Selectors", () => {
  it("Should create selector", () => {
    getMovies();
    getMovie();
    getMoviesState();
    expect(getMovies).toBeCalled();
    expect(getMovie).toBeCalled();
    expect(getMoviesState).toBeCalled();
  });
});

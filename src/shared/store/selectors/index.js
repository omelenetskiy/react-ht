import { createSelector } from "reselect";

const getMovies = state => state.movies;
const getMovie = state => state.movie;

export const getMoviesState = createSelector(
  [getMovies],
  movies => movies
);

export const getMovieState = createSelector(
  [getMovie],
  movie => movie
);

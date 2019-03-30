import { createSelector } from "reselect";

export const getMovies = state => state.movies;
export const getMovie = state => state.movie;

export const getMoviesState = createSelector(
  [getMovies],
  movies => movies
);

export const getMovieState = createSelector(
  [getMovie],
  movie => movie
);

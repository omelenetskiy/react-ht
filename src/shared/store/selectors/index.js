import { createSelector } from 'reselect';

export const getMovies = (state) => state.movies.movies;
export const getMoviesData = (state) => state.movies;
export const getMovie = (state) => state.movie.movie;

export const getMoviesState = createSelector(
  [getMovies],
  (movies) => movies
);

export const getMovieState = createSelector(
  [getMovie],
  (movie) => movie
);

export const getMoviesStateData = createSelector(
  [getMoviesData],
  (movie) => movie
);

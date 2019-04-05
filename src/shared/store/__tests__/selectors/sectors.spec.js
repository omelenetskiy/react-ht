import {
  getMoviesState,
  getMovieState,
  getMoviesData,
  getMoviesStateData,
  getMovies,
  getMovie,
} from '../../selectors';

const state = {
  movies: { movies: 'movies' },
  movie: { movie: 'movie' },
};

describe('Selectors', () => {
  it('Should get movies', () => {
    expect(getMovies(state)).toBe('movies');
    expect(getMovie(state)).toBe('movie');

    expect(getMoviesState(state)).toBe('movies');
    expect(getMovieState(state)).toBe('movie');

    expect(getMoviesStateData(state)).toEqual({ movies: 'movies' });
    expect(getMoviesData(state)).toEqual({ movies: 'movies' });
  });
});

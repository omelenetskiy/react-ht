import {
  getMoviesState,
  getMovieState,
  getMovies,
  getMovie,
} from '../../selectors';

const state = {
  movies: 'movies',
  movie: 'movie',
};

describe('Selectors', () => {
  it('Should get movies', () => {
    expect(getMovies(state)).toBe('movies');
    expect(getMovie(state)).toBe('movie');

    expect(getMoviesState(state)).toBe('movies');
    expect(getMovieState(state)).toBe('movie');
  });
});

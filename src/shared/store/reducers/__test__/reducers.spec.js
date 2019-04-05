import movie from '../movie';
import movies from '../movies';
import { ACTION_MOVIE_FETCH } from '../../actions/movie';
import { ACTION_MOVIES_FETCH, ACTION_SORT_CHANGE } from '../../actions/movies';

describe('Movie', () => {
  it('should return movie state', () => {
    const initialState = {
      movie: {},
    };
    const action = {
      type: ACTION_MOVIE_FETCH,
      movie: { name: 'movie' },
    };
    const result = movie(initialState, action);
    expect(result).toEqual({ movie: { name: 'movie' } });
  });

  it('should return movie default state', () => {
    const initialState = {
      movie: {},
    };
    const action = {
      type: 'default',
    };
    const result = movie(undefined, action);
    expect(result).toEqual(initialState);
  });

  it('should return movies default state', () => {
    const initialState = {
      movies: [],
      sortBy: 'vote_average',
    };
    const action = {
      type: 'default',
    };
    const result = movies(undefined, action);
    expect(result).toEqual(initialState);
  });

  it('should return movie ACTION_SORT_CHANGE', () => {
    const initialState = {
      movies: [],
      sortBy: 'vote_average',
    };
    const action = {
      type: ACTION_SORT_CHANGE,
      sortBy: 'raiting',
    };
    const result = movies(initialState, action);
    expect(result).toEqual({
      movies: [],
      sortBy: 'raiting',
    });
  });

  it('should return movie ACTION_MOVIES_FETCH', () => {
    const initialState = {
      movies: [],
      sortBy: 'vote_average',
    };
    const action = {
      type: ACTION_MOVIES_FETCH,
      movies: 'movies',
    };
    const result = movies(initialState, action);
    expect(result).toEqual({
      movies: 'movies',
      sortBy: 'vote_average',
    });
  });
});

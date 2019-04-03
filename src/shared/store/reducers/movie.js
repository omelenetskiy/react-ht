import { ACTION_MOVIE_FETCH } from '../actions/movie';

const initialState = {
  movie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_MOVIE_FETCH:
      return {
        ...state,
        movie: action.movie,
      };
    default:
      return state;
  }
};

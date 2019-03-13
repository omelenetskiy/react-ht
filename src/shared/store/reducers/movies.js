import {
  ACTION_TYPE_MOVIES_FETCH,
  ACTION_TYPE_MOVIES_FETCHING
} from '../actions/movies';

const initialState = {
  movies: [],
  error: false,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_MOVIES_FETCHING:
      return {
        ...state,
        movies: [],
        error: false,
        loading: true
      };
    case ACTION_TYPE_MOVIES_FETCH:
      return {
        ...state,
        movies: action.movies,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

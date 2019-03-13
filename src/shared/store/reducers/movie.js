import {
  ACTION_TYPE_MOVIE_FETCH,
  ACTION_TYPE_MOVIE_FETCHING
} from "../actions/movie";

const initialState = {
  movie: {},
  error: false,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_MOVIE_FETCHING:
      return {
        ...state,
        movie: {},
        error: false,
        loading: true
      };
    case ACTION_TYPE_MOVIE_FETCH:
      return {
        ...state,
        movie: action.movie,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

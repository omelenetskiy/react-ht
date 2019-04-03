import {
  ACTION_TYPE_MOVIES_FETCH,
  ACTION_TYPE_MOVIES_FETCHING,
  ACTION_TYPE_SEARCH_CHANGE,
  ACTION_TYPE_SORT_CHANGE,
} from '../actions/movies';

const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'vote_average',
  error: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_SEARCH_CHANGE:
      return {
        ...state,
        searchBy: action.searchBy,
      };
    case ACTION_TYPE_SORT_CHANGE:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case ACTION_TYPE_MOVIES_FETCHING:
      return {
        ...state,
        movies: [],
        error: false,
        loading: true,
      };
    case ACTION_TYPE_MOVIES_FETCH:
      return {
        ...state,
        movies: action.movies,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

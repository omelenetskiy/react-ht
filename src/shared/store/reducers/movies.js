import {
  ACTION_MOVIES_FETCH,
  ACTION_SEARCH_CHANGE,
  ACTION_SORT_CHANGE,
} from '../actions/movies';

const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'vote_average',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SEARCH_CHANGE:
      return {
        ...state,
        searchBy: action.searchBy,
      };
    case ACTION_SORT_CHANGE:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case ACTION_MOVIES_FETCH:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

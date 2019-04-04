import axios from 'axios';

import { moviesURL } from '../../constants/api';

export const ACTION_MOVIES_FETCH = 'ACTION_TYPE_MOVIES_FETCH';
export const ACTION_SEARCH_CHANGE = 'ACTION_TYPE_SEARCH_CHANGE';
export const ACTION_SORT_CHANGE = 'ACTION_TYPE_SORT_CHANGE';

export const actionSearchByChange = (searchBy) => ({
  type: ACTION_SEARCH_CHANGE,
  searchBy,
});

export const actionSortByChange = (sortBy) => ({
  type: ACTION_SORT_CHANGE,
  sortBy,
});

export const actionMoviesMatchByGenres = () => async (dispatch, getState) => {
  const { movie } = getState();
  const url = `${moviesURL}&filter=${movie.movie.genres}`;
  const response = await axios.get(url);
  dispatch({
    type: ACTION_MOVIES_FETCH,
    movies: response.data.data.filter((el) => el.id !== movie.movie.id),
  });
};

export const actionMoviesFetchByQueryString = (queryString) => async (
  dispatch
) => {
  const url = `${moviesURL}&${queryString}`;
  const response = await axios.get(url);

  dispatch({
    type: ACTION_MOVIES_FETCH,
    movies: response.data.data,
  });
};

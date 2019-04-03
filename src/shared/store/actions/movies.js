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

export const actionMoviesMatchByGenre = (genres) => async (dispatch) => {
  try {
    const response = await axios.get(`${moviesURL}?filter=${genres}`);

    dispatch({
      type: ACTION_MOVIES_FETCH,
      movies: response.data.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const actionMoviesFetchByQueryString = (queryString) => async (
  dispatch
) => {
  try {
    const response = await axios.get(`${moviesURL}&${queryString}`);

    dispatch({
      type: ACTION_MOVIES_FETCH,
      movies: response.data.data,
    });
  } catch (error) {
    console.error(error);
  }
};

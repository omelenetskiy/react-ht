import axios from 'axios';
import { moviesURL } from '../../constants/api';

export const ACTION_MOVIES_FETCH = 'ACTION_TYPE_MOVIES_FETCH';
export const ACTION_SORT_CHANGE = 'ACTION_TYPE_SORT_CHANGE';

export const actionMoviesMatchByGenres = (movie) => async (dispatch) => {
  const url = `${moviesURL}&filter=${movie.genres}`;
  const response = await axios.get(url);
  dispatch({
    type: ACTION_MOVIES_FETCH,
    movies: response.data.data.filter((el) => el.id !== movie.id),
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

export const actionSortByChange = (sortBy, query) => async (dispatch) => {
  await dispatch({
    type: ACTION_SORT_CHANGE,
    sortBy,
  });
  await dispatch(actionMoviesFetchByQueryString(query));
};

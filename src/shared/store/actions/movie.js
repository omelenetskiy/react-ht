import axios from 'axios';

import { actionMoviesMatchByGenre } from './movies';

export const ACTION_TYPE_MOVIE_FETCH = 'ACTION_TYPE_MOVIE_FETCH';
export const ACTION_TYPE_MOVIE_FETCHING = 'ACTION_TYPE_MOVIE_FETCHING';

export function actionMovieFetch({ id }) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE_MOVIE_FETCHING,
    });

    try {
      const response = await axios.get(
        `https://reactjs-cdp.herokuapp.com/movies/${id}`
      );

      const movie = response.data;

      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE_MOVIE_FETCH,
          movie,
        });

        dispatch(actionMoviesMatchByGenre(movie.genres));
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export const actionMovieFetchIfNeeded = ({ id }) => (dispatch, getState) => {
  const state = getState();
  if (state.movie.movie.id !== id) {
    return dispatch(actionMovieFetch({ id }));
  }
  return false;
};

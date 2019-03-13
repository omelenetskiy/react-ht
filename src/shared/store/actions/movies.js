import axios from 'axios';
import { movies } from '../../constants';

export const ACTION_TYPE_MOVIES_FETCH = 'ACTION_TYPE_MOVIES_FETCH';
export const ACTION_TYPE_MOVIES_FETCHING = 'ACTION_TYPE_MOVIES_FETCHING';

export function actionMoviesFetch() {
  return async dispatch => {
    dispatch({
      type: ACTION_TYPE_MOVIES_FETCHING
    });

    try {
      const response = await axios.get(movies);
      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE_MOVIES_FETCH,
          movies: response.data.data
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export const actionMoviesFetchIfNeeded = () => {
  return (dispatch, getState) => {
    let state = getState();
    if (state.movies.length === 0) {
      return dispatch(actionMoviesFetch());
    }
  };
};

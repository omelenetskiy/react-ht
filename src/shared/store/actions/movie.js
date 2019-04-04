import axios from 'axios';

import { movieURL } from '../../constants/api';
import { actionMoviesMatchByGenres } from './movies';

export const ACTION_MOVIE_FETCH = 'ACTION_TYPE_MOVIE_FETCH';

export const actionMovieFetch = (id) => async (dispatch) => {
  const url = `${movieURL}/${id}`;
  const response = await axios.get(url);

  await dispatch({
    type: ACTION_MOVIE_FETCH,
    movie: response.data,
  });

  await dispatch(actionMoviesMatchByGenres(response.data));
};

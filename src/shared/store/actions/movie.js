import axios from 'axios';

import { movieURL } from '../../constants/api';
import { actionMoviesMatchByGenre } from './movies';

export const ACTION_MOVIE_FETCH = 'ACTION_TYPE_MOVIE_FETCH';

export const actionMovieFetch = ({ id }) => async (dispatch) => {
  try {
    const response = await axios.get(`${movieURL}/${id}`);
    const movie = response.data;
    dispatch({
      type: ACTION_MOVIE_FETCH,
      movie,
    });
    dispatch(actionMoviesMatchByGenre(movie.genres));
  } catch (error) {
    console.error(error);
  }
};

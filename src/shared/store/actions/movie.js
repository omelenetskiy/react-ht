import axios from "axios";

export const ACTION_TYPE_MOVIE_FETCH = "ACTION_TYPE_MOVIE_FETCH";
export const ACTION_TYPE_MOVIE_FETCHING = "ACTION_TYPE_MOVIE_FETCHING";

export function actionMovieFetch({ id }) {
  return async dispatch => {
    dispatch({
      type: ACTION_TYPE_MOVIE_FETCHING
    });

    try {
      const response = await axios.get(
        `https://reactjs-cdp.herokuapp.com/movies/${id}`
      );
      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE_MOVIE_FETCH,
          movie: response.data
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export const actionMovieFetchIfNeeded = ({ id }) => {
  return (dispatch, getState) => {
    let state = getState();
    if (state.movie.movie.id !== id) {
      return dispatch(actionMovieFetch({ id }));
    }
  };
};

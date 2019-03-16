import axios from "axios";

export const ACTION_TYPE_MOVIES_FETCH = "ACTION_TYPE_MOVIES_FETCH";
export const ACTION_TYPE_MOVIES_FETCHING = "ACTION_TYPE_MOVIES_FETCHING";
export const ACTION_TYPE_SEARCH_CHANGE = "ACTION_TYPE_SEARCH_CHANGE";

export const actionSearcByChange = searchBy => ({
  type: ACTION_TYPE_SEARCH_CHANGE,
  searchBy
});

export function actionMoviesFetch(value) {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPE_MOVIES_FETCHING
    });

    const {
      movies: { searchBy }
    } = getState();

    console.log("state", searchBy);

    try {
      const response = await axios.get(
        `http://react-cdp-api.herokuapp.com/movies?search=${value}&searchBy=${searchBy}`
      );
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
    const state = getState();
    if (state.movies.length === 0) {
      return dispatch(actionMoviesFetch());
    }
  };
};

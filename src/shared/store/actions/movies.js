import axios from 'axios';

export const ACTION_TYPE_MOVIES_FETCH = 'ACTION_TYPE_MOVIES_FETCH';
export const ACTION_TYPE_MOVIES_FETCHING = 'ACTION_TYPE_MOVIES_FETCHING';
export const ACTION_TYPE_SEARCH_CHANGE = 'ACTION_TYPE_SEARCH_CHANGE';
export const ACTION_TYPE_SORT_CHANGE = 'ACTION_TYPE_SORT_CHANGE';

const query = (sortBy, searchBy, value) =>
  `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${value}&searchBy=${searchBy}&limit=50`;

export const actionSearchByChange = (searchBy) => ({
  type: ACTION_TYPE_SEARCH_CHANGE,
  searchBy,
});

export const actionSortByChange = (sortBy) => ({
  type: ACTION_TYPE_SORT_CHANGE,
  sortBy,
});

export function actionMoviesFetch(value) {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPE_MOVIES_FETCHING,
    });

    const {
      movies: { searchBy, sortBy },
    } = getState();

    try {
      const response = await axios.get(query(sortBy, searchBy, value));
      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE_MOVIES_FETCH,
          movies: response.data.data,
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function actionMoviesMatchByGenre(genres) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://reactjs-cdp.herokuapp.com/movies?filter=${genres}`
      );
      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE_MOVIES_FETCH,
          movies: response.data.data,
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function actionMoviesFetchByQueryString(queryString) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&${queryString}`
      );
      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE_MOVIES_FETCH,
          movies: response.data.data,
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export const actionMoviesFetchIfNeeded = () => (dispatch, getState) => {
  const state = getState();
  if (state.movies.length === 0) {
    return dispatch(actionMoviesFetch());
  }
  return false;
};

// Imports
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Imports
import movies from './reducers/movies';
import movie from './reducers/movie';

// App Reducer
const appReducer = combineReducers({
  movies,
  movie
});

// Root Reducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

// Load initial state from server side
let initialState;
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__;
  delete window.__INITIAL_STATE__;
}

// Store
export const store = createStore(
  rootReducer,
  initialState,

  composeWithDevTools(applyMiddleware(thunk))
);

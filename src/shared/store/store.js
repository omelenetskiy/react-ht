// Imports
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// App Imports
import * as blog from '../components/blog/api/state';

import movies from './reducers/movies';

// App Reducer
const appReducer = combineReducers({
  movies
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

// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./reducers', () => {
//     const nextRootReducer = require('./reducers');

//     store.replaceReducer(nextRootReducer);
//   });
// }

import thunk from 'redux-thunk';
import Cookies from 'cookies-js';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies, {}),
  stateReconciler: hardSet,
};

const rootReducer = persistCombineReducers(persistConfig, reducers);

const preloadedState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

export const reduxStore = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const reduxPersistor = persistStore(reduxStore);

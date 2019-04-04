import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from '../shared/store/store';
import App from '../shared/App';

const preloadedState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = configureStore(preloadedState);

const Client = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

hydrate(<Client />, document.getElementById('root'));

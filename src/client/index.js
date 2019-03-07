import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from '../components/Layout';
import createStore from '../store';

const store = createStore(window.REDUX_DATA);

const jsx = (
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>
);

const app = document.getElementById('app');
ReactDOM.hydrate(jsx, app);

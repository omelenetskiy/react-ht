import React from 'react';
import Loadable from 'react-loadable';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from '../shared/store/store';
// import App from '../shared/components/App';
import Loading from '../shared/components/common/loading/Loading';

const preloadedState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = configureStore(preloadedState);

const LoadableApp = Loadable({
  loader: () => import('../shared/components/App'),
  loading: Loading,
});

const Client = () => (
  <Provider store={store}>
    <Router>
      <LoadableApp />
    </Router>
  </Provider>
);

export default Loadable.preloadReady().then(() => {
  hydrate(<Client />, document.getElementById('root'));
});

import React from 'react';
import Loadable from 'react-loadable';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { reduxStore, reduxPersistor } from '../shared/store/store';

import App from '../shared/App';
import Loading from '../shared/components/loading/Loading';

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={reduxStore}>
      <PersistGate loading={<Loading />} persistor={reduxPersistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
});

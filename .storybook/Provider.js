import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../src/shared/store/store';

const ProviderWrapper = ({ story }) => (
  <Provider store={store}>{story}</Provider>
);

export default ProviderWrapper;

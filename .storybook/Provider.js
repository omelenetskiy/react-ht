import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../src/shared/store/store';

const ProviderWrapper = ({ story }) => (
  <Provider store={store}>{story}</Provider>
);

export default ProviderWrapper;

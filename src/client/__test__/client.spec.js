import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import 'jest-styled-components';

import App from '../../shared/App';

const store = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn(),
};

describe('Client', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

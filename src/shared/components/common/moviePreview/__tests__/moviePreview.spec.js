import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'jest-enzyme';
import 'jest-styled-components';

jest.mock('../../../../../config/moviesApp', () => ({
  appTitle: 'appTitle'
}));

import { MoviePreview } from '../MoviePreview';

const location = {
  pathname: '/movie'
};

const props = {
  moviesData: {
    movie: {
      title: 'title',
      release_date: 'release_date'
    },
    movies: []
  }
};

const store = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
};

describe('MoviePreview', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <MoviePreview {...props} location={location} />
        </Router>
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });
});

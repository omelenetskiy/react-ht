import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import MoviePreview from '../MoviePreview';

const initialState = {};
const mockStore = configureStore();
let store;

const props = {
  movie: {
    title: 'title',
    release_date: 'release_date',
    poster_path: 'poster_path',
    vote_average: 'vote_average',
    tagline: 'tagline',
    runtime: 'runtime',
    overview: 'overview',
  },
  parsedDate: 'parsedDate',
};

describe('MovieCard', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MoviePreview {...props} />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Loading...', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MoviePreview />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

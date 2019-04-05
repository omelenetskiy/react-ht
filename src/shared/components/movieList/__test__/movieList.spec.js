import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import MovieList from '../MovieList';

const initialState = {};
const mockStore = configureStore();
let store;

const props = {
  parsedDate: 'parsedDate',
  movies: [
    {
      id: 'id',
      title: 'title',
      poster_path: 'poster_path',
      release_date: 'release_date',
      genres: ['genre-1', 'genre-2'],
    },
  ],
};

describe('MovieList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MovieList {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

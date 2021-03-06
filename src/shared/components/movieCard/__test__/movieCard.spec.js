import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import MovieCard from '../MovieCard';

const initialState = {};
const mockStore = configureStore();
let store;

const props = {
  parsedDate: 'parsedDate',
  movie: {
    id: 'id',
    title: 'title',
    poster_path: 'poster_path',
    genres: ['genre-1', 'genre-2'],
  },
};
const actionMovie = jest.fn();

describe('MovieCard', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MovieCard {...props} actionMovie={actionMovie} />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

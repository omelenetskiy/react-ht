import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import Filter from '../SortFilter';

const initialState = {};
const mockStore = configureStore();
let store;

const changeSortBy = jest.fn();
const props = {
  changeSortBy,
  movies: ['movie'],
  match: {
    params: {
      query: 'query',
    },
  },
};

describe('Filter', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <Filter {...props} changeSortBy={changeSortBy} />
        </Router>
      </Provider>
    );
    // wrapper.instance().toggleSortBy({ target: { value: 'cats' } });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

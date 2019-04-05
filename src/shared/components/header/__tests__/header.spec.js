import React from 'react';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, StyledLink } from '../Header';
import 'jest-enzyme';
import 'jest-styled-components';

const initialState = {};
const mockStore = configureStore();
let store;

jest.mock('../../../../config/moviesApp', () => ({
  appTitle: 'appTitle',
}));

const theme = {
  stylishColorLight: 'stylishColorLight',
};

const moviesFetch = jest.fn();

const props = {
  moviesFetch,
  dispatch: jest.fn(),
};

describe('Header', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render correctly', () => {
    const location = {
      pathname: '/',
    };
    const wrapper = (
      <Provider store={store}>
        <Router>
          <Header location={location} />
        </Router>
      </Provider>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const location = {
      pathname: '/movie',
    };
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header {...props} location={location} />
        </Router>
      </Provider>
    );
    const linkWrapper = shallow(
      <Router>
        <StyledLink to="/" theme={theme} {...props} />
      </Router>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(linkWrapper)).toMatchSnapshot();
  });
});

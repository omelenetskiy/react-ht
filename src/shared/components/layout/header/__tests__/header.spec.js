import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import 'jest-styled-components';

jest.mock('../../../../../config/moviesApp', () => ({
  appTitle: 'appTitle'
}));

import { Header } from '../Header';

const location = {
  pathname: '/header'
};

describe('Header', () => {
  it('should render correctly', () => {
    const wrapper = (
      <Router>
        <Header location={location} />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

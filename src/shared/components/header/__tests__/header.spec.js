import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import 'jest-styled-components';

import { Header } from '../Header';

jest.mock('../../../../../config/moviesApp', () => ({
  appTitle: 'appTitle',
}));

const location = {
  pathname: '/header',
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

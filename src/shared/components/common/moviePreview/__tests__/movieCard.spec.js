import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import 'jest-styled-components';

import MovieCard from '../movieCard/MovieCard';

const props = {
  movie: {
    title: 'title',
    release_date: 'release_date',
    poster_path: 'poster_path',
    vote_average: 'vote_average',
    tagline: 'tagline',
    runtime: 'runtime',
    overview: 'overview'
  },
  parsedDate: 'parsedDate'
};

describe('MovieCard', () => {
  it('should render correctly', () => {
    const wrapper = (
      <Router>
        <MovieCard {...props} />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Loading...', () => {
    const wrapper = (
      <Router>
        <MovieCard />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-enzyme';
import 'jest-styled-components';

import MoviePreview from '../MoviePreview';

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
  it('should render correctly', () => {
    const wrapper = (
      <Router>
        <MoviePreview {...props} />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Loading...', () => {
    const wrapper = (
      <Router>
        <MoviePreview />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

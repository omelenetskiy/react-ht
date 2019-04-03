import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import Movie from '../moviePreview';

const theme = {
  dangerColor: 'dangerColor',
  stylishColorLight: 'stylishColorLight',
};

const props = {
  color: 'light',
};

describe('Movie styled', () => {
  it('should render correctly', () => {
    const wrapper = <Movie theme={theme} {...props} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

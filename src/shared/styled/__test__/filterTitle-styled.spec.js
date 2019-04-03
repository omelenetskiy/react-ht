import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import Title from '../filterTitle';

const theme = {
  stylishColor: 'stylishColor',
};

const props = {
  color: 'light',
};

describe('Title styled', () => {
  it('should render correctly', () => {
    const wrapper = <Title theme={theme} {...props} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

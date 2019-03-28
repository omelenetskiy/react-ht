import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import Checkbox from '../checkbox';

const theme = {
  dangerColorDark: 'dangerColorDark',
  stylishColor: 'stylishColor'
};

describe('Card styled', () => {
  it('should render correctly', () => {
    const wrapper = <Checkbox theme={theme} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

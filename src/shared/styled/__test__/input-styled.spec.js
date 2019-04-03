import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import Input from '../input';

const theme = {
  dangerColor: 'dangerColor',
};

describe('Input styled', () => {
  it('should render correctly', () => {
    const wrapper = <Input theme={theme} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

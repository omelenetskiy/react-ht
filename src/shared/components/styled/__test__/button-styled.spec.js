import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import Button from '../button';

const theme = {
  dangerColor: 'dangerColor',
  dangerColorDark: 'dangerColorDark'
};

const props = {
  size: 'small'
};

describe('Button styled', () => {
  it('should render correctly', () => {
    const wrapper = <Button theme={theme} {...props} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

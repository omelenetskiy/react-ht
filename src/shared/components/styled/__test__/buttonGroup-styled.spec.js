import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import ButtonGroup from '../buttonGroup';

const theme = {
  stylishColor: 'stylishColor',
  dangerColorDark: 'dangerColorDark',
};

const props = {
  type: 'small',
};

describe('ButtonGroup styled', () => {
  it('should render correctly', () => {
    const wrapper = <ButtonGroup theme={theme} {...props} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

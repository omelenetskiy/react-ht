import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import Card from '../card';

const theme = {
  cardMaxWidth: 'cardMaxWidth',
  stylishColor: 'stylishColor',
  stylishColorLight: 'stylishColorLight'
};

describe('Card styled', () => {
  it('should render correctly', () => {
    const wrapper = <Card theme={theme} />;

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

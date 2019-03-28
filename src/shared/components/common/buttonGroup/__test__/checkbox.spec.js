import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import Checkbox from '../checkbox/Checkbox';

const props = {
  button: {
    value: 'value',
    title: 'title',
    name: 'name',
    checked: true
  },
  toggleSearchBy: jest.fn()
};

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Checkbox {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

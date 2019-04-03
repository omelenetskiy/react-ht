import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import Button from '../Button';

const props = {
  children: 'button',
  onClick: jest.fn(),
  size: 'small',
};

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Button {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

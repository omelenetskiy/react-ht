import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import Title from '../../title/Title';

const props = {
  children: 'title',
};

describe('Title', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Title {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import Loading from '../Loading';

describe('Loading', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Loading />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

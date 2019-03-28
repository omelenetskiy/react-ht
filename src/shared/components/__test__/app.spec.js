import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import App from '../App';

describe('App', () => {
  it('should render correctly', () => {
    const context = shallow(<App />);

    expect(toJson(context)).toMatchSnapshot();
  });
});

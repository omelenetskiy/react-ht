import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import ButtonGroup from '../ButtonGroup';

const props = {
  controls: {
    buttons: [
      {
        title: 'title',
      },
      {
        title: 'title',
      },
    ],
  },
  toggleSearchBy: jest.fn(),
  color: 'white',
  type: 'type',
};

describe('ButtonGroup', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ButtonGroup {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

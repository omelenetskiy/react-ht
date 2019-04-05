import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';
import 'jest-styled-components';

import SearchFilter from '../SearchFilter';

const handleChangeSearchBy = jest.fn();
const handleSearch = jest.fn();

const props = {
  handleChangeSearchBy,
  handleSearch,
};

describe('SearchFilter', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SearchFilter {...props} />);
    wrapper.instance().toggleSearchBy({ target: { value: 'cats' } });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

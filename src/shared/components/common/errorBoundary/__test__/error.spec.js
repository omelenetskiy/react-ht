import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-enzyme';
import 'jest-styled-components';

import ErrorBoundary from '../ErrorBoundary';

const ComponentWithError = () => {
  throw new Error();
};

describe('<ErrorBoundary> window', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<ErrorBoundary>Test</ErrorBoundary>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays error message on error generated by child', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );
    expect(wrapper).toEqual({});
  });
});

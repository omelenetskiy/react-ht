import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-enzyme";
import "jest-styled-components";

import NotFound from "../NotFound";

describe("NotFound", () => {
  it("should render correctly", () => {
    const wrapper = (
      <Router>
        <NotFound />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import "jest-enzyme";
import "jest-styled-components";

import Input from "../../input/Input";

const props = {
  placeholder: "placeholder",
  onChange: jest.fn()
};

describe("Input", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Input {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

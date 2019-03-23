import React, { Fragment } from "react";
import styled from "styled-components";

import Button from "../../styled/button";
import Checkbox from "./checkbox/Checkbox";

import StyledButtonGroup from "../../styled/buttonGroup";
import StyledFilterTitle from "../../styled/filterTitle";

const StyledLabel = styled(Button)`
  min-width: 50px;
  padding: 5px 15px;
  margin: 0 5px;
  transition: all 0.1s ease-in-out;
`;

const ButtonGroup = ({ controls, toggleSearchBy, color, type }) => (
  <StyledButtonGroup type={type}>
    <StyledFilterTitle color={color}>{controls.title}</StyledFilterTitle>

    <div className="filter-buttons">
      {controls.buttons.map(button => (
        <Fragment key={button.title}>
          <Checkbox button={button} toggleSearchBy={toggleSearchBy} />
          <StyledLabel as="label" htmlFor={button.title}>
            {button.title}
          </StyledLabel>
        </Fragment>
      ))}
    </div>
  </StyledButtonGroup>
);

export default ButtonGroup;

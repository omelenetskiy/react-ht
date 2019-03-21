import React from 'react';

import StyledCheckbox from '../../../styled/checkbox';

const Checkbox = ({ button, toggleSearchBy }) => (
  <StyledCheckbox
    type="radio"
    value={button.value}
    id={button.title}
    name={button.name}
    defaultChecked={button.checked}
    onChange={toggleSearchBy}
  />
);

export default Checkbox;

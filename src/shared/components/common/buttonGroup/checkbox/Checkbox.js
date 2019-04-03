import * as React from 'react';

import StyledCheckbox from '../../../styled/checkbox';

type Props = {
  button: {
    value: string,
    title: string,
    name: string,
    checked: boolean,
  },
  toggleSearchBy: SyntheticEvent<>,
};

const Checkbox = ({ button, toggleSearchBy }: Props) => (
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

import React from 'react';

import StyledInput from '../../../styled/input';

const Input = ({ placeholder, onChange }) => (
  <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
);

export default Input;

import React from 'react';
import StyledButton from '../../styled/button';

const Button = ({ children, onClick, size }) => (
  <StyledButton size={size} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;

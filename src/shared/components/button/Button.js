import * as React from 'react';
import StyledButton from '../../styled/button';

type Props = {
  size?: string,
  children?: React.Node,
  onClick: SyntheticEvent<>,
};

const Button = ({ children, onClick, size }: Props) => (
  <StyledButton size={size} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  size: 'small',
  children: null,
};

export default Button;

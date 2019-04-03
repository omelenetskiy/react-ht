import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { appTitle } from '../../../../config/moviesApp';
import StyledHeader from '../../styled/header';

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.stylishColorLight};
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.stylishColorLight};
  padding: 5px;
  border-radius: 3px;
`;

type Props = {
  location: {
    pathname: string,
  },
};

export const Header = ({ location }: Props) => (
  <StyledHeader>
    <Link to="/">{appTitle}</Link>
    {location.pathname !== '/' && <StyledLink to="/">Search</StyledLink>}
  </StyledHeader>
);

export default withRouter(Header);

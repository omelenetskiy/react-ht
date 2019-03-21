import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { appTitle } from '../../../../config/moviesApp';
import StyledHeader from '../../styled/header';

const Header = ({ location }) => (
  <StyledHeader>
    <Link to="/">{appTitle}</Link>
    {location.pathname !== '/' && <Link to="/">Search</Link>}
  </StyledHeader>
);

export default withRouter(Header);

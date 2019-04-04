import React from 'react';
import { Link } from 'react-router-dom';

import { appTitle } from '../../../config/moviesApp';
import StyledFooter from '../../styled/footer';

const Footer = () => (
  <StyledFooter>
    <Link to="/404">{appTitle}</Link>
  </StyledFooter>
);

export default Footer;

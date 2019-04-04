import React from 'react';
import { Link } from 'react-router-dom';

import { appTitle } from '../../../config/moviesApp';
import StyledFooter from '../../styled/footer';

const Footer = () => (
  <StyledFooter>
    <div className="footer">
      <Link to="/404">{appTitle}</Link>
    </div>
  </StyledFooter>
);

export default Footer;

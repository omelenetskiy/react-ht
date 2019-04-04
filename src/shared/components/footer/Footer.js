import React from 'react';

import { appTitle } from '../../../config/moviesApp';
import StyledFooter from '../../styled/footer';

const Footer = () => (
  <StyledFooter>
    <div className="footer">{appTitle}</div>
  </StyledFooter>
);

export default Footer;

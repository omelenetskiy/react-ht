import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const StyledNotFound = styled.div`
  color: ${(props) => props.theme.dangerColor};
  p {
    font-size: 45px;
  }
`;

const NotFound = () => (
  <StyledNotFound>
    <Helmet>
      <title>404</title>
    </Helmet>
    <p>404 Page Not Found</p>
    <Link as="button" to="/">
      Home
    </Link>
  </StyledNotFound>
);

export default NotFound;

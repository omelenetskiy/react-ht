import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const StyledNotFound = styled.div`
  color: ${(props) => props.theme.dangerColor};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  p {
    font-size: 75px;
    font-weight: bold;

    span {
      font-size: 150px;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.dangerColor};
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.dangerColor};
  padding: 5px;
  border-radius: 3px;
  display: inline-block;
`;

const NotFound = () => (
  <StyledNotFound>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <p>
      Error <span>404</span>
    </p>
    <StyledLink to="/">Home</StyledLink>
  </StyledNotFound>
);

export default NotFound;

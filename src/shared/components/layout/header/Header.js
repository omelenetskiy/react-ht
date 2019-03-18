import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  min-height: 30px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const Header = ({ location }) => (
  <StyledHeader>
    <Link to="/">Netflixroulette</Link>
    {location.pathname !== "/" && <Link to="/">Search</Link>}
  </StyledHeader>
);

export default withRouter(Header);

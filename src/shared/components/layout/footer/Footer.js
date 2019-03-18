import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  min-height: 30px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const Footer = () => (
  <StyledFooter>
    <Link to="/404">Netflixroulette</Link>
  </StyledFooter>
);

export default Footer;

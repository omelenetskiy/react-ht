import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Header = ({ location }) => (
  <header>
    <Link to="/">Netflixroulette</Link>
    {location.pathname !== "/" && (
      <Link className="btn" to="/">
        Search
      </Link>
    )}
  </header>
);

export default withRouter(Header);

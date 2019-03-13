import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ children }) => (
  <header className="header">
    <div className="container">
      <nav>
        <Link className="navbar-brand" to="/">
          Netflixroulette
        </Link>
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
          Search
        </button>
      </nav>
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.element
};

Header.defaultProps = {
  children: null
};

export default Header;

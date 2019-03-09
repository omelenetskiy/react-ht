import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../common/search';

const Header = () => (
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
      <Search />
    </div>
  </header>
);

export default Header;

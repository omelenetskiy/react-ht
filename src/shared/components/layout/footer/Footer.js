import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <Link className="navbar-brand" to="/404">
        Netflixroulette
      </Link>
    </div>
  </footer>
);

export default Footer;

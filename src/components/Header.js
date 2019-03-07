import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Header);

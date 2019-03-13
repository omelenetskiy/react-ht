// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = props => (
  <div>
    <header>
      <Link to="/">Home 123</Link>
      &nbsp;
      <Link to="/about">About</Link>
      &nbsp;
      <Link to="/blogs">Blogs</Link>
      &nbsp;
      <Link to="/blog-add">Add Blog</Link>
    </header>

    <section>{props.children}</section>

    <footer>&copy; 2017 as d</footer>
  </div>
);

export default Layout;

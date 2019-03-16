import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <p>404 Page Not Found</p>
    <Link to="/">Home</Link>
  </div>
);

export default NotFound;

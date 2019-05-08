import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav bg-dark">
    <h1 className="navbar-brand">
      <Link to="/" className="link">Power User</Link>
    </h1>
    <ul>
      <li>
        <Link to="/about" className="link">About</Link>
      </li>
      <li>
        <Link to="/services" className="link">Services</Link>
      </li>
    </ul>
  </div>
);

export default Navbar

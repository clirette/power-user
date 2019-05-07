import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <h1>Landing</h1>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
  </div>
);

export default Landing;
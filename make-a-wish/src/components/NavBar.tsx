import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/for-you" className="nav-link">For You</Link>
        </li>
        <li>
          <Link to="/community" className="nav-link">Community</Link>
        </li>
        <li>
          <Link to="/tracking" className='nav-link'>Tracking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
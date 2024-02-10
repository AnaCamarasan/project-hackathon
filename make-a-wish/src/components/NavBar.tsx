import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to="/home" className="nav-link">Home</Link>
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
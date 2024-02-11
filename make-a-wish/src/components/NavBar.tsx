import { Link } from "react-router-dom"
import "./Navbar.css"
import { Button } from "@mui/material"

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        style={{ height: "2.5rem", width: "auto", marginTop: "1rem" }}
        src="./../make-a-wish-1-logo-black-and-white.png"
      />
      <ul className="navbar-nav">
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/for-you" className="nav-link">
            For You
          </Link>
        </li>
        <li>
          <Link to="/community" className="nav-link">
            Community
          </Link>
        </li>
        <li>
          <Link to="/tracking" className="nav-link">
            Tracking
          </Link>
        </li>
      </ul>
      <Button style={{ color: "white" }}> Settings </Button>
      <Button>
        <Link to="/" style={{ color: "white" }}>
          {" "}
          Log out
        </Link>
      </Button>
    </nav>
  )
}

export default Navbar

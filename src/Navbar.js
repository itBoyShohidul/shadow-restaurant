import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;

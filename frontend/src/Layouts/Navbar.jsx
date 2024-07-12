import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <Link className="navbar-brand" to="/">
        <img
          src={require(`../Assets/Images/Tours & Travels-logos_white.png`)}
          width="100"
          alt="Tours & Travels Logo"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="searchbus">
              Search Bus
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="recentbooking">
              Recent Booking
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/login"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Login
            </a>
            <div className="dropdown-menu bg-danger" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="login">
                Customer Login
              </Link>
              <Link className="dropdown-item" to="travelslogin">
                Travels Login
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

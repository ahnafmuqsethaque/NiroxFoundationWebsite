import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Nirox Foundation
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Link to="/benefits">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Benefits
                </a>
              </li>
            </Link>
            <Link to="/projects">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
            </Link>
            <Link to="/reservations">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Reservations
                </a>
              </li>
            </Link>
            <Link to="/events">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
            </Link>
            <Link to="/contactus">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

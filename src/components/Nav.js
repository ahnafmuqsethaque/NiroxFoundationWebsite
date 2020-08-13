import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";

import "../styles/nav.css";

import { AuthUserContext } from "./Session";
import * as ROLES from "./../constants/roles";

const Nav = ({ authUser }) => (
  <div class="nav">
    <AuthUserContext.Consumer>
      {/* Possible syntax error on line 13 */}
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const toggler = (event) => {
document.getElementById("navid").setAttribute("style", "transparent")
}

const NavigationAuth = ({ authUser }) => (
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" id="navid">
      <a class="navbar-brand" href="/home">
        Nirox Foundation
      {/* <img
          alt="Nirox Foundation"
          src="https://drive.google.com/file/d/1cKW1-Naaz-8OJaZ7jU8bVfSApu2eWbvg/view?usp=sharing"
          width="135"
          height="40"
        ></img> */}
      </a>
      <button
        class="navbar-toggler"
        onClick={toggler}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav ">
          {!authUser.roles[ROLES.ADMIN] && (
            <Link to="/benefits">
              <li class="nav-item">
                <a class="nav-link" href="/benefits">
                  Benefits
                </a>
              </li>
            </Link>
          )}
          {!authUser.roles[ROLES.ADMIN] && (
            <Link to="/reservations">
              <li class="nav-item">
                <a class="nav-link" href="/reservations">
                  Reservations
                </a>
              </li>
            </Link>
          )}
          {!authUser.roles[ROLES.ADMIN] && (
            <Link to="/contactus">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </Link>
          )}
          <Link to="/account">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Account
              </a>
            </li>
          </Link>
          {!!authUser.roles[ROLES.ADMIN] && (
            <Link to="/admin">
              <li class="nav-item">
                <a class="nav-link" href="#" >
                  Users
                </a>
              </li>
            </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
            <Link to="/signupadmin">
              <li class="nav-item">
                <a class="nav-link" href="#" >
                  Sign Up
                </a>
              </li>
            </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
            <Link to="/createevent">
              <li class="nav-item">
                <a class="nav-link" href="#" >
                  Create Event
                </a>
              </li>
            </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
            <Link to="/createproject">
              <li class="nav-item">
                <a class="nav-link" href="#" >
                  Create Project
                </a>
              </li>
            </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
            <Link to="/events">
              <li class="nav-item">
                <a class="nav-link" href="#" >
                  Manage Events
                </a>
              </li>
            </Link>
          )}
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="/landingpage">
        Nirox Foundation
        {/* <img
          alt="Nirox Foundation"
          src="https://dm2pap001files.storage.live.com/y4mUrQ2P5kUl2ESPAEiUwFLXcOd1BDK-wgNkmdqTvyossKDBAERvL53y6ELwOV7TeBAonYmWTYabdHT9ocq5SarWhsOyQ-kZ8aJYQFgb6nTHHHD6ie_mbh-tuFS7wu3UBES-ppGvXQ-zizMtZaOJ_GJVjDDNNhI2CB5AsOQowudD_vn4FZ4PLfYCSD6N5_xgEZsljPdTQHJcBbaj1D11wMmLQ/Nirox%20Logo_white%20background.png?psid=1&width=1794&height=657"
          width="135"
          height="40"
        ></img> */}
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
          <Link to="/signin">
            <li class="nav-item">
              <a class="nav-link" href="#" >
                Sign In
              </a>
            </li>
          </Link>
          <Link to="/application">
            <li class="nav-item">
              <a class="nav-link" href="#" >
                Application
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;

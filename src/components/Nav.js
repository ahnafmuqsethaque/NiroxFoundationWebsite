import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";

import '../styles/nav.css';

import { AuthUserContext } from "./Session";
import * as ROLES from "./../constants/roles";

const Nav = ({ authUser }) => (
  <div class="nav">
    <AuthUserContext.Consumer>
      {/* Possible syntax error on line 13 */}
      {(authUser) => (authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
          <Link to="/home">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
          </Link>
          {!authUser.roles[ROLES.ADMIN] && (
          <Link to="/benefits">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Benefits
              </a>
            </li>
          </Link>
          )}
          <Link to="/reservations">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Reservations
              </a>
            </li>
          </Link>
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
              <a class="nav-link" href="#">
                Admin
              </a>
            </li>
          </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
          <Link to="/signupadmin">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign Up
              </a>
            </li>
          </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
          <Link to="/createevent">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Create Event
              </a>
            </li>
          </Link>
          )}
          {!!authUser.roles[ROLES.ADMIN] && (
          <Link to="/createproject">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Create Project
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
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
          <Link to="/signin">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign In
              </a>
            </li>
          </Link>
          <Link to="/memberships">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Memberships
              </a>
            </li>
          </Link>
          <Link to="/application">
            <li class="nav-item">
              <a class="nav-link" href="#">
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

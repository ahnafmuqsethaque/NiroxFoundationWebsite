import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import "../styles/signup.css";

import { withFirebase } from "./Firebase";
import * as ROLES from "../constants/roles";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
        });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("./home");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Sign Up</h1>
          <form className="signup" onSubmit={this.onSubmit}>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <br />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <br />
            <button class="btnsu" type="submit">
              Sign Up
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"./home"}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };

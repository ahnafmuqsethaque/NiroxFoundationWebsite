import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
// import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { withFirebase } from './Firebase';

import '../styles/signin.css';
import '../styles/benefits.css';
 
const SignInPage = () => (
  <div class="center">
    <h1 class="headline">Sign In</h1>
    <SignInForm />
    <PasswordForgetLink />
    {/* <SignUpLink /> */}
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('./home');
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <form class="form-signin" onSubmit={this.onSubmit}>
          
        <input
          class="form-control"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          class="form-control"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button class="btnsi" disabled={isInvalid} type="submit">
          Sign In
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };





// class SignIn extends Component {

//     render() {
//         return(
//             <form class="form-signin">
//             <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
//             <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
//             <label for="inputEmail" class="sr-only">Email address</label>
//             <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
//             <label for="inputPassword" class="sr-only">Password</label>
//             <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
//             <div class="checkbox" mb-3>

//                 <label>
//                     <input type="checkbox" value="remember-me" />
//                     {rem} </label>

//             </div>

//             <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//         </form>
//         );
//     }


// }


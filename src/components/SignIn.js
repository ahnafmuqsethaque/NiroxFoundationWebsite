import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
// import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { withFirebase } from './Firebase';

import '../styles/signin.css';
 
const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
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
        <button class="btn btn-lg btn-primary btn-block" disabled={isInvalid} type="submit">
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






// import React, { Component } from 'react';
// import '../styles/signin.css';
// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';

// import { SignUpLink } from './SignUp';
// import { withFirebase } from './Firebase/index';
// import { PasswordForgetLink } from './PasswordForget';


// const SignInPage = () => (
//     <div>
//       <h1>SignIn</h1>
//       <SignInForm />
//       <PasswordForgetLink />
//       <SignUpLink />
//     </div>
//   );
   
//   const INITIAL_STATE = {
//     email: '',
//     password: '',
//     error: null,
//   };

// class SignInFormBase extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { ...INITIAL_STATE };
//     }

//     onSubmit = event => {
//         const { email, password } = this.state;

//         this.props.firebase
//             .doSignInWithEmailAndPassword(email, password)
//             .then(() => {
//                 this.setState({ ...INITIAL_STATE });
//                 this.props.history.push('./home');
//             })
//             .catch(error => {
//                 this.setState({ error });
//             });

//         event.preventDefault();
//     };

//     onChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     render() {
//         const { email, password, error } = this.state;

//         const isInvalid = password === '' || email === '';



//         return (

//             <form class="form-signin" onSubmit={this.onSubmit}>
//                 <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
//                 <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
//                 <label for="inputEmail" class="sr-only">Email address</label>
//                 <input
//                     type="email"
//                     name="email"
//                     onChange={this.onChange}
//                     value={email}
//                     id="inputEmail"
//                     class="form-control"
//                     placeholder="Email address"
//                     autofocus="" />
//                 <label for="inputPassword" class="sr-only">Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     onChange={this.onChange}
//                     value={email}
//                     id="inputPassword"
//                     class="form-control"
//                     placeholder="Password"
//                     required="" />
//                 {/* <div class="checkbox" mb-3>

//                  <label>
//                      <input type="checkbox" value="remember-me" />
//                       Remember me </label>

//             </div> */}

//                 <button class="btn btn-lg btn-primary btn-block" type="submit" disabled={isInvalid}>Sign in</button>
//                 {error && <p>{error.message}</p>}
//             </form>


//         )

//     }
// }

//     const SignInForm = compose(
//         withRouter,
//         withFirebase,
//       )(SignInFormBase);

//     export default SignInPage;
//     export { SignInForm };



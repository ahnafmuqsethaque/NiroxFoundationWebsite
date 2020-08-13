import React from 'react';

import "../styles/signout.css";
 
import { withFirebase } from './Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button type="button"  class= "btnso" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
 
export default withFirebase(SignOutButton);
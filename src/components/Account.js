import React from 'react';

import '../styles/benefits.css';
import '../styles/account.css';
 
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import { AuthUserContext, withAuthorization } from './Session';
 
const AccountPage = () => (
    <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1 class="headline">Hello, {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);
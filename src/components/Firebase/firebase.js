import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjZgGrR03iEe-FlhEfhgkScz7Av-QlmVk",
    authDomain: "nirox-also.firebaseapp.com",
    databaseURL: "https://nirox-also.firebaseio.com",
    projectId: "nirox-also",
    storageBucket: "nirox-also.appspot.com",
    messagingSenderId: "428018266244",
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }
    // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
   
  export default Firebase;
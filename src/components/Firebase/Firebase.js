import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBK2UWLUhOojKeFHP85f3srBcUXeEexo-0",
  authDomain: "niroxarts-website-d2250.firebaseapp.com",
  databaseURL: "https://niroxarts-website-d2250.firebaseio.com",
  projectId: "niroxarts-website-d2250",
  storageBucket: "niroxarts-website-d2250.appspot.com",
  messagingSenderId: "335881883784",
  appId: "1:335881883784:web:27405e6392e83a2dcc0f3d",
  measurementId: "G-9GEL7NW32S"
};

class Firebase {

  constructor() {
    app.initializeApp(firebaseConfig);
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
import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Events from "./Events";
import Home from "./Home";
import Projects from "./Projects";
import Reservations from "./Reservations";
import Benefits from "./Benefits";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";
import AdminSignIn from "./AdminSignIn";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Memberships from "./Memberships";
import Application from "./Application";
import Header from "./Header";
import SignUpPage from "./SignUp"
import { withFirebase } from './Firebase/index'

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav authUser={this.state.authUser} />
          <Footer />
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/adminsignin" exact component={AdminSignIn} />
            <Route path="/events" component={Events} />
            <Route path="/projects" component={Projects} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/signin" component={SignIn} />
            <Route path="/memberships" component={Memberships} />
            <Route path="/application" component={Application} />
            <Route path="/header" component={Header} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={SignUpPage} exact />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default withFirebase( AppRouter );

// class AppRouter extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Nav />
//           <Footer />
//           <Switch>
//             <Route path="/" exact component={SignIn} />
//             <Route path="/events" component={Events} />
//             <Route path="/projects" component={Projects} />
//             <Route path="/reservations" component={Reservations} />
//             <Route path="/benefits" component={Benefits} />
//             <Route path="/contactus" component={ContactUs} />
//             <Route path="/signin" component={SignIn} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default withFirebase{ AppRouter };

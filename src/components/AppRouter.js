import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import Events from "./Events";
import Home from "./Home/Home";
import Projects from "./Projects";
import Reservations from "./Reservations";
import Benefits from "./Benefits";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Application from "./Application";
import Header from "./Header";
import CreateEvent from "./CreateEvent";
import CreateProject from "./CreateProject";
import SignUpPageAdmin from "./SignUpAdmin";
import SignUpPage from "./SignUpNormal";
import PasswordForget from "./PasswordForget";
import PasswordChange from "./PasswordChange";
import Account from "./Account";
import AdminPage from "./UserManager";
import LandingPage from "./LandngPage";
import Project from "./Project";
import { withAuthentication } from './Session';
 
const AppRouter = () => (
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={LandingPage} exact />
              <Route path="/events" component={Events} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/reservations" component={Reservations} exact />
              <Route path="/benefits" component={Benefits} exact />
              <Route path="/contactus" component={ContactUs} exact />
              <Route path="/signin" component={SignIn} exact />
              <Route path="/application" component={Application} exact />
              <Route path="/header" component={Header} exact />
              <Route path="/home" component={Home} exact />
              <Route path="/createevent" component={CreateEvent} exact />
              <Route path="/createproject" component={CreateProject} exact />
              <Route path="/signupadmin" component={SignUpPageAdmin} exact />
              <Route path="/passwordforget" component={PasswordForget} exact />
              <Route path="/passwordchange" component={PasswordChange} exact />
              <Route path="/account" component={Account} exact />
              <Route path="/admin" component={AdminPage} exact />
              <Route path="/signupnormal" component={SignUpPage} exact />
              <Route path="/landingpage" component={LandingPage} exact />
              <Route path="/project" component={Project} exact />
            </Switch>
          </div>
        </Router>
      );
 
      export default withAuthentication(AppRouter);

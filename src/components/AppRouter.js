import React, {Component} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Events from "./Events";
import Home from "./Home/Home";
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
import CreateEvent from "./CreateEvent";
import CreateProject from "./CreateProject";


function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Footer />
        <Switch>
          <Route path="/" exact component={SignIn} exact/>
          <Route path="/adminsignin" exact component={AdminSignIn} exact/>
          <Route path="/events" component={Events} exact/>
          <Route path="/projects" component={Projects} exact/>
          <Route path="/reservations" component={Reservations} exact/>
          <Route path="/benefits" component={Benefits} exact/>
          <Route path="/contactus" component={ContactUs} exact/>
          <Route path="/signin" component={SignIn} exact/>
          <Route path="/memberships" component={Memberships} exact/>
          <Route path="/application" component={Application} exact/>
          <Route path="/header" component={Header} exact/>
          <Route path="/home" component={Home} exact/>
          <Route path="/createevent" component={CreateEvent} exact/>
          <Route path="/createproject" component={CreateProject} exact/>
        </Switch>
      </div>
    </Router>
  );
}

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

export default AppRouter;

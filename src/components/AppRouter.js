import React, {Component} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Events from "./Events";
import Home from "./Home";
import Projects from "./Projects";
import Reservations from "./Reservations";
import Benefits from "./Benefits";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Memberships from "./Memberships";
import Application from "./Application";

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Footer />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/events" component={Events} />
          <Route path="/projects" component={Projects} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/benefits" component={Benefits} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/signin" component={SignIn} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/application" component={Application} />
          <Route path="/home" component={Home} />
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

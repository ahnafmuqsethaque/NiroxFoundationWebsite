import React, { Component } from "react";
import MemberInfo from "./MemberInfo"
import EventsC from "./EventsC"
import ProjectsC from "./ProjectsC"
import { withAuthorization } from '../Session';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "../../styles/home.css";


class Home extends Component {
  render() {

    return (
      <div class="Home">
        <MemberInfo />
        <EventsC />
        <ProjectsC />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
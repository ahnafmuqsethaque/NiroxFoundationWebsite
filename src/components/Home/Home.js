import React, { Component } from "react";
import MemberInfo from "./MemberInfo"
import EventsC from "./EventsC"
import ProjectsC from "./ProjectsC"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "../../styles/home.css";
//FOOTER NOT WORKING ON THIS PAGE FOR SOME REASON



export default class Home extends Component {
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
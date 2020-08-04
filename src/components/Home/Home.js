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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div class="Home">
        <MemberInfo />
        <EventsC />
        <ProjectsC />
      </div>
    );
  }
}

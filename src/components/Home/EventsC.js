import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "../../styles/home.css";

import "../../styles/signout.css";
import { withFirebase } from "../Firebase";

class EventsC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      //idArr : [],
    }

  }

  componentDidMount() {

    let eventsArr = [];
    // this.setState({ loading: true });
    this.props.firebase.events().on('value', snapshot => {

      if (snapshot.val()) {
        let idArr = Object.keys(snapshot.val());
        idArr.forEach((id) => {
          eventsArr.push(snapshot.val()[id]);
        })
        this.setState((prevState) => {

          return {
            events: eventsArr,
          }
        });
      } 
    });
  }

  componentWillUnmount() {
    this.props.firebase.events().off();
  }


  render() {

    const {
      events
    } = this.state;

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
      <div>
        <h2 class="headerstyle">Events</h2>
        <Slider {...settings} >
          {events.map((event) => {
            return (
              <div class="card">
                <img
                  src={event.imgsrc}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title" eventID={event.id}>{event.title}</h5>
                  <p class="card-text">
                    {event.brief}
                  </p>
                  <a href={"header/?eventId=" + event.id} class="btnh" eventId={event.id}>
                    Learn More
                      </a>
                </div >
              </div>
            );

          })}

        </Slider>
      </div>
    )
  }

}

export default withFirebase(EventsC);

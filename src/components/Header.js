import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withAuthorization } from './Session';

import "../styles/header.css";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const eventID = urlParams.get("eventId");

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      event: {},
      eventID: eventID,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.events().on("value", (snapshot) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          event: snapshot.val()[eventID],
        };
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.events().off();
  }

  render() {
    const {
      title,
      brief,
      description,
      imgsrc,
      date,
      time,
      price,
      organizer,
    } = this.state.event;
    return (
      <div class="row">
        <div class="column">
          <img src={imgsrc} class="responsive" alt="..." />
          <div class="something">
          <p>
            Children must be under adult supervision at all times. Entry to the
            park is at your own risk.
          </p>
          <p>NIROX is not responsible for any loss, injury or damage.</p>
          <p>
            <strong>Organized by:</strong>
            {organizer}
          </p>
          </div>
        </div>
        
        <div class="column" id="info">
          <h1 class="breathe">{title}</h1>
          <p>Date: {date} </p>
          <p>Time: {time} </p>
          <p>Price: {price} </p>
          <p>
            {brief}
            {/* Wandile Mabaso, a Soweto-born food artist with Michelin star
                        training, has created a unique dining experience that you can enjoy
                        at CAPSULE — an experiment with ingredients and flavours, drawing
                        inspiration from nature */}
          </p>
          <p>
            {description}
            {/* It will still be a day of music, food and art in nature, for the whole family.
                              Epic festival cuisine by the Epicurean Emporium - a selection of traders from the food &amp;
                                      design markets in and around Johannesburg. */}
          </p>
          {/* <p>Tickets available from:</p>
                    <p>www.unathi.co</p>
                    <p>www.niroxarts.com</p> */}
          <br />
          <p>
            NIROX is an outdoor venue and therefore subject to the weather.
            While every care is taken to ensure the performance, in the event of
            inclement weather any change in plans will be communicated. No
            refunds.
          </p>
          
          <a href="/reservations" class="btnh">
            Book Now
          </a>
          
        </div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Header);

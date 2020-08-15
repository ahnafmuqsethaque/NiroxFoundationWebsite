import React, { Component } from "react";
import { withAuthorization } from "./Session";

import "../styles/reservations.css";


class Reservations extends Component {

  render() {
    return (
      <div class="resvbackground">
        <div class="card">
          <h1 class="resvheadline">Reservation</h1>
          <form action="https://formspree.io/mzbjwajn" method="POST">
            <div class="form-group">
              <label for="exampleInputPassword1"></label>
              <input
                name="GuestName"
                placeholder="Name"
                type="text"
                class="form-control"
                id="nameinput"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1"></label>
              <input
                placeholder="Email address"
                type="email"
                class="form-control"
                name="Email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <input
                name="EventName"
                placeholder="Event you're signing up for"
                type="text"
                class="form-control"
                id="event"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1"></label>
              <select
                name="NumberOfGuests"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option class="placeholder">Number of Guests Attending</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <button type="submit" class="btnr">
              Reserve
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Reservations);

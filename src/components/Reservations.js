import React, { Component } from "react";
import { withAuthorization } from "./Session";

import '../styles/reservations.css';
import MyForm from "./Myform";

/*
ADD VALIDATIONS!!!!
check the bottom of the page: https://getbootstrap.com/docs/4.5/components/forms/
*/

class Reservations extends Component {
  render() {
    return (
      <div class="card">
        <h1 class="headline">Reservation</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input type="text" class="form-control" id="nameinput" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Event you're signing up for
            </label>
            <input type="text" class="form-control" id="event" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Number of Guests Attending</label>
            <select class="form-control" id="exampleFormControlSelect1">
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

    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Reservations);

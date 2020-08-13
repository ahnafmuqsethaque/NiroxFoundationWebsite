import React, { Component } from "react";
import { withAuthorization } from './Session';
//import firebase from 'firebase';
import { withFirebase } from './Firebase';
import { compose } from 'recompose';
import * as ROLES from "../constants/roles";


import "../styles/create.css";

const INITIAL_STATE = {
  title: '',
  brief: '',
  description: '',
  imgsrc: '',
  date: '',
  time: '',
  price: '',
  organizer: '',
  id: ','

};

class CreateEvent extends Component {

  constructor(props) {
    super(props);
    // doing w/ higher order fns ----START
    //this.app = firebase.initializeApp(CONFIG);
    //this.database = this.app.database().ref().child('nirox');
    // doing w/ higher order fns -----END
    this.state = {
    
      events: {...INITIAL_STATE},
    }

  }

  componentDidMount() {
    //this.setState({ loading: true });
    // let data = {
    //   title: "hello",
    //   description: "hello world, welcome to Nirox"
    // }

    
    this.setState({
      events: {...INITIAL_STATE}
    })


  }

  onClick = (event) => {
    this.props.firebase.events().push(this.state.events);
    event.preventDefault();
  }

  onChange = (event) => {
    const {name, value} = event.target;
    this.setState(prevState => {
      return {
          events: {
             ...prevState.events,
              [name]: value,
          }
      }
  });
    
  }


  render() {
    const { events } = this.state;
    return (
      <div>
        <h1 class="headline">Create Event</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Event Title
              </span>
          </div>
          <textarea
            type="text"
            name="title"
            class="form-control"
            onChange={this.onChange}
            value={events.title}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Brief description
              </span>
          </div>
          <textarea
            type="text"
            name="brief"
            onChange={this.onChange}
            value={events.brief}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Detailed Description
              </span>
          </div>
          <input
            type="text"
            name="description"
            onChange={this.onChange}
            value={events.description}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Image link
              </span>
          </div>
          <input
            type="text"
            name="imgsrc"
            onChange={this.onChange}
            value={events.imgsrc}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
          </div>
          
          <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Date
              </span>
          </div>
          <input
            type="text"
            name="date"
            onChange={this.onChange}
            value={events.date}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Time
              </span>
          </div>
          <input
            type="text"
            name="time"
            onChange={this.onChange}
            value={events.time}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Price
              </span>
          </div>
          <input
            type="text"
            name="price"
            onChange={this.onChange}
            value={events.price}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Organized by (include partnerts too)
              </span>
          </div>
          <input
            type="text"
            name="organizer"
            onChange={this.onChange}
            value={events.organizer}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
   
        <button type="button" class="btn btn-secondary" onClick={this.onClick}>
          Add
          </button>
      </div>
    );
  }
}

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withAuthorization(condition),
  withFirebase,
)(CreateEvent);

//export default withAuthorization(condition)(withFirebase((CreateEvent)));

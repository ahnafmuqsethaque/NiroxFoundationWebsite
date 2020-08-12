import React, { Component } from "react";
import { withAuthorization } from './Session';
//import firebase from 'firebase';
import { withFirebase } from './Firebase';
import { compose } from 'recompose';


import "../styles/create.css";

const INITIAL_STATE = {
  title: '',
  description: '',
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
        <h1>Create Event</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Event Title
              </span>
          </div>
          <input
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
              Event Description
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
        <div class="input-group mb-3">
          {/* <p>{this.state.events.title}</p>
          <br/>
          <p>{this.state.events.description}</p> */}
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile02"
            />
     
            <label
              class="custom-file-label"
              for="inputGroupFile02"
              aria-describedby="inputGroupFileAddon02"
            >
              Choose file
              </label> 
          </div>
          <div class="input-group-append">
            <span class="input-group-text" id="inputGroupFileAddon02">
              Upload
              </span>
          </div>
        </div>
        <button type="button" class="btn btn-secondary" onClick={this.onClick}>
          Add
          </button>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
  withFirebase,
)(CreateEvent);

//export default withAuthorization(condition)(withFirebase((CreateEvent)));

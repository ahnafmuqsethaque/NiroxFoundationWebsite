import React, { Component } from "react";
import { withAuthorization } from './Session';
import { withFirebase } from './Firebase';
import { compose } from 'recompose';


import "../styles/create.css";

const INITIAL_STATE = {
  title: '',
  brief: '',
  description: '',
  imgsrc: '',
  date: '',
  organizer: '',
  id: '',

};

class CreateProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: { ...INITIAL_STATE },
    }

  }

  componentDidMount() {

    this.setState({
      projects: { ...INITIAL_STATE }
    })


  }

  onClick = (event) => {
    let databaseRef = this.props.firebase.projects().push(this.state.projects);
    let currKey = databaseRef.getKey()

    this.setState(prevState => {
      return {
        events: {
          ...prevState.events,
          id: currKey
        }
      }
    })
    databaseRef.update({
      id : currKey
    })

    window.location.reload(false);
    event.preventDefault();
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        projects: {
          ...prevState.projects,
          [name]: value,
        }
      }
    });

  }


  render() {
    const { projects } = this.state;
    return (
      <div>
        <h1>Create Project</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Project Title
              </span>
          </div>
          <input
            type="text"
            name="title"
            class="form-control"
            onChange={this.onChange}
            value={projects.title}
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
            value={projects.brief}
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
          <textarea
            type="text"
            name="description"
            onChange={this.onChange}
            value={projects.description}
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
            value={projects.imgsrc}
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
            value={projects.date}
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
            value={projects.organizer}
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

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
  withFirebase,
)(CreateProject);

//export default withAuthorization(condition)(withFirebase((CreateEvent)));

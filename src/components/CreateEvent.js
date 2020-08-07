import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "./Firebase";

const CreateEventPage = () => (
  <div>
    <h1>Create Event</h1>
    <CreateEventForm />
  </div>
);

const INITIAL_STATE = {
  title: "",
  desciption: "",
  error: null,
};

class CreateEventFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { title, desciption } = this.state;

    this.props.firebase
      .doCreateEventWithTitleandDescription(title, desciption)
      .then((authEvent) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.event(authEvent.event.eventid).set({
          title,
          desciption
        });
      })
      .then((authEvent) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("./home");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      title,
      desciption,
      error,
    } = this.state;

    

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          value={title}
          onChange={this.onChange}
          type="text"
          placeholder="Event Title"
        />
        <input
          name="desciption"
          value={desciption}
          onChange={this.onChange}
          type="text"
          placeholder="Event Description"
        />

        <button type="submit">
          Create Event
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}



const CreateEventForm = compose(withRouter, withFirebase)(CreateEventFormBase);

export default CreateEventPage;

export { CreateEventForm };















// import React, { Component } from "react";
// import { withAuthorization } from './Session';



// class CreateEvent extends Component {
  
//   render() {
//     return (
//       <div>
//         <h1>Create Event</h1>
//         <div class="input-group input-group-sm mb-3">
//           <div class="input-group-prepend">
//             <span class="input-group-text" id="inputGroup-sizing-sm">
//               Event Title
//             </span>
//           </div>
//           <input
//             type="text"
//             class="form-control"
//             aria-label="Sizing example input"
//             aria-describedby="inputGroup-sizing-sm"
//           />
//         </div>
//         <div class="input-group input-group-sm mb-3">
//           <div class="input-group-prepend">
//             <span class="input-group-text" id="inputGroup-sizing-sm">
//               Event Description
//             </span>
//           </div>
//           <input
//             type="text"
//             class="form-control"
//             aria-label="Sizing example input"
//             aria-describedby="inputGroup-sizing-sm"
//           />
//         </div>
//         <div class="input-group mb-3">
//           <div class="custom-file">
//             <input
//               type="file"
//               class="custom-file-input"
//               id="inputGroupFile02"
//             />
//             <label
//               class="custom-file-label"
//               for="inputGroupFile02"
//               aria-describedby="inputGroupFileAddon02"
//             >
//               Choose file
//             </label>
//           </div>
//           <div class="input-group-append">
//             <span class="input-group-text" id="inputGroupFileAddon02">
//               Upload
//             </span>
//           </div>
//         </div>
//         <button type="button" class="btn btn-secondary">Add</button>
//       </div>
//     );
//   }
// }
// const condition = authUser => !!authUser;
 
// export default withAuthorization(condition)(CreateEvent);
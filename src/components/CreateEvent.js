import React, { Component } from "react";
import { withAuthorization } from './Session';
//import firebase from 'firebase';
import { withFirebase } from './Firebase';
import { compose } from 'recompose';


import "../styles/create.css";

class CreateEvent extends Component {

    constructor(props) {
        super(props);
        // doing w/ higher order fns ----START
        //this.app = firebase.initializeApp(CONFIG);
        //this.database = this.app.database().ref().child('nirox');
        // doing w/ higher order fns -----END
        this.state = {
            loading: false,
            nirox: "hi",
        }

    }

    componentDidMount() {
        this.setState({ loading: true });


        this.props.firebase.nirox().on('value', snapshot => {
            const temp = snapshot.val();

            this.setState({
                nirox: temp,
                loading: false,
            });
        });
    }



        // doing w/ higher order fns ----START
        // this.database.on('value', snap => {
        //     this.setState({
        //         nirox: snap.val(),
        //     });
        // });
        // doing w/ higher order fns ----START
    

componentWillUnmount() {
    this.props.firebase.nirox().off();
}

render() {
    const { nirox, loading } = this.state;
    

    return (
        <div>
            <h1>Create Event</h1>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                        Event Title
            </span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                        Event Description
  render() {
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
            class="form-control"
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
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group mb-3">
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
                <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
            <div class="input-group mb-3">
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
                        Upload  </span>

                </div>
            </div>


            <div class="input-group mb-3">

                <h1> Firebase info:</h1>

            


                {loading && <div>Loading ...</div>}
                <p>{nirox}</p>
            </div>




            <button type="button" class="btn btn-secondary">Add</button>
        </div>
        <button type="button" class="btn btn-secondary">
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

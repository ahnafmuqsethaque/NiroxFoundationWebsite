import React, { Component } from "react";
import { withAuthorization } from './Session';

class CreateEvent extends Component {
  render() {
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
        </div>
        <button type="button" class="btn btn-secondary">Add</button>
      </div>
    );
  }
}
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(CreateEvent);
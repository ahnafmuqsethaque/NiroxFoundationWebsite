import React, { Component } from "react";
import { withAuthorization } from "./Session";

/*
ADD VALIDATIONS!!!!
check the bottom of the page: https://getbootstrap.com/docs/4.5/components/forms/
*/

class Reservations extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdE_Od_3-UXhSEGjoREok-B_lr2jV9XOQn1UMpQpCgYlZ_LwA/viewform?embedded=true"
          width="640"
          height="378"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Reservations);

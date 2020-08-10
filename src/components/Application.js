import React, { Component } from "react";
import "../styles/appform.css";

/*
ADD VALIDATIONS!!!!
check the bottom of the page: https://getbootstrap.com/docs/4.5/components/forms/
*/

class Application extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe6LGxzXU5hFKWdfN1SmVMFxM9-maWX6xErP8Yy74ETONs1ww/viewform?embedded=true"
          width="640"
          height="378"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      // <div className="appform">
      //   <form>
      //     <h2 className="title">Apply for Membership</h2>
      //     <div class="form-row">
      //       <div class="form-group col-md-6">
      //         <label for="inputEmail4">First Name</label>
      //         <input type="text" class="form-control" id="firstName" />
      //       </div>
      //       <div class="form-group col-md-6">
      //         <label for="inputPhone5">Last Name</label>
      //         <input type="text" class="form-control" id="lastName" />
      //       </div>
      //     </div>
      //     <div class="form-row">
      //       <div class="form-group col-md-6">
      //         <label for="inputEmail4">Email</label>
      //         <input type="email" class="form-control" id="inputEmail4" />
      //       </div>
      //       <div class="form-group col-md-6">
      //         <label for="inputPhone5">Phone</label>
      //         <input type="phone" class="form-control" id="inputPhone5" />
      //       </div>
      //     </div>
      //     <div class="form-group">
      //       <label for="inputAddress">Address</label>
      //       <input
      //         type="text"
      //         class="form-control"
      //         id="inputAddress"
      //         placeholder="1234 Main St"
      //       />
      //     </div>

      //     <div class="form-row">
      //       <div class="form-group col-md-4">
      //         <label for="inputCity">City</label>
      //         <input type="text" class="form-control" id="inputCity" />
      //       </div>
      //       <div class="form-group col-md-4">
      //         <label for="inputState">State</label>
      //         <input type="text" class="form-control" id="inputState" />
      //       </div>
      //       <div class="form-group col-md-4">
      //         <label for="inputZip">Zip</label>
      //         <input type="text" class="form-control" id="inputZip" />
      //       </div>
      //     </div>

      //     <div class="mb-3">
      //       <label for="validationTextarea">Prompt</label>
      //       <textarea
      //         class="form-control"
      //         id="validationTextarea"
      //         placeholder="Required example textarea"
      //         required
      //       ></textarea>
      //     </div>
      //     <div class="form-group">
      //       <div class="form-check">
      //         <input class="form-check-input" type="checkbox" id="gridCheck" />
      //         <label class="form-check-label text-body" for="gridCheck">
      //           Agree to terms and conditions
      //         </label>
      //       </div>
      //     </div>
      //     <button type="submit" class="btn btn-primary">
      //       Submit Application
      //     </button>
      //   </form>
      // </div>
    );
  }
}

export default Application;

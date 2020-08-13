import React, { Component } from "react";
import "../styles/appform.css";

/*
ADD VALIDATIONS!!!!
check the bottom of the page: https://getbootstrap.com/docs/4.5/components/forms/
*/

class Application extends Component {
  render() {
    return (
      <div >
        <div>
        <h1 class="headline">Application</h1>
      <form action="https://formspree.io/xwkrzrwe" method="POST">
        <label>
          <input class="infoline" name="name" placeholder="Name" />
        </label>
        <br />
        <label>
          <input placeholder="Email" class="infoline" type="text" name="_replyto" />
        </label>
        <br />
        <label>
          <textarea placeholder="Tell us about yourself!" class="infoline" type="text"name="message"></textarea>
        </label>

        {/* <!-- your other form fields go here --> */}
        <br />
        <button class="btnap" type="submit">Send</button>
        
      </form>
      </div>
      </div>
      // <div className="appform">
      //   <h1 class="headline">Application</h1>
      //   <form>
      //     <div class="form-group">
      //       <label for="exampleInputPassword1">Name</label>
      //       <input type="text" class="form-control" id="nameinput" />
      //     </div>
      //     <div class="form-group">
      //       <label for="exampleInputEmail1">Email address</label>
      //       <input
      //         type="email"
      //         class="form-control"
      //         id="exampleInputEmail1"
      //         aria-describedby="emailHelp"
      //       />
      //     </div>
      //     <div class="form-group">
      //       <label for="exampleFormControlTextarea1">Tell us about yourself!</label>
      //       <textarea
      //         class="form-control"
      //         id="exampleFormControlTextarea1"
      //         rows="3"
      //       ></textarea>
      //     </div>
      //     <button type="submit" class="btnap">
      //       Apply!
      //     </button>
      //   </form>
      // </div>
    );
  }
}

export default Application;

import React from "react";

import '../styles/contactus.css';

export default class ContactUS extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class="background">
          <div>
        <h1 class="contactheadline">Contact Us</h1>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xvowylyy"
          method="POST"
        >
          
          <input type="email" name="email" class="contactform" placeholder="Email" />
          <br />
          <textarea type="text" name="message" class="contactform" placeholder="Message"/>
          <br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button class="btncu">Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

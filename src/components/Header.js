import React, { Component } from "react";

import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <div class="row">
        <div class="column">
          <img
            src="https://db3pap001files.storage.live.com/y4mFAtmbJpxX5xonw-VD45drR836ZL-qSafrIgBhbHCDDkmr1BQKHq6VC7vHSBweYFD8fK8aCTYUj0lb91wavBM0b8KV91-7eul6M6JBdjdCzZ83-9VRTT1iZOaMXhKjqbqPyZmUkMrc7HLHYNUmIW5CasvQqVZ8BX6nnq7Q-LTJHakxC3C-Psr1MxLdGWe4pWXvVMpXuNqKimv4WAE51VbDg/DSC_0110_2.jpg?psid=1&width=414&height=618"
            class="responsive"
          />
        </div>
        <div class="column" id="info">
          <h1 >Event Title</h1>
          <p>Date: XXX </p>
          <p>Time: XXX </p>
          <p>Price: XXX </p>
          <p>
            Wandile Mabaso, a Soweto-born food artist with Michelin star
            training, has created a unique dining experience that you can enjoy
            at CAPSULE — an experiment with ingredients and flavours, drawing
            inspiration from nature
          </p>
          <a href="/reservations" class="btnh">
               Book Now
              </a>
        </div>
      </div>
    );
  }
}

export default Header;

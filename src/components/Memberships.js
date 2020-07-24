import React, { Component } from "react";
import '../styles/memberships.css';

class Memberships extends Component {
  render() {
    return (
      <div>
        <h1>Types of Memberships</h1>
        <div class="row">
          <div class="col-sm-4" id="gold">
            <div class="card">
            <img src="https://staticr1.blastingcdn.com/media/photogallery/2018/8/16/os/b_1200x675/top-7-cute-kittens-in-a-basket-photos-for-cat-lovers-image-credit-cco-pixabay_2076111.jpg" class="card-img-top" alt="Image Here"/>
              <div class="card-body">
                <h5 class="card-title">Gold</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4" id="silver">
            <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg" class="card-img-top" alt="Image Here"/>
              <div class="card-body">
                <h5 class="card-title">Silver</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4" id="bronze">
            <div class="card" >
            <img src="https://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-foxes-cubs-17-574436be67482__880.jpg" class="card-img-top" alt="Image Here"/>
              <div class="card-body">
                <h5 class="card-title">Bronze</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Memberships;

import React, { Component } from "react";
import '../styles/memberships.css';
import { withFirebase } from "./Firebase";


let goldP = document.getElementById("gold");
let silverP = document.getElementById("silver");
let bronzeP = document.getElementById("bronze");

class Memberships extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      memberships: {},
    }
  }


  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.memberships().on('value', snapshot => {

      const temp = Object.keys(snapshot.val());


      temp.forEach((membership) => {

        if (membership === 'bronze') {
          bronzeP = snapshot.val()[membership];
          //bronzeP.innerText = snapshot.val()[membership];
        } else if (membership === 'gold') {
          goldP = snapshot.val()[membership];
        } else if (membership === 'silver') {
          silverP = snapshot.val()[membership];
        }
      })

      this.setState({
        memberships: snapshot.val(),
        loading: false,
      });
    });

  }

  componentWillUnmount() {
    this.props.firebase.memberships().off();

  }

  render() {
    return (
      <div >
        <h1 class="head">Types of Memberships</h1>
        <div class="row">
          <div class="col-sm-4" id="gold">
            <div class="card">
              <img src="https://staticr1.blastingcdn.com/media/photogallery/2018/8/16/os/b_1200x675/top-7-cute-kittens-in-a-basket-photos-for-cat-lovers-image-credit-cco-pixabay_2076111.jpg" class="card-img-top" alt="Image Here" />
              <div class="card-body">
                <h5 class="card-title">Gold</h5>
                <p class="card-text" id="gold">
                {this.state.loading && "loading ... "}
                  {goldP}
                </p>
                <a href="/application" class="btn btn-primary">
                  Join Today!
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4" id="silver">
            <div class="card">
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg" class="card-img-top" alt="Image Here" />
              <div class="card-body">
                <h5 class="card-title">Silver</h5>
                <p class="card-text" id="silver">
                  {this.state.loading && "loading ... "}
                  {silverP}
                </p>
                <a href="/application" class="btn btn-primary">
                  Join Today!
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4" id="bronze">
            <div class="card" >
              <img src="https://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-foxes-cubs-17-574436be67482__880.jpg" class="card-img-top" alt="Image Here" />
              <div class="card-body">
                <h5 class="card-title">Bronze</h5>
                <p class="card-text" id="bronze">
                {this.state.loading && "loading ... "}
                  {bronzeP}
                </p>
                <a href="/application" class="btn btn-primary">
                  Join Today!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(Memberships);

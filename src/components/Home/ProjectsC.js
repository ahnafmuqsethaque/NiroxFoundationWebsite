import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "../../styles/home.css";

import "../../styles/signout.css";
import { withFirebase } from "../Firebase";

class ProjectsC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {

    let projectsArr = [];
    // this.setState({ loading: true });
    this.props.firebase.projects().on('value', snapshot => {

      if (snapshot.val()) {
        let idArr = Object.keys(snapshot.val());
        idArr.forEach((id) => {
          projectsArr.push(snapshot.val()[id]);
        })
        this.setState((prevState) => {
          return {
            projects: projectsArr,
          }
        });
      } 
      // else {
      //   this.setState((prevState) => {
      //     return {
      //       ...prevState,
      //       loaded: false,
      //     }
      //   })
      // }
    });
  }

  componentWillUnmount() {
    this.props.firebase.projects().off();
  }


  render() {

    const {
      projects
    } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      < div >
        <h2 class="headerstyle">Projects</h2>
        <Slider {...settings}>
          {projects.map((project) => {
                return (
                  <div class="card">
                    <img
                      src={project.imgsrc}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title" projectID={project.id}>{project.title}</h5>
                      <p class="card-text">
                        {project.brief}
                      </p>
                      <a href={"/project/?projectId=" + project.id} class="btnh" projectID={project.id}>
                        Learn More
                        </a>
                    </div >
                  </div>
                );
              })}
        </Slider>
      </div >
    )
  }
}

export default withFirebase(ProjectsC);

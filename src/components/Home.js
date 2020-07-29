import React from "react";
import "../styles/home.css";

//FOOTER NOT WORKING ON THIS PAGE FOR SOME REASON

function Home() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active img-fluid">
            <img
              src="https://live.staticflickr.com/7433/10953992113_1a85d64982_b.jpg"
              id="first"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h5>Member Info Fact 1</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://live.staticflickr.com/7433/10953992113_1a85d64982_b.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h5>Member Info Fact 2</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://live.staticflickr.com/7433/10953992113_1a85d64982_b.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h5>Member Info Fact 3</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <h2>Events</h2>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card">
              <img
                src="https://www.picclickimg.com/d/l400/pict/272530567517_/African-Cute-Baby-Lion-Animal-Art-Poster-24.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Event Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img
                src="https://i.pinimg.com/originals/3c/aa/af/3caaafac3aaea96500c6928bdd73b82a.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Event title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img
                src="https://www.miamiherald.com/latest-news/ju24wl/picture233212936/alternates/FREE_1140/DSC_2055.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Event title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <h2>Current Projects</h2>
      <div id="carouselExample" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card">
              <img
                src="https://www.picclickimg.com/d/l400/pict/272530567517_/African-Cute-Baby-Lion-Animal-Art-Poster-24.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Project Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img
                src="https://i.pinimg.com/originals/3c/aa/af/3caaafac3aaea96500c6928bdd73b82a.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Project title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img
                src="https://www.miamiherald.com/latest-news/ju24wl/picture233212936/alternates/FREE_1140/DSC_2055.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Project title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;

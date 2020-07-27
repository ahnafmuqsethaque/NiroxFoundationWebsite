import React from "react";
import "../styles/home.css";

//FOOTER NOT WORKING ON THIS PAGE FOR SOME REASON

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div class="card" id="memberinfo">
        <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2016/02/cute-baby-polar-bear-day-photography-14__880.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Membership Info</h5>
          <p class="card-text">
            Some quick info about what you get with your membership.
          </p>
          <a href="#" class="btn btn-primary">
            More Info (goes to membership page)
          </a>
        </div>
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

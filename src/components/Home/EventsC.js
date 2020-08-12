import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "../../styles/home.css";

import "../../styles/signout.css";
import { withFirebase } from "../Firebase";

class EventsC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: []
    }

  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.events().on('value', snapshot => {
      const idArr = Object.keys(snapshot.val());
      const randID = idArr[0];
      console.log(snapshot.val()[randID]);
      this.setState({
        loading: false,
        events: snapshot.val()[randID],
      })
      // idArr.forEach((id) => {
      // events.id
      // })

    })

  }

  componentWillUnmount() {
    this.props.firebase.events().off();
  }

  render() {
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
      <div>
        <h2>Events</h2>
        <Slider {...settings}>
          <div class="practice">
            <div class="card">
              <img
                src="https://db3pap001files.storage.live.com/y4mpCT2Ujjn8R2nnSTyIopkWktGGndRyAzbV2_dOxC2fHdsKTZ80iGEC-_OHeTc3peRY1EQLV8rrnRukMJNjYHVYt9tj3FgUmGLzjcJYl3zIJmWJvw9CQsOUgaQ_VTvtRp9Skje1P4GJB3xFkODK2JGgFd8xlro5EOws07yx8FyIUdpe4qtTP-TFWR_bVETEJIkKDLdIZd4xHQnNEcxVOk9og/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-141.jpg?psid=1&width=1809&height=1206"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
              </p>
                <a href="/events" class="btnh">
                  Go somewhere
              </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4m6laPccbyAyfaY-wKKBCZkrG2PI7EZ4dwNgW8EMmglwa9I2xL8ZMao5htOvQ7rSufpNZbFGBJwO4sEL5tr5hy22dW3VOlkkUsYZUaMkiHATbRWlfVBZNKwJ9Zx76mnQ59g9e2zuCwpayNQPC82Xt9IvF1QGQdXVpLaTScPGMMb8vDG07ioL7OJ719sn_T7G8cZeDcC3Ac5jO4rlEuEC4U5A/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-231.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mnk-Z4ABPrALKNMdkrFrfcYQ_nYY_eBsxjdk9V0Tof1vwFLTzTqrY691toGNIwG3kxKdKtzE-7BnEvMEBvKoJwWAKYYtmXajHFsWsAmbQNr_c2tqxGHvv-GUrff1feT03IrECmIT6L96Li6_rmNTUfK1YSW50-DYKCSpN5bx4bDaYHOp0WpkO3dxcJNNuFZM5w2TV4T3S6c9WH_-5ps2pXA/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-235.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4m4HwJ8Cpkojls_wv_jy-6Rtcf-x7Dgq8OkVlO3Hcueq3P74qqc1fUqsYnowWZ0l1AhFC7x6mQGMp9A6xYByf9bTd7o_o7u-jnvHPA_7uYrzr_q7K0cnxYYpJ0xl5Zt2_Aa50KQjyQQomxFKqQEaxVQV3ceKmubkNGXC-DfVPwgbJvS3BifaWhwQpWl4L9j-OYAQ5v0vm6OZcvXVAj7UZ1Zw/2018-09-02%20Jazz%20in%20the%20Cradle%20%40%20NIROX%20JSP-265.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mK1-c0I9xZq64_SP3GEtGf22JYXCu_UH7a22lQQ1GFZ35hdDUdtVlCIozeBoHX3PY6dEGl38wHYKV-Lto4gDVdxA3H8cj5f4JL6BuBdKWQux-3ZeFTXKr_d4BtsLM7n73LqEqnDvBTmuU4ZIzPn2u_QCAXIaJH7wa5e1Hs38I_Xc9ggZwL3i7HYejPqUS-K25X7VJR2SRI3oWpTCcpzKNcg/NIROX%20Residency.jpg?psid=1&width=1200&height=798"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm1files.storage.live.com/y4mILksQbtlAtJGJCMEDdrGdVgyX7jAvQ_VvSRpGk-vEZu1QZIIl-Hh7_JTuFSTE_Sm6uzEwmEM9hLeJD2Tng_Sg9GkY53nM_XPZLYQM7fDCK3SLQUvjrcwxhsPO_BGFuNMsOZX3BIG9UuW__Fu4jsysj6D6OWf6ehxSZUqBC8TvaKa0o-9BJyMF5HhheDr4vJGQFT1K6HaGOXRC454g-CSfw/DSC_0026.JPG?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mtjIpxShbVII78ZMhJsVZgt6603uJJwptWiGYu9QqzI17Z3sVasSZ9ipPwHlu6qPbhqoyWNyTq1grCHraW0wYa1k4If0f6KSXawUFzBrTcIOTA6wG8geSOJtJoqHpuf-kQYZHDrr4L9HFfHwF1KFbx1UQY5nSJPdiw14jqf6HtTjMnLkRV7uq75mrCtmMN8pEquO94bA_ImTY6yFb3h7jnw/Gordon%20Froud.jpg?psid=1&width=1809&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://db3pap001files.storage.live.com/y4mj-aCJlKeD8LDUF_IscH563e2Lx536s_2wDCGvaaUJU1WU_bXddIWhdmoD-F50C0hyU5HXffpNYRAm7bA6O79rNDAEK3eXE1hNLBgUUE3zqPdViA8B_nDim56lmSddkQd87wOT8ke-AGHw6D4TFubXPHu7-Vs2i1NVIHlukA4Bii5sqFPwDbniR1OrFoWzY0MQzAxBzclBVWj1CQzni5SqQ/DSC_0122.JPG?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btnh">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://dm2pap090files.storage.live.com/y4mUmtCnRqct6obuNfx8fjWGXs7o6_nfa9AVuPFhZd8bKARet8n3fB6pRzKG0YjwaWXoCuKEK16ETjKc0QZnj-PjVsRqrYIJVpCU5AbJbV8htDjnYUgAWYWGKmh5XsL4_25xHEzH3d1QzgL5Vp6Y0a_on9Ym8U8c5n55cHV0u02ZeG6H_2ZvdQCykbre-3lFXcnWOSlUhyao5Iei-vZ8kva_g/DSC_0100.jpg?psid=1&width=1802&height=1206"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/events" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default withFirebase(EventsC);

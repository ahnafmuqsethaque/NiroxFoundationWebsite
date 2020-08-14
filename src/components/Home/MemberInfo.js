import React, { Component } from "react";
import "../../styles/home.css";

class MemberInfo extends Component {
  render() {
    
    return (
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="1000">
            <img
                src="https://mail.google.com/mail/u/1?ui=2&ik=7a8d5df14d&attid=0.7&permmsgid=msg-f:1674937317378649467&th=173e929daf666d7b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_3o8RhUd06NfBZGy4vgxEgc_nU1dA2IdAMaJ9wW37ocgO3eGlvPADlnhdMrPdBwsSqymSQlC6cuPNCyW0IHk8Nuvpw6RCPmt0wf-Y3WRX-7T_GyQ4dmtTHnbM&disp=emb&realattid=ii_kdt5ob379"
                id="first"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://mail.google.com/mail/u/1?ui=2&ik=7a8d5df14d&attid=0.11&permmsgid=msg-f:1674937317378649467&th=173e929daf666d7b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9gWDQ7IVG7swv4Yxn-nppwx7XLgExHgsLpVAymWEM7NkwYvDb8o1f6xteURcgbFKzKqt6loby-9OPFAGqw4PRGIJI7Vxdh22euvydJ-7iehzcolN7V2Qo3o3U&disp=emb&realattid=ii_kdt5ob3c10"
                id="first"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://mail.google.com/mail/u/1?ui=2&ik=7a8d5df14d&attid=0.8&permmsgid=msg-f:1674937317378649467&th=173e929daf666d7b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8ZcsBZK01s7CNeFYrUlF8YP1yNuoJjzKwszHi2JQ_J7_Tign4p8BVlW7Czq-GTVSycc3IRkgRm51I47IssTSFSxSYm47X22dNaxbqaYqqYC2Zp6wqpG6AJxyg&disp=emb&realattid=ii_kdt5ob328"
                id="first"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
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
}

export default MemberInfo;

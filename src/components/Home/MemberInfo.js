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
            <div class="carousel-item active">
            <img
                src="https://db3pap001files.storage.live.com/y4mamXGDp0YXp3x0PKFjdkYY5XYhfDpI72S4w0j5RLBIC9tL2YTT_yyq6vgWp0XDQq4Hn7AVgOFr3c6k3MPgGh0rFA3S9lsE30wYqnJ5ruxYvnz21s9vSBYpxGhQd2QNMn4K3hxc_RVivNvOHT2yMqjmqSm71_fD0BhhXejwA9sGePpOU-MbosmxQpnDJMk3B5scqCDJI5eOsAr2nP6iFAbJA/NIROX-0328.jpg?psid=1&width=1854&height=1236"
                id="first"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://5p2dbq.dm.files.1drv.com/y4m4OFzENump0tDTmR4qWNy-d6zxFJ5iupeoyZYJ4Km4MTVMoIPfA2w2VKzlHQnrm1mSK-VFGH-iSp1W2s8Hv1Vuvlo95flpCT0vE8yR_Ur1nEkcrkNZfegg7yTut9HovcziCJ4lW48w5paLTGZ3SBjfJUfVhkaQsm-g9p4IWWxJcCGWpKPK0feFZdJcai8GGz8jKdfbv8dR8nOTNtjYWTBSNgXVbh_R9HaguK9y0p-p7w/DSC_0292.JPG?psid=1"
                id="first"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://5p2dbq.dm.files.1drv.com/y4m8_uK4h1I-4vxaES37xz6_UGAMgd7xKoy1_Ut_28RAMWWmVAB4B39Plhx65bzkXObM7tq96pAkXPqmcJo9B1chf0LcYAe7KzqU-sn9VQcjqT8TItpHBygqu-2vjBVtpKZFaNpgyYl0Fb90HUImr2Q-GxSFworAhZ3oixDgyECeRLDt7z72Oamz4I_Wi6akSYXeWrTVghKU-Z2MUTBRxYUqwxDJHsvmgv5JWUrbzBRZb4/DSC_0183.JPG?psid=1"
                id="first"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* <a
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
          </a> */}
        </div>
      </div>
    );
  }
}

export default MemberInfo;

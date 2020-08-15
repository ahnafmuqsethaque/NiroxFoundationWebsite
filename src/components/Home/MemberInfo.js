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
                src="https://g4cjjw.db.files.1drv.com/y4mjGKrcPUy7jxYC0gIB7ah48-wp38FXW4oEUGTQbSst1-dm3XCqssj9oTlzmYmvAW_c3ztssN03rjfFU_dqdkEceOwBXCk__uypIdjXHSvV4FyDCOVLIvWTogB77zUR92WjS_zYQBzsMeFKJOiEj8X8CWzLnFKEKfvkV0liYl4SATSgUd4sYXYeONw6_x-_DZJ3gD9scl4USvm9DCrIK6OMg"
                id="first"
                class="d-block w-100"
                alt="background image"
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://focrjw.db.files.1drv.com/y4mm3BOtvgqFqZ_U5UDR4oUa9yw1U5Bas9XDi-HLA3ACLIBXvPKcPxKnfyj5AI6FaSCAO-9CiWPrSn8wBU39F_okQqz_gcb0QcmO4yYGRkSGnHAUwWiv49nH3796hxnJJ4NiCXO7h1R7pxKpHBiY7dMBCxHS9MQpAwWd7-51-lbTv4ytM_q7CwRCigycp_jcTZTxsvNIiayQ06-A_h7U1Dxqg"
                id="first"
                class="d-block w-100"
                alt="background image"
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://g4ckjw.db.files.1drv.com/y4mxtDq4OE4JpTwawi8vw8CMCUvBTTP9Y55m9j-vQL75bRobCfJrgqk_AtjpbKFP2zM5haglgvGDx6Q4Bu4u4AkaKoQ-TElKfCJugdH4jxmpXgVmDbVUh7E1XKv3h3C3upG0Yt_ptWCu54BwR4EYt8E0U9hDmyV9v298Wz_OJbebRNDY84aYc7DG1UYEWielE1jlNHBKhz9w_IhLRVeyHMZnA"
                id="first"
                class="d-block w-100"
                alt="background image"
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

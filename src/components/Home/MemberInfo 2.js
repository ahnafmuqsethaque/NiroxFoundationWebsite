import React, { Component } from 'react';
import "../styles/home.css";

class MemberInfo extends Component {
    render() {


        return (
            <div>
               <div
          id="carouselExampleCaptions"
          className="carousel slide"
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
                src="https://db3pap001files.storage.live.com/y4mN2aIw_NiZWFKwsm1M7wBPNsnCBlRjkNopIbScWPyanBnNsvx106Sjr5HgiikQGb8vW3F3dZKrqv0H4HAZ1wHZ8x1-Pgcr7TZwkh6hUuFSqIapIsEM9DoWCnUJ9LEAOgJuEQQyqD2za4aAEggQbd2eJp0kxwwq0cAstIyUdKTpPksVwE7UiiOlXrPFlnKF0Ti9-dX7o04Sa7_XX-KEmNOwg/34426633-8F16-4752-BA0A-944DC2FA73C5_1_201_a.jpeg?psid=1&width=1348&height=578"
                id="first"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-md-block">
                <h5>Member Info Fact 1</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://db3pap001files.storage.live.com/y4mfxOjtvm1jkWQF2PqfRUgUb9qXNX1ECi1l98Qfp4WfONk6m6M_70nspXU7BjGn-c0m-ZX0AFhfa3PdoXcHwo0vJizxWUdMihmHK1C9mvorR5SnJNnBlkHYAIHqKKIRavMshv51MiGEcV64nS1AbBJPlwtoDBvrAuQYXTdlHFob1GCDcFutXBN36oVNQglf8cKLdzP262EgR6TKOfnIs-0Hw/5ECA9C42-27B9-49F4-9106-52A615AFF4B0_1_105_c.jpeg?psid=1&width=1355&height=581"
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
                src="https://db3pap001files.storage.live.com/y4mfxOjtvm1jkWQF2PqfRUgUb9qXNX1ECi1l98Qfp4WfONk6m6M_70nspXU7BjGn-c0m-ZX0AFhfa3PdoXcHwo0vJizxWUdMihmHK1C9mvorR5SnJNnBlkHYAIHqKKIRavMshv51MiGEcV64nS1AbBJPlwtoDBvrAuQYXTdlHFob1GCDcFutXBN36oVNQglf8cKLdzP262EgR6TKOfnIs-0Hw/5ECA9C42-27B9-49F4-9106-52A615AFF4B0_1_105_c.jpeg?psid=1&width=1355&height=581"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-md-block">
                <h5>Member Info Fact 3</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
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
            </div>
        );
    }

}

export default MemberInfo;